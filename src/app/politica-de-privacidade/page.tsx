import type { Metadata } from "next";
import Link from "next/link";
import { legalContentMeta, privacySections } from "@/content/legal";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Politica de Privacidade",
  description: "Politica de Privacidade provisoria para site em preparacao.",
  path: "/politica-de-privacidade"
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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Inicio", path: "/" },
              { name: "Politica de Privacidade", path: "/politica-de-privacidade" }
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
            Privacidade
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">Politica de Privacidade</h1>
          <p className="mt-3 text-sm font-semibold text-graphite-soft">
            Ultima atualizacao: {legalContentMeta.lastUpdated}
          </p>
          <p className="mt-5 text-base leading-8 text-graphite-soft">
            Esta politica provisoria explica como a copia atual do site {siteConfig.name} deve
            tratar dados durante a preparacao.
          </p>

          <div className="mt-10 grid gap-8">
            {privacySections.map((section, index) => (
              <LegalSection key={section.title} title={`${index + 1}. ${section.title}`}>
                <p>{section.text}</p>
              </LegalSection>
            ))}

            <LegalSection title="7. Dados que nao devem ser enviados">
              <p>
                O formulario nao deve receber CPF, RG, senhas, tokens, dados completos de cartao,
                codigos de seguranca, documentos, extratos ou arquivos.
              </p>
            </LegalSection>

            <LegalSection title="8. Atualizacoes">
              <p>
                Esta politica devera ser revisada quando os canais oficiais, provedores e
                configuracoes de producao forem aprovados.
              </p>
              <p>
                Consulte tambem o{" "}
                <Link href="/aviso-legal" className="font-semibold text-navy underline">
                  Aviso Legal
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
