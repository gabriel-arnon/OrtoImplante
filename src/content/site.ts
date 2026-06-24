export const siteConfig = {
  name: "Projeto em Preparacao",
  responsibleName: "Responsavel a definir",
  registration: "Registro a definir",
  phoneDisplay: "Telefone a definir",
  phoneHref: "#formulario-contato",
  whatsappHref: "#formulario-contato",
  email: "",
  instagram: "",
  instagramHref: "",
  responseTime: "prazo a definir",
  siteDescription:
    "Site em preparacao. As informacoes publicas serao revisadas antes da publicacao.",
  regionalPositioning:
    "Canais, enderecos e areas de atendimento serao definidos em etapa posterior.",
  navItems: [
    { href: "/#perfil", label: "Identificacao" },
    { href: "/#situacoes", label: "Assuntos" },
    { href: "/#como-funciona", label: "Atendimento" },
    { href: "/#documentos", label: "Preparacao" },
    { href: "/#regioes", label: "Canais" },
    { href: "/#faq", label: "FAQ" }
  ]
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
