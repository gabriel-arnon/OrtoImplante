import { expect, type Page, test } from "@playwright/test";

const formData = {
  fullName: "Pessoa Teste",
  phone: "(11) 90000-0000",
  city: "Bertioga",
  treatmentInterest: "Avaliação inicial",
  message: "Mensagem fictícia para validar o pré-agendamento sem dados clínicos sensíveis."
};

async function fillValidAppointmentForm(page: Page) {
  await page.getByLabel("Nome", { exact: true }).fill(formData.fullName);
  await page.getByLabel("Telefone ou WhatsApp", { exact: true }).fill(formData.phone);
  await page.getByLabel("Cidade", { exact: true }).fill(formData.city);
  await page
    .getByLabel("Tratamento ou interesse", { exact: true })
    .selectOption(formData.treatmentInterest);
  await page.getByLabel("Mensagem curta", { exact: true }).fill(formData.message);
  await page.getByLabel("Li a política de privacidade").check();
}

test("validates appointment request form fields", async ({ page }) => {
  await page.goto("/contato");

  await page.getByRole("button", { name: "Solicitar pré-agendamento" }).click();

  await expect(page.getByText("Informe seu nome.")).toBeVisible();
  await expect(page.getByText("Informe um telefone ou WhatsApp válido.")).toBeVisible();
  await expect(page.getByText("Informe sua cidade.")).toBeVisible();
  await expect(page.getByText("Selecione o tratamento ou interesse.")).toBeVisible();
  await expect(page.getByText("A mensagem deve ter pelo menos 20 caracteres.")).toBeVisible();
  await expect(page.getByText("Confirme que leu a política de privacidade")).toBeVisible();
});

test("keeps entered values after failed delivery", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({
        ok: false,
        code: "delivery_unavailable",
        message: "Envio indisponivel em teste."
      })
    });
  });

  await page.goto("/contato");
  await fillValidAppointmentForm(page);
  await page.getByRole("button", { name: "Solicitar pré-agendamento" }).click();

  await expect(page.getByRole("status")).toContainText("Envio indisponivel");
  await expect(page.getByLabel("Nome", { exact: true })).toHaveValue(formData.fullName);
  await expect(page.getByLabel("Mensagem curta", { exact: true })).toHaveValue(formData.message);
});

test("disabled delivery does not report success or clear entered data", async ({ page }) => {
  await page.goto("/contato");
  await fillValidAppointmentForm(page);
  await page.getByRole("button", { name: "Solicitar pré-agendamento" }).click();

  await expect(page.getByRole("status")).toContainText("temporariamente indisponível");
  await expect(page.getByLabel("Nome", { exact: true })).toHaveValue(formData.fullName);
  await expect(page.getByLabel("Mensagem curta", { exact: true })).toHaveValue(formData.message);
});
