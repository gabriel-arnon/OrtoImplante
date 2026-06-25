import Link from "next/link";
import { TreatmentCard } from "@/components/sections/TreatmentCard";
import { featuredTreatments } from "@/content/treatments";

export function TreatmentsPreview() {
  return (
    <section className="section-y bg-mist">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Tratamentos</p>
            <h2 className="section-title mt-3">
              Principais tratamentos
            </h2>
            <p className="section-copy mt-4">
              Conheça áreas de atendimento informadas pela clínica. A indicação depende de
              avaliação individual.
            </p>
          </div>
          <Link href="/tratamentos" className="btn-quiet">
            Ver todos
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
}
