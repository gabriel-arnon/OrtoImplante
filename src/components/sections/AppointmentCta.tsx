import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function AppointmentCta() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="cta-final">
      <div className="section-shell">
        <div className="grid gap-8 rounded-md bg-navy p-6 text-white shadow-soft md:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-accent-soft">Pré-agendamento</p>
            <h2 id="cta-final" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Fale com a Orto & Implante para solicitar informações de atendimento
            </h2>
            <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-white/82">
              O WhatsApp e o telefone já apontam para os canais publicados. O formulário continua
              sem envio real nesta etapa de desenvolvimento.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-80 lg:flex-col">
            <WhatsAppButton
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-5 text-center text-sm font-semibold text-navy transition hover:bg-accent-soft focus-visible:bg-accent-soft"
            />
            <Link
              href="/contato#formulario-contato"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/45 px-5 text-center text-sm font-semibold text-white/88 transition hover:bg-white/10 focus-visible:bg-white/10"
            >
              Solicitar pré-agendamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
