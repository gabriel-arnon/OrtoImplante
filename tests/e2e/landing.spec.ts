import { expect, test } from "@playwright/test";

test("home loads MVP sections in the requested order", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Orto & Implante/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Atendimento odontológico em Bertioga"
  );

  const expectedText = [
    "Diferenciais",
    "Principais tratamentos",
    "Estrutura preparada para diferentes necessidades odontológicas",
    "Tecnologia para apoiar diagnóstico",
    "Responsável técnico",
    "Dúvidas frequentes",
    "Fale com a Orto & Implante"
  ];

  for (const text of expectedText) {
    await expect(page.getByText(text).first()).toBeVisible();
  }
});

test("primary navigation reaches MVP pages", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Navegacao principal" });
  await nav.getByRole("link", { name: "A clínica" }).click();
  await expect(page).toHaveURL("/a-clinica");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Orto & Implante");

  await nav.getByRole("link", { name: "Tratamentos" }).click();
  await expect(page).toHaveURL("/tratamentos");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tratamentos odontológicos");

  await nav.getByRole("link", { name: "Contato" }).click();
  await expect(page).toHaveURL("/contato");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Fale com a Orto & Implante");
});

test("development noindex metadata is active by default", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});
