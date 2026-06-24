import type { Professional } from "@/content/professionals";

type ProfessionalCardProps = {
  professional: Professional;
};

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <article className="border border-light-gray bg-white p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
        {professional.isPlaceholder ? "Placeholder" : professional.role}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-navy">{professional.name}</h3>
      <p className="mt-2 text-sm text-graphite-soft">{professional.registration}</p>
      <p className="mt-4 text-sm leading-6 text-graphite-soft">{professional.bio}</p>
    </article>
  );
}
