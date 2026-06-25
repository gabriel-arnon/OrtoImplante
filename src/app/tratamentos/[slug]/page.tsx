import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentCta } from "@/components/sections/AppointmentCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { getTreatmentBySlug, treatments } from "@/content/treatments";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData, faqStructuredData } from "@/lib/structured-data";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return createMetadata({ title: "Tratamento nao encontrado", path: `/tratamentos/${slug}` });
  }

  return createMetadata({
    title: treatment.title,
    description: treatment.summary,
    path: `/tratamentos/${treatment.slug}`
  });
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const treatmentFaq = treatment.faq.map((item) => ({ ...item, context: "treatment" as const }));

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Início", path: "/" },
              { name: "Tratamentos", path: "/tratamentos" },
              { name: treatment.title, path: `/tratamentos/${treatment.slug}` }
            ])
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData(treatmentFaq)) }}
      />
      <section className="section-shell py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-7 text-sm font-semibold text-graphite-soft">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="underline-offset-4 hover:text-navy hover:underline">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/tratamentos" className="underline-offset-4 hover:text-navy hover:underline">
                Tratamentos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy">{treatment.title}</li>
          </ol>
        </nav>
        <p className="eyebrow">Tratamento</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy md:text-5xl">
          {treatment.title}
        </h1>
        <p className="section-copy mt-5 max-w-3xl">
          {treatment.description}
        </p>
      </section>
      <section className="section-y bg-mist">
        <div className="section-shell grid gap-5 lg:grid-cols-2">
          <article className="surface-card p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-navy">Para que serve</h2>
            <p className="section-copy mt-4">{treatment.purpose}</p>
          </article>
          <article className="surface-card p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-navy">Possíveis indicações</h2>
            <ul className="mt-4 space-y-3 text-base leading-7 text-graphite-soft">
              {treatment.indications.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="surface-card p-5 md:p-6 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy">Como funciona de forma geral</h2>
            <ol className="mt-4 grid gap-3 text-base leading-7 text-graphite-soft md:grid-cols-3">
              {treatment.howItWorks.map((item, index) => (
                <li key={item} className="soft-card p-4">
                  <span className="mb-2 block text-sm font-semibold text-accent">
                    Etapa {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-md border border-accent bg-accent-soft p-5 md:p-6 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy">Avaliação profissional</h2>
            <p className="section-copy mt-4">
              {treatment.evaluationNote}
            </p>
          </article>
        </div>
      </section>
      <FaqSection items={treatmentFaq} />
      <AppointmentCta />
    </main>
  );
}
