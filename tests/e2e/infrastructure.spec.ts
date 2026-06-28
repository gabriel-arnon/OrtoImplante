import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import sitemap from "@/app/sitemap";
import { createContactDeliveryProvider } from "@/lib/contact-delivery";
import type { ValidatedContactRequest } from "@/lib/contact-schema";
import { validateServerEnv, type ServerEnv } from "@/lib/env-config";
import { dentistStructuredData, localBusinessStructuredData } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/utils";

const validRequest: ValidatedContactRequest = {
  fullName: "Pessoa Teste",
  phone: "(11) 90000-0000",
  normalizedPhone: "+5511900000000",
  city: "Bertioga",
  treatmentInterest: "Avaliação inicial",
  message: "Mensagem fictícia para validar fluxo sem dados clínicos sensíveis.",
  privacyAccepted: true,
  company: "",
  sourcePage: "/contato",
  utm: {}
};

const baseEnv: ServerEnv = {
  NODE_ENV: "development",
  CONTACT_FORM_MODE: "disabled",
  CONTACT_EMAIL_PROVIDER: "",
  CONTACT_EMAIL_FROM: "",
  CONTACT_EMAIL_REPLY_TO: "",
  CONTACT_VISITOR_CONFIRMATION_ENABLED: "false",
  CONTACT_RATE_LIMIT_PROVIDER: "memory",
  CONTACT_RATE_LIMIT_WINDOW_SECONDS: 900,
  CONTACT_RATE_LIMIT_MAX_REQUESTS: 5,
  NEXT_PUBLIC_INDEXING_ENABLED: "false"
};

const officialMapsUrl =
  "https://www.google.com/maps/place/Orto+e+Implante+Bertioga+-+Cl%C3%ADnica+Odontol%C3%B3gica+Implantes+Dent%C3%A1rios/@-23.8434663,-46.1350962,17z/data=!4m10!1m2!2m1!1sAv.+Anchieta,+1346,+salas+11%2F12,+Bertioga%2FSP!3m6!1s0x94cdf3f622debb35:0x7f6b10344a7e89a5!8m2!3d-23.8434663!4d-46.1350962!15sCixBdi4gQW5jaGlldGEsIDEzNDYsIHNhbGFzIDExLzEyLCBCZXJ0aW9nYS9TUA!16s%2Fg%2F11fsrxz3hk";

test("mock delivery cannot report success in production mode", async () => {
  const provider = createContactDeliveryProvider("mock", "production");
  const result = await provider.deliver(validRequest, "test-request");

  expect(result.ok).toBe(false);
});

test("disabled delivery rejects safely", async () => {
  const provider = createContactDeliveryProvider("disabled", baseEnv);
  const result = await provider.deliver(validRequest, "test-request");

  expect(result.ok).toBe(false);
  expect(result.provider).toBe("disabled");
});

test("preview and production safety rules reject unsafe modes", () => {
  expect(
    validateServerEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
      CONTACT_FORM_MODE: "mock",
      NEXT_PUBLIC_INDEXING_ENABLED: "false"
    }).ok
  ).toBe(false);
  expect(
    validateServerEnv({
      NODE_ENV: "production",
      CONTACT_FORM_MODE: "email",
      CONTACT_EMAIL_PROVIDER: "resend",
      NEXT_PUBLIC_INDEXING_ENABLED: "false"
    }).ok
  ).toBe(false);
});

test("sitemap is empty without public site URL", () => {
  const original = process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.NEXT_PUBLIC_SITE_URL;

  try {
    expect(absoluteUrl("/")).toBeUndefined();
    expect(sitemap()).toEqual([]);
  } finally {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = original;
    }
  }
});

test("health endpoint does not expose secrets", async ({ request }) => {
  const response = await request.get("/api/health");
  const body = await response.json();
  const serialized = JSON.stringify(body);

  expect(response.status()).toBe(200);
  expect(serialized).not.toContain("CONTACT_EMAIL_API_KEY");
  expect(serialized).not.toContain("test-secret");
});

test("structured data includes confirmed location and map metadata", () => {
  for (const item of [dentistStructuredData(), localBusinessStructuredData()]) {
    expect(item).toMatchObject({
      hasMap: officialMapsUrl,
      geo: {
        latitude: -23.8434663,
        longitude: -46.1350962
      },
      address: {
        streetAddress: "Avenida Anchieta, 1346, salas 11/12",
        addressLocality: "Bertioga",
        addressRegion: "SP",
        addressCountry: "BR"
      }
    });
    expect(JSON.stringify(item)).toContain("OpeningHoursSpecification");
  }
});

test("approved PNG logo contains true alpha transparency", () => {
  const script = `
    const sharp = require("sharp");
    const fs = require("fs");
    (async () => {
      const file = "public/images/brand/logo-transparent.png";
      const meta = await sharp(file).metadata();
      const raw = await sharp(file).ensureAlpha().raw().toBuffer();
      let transparent = 0;
      let semi = 0;
      for (let i = 3; i < raw.length; i += 4) {
        if (raw[i] === 0) transparent++;
        else if (raw[i] < 255) semi++;
      }
      const stat = fs.statSync(file);
      console.log(JSON.stringify({
        format: meta.format,
        width: meta.width,
        height: meta.height,
        hasAlpha: meta.hasAlpha,
        transparent,
        semi,
        bytes: stat.size
      }));
    })().catch((error) => {
      console.error(error);
      process.exit(1);
    });
  `;
  const output = execFileSync(process.execPath, ["-e", script], {
    cwd: process.cwd(),
    encoding: "utf8"
  });
  const metadata = JSON.parse(output) as {
    format: string;
    width: number;
    height: number;
    hasAlpha: boolean;
    transparent: number;
    semi: number;
    bytes: number;
  };

  expect(metadata).toMatchObject({
    format: "png",
    width: 512,
    height: 287,
    hasAlpha: true
  });
  expect(metadata.transparent + metadata.semi).toBeGreaterThan(0);
  expect(metadata.bytes).toBeGreaterThan(0);
});
