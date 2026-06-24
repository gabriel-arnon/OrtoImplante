export type FaqItem = {
  question: string;
  answer: string;
  context?: "home" | "contact" | "treatment" | "legal";
};

export const faqItems = [
  {
    question: "As informacoes do site ja sao definitivas?",
    answer:
      "Nao. Esta fase cria a estrutura do site com placeholders ate a clinica confirmar conteudos, contatos e imagens.",
    context: "home"
  },
  {
    question: "Posso enviar documentos pelo formulario?",
    answer:
      "Nao. O formulario de pre-agendamento nao solicita documentos, exames, CPF, RG ou informacoes clinicas sensiveis.",
    context: "contact"
  },
  {
    question: "O WhatsApp ja esta configurado?",
    answer:
      "Ainda nao. O botao usa placeholder ate a clinica confirmar o numero oficial e a mensagem de atendimento.",
    context: "contact"
  }
] satisfies FaqItem[];

export const homeFaqItems = faqItems.filter(
  (item) => item.context === "home" || item.context === "contact"
);
