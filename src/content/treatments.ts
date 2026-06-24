export type Treatment = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  isPlaceholder: boolean;
  featured: boolean;
  image?: {
    src: string;
    alt: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const treatments = [
  {
    slug: "tratamento-a-confirmar",
    title: "Tratamento a confirmar",
    summary: "Placeholder para um tratamento real que sera informado pela clinica.",
    description:
      "Esta pagina preserva a estrutura tecnica para tratamentos, sem publicar informacoes clinicas ainda nao confirmadas.",
    isPlaceholder: true,
    featured: true,
    faq: [
      {
        question: "Este tratamento ja esta confirmado?",
        answer:
          "Nao. O conteudo sera substituido quando a clinica fornecer a lista oficial de tratamentos."
      }
    ]
  }
] satisfies Treatment[];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export const featuredTreatments = treatments.filter((treatment) => treatment.featured);
