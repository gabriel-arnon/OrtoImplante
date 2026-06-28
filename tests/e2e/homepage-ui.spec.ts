import { expect, test } from "@playwright/test";

const officialMapsUrl =
  "https://www.google.com/maps/place/Orto+e+Implante+Bertioga+-+Cl%C3%ADnica+Odontol%C3%B3gica+Implantes+Dent%C3%A1rios/@-23.8434663,-46.1350962,17z/data=!4m10!1m2!2m1!1sAv.+Anchieta,+1346,+salas+11%2F12,+Bertioga%2FSP!3m6!1s0x94cdf3f622debb35:0x7f6b10344a7e89a5!8m2!3d-23.8434663!4d-46.1350962!15sCixBdi4gQW5jaGlldGEsIDEzNDYsIHNhbGFzIDExLzEyLCBCZXJ0aW9nYS9TUA!16s%2Fg%2F11fsrxz3hk";

test("mobile navigation opens, closes and links to contact", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menu de navegação" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const mobileNav = page.getByRole("navigation", { name: "Navegação principal mobile" });
  await expect(mobileNav).toBeVisible();
  await mobileNav.getByRole("link", { name: "Contato" }).click();

  await expect(page).toHaveURL("/contato");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Fale com a Orto & Implante");
});

test("key responsive widths avoid horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const menuButton = page.getByRole("button", { name: "Abrir menu de navegação" });
  const desktopNavigation = page.getByRole("navigation", { name: "Navegação principal", exact: true });

  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });

    const logoBox = await page
      .getByRole("img", { name: "Logotipo da Orto & Implante" })
      .first()
      .boundingBox();
    const facadeBox = await page
      .getByRole("img", { name: "Fachada da Orto & Implante em Bertioga" })
      .first()
      .boundingBox();

    expect(logoBox?.width, `logo width at ${width}px`).toBeGreaterThanOrEqual(150);
    expect(logoBox?.width, `logo width at ${width}px`).toBeLessThanOrEqual(205);
    expect(logoBox?.height, `logo height at ${width}px`).toBeLessThanOrEqual(64);
    expect(facadeBox?.width, `facade width at ${width}px`).toBeGreaterThan(180);
    expect(facadeBox?.height, `facade height at ${width}px`).toBeGreaterThan(110);

    if (width < 1024) {
      await expect(menuButton, `hamburger at ${width}px`).toBeVisible();
      await expect(desktopNavigation, `desktop navigation at ${width}px`).toBeHidden();
    } else {
      await expect(menuButton, `hamburger at ${width}px`).toBeHidden();
      await expect(desktopNavigation, `desktop navigation at ${width}px`).toBeVisible();
    }

    const metrics = await page.evaluate(() => {
      const header = document.querySelector("header");

      return {
        pageFitsViewport: document.documentElement.scrollWidth <= window.innerWidth,
        headerFitsViewport: (header?.scrollWidth ?? 0) <= window.innerWidth
      };
    });

    expect(metrics.pageFitsViewport, `page overflow at ${width}px`).toBe(true);
    expect(metrics.headerFitsViewport, `header overflow at ${width}px`).toBe(true);
  }
});

test("approved brand and clinic images render without broken sources", async ({ page }) => {
  await page.goto("/");

  const logo = page.getByRole("img", { name: "Logotipo da Orto & Implante" }).first();

  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute("src", /logo-transparent\.png/);
  const headerLogoContainerClass = await logo.evaluate(
    (element) => element.parentElement?.className ?? ""
  );
  expect(headerLogoContainerClass).not.toContain("bg-white");

  const footerLogo = page
    .locator("footer")
    .getByRole("img", { name: "Logotipo da Orto & Implante" });
  await expect(footerLogo).toHaveAttribute("src", /logo-footer-transparent\.png/);
  const footerLogoContainerClass = await footerLogo.evaluate(
    (element) => element.parentElement?.className ?? ""
  );
  expect(footerLogoContainerClass).not.toContain("bg-white");

  await expect(page.getByRole("img", { name: "Fachada da Orto & Implante em Bertioga" }).first()).toBeVisible();
  await expect(page.getByRole("img", { name: "Recepção da Orto & Implante" }).first()).toBeVisible();

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images
      .map((image) => image as HTMLImageElement)
      .filter(
        (image) =>
          image.complete &&
          image.currentSrc &&
          (image.naturalWidth === 0 || image.naturalHeight === 0)
      )
      .map((image) => image.getAttribute("alt") || image.getAttribute("src") || "unknown")
  );

  expect(brokenImages).toEqual([]);
});

test("location section uses confirmed external Google Maps place link", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("link", { name: "Abrir localização da Orto & Implante no Google Maps" })
  ).toHaveAttribute("href", officialMapsUrl);
  await expect(page.locator('a[href*="maps/search"]')).toHaveCount(0);
});

test("professional portrait renders when approved image is available", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Dr. Alexandre Molter" })).toBeVisible();
  await expect(page.getByText("Responsável técnico").first()).toBeVisible();
  await expect(page.getByText("CRO 64.315").first()).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Dr. Alexandre Molter na Orto & Implante" }).first()
  ).toBeVisible();

  await page.goto("/equipe");

  await expect(page.getByTestId("featured-professional")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Dr. Alexandre Molter" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Dr. Alexandre Molter na Orto & Implante" })).toBeVisible();
  await expect(page.getByText("Responsável técnico").first()).toBeVisible();
  await expect(page.getByText("CRO 64.315").first()).toBeVisible();
  await expect(page.getByText(/Faculdade|Mestre|Prêmio|Especialista em|anos de experiência/i)).toHaveCount(0);
});

test("clinic page renders selected clinic photographs", async ({ page }) => {
  await page.goto("/a-clinica");

  await expect(page.getByRole("img", { name: "Recepção da Orto & Implante" })).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Sala de atendimento odontológico da Orto & Implante" })
  ).toBeVisible();
  await expect(page.getByRole("img", { name: "Consultório odontológico da Orto & Implante" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Dr. Alexandre Molter" })).toBeVisible();
});

test("obsolete visual placeholder copy is not shown to visitors", async ({ page }) => {
  for (const path of ["/", "/a-clinica", "/equipe", "/contato"]) {
    await page.goto(path);

    await expect(page.getByText("Placeholder")).toHaveCount(0);
    await expect(page.getByText("Fotos reais")).toHaveCount(0);
    await expect(page.getByText("Espaço preparado para fotos futuras")).toHaveCount(0);
    await expect(page.getByText("Área visual reservada")).toHaveCount(0);
  }
});
