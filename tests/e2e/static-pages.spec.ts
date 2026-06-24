import { expect, test } from "@playwright/test";

test("treatments index and dynamic treatment route load", async ({ page }) => {
  await page.goto("/tratamentos");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tratamentos odontológicos");
  await expect(page.getByRole("link", { name: "Saiba mais" })).toHaveCount(10);
  await page.getByRole("link", { name: "Saiba mais" }).first().click();

  await expect(page).toHaveURL("/tratamentos/protese-protocolo");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Prótese Protocolo");
  await expect(page.getByRole("heading", { name: "Avaliação profissional" })).toBeVisible();
});

test("contact page loads appointment request form", async ({ page }) => {
  await page.goto("/contato");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Fale com a Orto & Implante");
  await expect(page.getByRole("button", { name: "Solicitar pré-agendamento" })).toBeVisible();
  await expect(page.getByText("Não envie CPF, RG, exames")).toBeVisible();
  await expect(page.getByRole("main").getByText("(13) 99621-8347")).toBeVisible();
  await expect(page.getByRole("main").getByText("Av. Anchieta, 1346")).toBeVisible();
});

test("legal pages load and link to each other", async ({ page }) => {
  await page.goto("/politica-de-privacidade");

  await expect(page.getByRole("heading", { level: 1, name: "Política de Privacidade" })).toBeVisible();
  await page.getByRole("article").getByRole("link", { name: "Aviso Legal" }).click();
  await expect(page).toHaveURL("/aviso-legal");
  await expect(page.getByRole("heading", { level: 1, name: "Aviso Legal" })).toBeVisible();
  await page.getByRole("article").getByRole("link", { name: "Política de Privacidade" }).click();
  await expect(page).toHaveURL("/politica-de-privacidade");
});
