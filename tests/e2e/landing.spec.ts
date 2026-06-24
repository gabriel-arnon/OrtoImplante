import { expect, test } from "@playwright/test";

test("home loads MVP sections in the requested order", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Orto & Implante/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Estrutura provisoria para o novo site"
  );

  const expectedText = [
    "Diferenciais",
    "Area pronta para tratamentos confirmados",
    "Apresentacao institucional pendente",
    "Respostas provisorias sobre o site",
    "Fluxo preparado para receber canais oficiais"
  ];

  for (const text of expectedText) {
    await expect(page.getByText(text).first()).toBeVisible();
  }
});

test("primary navigation reaches MVP pages", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Navegacao principal" });
  await nav.getByRole("link", { name: "A clinica" }).click();
  await expect(page).toHaveURL("/a-clinica");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Conteudo institucional");

  await nav.getByRole("link", { name: "Tratamentos" }).click();
  await expect(page).toHaveURL("/tratamentos");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tratamentos a confirmar");

  await nav.getByRole("link", { name: "Contato" }).click();
  await expect(page).toHaveURL("/contato");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Pre-agendamento");
});

test("development noindex metadata is active by default", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});
