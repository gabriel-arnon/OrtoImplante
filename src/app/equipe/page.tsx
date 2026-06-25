import type { Metadata } from "next";
import { ProfessionalCard } from "@/components/sections/ProfessionalCard";
import { professionals } from "@/content/professionals";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Equipe",
  description: "Responsável técnico da Orto & Implante em Bertioga/SP.",
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
              { name: "Início", path: "/" },
              { name: "Equipe", path: "/equipe" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="eyebrow">Equipe</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy md:text-5xl">
          Responsável técnico
        </h1>
        <p className="section-copy mt-5 max-w-3xl">
          Nesta etapa, a página exibe apenas o responsável técnico informado oficialmente. Demais
          profissionais serão adicionados futuramente quando nomes, registros, funções e imagens
          forem confirmados.
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
