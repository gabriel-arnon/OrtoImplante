import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-light-gray bg-light-gray/20">
      <div className="section-shell grid gap-9 py-10 md:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.8fr)] lg:items-center">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-5 max-w-[54rem] text-4xl font-semibold leading-[1.08] text-navy md:text-5xl xl:text-[3.45rem]">
            Estrutura provisoria para o novo site da Orto & Implante
          </h1>
          <p className="mt-6 max-w-[42rem] text-lg leading-8 text-graphite-soft md:text-xl md:leading-9">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato#formulario-contato"
              className="flex min-h-12 items-center justify-center rounded-sm bg-navy px-6 font-semibold text-white transition hover:bg-navy/92 focus-visible:bg-navy/92"
            >
              Solicitar pre-agendamento
            </Link>
            <WhatsAppButton
              label="WhatsApp a confirmar"
              className="flex min-h-12 items-center justify-center rounded-sm border border-navy px-6 font-semibold text-navy transition hover:bg-navy hover:text-white"
            />
          </div>
        </div>
        <div className="border border-gold/45 bg-navy p-5 text-white md:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Placeholder visual
          </p>
          <p className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
            Foto da clinica pendente
          </p>
          <p className="mt-3 text-base leading-7 text-white/82">
            Este espaco recebera imagem real aprovada da clinica, sem baixar ou inventar assets.
          </p>
        </div>
      </div>
    </section>
  );
}
