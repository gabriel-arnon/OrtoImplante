export type ContactChannel = {
  label: string;
  href: string;
  value: string;
  isConfirmed: boolean;
};

export const clinicLocation = {
  street: "Avenida Anchieta, 1346",
  complement: "salas 11/12",
  district: "",
  city: "Bertioga",
  state: "SP",
  stateName: "São Paulo",
  postalCode: "",
  country: "BR",
  countryName: "Brazil",
  display: "Avenida Anchieta, 1346, salas 11/12, Bertioga/SP",
  mapsUrl:
    "https://www.google.com/maps/place/Orto+e+Implante+Bertioga+-+Cl%C3%ADnica+Odontol%C3%B3gica+Implantes+Dent%C3%A1rios/@-23.8434663,-46.1350962,17z/data=!4m10!1m2!2m1!1sAv.+Anchieta,+1346,+salas+11%2F12,+Bertioga%2FSP!3m6!1s0x94cdf3f622debb35:0x7f6b10344a7e89a5!8m2!3d-23.8434663!4d-46.1350962!15sCixBdi4gQW5jaGlldGEsIDEzNDYsIHNhbGFzIDExLzEyLCBCZXJ0aW9nYS9TUA!16s%2Fg%2F11fsrxz3hk",
  latitude: -23.8434663,
  longitude: -46.1350962,
  parkingInfo: "Fácil estacionamento informado pela clínica",
  accessibilityInfo: "Acessibilidade informada pela clínica",
  openingHours: ["Mo-Fr 09:00-12:00", "Mo-Fr 14:00-19:00", "Sa 09:00-13:00"],
  openingHoursDisplay: [
    "Segunda a sexta: 09h às 19h",
    "Intervalo: 12h às 14h",
    "Sábado: 09h às 13h"
  ],
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "12:00"
    },
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "19:00"
    },
    {
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00"
    }
  ],
  isConfirmed: true
} as const;

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
  location: clinicLocation,
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
