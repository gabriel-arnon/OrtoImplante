import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "A clinica",
  description: "Pagina provisoria sobre a clinica Orto & Implante.",
  path: "/a-clinica"
});

export default function ClinicPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Inicio", path: "/" },
              { name: "A clinica", path: "/a-clinica" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          A clinica
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">Conteudo institucional pendente</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-graphite-soft">
          Esta pagina esta pronta para receber apresentacao, historia, estrutura e fotos reais da
          Orto & Implante apos confirmacao.
        </p>
        <Link
          href="/contato#formulario-contato"
          className="mt-8 inline-flex min-h-11 items-center border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
        >
          Solicitar pre-agendamento
        </Link>
      </section>
    </main>
  );
}
