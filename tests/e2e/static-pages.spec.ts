import { expect, test } from "@playwright/test";

test("privacy policy route loads", async ({ page }) => {
  await page.goto("/politica-de-privacidade");

  await expect(page.getByRole("heading", { level: 1, name: "Politica de Privacidade" })).toBeVisible();
  await expect(page.getByText("Ultima atualizacao: 24 de junho de 2026")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "1. Dados coletados" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Voltar para a pagina inicial" }).first()).toHaveAttribute(
    "href",
    "/"
  );
});

test("legal notice route loads", async ({ page }) => {
  await page.goto("/aviso-legal");

  await expect(page.getByRole("heading", { level: 1, name: "Aviso Legal" })).toBeVisible();
  await expect(page.getByText("Ultima atualizacao: 24 de junho de 2026")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "1. Natureza provisoria" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Voltar para a pagina inicial" }).first()).toHaveAttribute(
    "href",
    "/"
  );
});

test("internal page header links point to homepage sections", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/aviso-legal");

  const nav = page.getByRole("navigation", { name: "Navegacao principal" });
  await expect(nav.getByRole("link", { name: "Identificacao" })).toHaveAttribute("href", "/#perfil");
  await expect(nav.getByRole("link", { name: "Preparacao" })).toHaveAttribute("href", "/#documentos");
  await expect(page.getByRole("link", { name: "Solicitar contato" }).first()).toHaveAttribute(
    "href",
    "/#formulario-contato"
  );
});

test("legal pages can navigate back to homepage", async ({ page }) => {
  await page.goto("/aviso-legal");
  await page.getByRole("link", { name: "Voltar para a pagina inicial" }).first().click();

  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Conteudo publico pendente de revisao"
  );
});

test("legal pages include reciprocal links", async ({ page }) => {
  await page.goto("/politica-de-privacidade");
  await page.getByRole("article").getByRole("link", { name: "Aviso Legal" }).click();
  await expect(page).toHaveURL("/aviso-legal");

  await page.getByRole("article").getByRole("link", { name: "Politica de Privacidade" }).click();
  await expect(page).toHaveURL("/politica-de-privacidade");
});

test("development noindex metadata is active by default", async ({ page }) => {
  await page.goto("/");

  const robots = page.locator('meta[name="robots"]');
  await expect(robots).toHaveAttribute("content", /noindex/);
});
