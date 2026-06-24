export type FaqItem = {
  question: string;
  answer: string;
  context?: "home" | "contact" | "treatment" | "legal";
};

export const faqItems = [
  {
    question: "A Orto & Implante atende convênios?",
    answer:
      "Não. A informação atualmente publicada pela clínica é de que não há atendimento por convênios.",
    context: "home"
  },
  {
    question: "Como faço para solicitar atendimento?",
    answer:
      "Você pode entrar em contato pelo WhatsApp, telefone ou formulário de pré-agendamento. O envio real do formulário permanece desativado nesta etapa de desenvolvimento.",
    context: "contact"
  },
  {
    question: "Todo tratamento é indicado para qualquer pessoa?",
    answer:
      "Não. Cada caso exige avaliação individual com um dentista para definir diagnóstico, possibilidades e conduta adequada.",
    context: "home"
  },
  {
    question: "Posso enviar documentos pelo formulário?",
    answer:
      "Não. O formulário de pré-agendamento não solicita documentos, exames, CPF, RG ou informações clínicas sensíveis.",
    context: "contact"
  },
  {
    question: "Quais são os horários de atendimento?",
    answer:
      "De segunda a sexta, das 09h às 19h, com intervalo das 12h às 14h. Aos sábados, das 09h às 13h.",
    context: "contact"
  }
] satisfies FaqItem[];

export const homeFaqItems = faqItems.filter(
  (item) => item.context === "home" || item.context === "contact"
);
