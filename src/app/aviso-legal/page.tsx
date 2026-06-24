import type { Metadata } from "next";
import Link from "next/link";
import { legalContentMeta, legalNoticeSections } from "@/content/legal";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Aviso Legal",
  description: "Aviso Legal provisorio para site em preparacao.",
  path: "/aviso-legal"
});

function LegalSection({
  title,
  children
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="border-b border-light-gray pb-8">
      <h2 className="text-2xl font-semibold text-navy">{title}</h2>
      <div className="mt-3 space-y-4 leading-8 text-graphite-soft">{children}</div>
    </section>
  );
}

export default function LegalNoticePage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Inicio", path: "/" },
              { name: "Aviso Legal", path: "/aviso-legal" }
            ])
          )
        }}
      />
      <article className="section-shell py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
            Voltar para a pagina inicial
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Informacao provisoria
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">Aviso Legal</h1>
          <p className="mt-3 text-sm font-semibold text-graphite-soft">
            Ultima atualizacao: {legalContentMeta.lastUpdated}
          </p>
          <p className="mt-5 text-base leading-8 text-graphite-soft">
            Este aviso descreve limites de uso da copia atual do site {siteConfig.name}, que ainda
            esta em preparacao.
          </p>

          <div className="mt-10 grid gap-8">
            {legalNoticeSections.map((section, index) => (
              <LegalSection key={section.title} title={`${index + 1}. ${section.title}`}>
                <p>{section.text}</p>
              </LegalSection>
            ))}

            <LegalSection title="5. Privacidade">
              <p>
                Para informacoes sobre tratamento de dados pessoais no site, consulte a{" "}
                <Link href="/politica-de-privacidade" className="font-semibold text-navy underline">
                  Politica de Privacidade
                </Link>
                .
              </p>
            </LegalSection>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex min-h-11 items-center border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:bg-navy focus-visible:text-white"
          >
            Voltar para a pagina inicial
          </Link>
        </div>
      </article>
    </main>
  );
}
