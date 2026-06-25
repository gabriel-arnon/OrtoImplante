import { contactConfig } from "@/content/contact";

export function LocationSection() {
  if (!contactConfig.address.isConfirmed) {
    return null;
  }

  const mapsHref =
    contactConfig.address.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      contactConfig.address.display
    )}`;

  return (
    <section className="section-y bg-mist">
      <div className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.82fr)] lg:items-stretch">
        <div>
          <p className="eyebrow">Localização</p>
          <h2 className="section-title mt-3">
            {contactConfig.address.display}
          </h2>
          <p className="section-copy mt-4 max-w-3xl">
            A clínica informa fácil estacionamento e acessibilidade. O mapa definitivo poderá ser
            incorporado quando os assets e integrações de produção forem aprovados.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {contactConfig.openingHoursDisplay.map((item) => (
              <p key={item} className="surface-card p-4 text-[0.98rem] font-semibold leading-6 text-navy">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={mapsHref} target="_blank" rel="noreferrer" className="btn-primary">
              Abrir no Google Maps
            </a>
            <p className="flex min-h-12 items-center rounded-sm bg-white px-4 text-[0.96rem] font-semibold text-navy">
              Estacionamento e acessibilidade informados
            </p>
          </div>
        </div>
        <div className="surface-card relative min-h-[18rem] overflow-hidden bg-white p-4">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(223,244,241,0.9),rgba(255,255,255,0.82))]" />
          <div className="relative flex h-full min-h-[16rem] flex-col justify-between rounded-md border border-light-gray bg-white/70 p-5">
            <div>
              <p className="eyebrow">Bertioga/SP</p>
              <p className="mt-4 text-2xl font-semibold text-navy">Região central de atendimento</p>
            </div>
            <div className="grid gap-2 text-[0.96rem] leading-6 text-graphite-soft">
              <span className="h-px w-full bg-light-gray" aria-hidden="true" />
              <p>{contactConfig.address.display}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
