"use client";

import React from "react";
import EditableText from "../EditableText";

const VALEURS = [
  {
    num: "01",
    titre: "Authenticité",
    texte:
      "Je ne vends pas des formations. Je partage des méthodes que j'ai testées, appliquées et perfectionnées dans des contextes réels — parfois difficiles.",
  },
  {
    num: "02",
    titre: "Pratique avant tout",
    texte:
      "Chaque session contient plus d'ateliers que de slides. On apprend en faisant, en se trompant, en recommençant — et c'est là que les réflexes s'installent vraiment.",
  },
  {
    num: "03",
    titre: "Respect du rythme",
    texte:
      "Certains avancent vite, d'autres ont besoin de temps. J'adapte le rythme à chaque groupe sans jamais sacrifier la profondeur pour la vitesse.",
  },
  {
    num: "04",
    titre: "Résultats mesurables",
    texte:
      "À la fin de chaque intervention, on évalue les acquis ensemble — pas avec un QCM, mais avec des situations réelles où chacun démontre ce qu'il sait faire.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F8F6] border-y border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
            <EditableText initialText="Ce qui me guide" />
          </span>
          <EditableText
            as="h2"
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] block"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            initialText="Mes valeurs pédagogiques"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALEURS.map((v) => (
            <div
              key={v.num}
              className="bg-white rounded-2xl p-7 border border-[#E8E5DF] hover:border-[#FF6500]/30 hover:shadow-[0_8px_32px_rgba(255,101,0,0.08)] transition-all duration-300 group"
            >
              <span className="font-mono text-4xl font-black text-[#FF6500]/15 group-hover:text-[#FF6500]/25 transition-colors block mb-5 leading-none">
                {v.num}
              </span>
              <EditableText
                as="h3"
                className="text-lg font-bold text-[#1A1A1A] mb-3 block"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                initialText={v.titre}
              />
              <EditableText
                as="p"
                multiline
                className="text-sm text-[#1A1A1A]/55 leading-relaxed block"
                initialText={v.texte}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
