import Link from "next/link";
import { TreatmentCard } from "@/components/sections/TreatmentCard";
import { featuredTreatments } from "@/content/treatments";

export function TreatmentsPreview() {
  return (
    <section className="section-y bg-light-gray/30">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Tratamentos
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
              Principais tratamentos
            </h2>
            <p className="mt-4 text-base leading-7 text-graphite-soft">
              Conheça áreas de atendimento informadas pela clínica. A indicação depende de
              avaliação individual.
            </p>
          </div>
          <Link href="/tratamentos" className="font-semibold text-navy underline-offset-4 hover:underline">
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
