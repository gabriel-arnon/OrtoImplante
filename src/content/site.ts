export const siteConfig = {
  name: "Orto & Implante",
  legalName: "Orto & Implante",
  shortName: "Orto & Implante",
  tagline: "Clínica odontológica em Bertioga/SP",
  description:
    "Atendimento odontológico em Bertioga/SP com equipe de dentistas especialistas, planejamento digital e estrutura para diferentes necessidades de saúde bucal.",
  city: "Bertioga",
  state: "SP",
  country: "BR",
  foundedYear: 2001,
  experienceLabel: "mais de 20 anos",
  patientsServedLabel: "mais de 12 mil pacientes atendidos",
  technicalDirector: {
    name: "Dr. Alexandre Molter",
    registration: "CRO 64.315"
  },
  clinicRegistration: "CROSP-CL 17925",
  insuranceNotice: "Não aceitamos convênios",
  siteUrl: "",
  indexingEnabled: false,
  navItems: [
    { href: "/", label: "Início" },
    { href: "/a-clinica", label: "A clínica" },
    { href: "/tratamentos", label: "Tratamentos" },
    { href: "/equipe", label: "Equipe" },
    { href: "/contato", label: "Contato" }
  ],
  socialLinks: []
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
