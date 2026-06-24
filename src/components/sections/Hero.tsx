import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-light-gray bg-light-gray/20">
      <div className="section-shell grid gap-9 py-9 md:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:items-center lg:gap-10 lg:py-14">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Site em preparacao
          </p>
          <h1 className="mt-5 max-w-[54rem] text-4xl font-semibold leading-[1.08] text-navy md:text-5xl xl:text-[3.45rem]">
            Conteudo publico pendente de revisao
          </h1>
          <p className="mt-6 max-w-[42rem] text-lg leading-8 text-graphite-soft md:text-xl md:leading-9">
            {siteConfig.siteDescription}
          </p>
          <p className="mt-5 max-w-[42rem] border-l-2 border-gold pl-4 text-base leading-7 text-graphite">
            {siteConfig.regionalPositioning}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#formulario-contato"
              className="flex min-h-12 items-center justify-center rounded-sm bg-navy px-6 font-semibold text-white transition hover:bg-navy/92 focus-visible:bg-navy/92"
            >
              Solicitar contato
            </a>
            <a
              href={siteConfig.whatsappHref}
              className="flex min-h-12 items-center justify-center rounded-sm border border-navy px-6 font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Canal a definir
            </a>
          </div>
          <dl className="mt-8 grid max-w-3xl gap-3 text-sm text-graphite-soft sm:grid-cols-3">
            <div className="border border-light-gray bg-white px-4 py-3">
              <dt className="font-semibold text-navy">Responsavel</dt>
              <dd>{siteConfig.responsibleName}</dd>
            </div>
            <div className="border border-light-gray bg-white px-4 py-3">
              <dt className="font-semibold text-navy">Registro</dt>
              <dd>{siteConfig.registration}</dd>
            </div>
            <div className="border border-light-gray bg-white px-4 py-3">
              <dt className="font-semibold text-navy">Retorno</dt>
              <dd>{siteConfig.responseTime}</dd>
            </div>
          </dl>
        </div>
        <aside
          id="perfil"
          className="grid gap-5 border border-gold/45 bg-navy p-5 text-white md:p-6"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Identificacao
            </p>
            <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              {siteConfig.responsibleName}
            </h2>
            <p className="mt-2 inline-flex border border-gold/55 px-3 py-1.5 text-sm font-semibold text-white/88">
              {siteConfig.registration}
            </p>
            <p className="mt-3 text-base leading-7 text-white/82">
              Este bloco preserva a estrutura visual do projeto enquanto dados, imagens e textos
              publicos definitivos aguardam aprovacao.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
