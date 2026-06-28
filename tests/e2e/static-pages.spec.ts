import { expect, test } from "@playwright/test";

const officialMapsUrl =
  "https://www.google.com/maps/place/Orto+e+Implante+Bertioga+-+Cl%C3%ADnica+Odontol%C3%B3gica+Implantes+Dent%C3%A1rios/@-23.8434663,-46.1350962,17z/data=!4m10!1m2!2m1!1sAv.+Anchieta,+1346,+salas+11%2F12,+Bertioga%2FSP!3m6!1s0x94cdf3f622debb35:0x7f6b10344a7e89a5!8m2!3d-23.8434663!4d-46.1350962!15sCixBdi4gQW5jaGlldGEsIDEzNDYsIHNhbGFzIDExLzEyLCBCZXJ0aW9nYS9TUA!16s%2Fg%2F11fsrxz3hk";

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
  await expect(page.getByRole("main").getByText("Avenida Anchieta, 1346")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Abrir localização da Orto & Implante no Google Maps" })
  ).toHaveAttribute("href", officialMapsUrl);
  await expect(page.locator('a[href*="maps/search"]')).toHaveCount(0);
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
