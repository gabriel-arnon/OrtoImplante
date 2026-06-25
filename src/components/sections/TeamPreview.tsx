import Link from "next/link";
import { ProfessionalCard } from "@/components/sections/ProfessionalCard";
import { professionals } from "@/content/professionals";

export function TeamPreview() {
  if (!professionals.length) {
    return null;
  }

  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Equipe</p>
            <h2 className="section-title mt-3">
              Responsável técnico
            </h2>
          </div>
          <Link href="/equipe" className="btn-quiet">
            Ver equipe
          </Link>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:items-stretch">
          <div className="soft-card flex flex-col justify-between p-5 md:p-6">
            <div>
              <p className="text-lg font-semibold text-navy">Equipe em atualização</p>
              <p className="mt-3 text-[0.98rem] leading-7 text-graphite-soft">
                Nesta etapa, exibimos somente o responsável técnico confirmado. Novos profissionais
                serão incluídos quando dados e imagens forem fornecidos.
              </p>
            </div>
            <p className="mt-6 rounded-sm bg-white p-3 text-[0.95rem] font-semibold text-navy">
              Espaço preparado para fotos futuras da equipe.
            </p>
          </div>
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.name} professional={professional} />
          ))}
        </div>
      </div>
    </section>
  );
}
