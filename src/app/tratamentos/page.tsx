import type { Metadata } from "next";
import { TreatmentCard } from "@/components/sections/TreatmentCard";
import { treatments } from "@/content/treatments";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Tratamentos",
  description: "Conheça os tratamentos odontológicos informados pela Orto & Implante em Bertioga/SP.",
  path: "/tratamentos"
});

export default function TreatmentsPage() {
  return (
    <main className="bg-mist">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Início", path: "/" },
              { name: "Tratamentos", path: "/tratamentos" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="eyebrow">Tratamentos</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy md:text-5xl">
          Tratamentos odontológicos
        </h1>
        <p className="section-copy mt-5 max-w-3xl">
          A lista abaixo reúne os tratamentos atualmente informados pela clínica. As descrições são
          educativas e cada caso exige avaliação individual para definição de conduta.
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
