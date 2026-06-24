import Link from "next/link";
import type { Treatment } from "@/content/treatments";

type TreatmentCardProps = {
  treatment: Treatment;
};

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <article className="flex h-full flex-col border border-light-gray bg-white p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
        {treatment.isPlaceholder ? "Placeholder" : "Tratamento"}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-navy">{treatment.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-graphite-soft">{treatment.summary}</p>
      <Link
        href={`/tratamentos/${treatment.slug}`}
        className="mt-5 inline-flex min-h-11 w-fit items-center border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
      >
        Ver estrutura
      </Link>
    </article>
  );
}
