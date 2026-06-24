import type { Metadata } from "next";
import { TreatmentCard } from "@/components/sections/TreatmentCard";
import { treatments } from "@/content/treatments";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Tratamentos",
  description: "Estrutura provisoria para tratamentos da Orto & Implante.",
  path: "/tratamentos"
});

export default function TreatmentsPage() {
  return (
    <main className="bg-light-gray/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Inicio", path: "/" },
              { name: "Tratamentos", path: "/tratamentos" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          Tratamentos
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">Tratamentos a confirmar</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-graphite-soft">
          A lista abaixo e provisoria. Substituir por tratamentos reais somente apos confirmacao da
          clinica.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </section>
    </main>
  );
}
