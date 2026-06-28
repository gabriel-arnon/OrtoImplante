import Image from "next/image";
import type { Professional } from "@/content/professionals";

type ProfessionalCardProps = {
  professional: Professional;
};

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <article className="surface-card grid gap-5 p-5 md:grid-cols-[8rem_1fr] md:p-6">
      <div className="relative aspect-square w-full max-w-[12rem] overflow-hidden rounded-md bg-accent-soft text-navy md:max-w-none">
        {professional.image ? (
          <Image
            src={professional.image.src}
            alt={professional.image.alt}
            width={professional.image.width}
            height={professional.image.height}
            sizes="(max-width: 767px) calc(100vw - 2.5rem), 128px"
            className="h-full w-full object-cover object-[58%_24%]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="h-14 w-14">
              <circle cx="24" cy="18" r="7" fill="none" stroke="currentColor" strokeWidth="2.4" />
              <path
                d="M12 39c3-8 21-8 24 0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.4"
              />
            </svg>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
          {professional.role}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-navy">{professional.name}</h3>
        <p className="mt-2 text-[0.96rem] font-semibold text-graphite-soft">{professional.registration}</p>
        <p className="mt-4 text-[0.96rem] leading-7 text-graphite-soft">{professional.bio}</p>
      </div>
    </article>
  );
}
