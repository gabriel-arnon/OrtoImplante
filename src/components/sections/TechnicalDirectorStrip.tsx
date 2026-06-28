import Image from "next/image";
import Link from "next/link";
import { professionals } from "@/content/professionals";

export function TechnicalDirectorStrip() {
  const professional = professionals[0];

  if (!professional) {
    return null;
  }

  return (
    <section className="border-y border-light-gray bg-white">
      <div className="section-shell py-4">
        <div className="flex flex-col gap-4 rounded-sm bg-mist/70 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            {professional.image ? (
              <Image
                src={professional.image.src}
                alt={professional.image.alt}
                width={professional.image.width}
                height={professional.image.height}
                sizes="56px"
                className="h-14 w-14 shrink-0 rounded-sm object-cover object-[58%_24%]"
              />
            ) : null}
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Responsável técnico
              </p>
              <p className="mt-1 text-base font-semibold text-navy">
                {professional.name} · {professional.registration}
              </p>
            </div>
          </div>
          <Link href="/equipe" className="btn-quiet shrink-0 self-start sm:self-auto">
            Conhecer responsável técnico
          </Link>
        </div>
      </div>
    </section>
  );
}
