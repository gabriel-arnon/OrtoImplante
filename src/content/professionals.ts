export type Professional = {
  name: string;
  role: string;
  registration: string;
  bio: string;
  isPlaceholder: boolean;
  image?: {
    src: string;
    alt: string;
  };
};

export const professionals: Professional[] = [
  {
    name: "Dr. Alexandre Molter",
    role: "Responsável técnico",
    registration: "CRO 64.315",
    bio: "Responsável técnico da Orto & Implante. Demais informações profissionais permanecem pendentes para atualização futura.",
    isPlaceholder: false
  }
];
