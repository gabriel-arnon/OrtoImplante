import type { Metadata } from "next";
import { AppointmentRequestForm } from "@/components/AppointmentRequestForm";
import { contactConfig } from "@/content/contact";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: "Telefone, WhatsApp, endereço e formulário de pré-agendamento da Orto & Implante.",
  path: "/contato"
});

export default function ContactPage() {
  return (
    <main className="bg-mist">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbStructuredData([
              { name: "Início", path: "/" },
              { name: "Contato", path: "/contato" }
            ])
          )
        }}
      />
      <section className="section-shell grid gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,0.78fr)_minmax(26rem,0.82fr)]">
        <div className="lg:pt-3">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Fale com a Orto & Implante
          </h1>
          <p className="section-copy mt-5">
            Use os canais publicados pela clínica para solicitar informações de atendimento. O
            formulário segue em modo seguro, sem envio real nesta etapa de desenvolvimento.
          </p>
          <dl className="surface-card mt-8 divide-y divide-light-gray overflow-hidden">
            <div className="p-5">
              <dt className="font-semibold text-navy">WhatsApp</dt>
              <dd className="mt-2 text-lg font-semibold text-navy">
                <a href={contactConfig.whatsapp.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                  {contactConfig.whatsapp.value}
                </a>
              </dd>
            </div>
            <div className="p-5">
              <dt className="font-semibold text-navy">Telefone</dt>
              <dd className="mt-2 text-[1rem] text-graphite-soft">
                <a href={contactConfig.phone.href} className="underline-offset-4 hover:text-navy hover:underline">
                  {contactConfig.phone.value}
                </a>
              </dd>
            </div>
            <div className="p-5">
              <dt className="font-semibold text-navy">Endereço</dt>
              <dd className="mt-2 text-[1rem] leading-7 text-graphite-soft">{contactConfig.address.display}</dd>
            </div>
            <div className="p-5">
              <dt className="font-semibold text-navy">Atendimento</dt>
              <dd className="mt-2 space-y-1 text-[1rem] leading-7 text-graphite-soft">
                {contactConfig.openingHoursDisplay.map((item) => (
                  <span key={item} className="block">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div className="p-5">
              <dt className="font-semibold text-navy">E-mail</dt>
              <dd className="mt-2 text-[1rem] text-graphite-soft">
                <a href={contactConfig.email.href} className="underline-offset-4 hover:text-navy hover:underline">
                  {contactConfig.email.value}
                </a>
              </dd>
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
