export type ContactChannel = {
  label: string;
  href: string;
  value: string;
  isConfirmed: boolean;
};

export const contactConfig = {
  phone: {
    label: "Telefone",
    href: "#formulario-contato",
    value: "Telefone a confirmar",
    isConfirmed: false
  } satisfies ContactChannel,
  whatsapp: {
    label: "WhatsApp",
    href: "#formulario-contato",
    value: "WhatsApp a confirmar",
    isConfirmed: false
  } satisfies ContactChannel,
  email: {
    label: "E-mail",
    href: "",
    value: "E-mail a confirmar",
    isConfirmed: false
  } satisfies ContactChannel,
  address: {
    street: "",
    district: "",
    city: "Bertioga",
    state: "SP",
    postalCode: "",
    country: "BR",
    display: "Endereco a confirmar em Bertioga/SP",
    mapsUrl: "",
    latitude: null,
    longitude: null,
    isConfirmed: false
  },
  openingHours: [] as string[]
} as const;

export const appointmentInterests = [
  "Avaliacao inicial",
  "Tratamento a confirmar",
  "Retorno de contato",
  "Informacoes sobre atendimento",
  "Outro assunto"
] as const;
