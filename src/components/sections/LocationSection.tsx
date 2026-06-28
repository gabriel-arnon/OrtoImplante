import Image from "next/image";
import { clinicAssets } from "@/content/assets";
import { contactConfig } from "@/content/contact";

export function LocationSection() {
  const location = contactConfig.location;

  if (!location.isConfirmed) {
    return null;
  }

  const facade = clinicAssets.facade;

  return (
    <section className="section-y bg-mist">
      <div className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.82fr)] lg:items-stretch">
        <div>
          <p className="eyebrow">Localização</p>
          <h2 className="section-title mt-3">
            {location.display}
          </h2>
          <p className="section-copy mt-4 max-w-3xl">
            A clínica informa fácil estacionamento e acessibilidade. Use o link abaixo para abrir a
            página oficial do endereço no Google Maps.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {location.openingHoursDisplay.map((item) => (
              <p key={item} className="surface-card p-4 text-[0.98rem] font-semibold leading-6 text-navy">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização da Orto & Implante no Google Maps"
              className="btn-primary"
            >
              Abrir no Google Maps
            </a>
            <p className="flex min-h-12 items-center rounded-sm bg-white px-4 text-[0.96rem] font-semibold text-navy">
              {location.parkingInfo}. {location.accessibilityInfo}.
            </p>
          </div>
        </div>
        <div className="surface-card min-h-[18rem] overflow-hidden bg-white p-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-light-gray bg-white">
            <Image
              src={facade.src}
              alt={facade.alt}
              width={facade.width}
              height={facade.height}
              sizes="(max-width: 1023px) calc(100vw - 2rem), 390px"
              className="h-full w-full object-cover"
              style={{ objectPosition: facade.objectPosition }}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between rounded-md border border-light-gray bg-mist p-5">
            <div>
              <p className="eyebrow">Bertioga/SP</p>
              <p className="mt-4 text-2xl font-semibold text-navy">Região central de atendimento</p>
            </div>
            <div className="grid gap-2 text-[0.96rem] leading-6 text-graphite-soft">
              <span className="h-px w-full bg-light-gray" aria-hidden="true" />
              <p>{location.display}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
