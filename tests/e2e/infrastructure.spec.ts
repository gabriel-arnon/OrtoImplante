import { expect, test } from "@playwright/test";
import sitemap from "@/app/sitemap";
import { createContactDeliveryProvider } from "@/lib/contact-delivery";
import type { ValidatedContactRequest } from "@/lib/contact-schema";
import { validateServerEnv, type ServerEnv } from "@/lib/env-config";
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
