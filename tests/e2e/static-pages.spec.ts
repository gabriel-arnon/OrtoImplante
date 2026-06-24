import { expect, test } from "@playwright/test";

test("treatments index and dynamic treatment route load", async ({ page }) => {
  await page.goto("/tratamentos");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tratamentos a confirmar");
  await page.getByRole("link", { name: "Ver estrutura" }).first().click();

  await expect(page).toHaveURL("/tratamentos/tratamento-a-confirmar");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tratamento a confirmar");
});

test("contact page loads appointment request form", async ({ page }) => {
  await page.goto("/contato");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Pre-agendamento");
  await expect(page.getByRole("button", { name: "Solicitar pre-agendamento" })).toBeVisible();
  await expect(page.getByText("Nao envie CPF, RG, exames")).toBeVisible();
});

test("legal pages load and link to each other", async ({ page }) => {
  await page.goto("/politica-de-privacidade");

  await expect(page.getByRole("heading", { level: 1, name: "Politica de Privacidade" })).toBeVisible();
  await page.getByRole("article").getByRole("link", { name: "Aviso Legal" }).click();
  await expect(page).toHaveURL("/aviso-legal");
  await expect(page.getByRole("heading", { level: 1, name: "Aviso Legal" })).toBeVisible();
  await page.getByRole("article").getByRole("link", { name: "Politica de Privacidade" }).click();
  await expect(page).toHaveURL("/politica-de-privacidade");
});
