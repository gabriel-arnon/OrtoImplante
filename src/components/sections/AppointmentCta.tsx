import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function AppointmentCta() {
  return (
    <section className="section-y bg-light-gray/35" aria-labelledby="cta-final">
      <div className="section-shell">
        <div className="grid gap-7 border border-light-gray bg-white p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Pre-agendamento
            </p>
            <h2 id="cta-final" className="mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
              Fale com a Orto & Implante para solicitar informações de atendimento
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-graphite-soft">
              O WhatsApp e o telefone já apontam para os canais publicados. O formulário continua
              sem envio real nesta etapa de desenvolvimento.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-80 lg:flex-col">
            <Link
              href="/contato#formulario-contato"
              className="flex min-h-12 items-center justify-center rounded-sm bg-navy px-6 font-semibold text-white transition hover:bg-navy/92"
            >
              Solicitar pré-agendamento
            </Link>
            <WhatsAppButton
              className="flex min-h-12 items-center justify-center rounded-sm border border-navy px-6 font-semibold text-navy transition hover:bg-navy hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
