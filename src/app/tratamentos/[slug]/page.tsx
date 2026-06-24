import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
              { name: "Inicio", path: "/" },
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
          {treatment.isPlaceholder ? "Placeholder" : "Tratamento"}
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">{treatment.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-graphite-soft">
          {treatment.description}
        </p>
      </section>
      <FaqSection items={treatmentFaq} />
    </main>
  );
}
