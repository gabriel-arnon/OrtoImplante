import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/content/assets";
import { siteConfig } from "@/content/site";

type BrandMarkProps = {
  variant?: "light" | "dark";
};

export function BrandMark({ variant = "light" }: BrandMarkProps) {
  const isDark = variant === "dark";
  const logo = brandAssets.logo;

  return (
    <Link
      href="/"
      className="flex min-h-12 min-w-0 items-center rounded-sm outline-offset-4"
      aria-label={`${siteConfig.name} - página inicial`}
    >
      <span
        className={`relative block h-[3.15rem] w-[10rem] shrink-0 overflow-hidden rounded-sm ${
          isDark ? "bg-white/95 shadow-[0_8px_22px_rgba(0,0,0,0.18)]" : ""
        } sm:w-[11.5rem] lg:w-[12.5rem]`}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 184px, 200px"
          className="h-full w-full object-contain"
        />
      </span>
    </Link>
  );
}
