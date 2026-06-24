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
      </div>
    </section>
  );
}
