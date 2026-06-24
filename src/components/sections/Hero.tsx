import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { contactConfig } from "@/content/contact";
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
            Atendimento odontológico em Bertioga com planejamento e cuidado individual
          </h1>
          <p className="mt-6 max-w-[42rem] text-lg leading-8 text-graphite-soft md:text-xl md:leading-9">
            {siteConfig.description}
          </p>
          <dl className="mt-6 grid max-w-3xl gap-3 text-sm text-graphite-soft sm:grid-cols-3">
            <div className="border-l-2 border-gold pl-3">
              <dt className="font-semibold text-navy">Desde</dt>
              <dd>{siteConfig.foundedYear}</dd>
            </div>
            <div className="border-l-2 border-gold pl-3">
              <dt className="font-semibold text-navy">Experiência</dt>
              <dd>{siteConfig.experienceLabel}</dd>
            </div>
            <div className="border-l-2 border-gold pl-3">
              <dt className="font-semibold text-navy">Atendimento</dt>
              <dd>{siteConfig.insuranceNotice}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato#formulario-contato"
              className="flex min-h-12 items-center justify-center rounded-sm bg-navy px-6 font-semibold text-white transition hover:bg-navy/92 focus-visible:bg-navy/92"
            >
              Solicitar pré-agendamento
            </Link>
            <WhatsAppButton
              className="flex min-h-12 items-center justify-center rounded-sm border border-navy px-6 font-semibold text-navy transition hover:bg-navy hover:text-white"
            />
          </div>
        </div>
        <div className="border border-gold/45 bg-navy p-5 text-white md:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            {contactConfig.address.city}/SP
          </p>
          <p className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
            {contactConfig.address.display}
          </p>
          <p className="mt-3 text-base leading-7 text-white/82">
            Atendimento de segunda a sexta, das 09h às 19h, e aos sábados, das 09h às 13h.
            Imagens reais da clínica serão adicionadas em etapa futura.
          </p>
        </div>
      </div>
    </section>
  );
}
