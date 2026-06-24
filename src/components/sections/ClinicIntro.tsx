import Link from "next/link";
import { siteConfig } from "@/content/site";

export function ClinicIntro() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="border border-light-gray bg-light-gray/20 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            A clínica
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
            Estrutura preparada para diferentes necessidades odontológicas
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-graphite-soft">
            Fundada em {siteConfig.foundedYear}, a Orto & Implante atende em Bertioga/SP com
            equipe de dentistas especialistas e recursos como scanner intraoral, planejamento
            digital e simulações em 3D. A clínica informa {siteConfig.experienceLabel} de atuação
            e {siteConfig.patientsServedLabel}.
          </p>
          <p className="mt-4 text-base leading-8 text-graphite-soft">
            O cuidado combina avaliação profissional, estrutura confortável e orientação clara para
            que cada tratamento seja definido de acordo com a necessidade individual.
          </p>
          <Link
            href="/a-clinica"
            className="mt-6 inline-flex min-h-11 items-center border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Conhecer a clínica
          </Link>
        </div>
      </div>
    </section>
  );
}
