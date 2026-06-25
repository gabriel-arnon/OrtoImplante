import Link from "next/link";
import type { Treatment } from "@/content/treatments";

type TreatmentCardProps = {
  treatment: Treatment;
};

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <article className="surface-card flex h-full flex-col p-5">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-accent-soft text-navy" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="h-7 w-7">
          <path
            d="M10 18c0-6 3-10 6-10s6 4 6 10M12 18h8M14 22h4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
        Tratamento
      </p>
      <h3 className="mt-3 text-xl font-semibold text-navy">{treatment.title}</h3>
      <p className="mt-3 flex-1 text-[0.96rem] leading-7 text-graphite-soft">{treatment.summary}</p>
      <Link
        href={`/tratamentos/${treatment.slug}`}
        className="btn-secondary mt-5 w-fit"
      >
        Saiba mais
      </Link>
    </article>
  );
}
