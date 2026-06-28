import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { contactConfig } from "@/content/contact";
import { siteConfig } from "@/content/site";

const footerLinkClass =
  "underline-offset-4 transition hover:text-white hover:underline focus-visible:text-white focus-visible:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-light-gray bg-navy-strong text-white">
      <div className="section-shell grid gap-8 py-10 lg:grid-cols-[1.05fr_0.8fr_0.85fr_0.75fr] lg:items-start">
        <div>
          <BrandMark variant="dark" />
          <p className="mt-4 max-w-xl text-[0.96rem] leading-7 text-white/76">
            {siteConfig.name} - clínica odontológica em Bertioga/SP. Responsável técnico:{" "}
            {siteConfig.technicalDirector.name}, {siteConfig.technicalDirector.registration}.
          </p>
          <p className="mt-3 text-[0.94rem] leading-6 text-white/68">
            {siteConfig.clinicRegistration}. {siteConfig.insuranceNotice}.
          </p>
        </div>
        <div>
          <p className="eyebrow text-accent-soft">Contato</p>
          <ul className="mt-4 space-y-3 text-[0.96rem] leading-6 text-white/80">
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
            <li>{contactConfig.location.display}</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent-soft">Horários</p>
          <ul className="mt-4 space-y-3 text-[0.96rem] leading-6 text-white/80">
            {contactConfig.location.openingHoursDisplay.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent-soft">Informações</p>
          <ul className="mt-4 space-y-3 text-[0.96rem] leading-6 text-white/80">
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
