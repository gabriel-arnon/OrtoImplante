export type Treatment = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  isPlaceholder: boolean;
  featured: boolean;
  purpose: string;
  indications: string[];
  howItWorks: string[];
  evaluationNote: string;
  image?: {
    src: string;
    alt: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const sharedEvaluationNote =
  "Cada caso exige avaliação individual com um dentista para entender histórico, necessidades, limitações e a melhor conduta.";

export const treatments = [
  {
    slug: "protese-protocolo",
    title: "Prótese Protocolo",
    summary:
      "Alternativa de reabilitação oral fixa para pessoas que precisam repor todos os dentes de uma arcada.",
    description:
      "A prótese protocolo é uma solução fixa apoiada sobre implantes, planejada para devolver função mastigatória e aparência do sorriso em casos de perda total dos dentes de uma arcada.",
    isPlaceholder: false,
    featured: true,
    purpose:
      "Serve para substituir dentaduras removíveis ou repor dentes ausentes quando há indicação para uma reabilitação fixa sobre implantes.",
    indications: [
      "Perda total dos dentes superiores ou inferiores.",
      "Dificuldade de adaptação com próteses removíveis.",
      "Necessidade de avaliar uma solução fixa para mastigação e fala."
    ],
    howItWorks: [
      "O dentista avalia saúde bucal, estrutura óssea e histórico do paciente.",
      "Quando indicado, os implantes são planejados e posicionados para sustentar a prótese.",
      "A prótese é confeccionada de acordo com o planejamento clínico e laboratorial."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "A prótese protocolo é indicada para todos os casos?",
        answer:
          "Não. A indicação depende da avaliação clínica, das condições de saúde bucal e da estrutura óssea disponível."
      },
      {
        question: "É preciso fazer exames antes do tratamento?",
        answer:
          "O dentista pode solicitar exames conforme a necessidade de cada caso para planejar a reabilitação com segurança."
      }
    ]
  },
  {
    slug: "implantes-dentarios",
    title: "Implantes Dentários",
    summary:
      "Tratamento para repor dentes perdidos por meio de estruturas implantadas no osso, quando houver indicação.",
    description:
      "Os implantes dentários são usados como suporte para coroas, pontes ou próteses, ajudando na reabilitação de função e estética em casos de perda dentária.",
    isPlaceholder: false,
    featured: true,
    purpose:
      "Servem para substituir raízes dentárias perdidas e criar suporte para uma nova estrutura protética.",
    indications: [
      "Ausência de um ou mais dentes.",
      "Necessidade de avaliar opções fixas de reabilitação.",
      "Planejamento de próteses unitárias, múltiplas ou totais."
    ],
    howItWorks: [
      "A avaliação identifica condições bucais, ósseas e de saúde geral.",
      "O planejamento define posição, quantidade e tipo de reabilitação possível.",
      "Após a etapa cirúrgica e o período indicado pelo dentista, a prótese é planejada."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Todo paciente pode receber implante?",
        answer:
          "Não necessariamente. A indicação depende de avaliação odontológica, exames e condições individuais."
      },
      {
        question: "Implante substitui um dente natural?",
        answer:
          "O implante pode ser parte de uma reabilitação para repor dentes perdidos, mas cada situação precisa de planejamento próprio."
      }
    ]
  },
  {
    slug: "cirurgia-guiada",
    title: "Cirurgia Guiada",
    summary:
      "Planejamento digital usado para auxiliar a instalação de implantes com apoio de guias cirúrgicos.",
    description:
      "A cirurgia guiada combina exames, planejamento digital e guia personalizado para auxiliar o posicionamento dos implantes, quando essa técnica é indicada.",
    isPlaceholder: false,
    featured: true,
    purpose:
      "Serve para planejar previamente a posição dos implantes e apoiar a execução do procedimento com maior previsibilidade técnica.",
    indications: [
      "Casos de implantes que se beneficiam de planejamento digital.",
      "Situações em que o guia cirúrgico pode auxiliar o posicionamento.",
      "Reabilitações que exigem análise detalhada da anatomia bucal."
    ],
    howItWorks: [
      "São avaliados exames e registros digitais do paciente.",
      "O planejamento define a posição dos implantes em ambiente digital.",
      "Um guia cirúrgico pode ser confeccionado para auxiliar o procedimento."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Cirurgia guiada substitui a avaliação do dentista?",
        answer:
          "Não. Ela é uma ferramenta de planejamento e execução, mas a indicação depende da análise profissional."
      },
      {
        question: "Todo implante precisa ser feito com cirurgia guiada?",
        answer:
          "Não. A técnica é indicada conforme o caso, a anatomia e o planejamento definido pelo dentista."
      }
    ]
  },
  {
    slug: "alinhadores-invisiveis",
    title: "Alinhadores Invisíveis",
    summary:
      "Opção ortodôntica removível para movimentação dentária planejada, com placas transparentes.",
    description:
      "Os alinhadores invisíveis são placas transparentes feitas sob planejamento odontológico para promover movimentações dentárias graduais em casos selecionados.",
    isPlaceholder: false,
    featured: true,
    purpose:
      "Servem para corrigir posicionamentos dentários quando o caso permite tratamento com alinhadores removíveis.",
    indications: [
      "Dentes desalinhados em casos compatíveis.",
      "Busca por alternativa removível ao aparelho fixo.",
      "Necessidade de avaliação ortodôntica com planejamento digital."
    ],
    howItWorks: [
      "O dentista avalia mordida, alinhamento e objetivos do tratamento.",
      "O planejamento define uma sequência de alinhadores.",
      "O paciente usa as placas conforme orientação e retorna para acompanhamento."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Alinhadores invisíveis resolvem qualquer desalinhamento?",
        answer:
          "Não. Alguns casos exigem outras abordagens ortodônticas, por isso a avaliação é indispensável."
      },
      {
        question: "Os alinhadores precisam ser usados todos os dias?",
        answer:
          "O tempo de uso deve seguir a orientação do dentista responsável pelo tratamento."
      }
    ]
  },
  {
    slug: "lentes-de-contato-dental",
    title: "Lentes de Contato Dental",
    summary:
      "Tratamento estético com lâminas finas planejadas para alterar forma, cor ou proporção dos dentes.",
    description:
      "As lentes de contato dental são restaurações estéticas finas, indicadas após avaliação para harmonizar características do sorriso sem prometer resultados padronizados.",
    isPlaceholder: false,
    featured: true,
    purpose:
      "Servem para ajustes estéticos em dentes selecionados, respeitando saúde bucal, mordida e planejamento individual.",
    indications: [
      "Alterações de forma, proporção ou cor em casos indicados.",
      "Fechamento de pequenos espaços, quando houver possibilidade clínica.",
      "Planejamento estético com avaliação de saúde gengival e dentária."
    ],
    howItWorks: [
      "A avaliação identifica necessidades, limitações e expectativas.",
      "O planejamento pode incluir registros, simulações e preparo conservador quando indicado.",
      "As peças são confeccionadas e cimentadas conforme o planejamento aprovado."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Lente de contato dental é indicada para qualquer sorriso?",
        answer:
          "Não. A indicação depende da saúde dos dentes, da gengiva, da mordida e do objetivo estético."
      },
      {
        question: "O tratamento muda a cor dos dentes?",
        answer:
          "Pode alterar a aparência de cor em casos indicados, mas o resultado depende do planejamento individual."
      }
    ]
  },
  {
    slug: "tratamento-de-canal",
    title: "Tratamento de Canal",
    summary:
      "Procedimento para tratar a parte interna do dente quando há inflamação, infecção ou dano pulpar.",
    description:
      "O tratamento de canal atua na limpeza e selamento dos canais internos do dente, buscando preservar a estrutura dentária quando essa conduta é indicada.",
    isPlaceholder: false,
    featured: false,
    purpose:
      "Serve para tratar alterações na polpa dentária e evitar a extração em situações em que o dente pode ser preservado.",
    indications: [
      "Dor persistente ou sensibilidade intensa, após avaliação.",
      "Infecção ou inflamação na parte interna do dente.",
      "Dentes com fraturas, cáries profundas ou necessidade restauradora associada."
    ],
    howItWorks: [
      "O dentista avalia sinais, sintomas e exames necessários.",
      "Os canais são acessados, limpos e preparados.",
      "O dente recebe selamento e pode precisar de restauração posterior."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Dor no dente sempre significa canal?",
        answer:
          "Não. Dor pode ter várias causas, e somente a avaliação odontológica define o diagnóstico e a conduta."
      },
      {
        question: "Depois do canal o dente precisa de restauração?",
        answer:
          "Frequentemente é necessário restaurar ou proteger o dente, mas a indicação varia conforme o caso."
      }
    ]
  },
  {
    slug: "ortodontia",
    title: "Ortodontia",
    summary:
      "Área voltada ao alinhamento dos dentes e à correção de relações de mordida, conforme diagnóstico.",
    description:
      "A ortodontia avalia a posição dos dentes e a relação entre as arcadas para planejar movimentações com aparelhos fixos, removíveis ou alinhadores, quando indicados.",
    isPlaceholder: false,
    featured: false,
    purpose:
      "Serve para melhorar alinhamento, função mastigatória e equilíbrio da mordida em casos diagnosticados pelo dentista.",
    indications: [
      "Dentes tortos, apinhados ou espaçados.",
      "Alterações de mordida percebidas pelo paciente ou dentista.",
      "Acompanhamento ortodôntico em diferentes fases da vida."
    ],
    howItWorks: [
      "A avaliação reúne exame clínico, registros e análise da mordida.",
      "O plano define o tipo de aparelho ou alinhador mais adequado.",
      "O tratamento exige acompanhamento periódico e colaboração do paciente."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Ortodontia é apenas estética?",
        answer:
          "Não. Além da aparência, ela pode envolver função, mordida, higienização e saúde bucal."
      },
      {
        question: "Adultos podem fazer tratamento ortodôntico?",
        answer:
          "Podem, desde que a avaliação indique condições adequadas para o tratamento."
      }
    ]
  },
  {
    slug: "cirurgias",
    title: "Cirurgias",
    summary:
      "Procedimentos cirúrgicos odontológicos planejados conforme diagnóstico e necessidade individual.",
    description:
      "As cirurgias odontológicas abrangem procedimentos realizados para tratar diferentes necessidades bucais, sempre com avaliação, planejamento e orientação profissional.",
    isPlaceholder: false,
    featured: false,
    purpose:
      "Servem para resolver situações que exigem intervenção cirúrgica, como extrações, adequações ou etapas de reabilitação.",
    indications: [
      "Dentes com indicação de extração após avaliação.",
      "Procedimentos associados a implantes ou reabilitações.",
      "Necessidades cirúrgicas identificadas em exame clínico."
    ],
    howItWorks: [
      "O dentista avalia o caso e solicita exames quando necessário.",
      "O procedimento é planejado conforme complexidade e condições do paciente.",
      "O paciente recebe orientações de preparo e cuidados pós-operatórios."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Toda cirurgia odontológica é igual?",
        answer:
          "Não. A complexidade, preparo e recuperação variam de acordo com o procedimento e o paciente."
      },
      {
        question: "Há orientações antes e depois da cirurgia?",
        answer:
          "Sim. As orientações são definidas pelo dentista conforme o procedimento realizado."
      }
    ]
  },
  {
    slug: "clareamento-dental",
    title: "Clareamento Dental",
    summary:
      "Tratamento estético para clarear dentes naturais, indicado após avaliação da saúde bucal.",
    description:
      "O clareamento dental busca melhorar a tonalidade dos dentes naturais com acompanhamento profissional e indicação adequada para cada caso.",
    isPlaceholder: false,
    featured: false,
    purpose:
      "Serve para clarear dentes naturais escurecidos, respeitando limites biológicos e condições bucais.",
    indications: [
      "Dentes naturais com alteração de cor.",
      "Interesse em melhorar a aparência do sorriso com supervisão profissional.",
      "Necessidade de avaliar sensibilidade, restaurações e saúde gengival antes do procedimento."
    ],
    howItWorks: [
      "O dentista avalia dentes, gengiva e possíveis contraindicações.",
      "A técnica é indicada conforme o caso e acompanhada profissionalmente.",
      "O resultado varia de acordo com características individuais."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "Clareamento funciona em restaurações e próteses?",
        answer:
          "Não da mesma forma que em dentes naturais. Restaurações e próteses precisam ser avaliadas separadamente."
      },
      {
        question: "Pode haver sensibilidade?",
        answer:
          "Algumas pessoas relatam sensibilidade, e o dentista orienta a melhor conduta para cada caso."
      }
    ]
  },
  {
    slug: "clinica-geral",
    title: "Clínica Geral",
    summary:
      "Atendimento odontológico inicial e acompanhamento de saúde bucal para prevenção, diagnóstico e cuidado geral.",
    description:
      "A clínica geral é a porta de entrada para avaliação odontológica, prevenção, diagnóstico e encaminhamento para tratamentos específicos quando necessário.",
    isPlaceholder: false,
    featured: false,
    purpose:
      "Serve para acompanhar a saúde bucal, identificar necessidades e orientar o plano de tratamento.",
    indications: [
      "Avaliação de rotina.",
      "Prevenção, limpeza e orientação de higiene.",
      "Investigação de desconfortos, cáries, gengiva inflamada ou outras queixas."
    ],
    howItWorks: [
      "O dentista realiza anamnese e exame clínico.",
      "Quando necessário, exames complementares podem ser solicitados.",
      "O paciente recebe orientação e plano de cuidado conforme a avaliação."
    ],
    evaluationNote: sharedEvaluationNote,
    faq: [
      {
        question: "A clínica geral resolve todos os casos?",
        answer:
          "Ela avalia, trata situações gerais e pode encaminhar para áreas específicas quando necessário."
      },
      {
        question: "Quando devo procurar atendimento odontológico?",
        answer:
          "Sempre que houver dor, desconforto, alteração percebida ou necessidade de acompanhamento preventivo."
      }
    ]
  }
] satisfies Treatment[];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export const featuredTreatments = treatments.filter((treatment) => treatment.featured);
