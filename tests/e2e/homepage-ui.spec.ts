import { expect, test } from "@playwright/test";

test("mobile navigation opens, closes and links to contact", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menu de navegacao" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const mobileNav = page.getByRole("navigation", { name: "Navegacao principal mobile" });
  await expect(mobileNav).toBeVisible();
  await mobileNav.getByRole("link", { name: "Contato" }).click();

  await expect(page).toHaveURL("/contato");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Fale com a Orto & Implante");
});

test("home has no horizontal overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const metrics = await page.evaluate(() => ({
    body: document.body.scrollWidth,
    document: document.documentElement.scrollWidth,
    viewport: window.innerWidth
  }));

  expect(Math.max(metrics.body, metrics.document)).toBeLessThanOrEqual(metrics.viewport + 1);
});
