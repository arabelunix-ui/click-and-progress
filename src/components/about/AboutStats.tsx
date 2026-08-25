"use client";

import React from "react";
import EditableText from "../EditableText";

const CHIFFRES = [
  { valeur: "600+", label: "Apprenants formés" },
  { valeur: "12+", label: "Secteurs d'activité" },
  { valeur: "4.9/5", label: "Satisfaction moyenne" },
  { valeur: "48h", label: "Délai de réponse max." },
];

export default function AboutStats() {
  return (
    <section className="border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#E8E5DF]">
          {CHIFFRES.map((c) => (
            <div key={c.label} className="px-8 py-12 text-center">
              <EditableText
                as="p"
                className="text-4xl sm:text-5xl font-black text-[#FF6500] mb-2 block"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                initialText={c.valeur}
              />
              <EditableText
                as="p"
                className="text-sm text-[#1A1A1A]/50 font-medium block"
                initialText={c.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
