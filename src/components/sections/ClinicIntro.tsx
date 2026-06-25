import Link from "next/link";
import { siteConfig } from "@/content/site";

export function ClinicIntro() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="soft-card p-6 md:p-8">
          <p className="eyebrow">A clínica</p>
          <h2 className="section-title mt-3">
            Estrutura preparada para diferentes necessidades odontológicas
          </h2>
        </div>
        <div>
          <p className="section-copy">
            Fundada em {siteConfig.foundedYear}, a Orto & Implante atende em Bertioga/SP com
            equipe de dentistas especialistas e recursos como scanner intraoral, planejamento
            digital e simulações em 3D. A clínica informa {siteConfig.experienceLabel} de atuação
            e {siteConfig.patientsServedLabel}.
          </p>
          <p className="section-copy mt-4">
            O cuidado combina avaliação profissional, estrutura confortável e orientação clara para
            que cada tratamento seja definido de acordo com a necessidade individual.
          </p>
          <Link
            href="/a-clinica"
            className="btn-secondary mt-6"
          >
            Conhecer a clínica
          </Link>
        </div>
      </div>
    </section>
  );
}
