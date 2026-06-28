export type SiteImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
  role?: string;
};

export const brandAssets = {
  logo: {
    src: "/images/brand/logo-transparent.png",
    width: 512,
    height: 287,
    alt: "Logotipo da Orto & Implante"
  }
} as const satisfies Record<string, SiteImageAsset>;

export const clinicAssets = {
  facade: {
    src: "/images/clinic/WhatsApp-Image-2024-03-19-at-10.05.19-qlgebx8b5jua30nd19zsr95ff7mnbjw37p6bxu22tg.jpeg",
    width: 1672,
    height: 941,
    alt: "Fachada da Orto & Implante em Bertioga",
    objectPosition: "50% 48%",
    role: "facade-location"
  },
  reception: {
    src: "/images/clinic/55cf99d9-c0a8-44c2-b4bd-b5d08af5a5f1.png",
    width: 1448,
    height: 1086,
    alt: "Recepção da Orto & Implante",
    objectPosition: "50% 55%",
    role: "clinic-reception"
  },
  consultationRoomWide: {
    src: "/images/clinic/unnamed.jpg",
    width: 6016,
    height: 4512,
    alt: "Sala de atendimento odontológico da Orto & Implante",
    objectPosition: "55% 50%",
    role: "clinic-consultation-room"
  },
  consultationRoom: {
    src: "/images/clinic/unnamed.png",
    width: 720,
    height: 720,
    alt: "Consultório odontológico da Orto & Implante",
    objectPosition: "44% 50%",
    role: "clinic-consultation-room"
  }
} as const satisfies Record<string, SiteImageAsset>;

export const professionalAssets = {
  alexandreMolter: {
    src: "/images/team/FOTO-DR-ALEXANDRE-1-1-890x1024.webp",
    width: 640,
    height: 640,
    alt: "Dr. Alexandre Molter na Orto & Implante"
  }
} as const satisfies Record<string, SiteImageAsset>;
