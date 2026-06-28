import Image from "next/image";
import Link from "next/link";
import { professionals } from "@/content/professionals";

export function TeamPreview() {
  const professional = professionals[0];

  if (!professional) {
    return null;
  }

  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div>
            <p className="eyebrow">Equipe</p>
            <h2 className="section-title mt-3">Dr. Alexandre Molter</h2>
            <p className="mt-3 text-base font-semibold text-accent">
              {professional.role} · {professional.registration}
            </p>
            <p className="section-copy mt-5">{professional.bio}</p>
            <p className="section-copy mt-4">
              A identificação do responsável técnico ajuda a orientar a avaliação individual, o
              planejamento dos tratamentos e a continuidade do cuidado dentro da Orto & Implante.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/equipe" className="btn-primary">
                Ver equipe
              </Link>
              <Link href="/contato#formulario-contato" className="btn-secondary">
                Solicitar pré-agendamento
              </Link>
            </div>
          </div>
          <div className="surface-card overflow-hidden bg-white p-3">
            {professional.image ? (
              <Image
                src={professional.image.src}
                alt={professional.image.alt}
                width={professional.image.width}
                height={professional.image.height}
                sizes="(max-width: 1023px) min(100vw - 2rem, 560px), 430px"
                className="aspect-[4/5] w-full rounded-sm object-cover object-[58%_24%]"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
