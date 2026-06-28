import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicAssets } from "@/content/assets";
import { contactConfig } from "@/content/contact";
import { professionals } from "@/content/professionals";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "A clínica",
  description: "Conheça a Orto & Implante, clínica odontológica em Bertioga/SP.",
  path: "/a-clinica"
});

export default function ClinicPage() {
  const facade = clinicAssets.facade;
  const professional = professionals[0];
  const galleryImages = [
    clinicAssets.consultationRoomWide,
    clinicAssets.consultationRoom,
    facade
  ];

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
        <p className="eyebrow">A clínica</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy md:text-5xl">
          Orto & Implante em Bertioga/SP
        </h1>
        <p className="section-copy mt-5 max-w-3xl">
          A Orto & Implante informa atuação desde {siteConfig.foundedYear}, com{" "}
          {siteConfig.experienceLabel} de experiência e {siteConfig.patientsServedLabel}. A clínica
          reúne equipe de dentistas especialistas e estrutura voltada ao atendimento odontológico em
          diferentes áreas.
        </p>
        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="surface-card overflow-hidden bg-white p-3">
            <Image
              src={clinicAssets.reception.src}
              alt={clinicAssets.reception.alt}
              width={clinicAssets.reception.width}
              height={clinicAssets.reception.height}
              sizes="(max-width: 1023px) calc(100vw - 2rem), 430px"
              className="aspect-[4/3] w-full rounded-sm object-cover"
              style={{ objectPosition: clinicAssets.reception.objectPosition }}
            />
          </div>
          <p className="section-copy">
            Entre os recursos informados estão scanner intraoral, planejamento digital, simulações em
            3D, sala de espera ampla, som ambiente, cantinho do café, TVs e ambientes para recuperação
            pós-operatória. A unidade fica em {contactConfig.location.display}.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {galleryImages.map((image) => (
            <figure key={image.src} className="surface-card overflow-hidden bg-white p-3">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 767px) calc(100vw - 2rem), 31vw"
                className="aspect-[4/3] w-full rounded-sm object-cover"
                style={{ objectPosition: image.objectPosition }}
              />
            </figure>
          ))}
        </div>
        <dl className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="surface-card p-4">
            <dt className="font-semibold text-navy">Responsável técnico</dt>
            <dd className="mt-2 text-graphite-soft">
              {siteConfig.technicalDirector.name}, {siteConfig.technicalDirector.registration}
            </dd>
          </div>
          <div className="surface-card p-4">
            <dt className="font-semibold text-navy">Registro da clínica</dt>
            <dd className="mt-2 text-graphite-soft">{siteConfig.clinicRegistration}</dd>
          </div>
          <div className="surface-card p-4">
            <dt className="font-semibold text-navy">Convênios</dt>
            <dd className="mt-2 text-graphite-soft">{siteConfig.insuranceNotice}</dd>
          </div>
        </dl>
        {professional ? (
          <section className="mt-8 grid gap-6 rounded-sm border border-light-gray bg-mist/60 p-5 md:grid-cols-[7.5rem_1fr] md:items-center md:p-6">
            {professional.image ? (
              <Image
                src={professional.image.src}
                alt={professional.image.alt}
                width={professional.image.width}
                height={professional.image.height}
                sizes="(max-width: 767px) 112px, 128px"
                className="aspect-square w-28 rounded-sm object-cover object-[58%_24%] md:w-32"
              />
            ) : null}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Responsável técnico
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">{professional.name}</h2>
              <p className="mt-2 font-semibold text-graphite-soft">{professional.registration}</p>
              <p className="mt-4 text-[0.98rem] leading-7 text-graphite-soft">
                A responsabilidade técnica apoia a avaliação individual, o planejamento dos
                tratamentos e a continuidade do cuidado dentro dos padrões profissionais da clínica.
              </p>
            </div>
          </section>
        ) : null}
        <Link
          href="/contato#formulario-contato"
          className="btn-secondary mt-8"
        >
          Solicitar pré-agendamento
        </Link>
      </section>
    </main>
  );
}
