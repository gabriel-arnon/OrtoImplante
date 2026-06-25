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
      aria-label="Navegação principal mobile"
      className={`absolute inset-x-4 top-[calc(100%-0.25rem)] overflow-hidden rounded-md border border-light-gray bg-white shadow-form transition-[max-height,opacity,transform] duration-200 lg:hidden ${
        isOpen
          ? "max-h-[calc(100dvh-var(--sticky-header-height-mobile))] translate-y-0 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
      }`}
    >
      <div className="max-h-[calc(100dvh-var(--sticky-header-height-mobile))] overflow-y-auto p-2">
        <ul className="grid gap-1 text-base font-semibold text-graphite-soft">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block min-h-12 rounded-sm px-3 py-3 transition duration-150 hover:bg-mist hover:text-navy focus-visible:bg-mist"
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
              className="btn-primary w-full"
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
            >
              Solicitar pré-agendamento
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
