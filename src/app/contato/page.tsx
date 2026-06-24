import type { Metadata } from "next";
import { AppointmentRequestForm } from "@/components/AppointmentRequestForm";
import { contactConfig } from "@/content/contact";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: "Pagina provisoria de contato e pre-agendamento da Orto & Implante.",
  path: "/contato"
});

export default function ContactPage() {
  return (
    <main className="bg-light-gray/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Inicio", path: "/" },
              { name: "Contato", path: "/contato" }
            ])
          )
        }}
      />
      <section className="section-shell grid gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(24rem,0.7fr)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Contato</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">Pre-agendamento provisorio</h1>
          <p className="mt-5 text-base leading-8 text-graphite-soft">
            Os canais oficiais ainda nao foram confirmados. O formulario preserva a estrutura segura
            para futura configuracao.
          </p>
          <dl className="mt-8 grid gap-4">
            <div className="border border-light-gray bg-white p-4">
              <dt className="font-semibold text-navy">WhatsApp</dt>
              <dd className="mt-1 text-graphite-soft">{contactConfig.whatsapp.value}</dd>
            </div>
            <div className="border border-light-gray bg-white p-4">
              <dt className="font-semibold text-navy">Endereco</dt>
              <dd className="mt-1 text-graphite-soft">{contactConfig.address.display}</dd>
            </div>
          </dl>
        </div>
        <div id="formulario-contato">
          <AppointmentRequestForm />
        </div>
      </section>
    </main>
  );
}
