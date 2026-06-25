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
      className={`flex min-h-12 min-w-0 items-center gap-3 rounded-sm outline-offset-4 ${
        isDark ? "text-white" : "text-navy"
      }`}
      aria-label={`${siteConfig.name} - página inicial`}
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-md border border-accent ${
          isDark ? "bg-white/10 text-accent-soft" : "bg-accent-soft text-navy"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" className="h-9 w-9" role="img">
          <path
            d="M14 29c0-8 4-14 10-14s10 6 10 14M18 29h12M21 34h6M24 14v22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.7"
          />
          <circle cx="24" cy="14" r="3" fill="currentColor" opacity="0.35" />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-xl font-semibold tracking-normal md:text-2xl">
          {siteConfig.shortName}
        </span>
        <span
          className={`block text-[0.68rem] font-bold uppercase tracking-[0.2em] ${
            isDark ? "text-accent-soft" : "text-graphite-soft"
          }`}
        >
          Bertioga/SP
        </span>
      </span>
    </Link>
  );
}
