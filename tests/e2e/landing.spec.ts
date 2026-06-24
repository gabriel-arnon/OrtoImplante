import { expect, type Page, test } from "@playwright/test";

const validDescription =
  "Mensagem ficticia para validar o formulario sem reutilizar conteudo ou dados do projeto anterior.";

async function fillValidContactForm(page: Page) {
  await page.getByLabel("Nome completo", { exact: true }).fill("Pessoa Teste");
  await page.getByLabel("Telefone ou WhatsApp", { exact: true }).fill("(11) 90000-0000");
  await page.getByLabel("Cidade", { exact: true }).fill("Cidade Teste");
  await page.getByLabel("Tipo de assunto", { exact: true }).selectOption("Atendimento");
  await page.getByLabel("Breve descricao", { exact: true }).fill(validDescription);
  await page.getByLabel("Declaro que li o aviso de privacidade").check();
}

test("homepage renders neutral placeholder content", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Projeto em Preparacao/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Conteudo publico pendente de revisao"
  );

  const main = page.getByRole("main");
  await expect(main.getByRole("link", { name: "Solicitar contato" })).toBeVisible();
  await expect(main.getByRole("link", { name: "Canal a definir" }).first()).toBeVisible();

  for (const sectionName of [
    "Temas para organizar",
    "Atendimento objetivo",
    "Informacoes uteis",
    "Canais pendentes",
    "Respostas objetivas"
  ]) {
    await expect(page.getByText(sectionName, { exact: false }).first()).toBeVisible();
  }
});

test("contact form shows validation for required fields", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Enviar solicitacao" }).click();

  await expect(page.getByText("Informe seu nome completo.")).toBeVisible();
  await expect(page.getByText("Informe um telefone ou WhatsApp valido.")).toBeVisible();
  await expect(page.getByText("Informe sua cidade.")).toBeVisible();
  await expect(page.getByText("Selecione o tipo de assunto.")).toBeVisible();
  await expect(page.getByText("Descreva brevemente o ocorrido.")).toBeVisible();
  await expect(page.getByText("Confirme que leu o aviso de privacidade")).toBeVisible();
});

test("contact form validates phone and description limits", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Nome completo", { exact: true }).fill("Pessoa Teste");
  await page.getByLabel("Telefone ou WhatsApp", { exact: true }).fill("123");
  await page.getByLabel("Cidade", { exact: true }).fill("Cidade Teste");
  await page.getByLabel("Tipo de assunto", { exact: true }).selectOption("Atendimento");
  await page.getByLabel("Breve descricao", { exact: true }).fill("Curto demais.");
  await page.getByLabel("Declaro que li o aviso de privacidade").check();
  await page.getByRole("button", { name: "Enviar solicitacao" }).click();

  await expect(page.getByText("Informe um telefone ou WhatsApp valido.")).toBeVisible();
  await expect(page.getByText("A descricao deve ter pelo menos 30 caracteres.")).toBeVisible();
});

test("contact form submits successfully in development mock mode", async ({ page }) => {
  await page.goto("/");
  await fillValidContactForm(page);

  await page.getByRole("button", { name: "Enviar solicitacao" }).click();

  await expect(page.getByRole("status")).toContainText("Recebemos sua solicitacao");
  await expect(page.getByLabel("Nome completo", { exact: true })).toHaveValue("");
  await expect(page.getByRole("link", { name: "Canal a definir" }).last()).toBeVisible();
  await expect(page.getByRole("link", { name: /Telefone:/ })).toBeVisible();
});

test("delivery failure preserves form data", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({
        ok: false,
        code: "delivery_unavailable",
        message: "Nao foi possivel enviar sua solicitacao neste momento."
      })
    });
  });

  await page.goto("/");
  await fillValidContactForm(page);
  await page.getByRole("button", { name: "Enviar solicitacao" }).click();

  await expect(page.getByRole("status")).toContainText("Nao foi possivel enviar");
  await expect(page.getByLabel("Nome completo", { exact: true })).toHaveValue("Pessoa Teste");
});

for (const viewport of [
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1366, height: 768 }
]) {
  test(`has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const metrics = await page.evaluate(() => ({
      body: document.body.scrollWidth,
      document: document.documentElement.scrollWidth,
      viewport: window.innerWidth
    }));

    expect(Math.max(metrics.body, metrics.document)).toBeLessThanOrEqual(metrics.viewport + 1);
  });
}

test("api rejects invalid server-side payload", async ({ request }) => {
  const response = await request.post("/api/contact", {
    data: {
      fullName: "A",
      phone: "123",
      city: "",
      issueCategory: "categoria desconhecida",
      description: "curto",
      privacyAccepted: false,
      company: ""
    }
  });
  const body = await response.json();

  expect(response.status()).toBe(400);
  expect(body.ok).toBe(false);
  expect(body.code).toBe("invalid_input");
  expect(body.fieldErrors.fullName).toBeTruthy();
});
