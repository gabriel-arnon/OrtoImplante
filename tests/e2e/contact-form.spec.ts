import { expect, type Page, test } from "@playwright/test";

const formData = {
  fullName: "Pessoa Teste",
  phone: "(11) 90000-0000",
  city: "Cidade Teste",
  issueCategory: "Atendimento",
  description:
    "Mensagem ficticia para validar o fluxo do formulario sem usar dados reais ou conteudo herdado."
};

async function fillValidContactForm(page: Page) {
  await page.getByLabel("Nome completo", { exact: true }).fill(formData.fullName);
  await page.getByLabel("Telefone ou WhatsApp", { exact: true }).fill(formData.phone);
  await page.getByLabel("Cidade", { exact: true }).fill(formData.city);
  await page.getByLabel("Tipo de assunto", { exact: true }).selectOption(formData.issueCategory);
  await page.getByLabel("Breve descricao", { exact: true }).fill(formData.description);
  await page.getByLabel("Declaro que li o aviso de privacidade").check();
}

async function expectContactFormValues(page: Page) {
  await expect(page.getByLabel("Nome completo", { exact: true })).toHaveValue(formData.fullName);
  await expect(page.getByLabel("Telefone ou WhatsApp", { exact: true })).toHaveValue(
    formData.phone
  );
  await expect(page.getByLabel("Cidade", { exact: true })).toHaveValue(formData.city);
  await expect(page.getByLabel("Tipo de assunto", { exact: true })).toHaveValue(
    formData.issueCategory
  );
  await expect(page.getByLabel("Breve descricao", { exact: true })).toHaveValue(
    formData.description
  );
  await expect(page.getByLabel("Declaro que li o aviso de privacidade")).toBeChecked();
}

async function mockFailedSubmission(page: Page) {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({
        ok: false,
        code: "delivery_unavailable",
        message:
          "Nao foi possivel enviar sua solicitacao neste momento. Tente novamente por outro canal."
      })
    });
  });
}

test("keeps entered values after failed submission from normal page access", async ({ page }) => {
  await mockFailedSubmission(page);

  await page.goto("/");
  await fillValidContactForm(page);
  await page.getByRole("button", { name: "Enviar solicitacao" }).click();

  await expect(page.getByRole("status")).toContainText("Nao foi possivel enviar");
  await expectContactFormValues(page);
});

test("clears fields only after a successful mock submission", async ({ page }) => {
  await page.goto("/");
  await fillValidContactForm(page);

  await page.getByRole("button", { name: "Enviar solicitacao" }).click();

  await expect(page.getByRole("status")).toContainText("Recebemos sua solicitacao");
  await expect(page.getByLabel("Nome completo", { exact: true })).toHaveValue("");
  await expect(page.getByLabel("Telefone ou WhatsApp", { exact: true })).toHaveValue("");
  await expect(page.getByLabel("Cidade", { exact: true })).toHaveValue("");
  await expect(page.getByLabel("Tipo de assunto", { exact: true })).toHaveValue("");
  await expect(page.getByLabel("Breve descricao", { exact: true })).toHaveValue("");
  await expect(page.getByLabel("Declaro que li o aviso de privacidade")).not.toBeChecked();
});

test("renders only one contact form on the homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('form[aria-describedby="form-status security-warning"]')).toHaveCount(
    1
  );
});
