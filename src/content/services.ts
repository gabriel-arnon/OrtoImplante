export const contactIssueCategories = [
  "Informacao institucional",
  "Agendamento",
  "Atendimento",
  "Localizacao",
  "Convenios ou formas de pagamento",
  "Duvida sobre servicos",
  "Retorno de contato",
  "Outros"
] as const;

export const commonSituationCards = [
  ...contactIssueCategories,
  "Atualizacao de cadastro",
  "Confirmacao de horario",
  "Solicitacao de retorno",
  "Informacoes de acesso",
  "Duvida geral"
] as const;

export const serviceSteps = [
  {
    title: "Primeiro contato",
    text: "A pessoa visitante envia uma mensagem breve, sem documentos ou dados sensiveis."
  },
  {
    title: "Triagem inicial",
    text: "As informacoes sao verificadas para organizar o retorno pelo canal informado."
  },
  {
    title: "Retorno",
    text: "A equipe podera orientar os proximos passos apos analise individual da solicitacao."
  },
  {
    title: "Acompanhamento",
    text: "As etapas seguintes dependem das informacoes confirmadas e dos canais aprovados."
  }
] as const;

export const usefulDocuments = [
  "Nome e telefone para retorno",
  "Cidade de atendimento",
  "Assunto geral do contato",
  "Melhor periodo para retorno",
  "Observacoes breves sem dados sensiveis"
] as const;

export const initialSteps = [
  "Envie apenas informacoes necessarias para contato inicial.",
  "Nao compartilhe senhas, codigos, tokens, documentos ou numeros completos de cartao.",
  "Evite anexos e arquivos nesta etapa.",
  "Aguarde confirmacao por canal oficial definido pela equipe."
] as const;
