import type { Metadata } from "next";
import Link from "next/link";
import { contactConfig } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "A clínica",
  description: "Conheça a Orto & Implante, clínica odontológica em Bertioga/SP.",
  path: "/a-clinica"
});

export default function ClinicPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Início", path: "/" },
              { name: "A clínica", path: "/a-clinica" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          A clínica
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">
          Orto & Implante em Bertioga/SP
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-graphite-soft">
          A Orto & Implante informa atuação desde {siteConfig.foundedYear}, com{" "}
          {siteConfig.experienceLabel} de experiência e {siteConfig.patientsServedLabel}. A clínica
          reúne equipe de dentistas especialistas e estrutura voltada ao atendimento odontológico em
          diferentes áreas.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-graphite-soft">
          Entre os recursos informados estão scanner intraoral, planejamento digital, simulações em
          3D, sala de espera ampla, som ambiente, cantinho do café, TVs e ambientes para recuperação
          pós-operatória. A unidade fica em {contactConfig.address.display}.
        </p>
        <dl className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="border border-light-gray bg-light-gray/20 p-4">
            <dt className="font-semibold text-navy">Responsável técnico</dt>
            <dd className="mt-2 text-graphite-soft">
              {siteConfig.technicalDirector.name}, {siteConfig.technicalDirector.registration}
            </dd>
          </div>
          <div className="border border-light-gray bg-light-gray/20 p-4">
            <dt className="font-semibold text-navy">Registro da clínica</dt>
            <dd className="mt-2 text-graphite-soft">{siteConfig.clinicRegistration}</dd>
          </div>
          <div className="border border-light-gray bg-light-gray/20 p-4">
            <dt className="font-semibold text-navy">Convênios</dt>
            <dd className="mt-2 text-graphite-soft">{siteConfig.insuranceNotice}</dd>
          </div>
        </dl>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-graphite-soft">
          Fotos reais e informações adicionais sobre profissionais serão adicionadas em uma etapa
          futura, somente com arquivos e dados aprovados.
        </p>
        <Link
          href="/contato#formulario-contato"
          className="mt-8 inline-flex min-h-11 items-center border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
        >
          Solicitar pré-agendamento
        </Link>
      </section>
    </main>
  );
}
