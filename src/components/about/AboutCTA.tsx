import React from "react";

export default function AboutCTA() {
  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-24 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
          Philosophie
        </span>
        <h2
          className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
        >
          Une approche authentique et humaine
        </h2>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Je mets mon expérience et ma passion de la transmission au service de votre évolution professionnelle, dans une démarche directe, concrète et profondément bienveillante.
        </p>
      </div>
    </section>
  );
}
