import type { Metadata } from "next";
import Link from "next/link";
import { legalContentMeta, privacySections } from "@/content/legal";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Política de Privacidade",
  description: "Política de Privacidade em versão de desenvolvimento para o site da Orto & Implante.",
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
              { name: "Início", path: "/" },
              { name: "Política de Privacidade", path: "/politica-de-privacidade" }
            ])
          )
        }}
      />
      <article className="section-shell py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
            Voltar para a página inicial
          </Link>

          <p className="eyebrow mt-8">
            Privacidade
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">Política de Privacidade</h1>
          <p className="mt-3 text-sm font-semibold text-graphite-soft">
            Última atualização: {legalContentMeta.lastUpdated}
          </p>
          <p className="mt-5 text-base leading-8 text-graphite-soft">
            Esta versão de desenvolvimento explica como o site {siteConfig.name} deve tratar dados
            enquanto o formulário permanece sem envio real de produção.
          </p>

          <div className="mt-10 grid gap-8">
            {privacySections.map((section, index) => (
              <LegalSection key={section.title} title={`${index + 1}. ${section.title}`}>
                <p>{section.text}</p>
              </LegalSection>
            ))}

            <LegalSection title="7. Dados que não devem ser enviados">
              <p>
                O formulário não deve receber CPF, RG, senhas, tokens, dados completos de cartão,
                códigos de segurança, documentos, exames, extratos, arquivos ou informações
                clínicas sensíveis.
              </p>
            </LegalSection>

            <LegalSection title="8. Atualizações">
              <p>
                Esta política deverá ser revisada quando provedores, configurações de produção e
                prazos de retenção forem aprovados.
              </p>
              <p>
                Consulte também o{" "}
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
            Voltar para a página inicial
          </Link>
        </div>
      </article>
    </main>
  );
}
