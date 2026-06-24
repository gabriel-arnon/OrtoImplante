import type { Metadata } from "next";
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
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          Tratamento
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">{treatment.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-graphite-soft">
          {treatment.description}
        </p>
      </section>
      <section className="section-y bg-light-gray/20">
        <div className="section-shell grid gap-5 lg:grid-cols-2">
          <article className="border border-light-gray bg-white p-5">
            <h2 className="text-2xl font-semibold text-navy">Para que serve</h2>
            <p className="mt-4 text-base leading-8 text-graphite-soft">{treatment.purpose}</p>
          </article>
          <article className="border border-light-gray bg-white p-5">
            <h2 className="text-2xl font-semibold text-navy">Possíveis indicações</h2>
            <ul className="mt-4 space-y-3 text-base leading-7 text-graphite-soft">
              {treatment.indications.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="border border-light-gray bg-white p-5 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy">Como funciona de forma geral</h2>
            <ol className="mt-4 grid gap-3 text-base leading-7 text-graphite-soft md:grid-cols-3">
              {treatment.howItWorks.map((item, index) => (
                <li key={item} className="border border-light-gray bg-light-gray/20 p-4">
                  <span className="mb-2 block text-sm font-semibold text-gold">
                    Etapa {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
          <article className="border border-gold/45 bg-gold/10 p-5 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy">Avaliação profissional</h2>
            <p className="mt-4 text-base leading-8 text-graphite-soft">
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
