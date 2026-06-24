"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const mobileMenuId = "mobile-navigation";

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <nav
      id={mobileMenuId}
      aria-label="Navegacao principal mobile"
      className={`absolute inset-x-4 top-[calc(100%-0.25rem)] overflow-hidden border border-gold/25 bg-navy shadow-[0_20px_40px_rgba(1,39,61,0.24)] transition-[max-height,opacity,transform] duration-200 md:hidden ${
        isOpen
          ? "max-h-[calc(100dvh-var(--sticky-header-height-mobile))] translate-y-0 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
      }`}
    >
      <div className="max-h-[calc(100dvh-var(--sticky-header-height-mobile))] overflow-y-auto p-2">
        <ul className="grid gap-1 text-base font-semibold text-white/88">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block min-h-12 rounded-sm px-3 py-3 transition duration-150 hover:bg-white/10 hover:text-white focus-visible:bg-white focus-visible:text-navy"
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-1">
            <Link
              href="/contato#formulario-contato"
              className="flex min-h-12 items-center justify-center rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-navy transition hover:bg-white focus-visible:bg-white"
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
            >
              Solicitar pre-agendamento
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
