"use client";

import React from "react";

export default function FeaturesStrip() {
  const features = [
    {
      number: "01",
      title: "Pédagogie Active (Ludopédagogie)",
      description:
        "Finies les formations subies en descendant. Ici on apprend en faisant, en échangeant, et en expérimentant concrètement.",
    },
    {
      number: "02",
      title: "Applicabilité Immédiate",
      description:
        "Chaque module est conçu pour le réel : ce que vous apprenez aujourd'hui vous fait gagner du temps et de l'efficacité dès le lendemain.",
    },
    {
      number: "03",
      title: "Accompagnement Humain",
      description:
        "Un suivi direct avec Soufiyan, formateur indépendant basé à Clermont-Ferrand, sans intermédiaire ni jargon technique.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-neutral-100">
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
              <p className="text-sm text-[#666660] leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
