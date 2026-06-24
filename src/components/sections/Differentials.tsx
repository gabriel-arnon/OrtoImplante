const differentials = [
  "Diferencial a confirmar",
  "Informacao institucional pendente",
  "Canais oficiais ainda nao configurados"
] as const;

export function Differentials() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          Diferenciais
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
          Bloco preparado para informacoes confirmadas
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {differentials.map((item) => (
            <li key={item} className="border border-light-gray bg-light-gray/20 p-5">
              <p className="font-semibold text-navy">{item}</p>
              <p className="mt-3 text-sm leading-6 text-graphite-soft">
                Placeholder provisorio. Substituir somente por informacao validada pela clinica.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
