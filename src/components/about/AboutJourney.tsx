import React from "react";

const PARCOURS = [
  { annee: "2024 – Auj.", titre: "Fondateur · Clic&Progress", detail: "Formations sur-mesure IA, soft skills & reconversion pour PME, grands groupes et particuliers." },
  { annee: "2021 – 2024", titre: "Formateur & Consultant indépendant", detail: "Accompagnement de transitions professionnelles et formation en techniques de vente pour plusieurs organismes certifiés." },
  { annee: "2018 – 2021", titre: "Responsable commercial · Secteur B2B", detail: "Management d'une équipe de 8 commerciaux, développement de comptes stratégiques et formation interne des nouveaux entrants." },
  { annee: "2015 – 2018", titre: "Chargé de formation · Organisme national", detail: "Conception et animation de modules pédagogiques pour des publics en reconversion et demandeurs d'emploi." },
];

export default function AboutJourney() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
            Parcours
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Mon chemin jusqu&apos;ici
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#E8E5DF]" />
          <div className="space-y-10">
            {PARCOURS.map((p, i) => (
              <div key={i} className="flex gap-8 relative">
                <div className="relative flex-shrink-0 mt-1">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 ${i === 0 ? "bg-[#FF6500] border-[#FF6500]" : "bg-white border-[#C8C5BB]"}`} />
                </div>
                <div className="flex-1 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF6500] block mb-1.5">
                    {p.annee}
                  </span>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{p.titre}</h3>
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
