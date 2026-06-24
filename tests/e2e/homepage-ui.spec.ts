import { expect, type Page, test } from "@playwright/test";

async function expectAnchorGap(page: Page, selector: string, minGap = 20, maxGap = 90) {
  await page.waitForTimeout(300);

  const metrics = await page.evaluate((targetSelector) => {
    const header = document.querySelector("header");
    const target = document.querySelector(targetSelector);
    const headerRect = header?.getBoundingClientRect();
    const targetRect = target?.getBoundingClientRect();

    return {
      headerBottom: headerRect?.bottom ?? 0,
      targetTop: targetRect?.top ?? 0
    };
  }, selector);

  expect(metrics.targetTop).toBeGreaterThanOrEqual(metrics.headerBottom + minGap);
  expect(metrics.targetTop).toBeLessThanOrEqual(metrics.headerBottom + maxGap);
}

async function openMobileMenu(page: Page) {
  const menuButton = page.getByRole("button", { name: "Abrir menu de navegacao" });

  await menuButton.click();
  await expect(page.getByRole("button", { name: "Fechar menu de navegacao" })).toHaveAttribute(
    "aria-expanded",
    "true"
  );
  await expect(page.getByRole("navigation", { name: "Navegacao principal mobile" })).toBeVisible();
}

test("homepage keeps profile structure before situations and form", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('form[aria-describedby="form-status security-warning"]')).toHaveCount(
    1
  );
  await expect(page.locator("#perfil")).toHaveCount(1);
  await expect(page.locator("#perfil")).toHaveClass(/bg-navy/);
  await expect(page.locator("#perfil")).toContainText("Responsavel a definir");
  await expect(page.locator("#perfil")).toContainText("Registro a definir");
});

test("desktop navigation remains visible at desktop width", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/");

  await expect(page.getByRole("navigation", { name: "Navegacao principal", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /menu de navegacao/ })).toHaveCount(0);
});

test("homepage anchors align below the sticky header", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Navegacao principal", exact: true });
  const anchors = [
    { name: "Identificacao", hash: "perfil", visibleSelector: "#perfil" },
    { name: "Assuntos", hash: "situacoes", visibleSelector: "#situacoes" },
    { name: "Atendimento", hash: "como-funciona", visibleSelector: "#como-funciona" },
    { name: "Preparacao", hash: "documentos", visibleSelector: "#documentos" },
    { name: "Canais", hash: "regioes", visibleSelector: "#regioes" },
    { name: "FAQ", hash: "faq", visibleSelector: "#faq" }
  ];

  for (const anchor of anchors) {
    await nav.getByRole("link", { name: anchor.name }).click();
    await expect(page).toHaveURL(new RegExp(`#${anchor.hash}$`));
    await expectAnchorGap(page, anchor.visibleSelector);
  }
});

test("desktop situations section shows all cards", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/");

  await expect(page.locator('[data-situation-list="desktop"] > li')).toHaveCount(13);
});

test("mobile menu replaces horizontal navigation and supports open close interactions", async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.getByRole("navigation", { name: "Navegacao principal", exact: true })).toBeHidden();

  const menuButton = page.getByRole("button", { name: "Abrir menu de navegacao" });
  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toHaveAttribute("aria-controls", "mobile-navigation");

  await menuButton.click();
  await expect(page.getByRole("navigation", { name: "Navegacao principal mobile" })).toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

  await page.getByRole("button", { name: "Fechar menu de navegacao" }).click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await openMobileMenu(page);
  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
});

test("mobile situations show six cards first and reveal the remaining cards", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.locator('[data-situation-list="mobile-primary"] > li')).toHaveCount(6);
  await expect(page.locator('[data-situation-list="mobile-additional"] > li')).toHaveCount(7);
  await expect(page.locator("#outras-situacoes")).toHaveAttribute("aria-hidden", "true");

  const toggle = page.getByRole("button", { name: "Ver outros assuntos" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await toggle.click();
  await expect(page.getByRole("button", { name: "Ocultar outros assuntos" })).toHaveAttribute(
    "aria-expanded",
    "true"
  );
  await expect(page.locator("#outras-situacoes")).toHaveAttribute("aria-hidden", "false");
});

test("hero contact CTA targets the existing contact form", async ({ page }) => {
  await page.goto("/");

  const heroCta = page.getByRole("main").getByRole("link", { name: "Solicitar contato" }).first();
  await expect(heroCta).toHaveAttribute("href", "#formulario-contato");

  await heroCta.click();
  await expect(page).toHaveURL(/#formulario-contato$/);
  await expect(page.getByRole("heading", { name: "Solicitar retorno" })).toBeInViewport();
});

test("footer links use neutral configured destinations", async ({ page }) => {
  await page.goto("/");

  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: /Canal direto/ })).toHaveAttribute(
    "href",
    "#formulario-contato"
  );
  await expect(footer.getByRole("link", { name: /Telefone/ })).toHaveAttribute(
    "href",
    "#formulario-contato"
  );
  await expect(footer.getByRole("link", { name: "Politica de Privacidade" })).toHaveAttribute(
    "href",
    "/politica-de-privacidade"
  );
  await expect(footer.getByRole("link", { name: "Aviso Legal" })).toHaveAttribute(
    "href",
    "/aviso-legal"
  );
});

test("mobile homepage has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const metrics = await page.evaluate(() => ({
    body: document.body.scrollWidth,
    document: document.documentElement.scrollWidth,
    viewport: window.innerWidth
  }));

  expect(Math.max(metrics.body, metrics.document)).toBeLessThanOrEqual(metrics.viewport + 1);
  await expect(page.getByText("Projeto em Preparacao").first()).toBeVisible();
  await expect(page.getByRole("button", { name: "Abrir menu de navegacao" })).toBeVisible();
});
