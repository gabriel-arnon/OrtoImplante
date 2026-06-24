export const siteConfig = {
  name: "Orto & Implante",
  legalName: "Razao social a definir",
  shortName: "Orto & Implante",
  tagline: "Clinica odontologica em preparacao",
  description:
    "Site institucional em preparacao para a clinica Orto & Implante, em Bertioga/SP. Conteudos definitivos dependem de confirmacao.",
  city: "Bertioga",
  state: "SP",
  country: "BR",
  siteUrl: "",
  indexingEnabled: false,
  navItems: [
    { href: "/", label: "Inicio" },
    { href: "/a-clinica", label: "A clinica" },
    { href: "/tratamentos", label: "Tratamentos" },
    { href: "/equipe", label: "Equipe" },
    { href: "/contato", label: "Contato" }
  ],
  socialLinks: []
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
