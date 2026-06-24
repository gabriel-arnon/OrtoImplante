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

export function Differentials() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          Diferenciais
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
          Diferenciais informados pela clínica
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-4">
          {differentials.map((item) => (
            <li key={item} className="border border-light-gray bg-light-gray/20 p-5">
              <p className="font-semibold text-navy">{item}</p>
              <p className="mt-3 text-sm leading-6 text-graphite-soft">
                Recurso informado no site atual da Orto & Implante e migrado para esta etapa.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
