import Link from "next/link";
import { siteConfig } from "@/content/site";

type BrandMarkProps = {
  variant?: "light" | "dark";
};

export function BrandMark({ variant = "light" }: BrandMarkProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`flex min-h-14 items-center gap-4 rounded-sm outline-offset-4 ${
        isDark ? "text-white" : "text-navy"
      }`}
      aria-label={`${siteConfig.name} - pagina inicial`}
    >
      <span
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-sm border border-gold/70 ${
          isDark ? "bg-white/10 text-gold" : "bg-white shadow-[0_10px_28px_rgba(1,39,61,0.08)]"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" className="h-10 w-10" role="img">
          <path
            d="M14 29c0-8 4-14 10-14s10 6 10 14M18 29h12M21 34h6M24 14v22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.7"
          />
          <circle cx="24" cy="14" r="3" fill="#C9A459" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-2xl font-semibold tracking-normal md:text-[1.7rem]">
          {siteConfig.shortName}
        </span>
        <span
          className={`block text-xs font-bold uppercase tracking-[0.24em] ${
            isDark ? "text-gold" : "text-graphite-soft"
          }`}
        >
          SITE PROVISORIO
        </span>
      </span>
    </Link>
  );
}
