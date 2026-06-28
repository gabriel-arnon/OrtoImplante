import { professionalAssets } from "@/content/assets";

export type Professional = {
  name: string;
  role: string;
  registration: string;
  bio: string;
  isPlaceholder: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const professionals: Professional[] = [
  {
    name: "Dr. Alexandre Molter",
    role: "Responsável técnico",
    registration: "CRO 64.315",
    bio: "Responsável técnico da Orto & Implante em Bertioga/SP, com identificação profissional CRO 64.315.",
    isPlaceholder: false,
    image: professionalAssets.alexandreMolter
  }
];
