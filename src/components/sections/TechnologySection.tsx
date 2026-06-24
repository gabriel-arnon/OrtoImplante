const technologyItems = [
  "Scanner intraoral",
  "Planejamento digital",
  "Simulações em 3D"
] as const;

export function TechnologySection() {
  if (!technologyItems.length) {
    return null;
  }

  return (
    <section className="section-y bg-light-gray/30">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Tecnologia</p>
        <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
          Tecnologia para apoiar diagnóstico e planejamento
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {technologyItems.map((item) => (
            <article key={item} className="border border-light-gray bg-white p-5">
              <h3 className="text-lg font-semibold text-navy">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite-soft">
                Recurso informado pela clínica e usado conforme necessidade de cada avaliação.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
