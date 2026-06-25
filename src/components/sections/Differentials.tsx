const differentials = [
  "Equipe de dentistas especialistas",
  "Scanner intraoral e planejamento digital",
  "Simulações em 3D",
  "Sala de espera ampla",
  "Som ambiente, café e TVs",
  "Ambientes para recuperação pós-operatória",
  "Fácil estacionamento",
  "Acessibilidade"
] as const;

function DifferentialIcon({ index }: { index: number }) {
  const variants = [
    "M6 18c5-9 13-9 18 0",
    "M7 12h16M12 7v16",
    "M7 17l5-5 4 4 7-8",
    "M8 8h16v14H8z",
    "M8 12h16M8 18h10",
    "M7 18c4-6 11-8 17-3",
    "M7 19h18M10 15h12",
    "M8 18h16M12 14l4-4 4 4"
  ];

  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <path
        d={variants[index % variants.length]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Differentials() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <p className="eyebrow">Diferenciais</p>
        <h2 className="section-title mt-3">
          Diferenciais informados pela clínica
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-4">
          {differentials.map((item, index) => (
            <li key={item} className="soft-card p-5">
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-sm bg-white text-accent shadow-[inset_0_0_0_1px_var(--color-border)]">
                <DifferentialIcon index={index} />
              </span>
              <p className="font-semibold text-navy">{item}</p>
              <p className="mt-3 text-[0.95rem] leading-6 text-graphite-soft">
                Recurso informado no site atual da Orto & Implante e migrado para esta etapa.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
