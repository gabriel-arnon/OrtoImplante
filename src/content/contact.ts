export type ContactChannel = {
  label: string;
  href: string;
  value: string;
  isConfirmed: boolean;
};

export const contactConfig = {
  phone: {
    label: "Telefone",
    href: "tel:+551333175142",
    value: "(13) 3317-5142",
    isConfirmed: true
  } satisfies ContactChannel,
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/5513996218347?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20na%20Orto%20%26%20Implante.",
    value: "(13) 99621-8347",
    isConfirmed: true
  } satisfies ContactChannel,
  email: {
    label: "E-mail",
    href: "mailto:orto.implante@outlook.com",
    value: "orto.implante@outlook.com",
    isConfirmed: true
  } satisfies ContactChannel,
  address: {
    street: "Av. Anchieta, 1346, salas 11/12",
    district: "",
    city: "Bertioga",
    state: "SP",
    postalCode: "",
    country: "BR",
    display: "Av. Anchieta, 1346, salas 11/12, Bertioga/SP",
    mapsUrl: "",
    latitude: null,
    longitude: null,
    isConfirmed: true
  },
  openingHours: ["Mo-Fr 09:00-12:00", "Mo-Fr 14:00-19:00", "Sa 09:00-13:00"],
  openingHoursDisplay: [
    "Segunda a sexta: 09h às 19h",
    "Intervalo: 12h às 14h",
    "Sábado: 09h às 13h"
  ],
  whatsappInitialMessage:
    "Olá, gostaria de informações sobre atendimento na Orto & Implante."
} as const;

export const appointmentInterests = [
  "Avaliação inicial",
  "Prótese Protocolo",
  "Implantes Dentários",
  "Cirurgia Guiada",
  "Alinhadores Invisíveis",
  "Lentes de Contato Dental",
  "Tratamento de Canal",
  "Ortodontia",
  "Cirurgias",
  "Clareamento Dental",
  "Clínica Geral",
  "Retorno de contato",
  "Informações sobre atendimento",
  "Outro assunto"
] as const;
