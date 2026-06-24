import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { contactConfig } from "@/content/contact";
import { siteConfig } from "@/content/site";

const footerLinkClass =
  "underline-offset-4 transition hover:text-white hover:underline focus-visible:text-white focus-visible:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-light-gray bg-navy text-white">
      <div className="section-shell grid gap-9 py-10 md:grid-cols-[1.1fr_0.9fr_0.8fr] md:items-start">
        <div>
          <BrandMark variant="dark" />
          <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-white/72">
            {siteConfig.name} - clínica odontológica em Bertioga/SP. Responsável técnico:
            {" "}
            {siteConfig.technicalDirector.name}, {siteConfig.technicalDirector.registration}.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/68">
            {siteConfig.clinicRegistration}. {siteConfig.insuranceNotice}.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Contato</p>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-white/78">
            <li>
              <a className={footerLinkClass} href={contactConfig.whatsapp.href}>
                {contactConfig.whatsapp.value}
              </a>
            </li>
            <li>
              <a className={footerLinkClass} href={contactConfig.phone.href}>
                {contactConfig.phone.value}
              </a>
            </li>
            <li>
              <a className={footerLinkClass} href={contactConfig.email.href}>
                {contactConfig.email.value}
              </a>
            </li>
            <li>{contactConfig.address.display}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Informacoes
          </p>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-white/78">
            {contactConfig.openingHoursDisplay.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className={footerLinkClass}>
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/aviso-legal" className={footerLinkClass}>
                Aviso Legal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
