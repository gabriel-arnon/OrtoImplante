const technologyItems = [] as const;

export function TechnologySection() {
  if (!technologyItems.length) {
    return null;
  }

  return (
    <section className="section-y bg-light-gray/30">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Tecnologia</p>
        <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
          Recursos confirmados
        </h2>
      </div>
    </section>
  );
}
