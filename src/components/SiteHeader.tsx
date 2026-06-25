"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { MobileNavigation, mobileMenuId } from "@/components/MobileNavigation";
import { siteConfig } from "@/content/site";

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      {isOpen ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M5 7h14M5 12h14M5 17h14"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-light-gray bg-white/95 text-navy shadow-[0_8px_24px_rgba(7,87,107,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/88"
    >
      <div className="section-shell relative flex min-h-[4.75rem] items-center justify-between gap-4 py-3">
        <BrandMark />

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-light-gray bg-white text-navy transition duration-150 hover:bg-mist focus-visible:bg-mist lg:hidden"
          aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <MenuIcon isOpen={isMobileMenuOpen} />
        </button>

        <div className="hidden min-w-0 items-center gap-3 lg:flex lg:gap-5">
          <nav
            aria-label="Navegação principal"
            className="-mx-1 overflow-x-auto pb-1 lg:mx-0 lg:overflow-visible lg:pb-0"
          >
            <ul className="flex min-w-max gap-1 text-[0.92rem] font-semibold text-graphite-soft lg:justify-end lg:gap-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block min-h-11 rounded-sm px-3 py-3 transition duration-150 hover:bg-mist hover:text-navy focus-visible:bg-mist lg:px-3.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contato#formulario-contato" className="btn-primary hidden shrink-0 lg:inline-flex">
            Solicitar pré-agendamento
          </Link>
        </div>

        <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </header>
  );
}
