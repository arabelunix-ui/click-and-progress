import React from "react";

export default function AboutStory() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-4 text-center">
              Mon histoire
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 leading-tight text-center"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Ce qui m&apos;a amené à créer Clic&amp;Progress
            </h2>
            <div className="flex flex-col gap-10 text-[#1A1A1A]/80 text-base sm:text-lg leading-[1.85] font-sans">
              <p className="text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-snug">
                Je suis devenu formateur par conviction, pas par hasard.
              </p>
              <p>
                Pendant le Covid, en venant d’un petit village des Combrailles, au cœur du Puy-de-Dôme, j’ai vu se révéler une réalité très concrète : beaucoup de personnes, souvent âgées et isolées, se retrouvaient démunies face au numérique. Garder le lien avec leurs proches, réaliser une démarche simple, imprimer un document devenu indispensable… autant de gestes qui semblaient anodins, mais qui devenaient de vrais obstacles. C’est en apportant mon aide dans ces moments-là que j’ai compris à quel point j’aimais transmettre, expliquer et rendre les choses plus simples.
              </p>
              <p>
                Ce n’était pas une rupture, mais plutôt une continuité. J’avais déjà connu des environnements exigeants et riches d’enseignements : chef de secteur chez Duracell, chargé de sponsoring dans plusieurs clubs sportifs, puis accompagnant d’enfants en situation de handicap dans une école. Ces expériences m’ont appris le terrain, la responsabilité, l’écoute et le sens du collectif. Mais elles ont surtout confirmé une évidence : ce qui m’anime profondément, c’est le fait d’être utile aux autres.
              </p>
              <p>
                Après avoir obtenu mon diplôme de formateur, j’ai choisi de m’engager pleinement dans ce métier. Mes deux années dans l’insertion ont été particulièrement marquantes : j’y ai retrouvé ce qui donne du sens à mon engagement, à savoir accompagner des personnes dans des périodes de transition, leur redonner confiance et les aider à avancer concrètement.
              </p>
              <p>
                J’ai toujours eu un rapport particulier à l’apprentissage. Un parcours scolaire classique jusqu’au master, mais un besoin constant de pratique, d’échange et d’expérience directe. Là où d’autres se satisfaisaient d’un cadre très académique, j’avais besoin de découvrir, tester, confronter, faire. C’est sans doute ce qui définit le mieux ma manière de former aujourd’hui : une pédagogie vivante, exigeante, concrète, tournée vers l’action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
