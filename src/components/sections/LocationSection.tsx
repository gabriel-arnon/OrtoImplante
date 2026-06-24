import { contactConfig } from "@/content/contact";

export function LocationSection() {
  if (!contactConfig.address.isConfirmed) {
    return null;
  }

  return (
    <section className="section-y bg-light-gray/30">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Localizacao</p>
        <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
          {contactConfig.address.display}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contactConfig.openingHoursDisplay.map((item) => (
            <p key={item} className="border border-light-gray bg-white p-4 text-sm font-semibold text-navy">
              {item}
            </p>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-graphite-soft">
          Link exato do Google Maps permanece pendente. A clínica informa fácil estacionamento e
          acessibilidade.
        </p>
      </div>
    </section>
  );
}
