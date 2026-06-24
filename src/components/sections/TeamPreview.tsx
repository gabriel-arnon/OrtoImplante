import Link from "next/link";
import { ProfessionalCard } from "@/components/sections/ProfessionalCard";
import { professionals } from "@/content/professionals";

export function TeamPreview() {
  if (!professionals.length) {
    return null;
  }

  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Equipe</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
              Responsável técnico
            </h2>
          </div>
          <Link href="/equipe" className="font-semibold text-navy underline-offset-4 hover:underline">
            Ver equipe
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.name} professional={professional} />
          ))}
        </div>
      </div>
    </section>
  );
}
