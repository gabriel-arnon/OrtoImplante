import { expect, test } from "@playwright/test";

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
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const metrics = await page.evaluate(() => ({
      body: document.body.scrollWidth,
      document: document.documentElement.scrollWidth,
      viewport: window.innerWidth
    }));

    expect(Math.max(metrics.body, metrics.document), `viewport ${width}px`).toBeLessThanOrEqual(
      metrics.viewport + 1
    );
  }
});
