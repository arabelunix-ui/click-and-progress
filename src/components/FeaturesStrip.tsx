"use client";

import React from "react";

export default function FeaturesStrip() {
  const features = [
    {
      number: "01",
      title: "Pédagogie active",
      description:
        "Vous apprenez en faisant.\nChaque formation est pensée pour favoriser la participation, l’échange et la mise en pratique, afin d’ancrer durablement les apprentissages.",
    },
    {
      number: "02",
      title: "Mise en pratique immédiate",
      description:
        "Des contenus utiles dès le lendemain.\nChaque module est conçu pour répondre à des situations concrètes, avec des outils et des méthodes directement applicables à vos enjeux.",
    },
    {
      number: "03",
      title: "Un accompagnement humain",
      description:
        "Chaque parcours s’appuie sur une relation de proximité.\nVous bénéficiez d’un suivi direct et d’une communication claire à chaque étape.",
    },
  ];

  return (
    <section id="atouts" className="bg-white py-16 sm:py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {features.map((item) => (
            <div
              key={item.number}
              className="group relative flex flex-col p-8 rounded-2xl bg-[#FAF8F4] border border-neutral-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#FF6500]/30"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#FF6500]/10 text-[#FF6500]">
                  {item.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3
                className="text-xl font-bold text-[#1A1A1A] mb-2 font-display"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#666660] leading-relaxed font-sans whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
