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
    <section className="section-y bg-mist">
      <div className="section-shell">
        <p className="eyebrow">Tecnologia</p>
        <h2 className="section-title mt-3">
          Tecnologia para apoiar diagnóstico e planejamento
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {technologyItems.map((item) => (
            <article key={item} className="surface-card p-5">
              <h3 className="text-lg font-semibold text-navy">{item}</h3>
              <p className="mt-3 text-[0.96rem] leading-7 text-graphite-soft">
                Recurso informado pela clínica e usado conforme necessidade de cada avaliação.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
