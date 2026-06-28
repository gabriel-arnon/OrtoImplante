import Image from "next/image";
import Link from "next/link";
import { clinicAssets } from "@/content/assets";
import { siteConfig } from "@/content/site";

export function ClinicIntro() {
  const reception = clinicAssets.reception;

  return (
    <section className="section-y bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="soft-card overflow-hidden">
          <div className="relative aspect-[4/3] bg-white">
            <Image
              src={reception.src}
              alt={reception.alt}
              width={reception.width}
              height={reception.height}
              sizes="(max-width: 1023px) calc(100vw - 2rem), 430px"
              className="h-full w-full object-cover"
              style={{ objectPosition: reception.objectPosition }}
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="eyebrow">A clínica</p>
            <h2 className="section-title mt-3">
              Estrutura preparada para diferentes necessidades odontológicas
            </h2>
          </div>
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
