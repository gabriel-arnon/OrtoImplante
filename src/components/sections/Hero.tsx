import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { contactConfig } from "@/content/contact";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-light-gray bg-gradient-to-b from-white to-mist">
      <div className="section-shell grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.28fr)_minmax(19rem,0.72fr)] lg:items-center xl:py-20">
        <div className="max-w-[62rem]">
          <p className="eyebrow">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-5 max-w-[60rem] text-4xl font-semibold leading-[1.08] text-navy md:text-5xl xl:text-[3.35rem]">
            Atendimento odontológico em Bertioga com planejamento e cuidado individual
          </h1>
          <p className="mt-6 max-w-[42rem] text-lg leading-8 text-graphite-soft md:text-xl md:leading-9">
            {siteConfig.description}
          </p>
          <dl className="mt-6 grid max-w-3xl gap-3 text-sm text-graphite-soft sm:grid-cols-3">
            <div className="rounded-sm border border-light-gray bg-white/72 p-3">
              <dt className="font-semibold text-navy">Desde</dt>
              <dd>{siteConfig.foundedYear}</dd>
            </div>
            <div className="rounded-sm border border-light-gray bg-white/72 p-3">
              <dt className="font-semibold text-navy">Experiência</dt>
              <dd>{siteConfig.experienceLabel}</dd>
            </div>
            <div className="rounded-sm border border-light-gray bg-white/72 p-3">
              <dt className="font-semibold text-navy">Atendimento</dt>
              <dd>{siteConfig.insuranceNotice}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              className="btn-primary"
            />
            <Link href="/tratamentos" className="btn-secondary">
              Ver tratamentos
            </Link>
          </div>
        </div>
        <div className="surface-card relative min-h-[24rem] overflow-hidden bg-white p-4 md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(119,200,189,0.2),transparent_35%),linear-gradient(135deg,rgba(226,242,241,0.95),rgba(255,255,255,0.86))]" />
          <div className="absolute right-4 top-10 h-36 w-36 rounded-full border border-accent-soft" aria-hidden="true" />
          <div className="absolute bottom-14 left-8 h-24 w-24 rounded-full bg-white/55" aria-hidden="true" />
          <div
            className="relative flex h-full min-h-[21rem] flex-col justify-between rounded-md border border-white/80 bg-white/66 p-5"
            aria-label="Área visual reservada para imagem da clínica"
          >
            <div className="max-w-sm">
              <p className="eyebrow">{contactConfig.address.city}/SP</p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-navy md:text-[2rem]">
                Cuidado odontológico em ambiente planejado
              </p>
              <p className="mt-3 text-[1rem] leading-7 text-graphite-soft">
                Estrutura em Bertioga com atendimento particular e avaliação individual.
              </p>
            </div>
            <div className="grid gap-3 text-[0.95rem] leading-6 text-graphite-soft">
              <p className="rounded-sm bg-white/85 p-3 font-semibold text-navy">
                {contactConfig.address.display}
              </p>
              <p className="rounded-sm bg-white/85 p-3">
                Segunda a sexta, 09h às 19h. Sábado, 09h às 13h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
