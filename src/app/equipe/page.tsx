import type { Metadata } from "next";
import { ProfessionalCard } from "@/components/sections/ProfessionalCard";
import { professionals } from "@/content/professionals";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Equipe",
  description: "Estrutura provisoria para equipe da Orto & Implante.",
  path: "/equipe"
});

export default function TeamPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Inicio", path: "/" },
              { name: "Equipe", path: "/equipe" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Equipe</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">Equipe a confirmar</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-graphite-soft">
          Nenhum profissional sera exibido ate que nomes, funcoes, registros e imagens sejam
          fornecidos e aprovados.
        </p>
        {professionals.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.name} professional={professional} />
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
