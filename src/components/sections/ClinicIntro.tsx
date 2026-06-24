import Link from "next/link";

export function ClinicIntro() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="border border-light-gray bg-light-gray/20 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            A clinica
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
            Apresentacao institucional pendente
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-graphite-soft">
            Este bloco recebera texto aprovado sobre a Orto & Implante. Nesta fase, ele existe para
            validar estrutura, hierarquia e navegacao sem publicar dados nao confirmados.
          </p>
          <Link
            href="/a-clinica"
            className="mt-6 inline-flex min-h-11 items-center border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Conhecer estrutura da pagina
          </Link>
        </div>
      </div>
    </section>
  );
}
