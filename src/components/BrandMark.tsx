import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/content/assets";
import { siteConfig } from "@/content/site";

type BrandMarkProps = {
  variant?: "light" | "dark";
};

export function BrandMark({ variant = "light" }: BrandMarkProps) {
  const isDark = variant === "dark";
  const logo = isDark ? brandAssets.footerLogo : brandAssets.logo;

  return (
    <Link
      href="/"
      className="flex min-h-12 min-w-0 items-center rounded-sm outline-offset-4"
      aria-label={`${siteConfig.name} - página inicial`}
    >
      <span
        className={`relative block h-14 w-[10rem] shrink-0 overflow-hidden ${
          isDark ? "drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]" : ""
        } sm:h-16 sm:w-[11.5rem] lg:w-[12.5rem]`}
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
