import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { professionals } from "@/content/professionals";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Equipe",
  description: "Responsável técnico da Orto & Implante em Bertioga/SP.",
  path: "/equipe"
});

export default function TeamPage() {
  const professional = professionals[0];

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Início", path: "/" },
              { name: "Equipe", path: "/equipe" }
            ])
          )
        }}
      />
      <section className="section-shell py-12 md:py-16">
        <p className="eyebrow">Equipe</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy md:text-5xl">
          Responsável técnico
        </h1>
        <p className="section-copy mt-5 max-w-3xl">
          Conheça o profissional confirmado como responsável técnico da Orto & Implante em
          Bertioga/SP.
        </p>
        {professional ? (
          <div
            className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center"
            data-testid="featured-professional"
          >
            <div className="surface-card overflow-hidden bg-white p-3">
              {professional.image ? (
                <Image
                  src={professional.image.src}
                  alt={professional.image.alt}
                  width={professional.image.width}
                  height={professional.image.height}
                  sizes="(max-width: 1023px) min(100vw - 2rem, 620px), 460px"
                  className="aspect-[4/5] w-full rounded-sm object-cover object-[58%_24%]"
                  priority
                />
              ) : null}
            </div>
            <article className="soft-card p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                {professional.role}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy md:text-4xl">
                {professional.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-graphite-soft">
                {professional.registration}
              </p>
              <p className="section-copy mt-5">{professional.bio}</p>
              <p className="section-copy mt-4">
                Na clínica, a responsabilidade técnica se conecta à avaliação individual, ao
                planejamento do cuidado odontológico e ao acompanhamento das condutas indicadas.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contato#formulario-contato" className="btn-primary">
                  Solicitar pré-agendamento
                </Link>
                <Link href="/tratamentos" className="btn-secondary">
                  Ver tratamentos
                </Link>
              </div>
            </article>
          </div>
        ) : null}
      </section>
    </main>
  );
}
