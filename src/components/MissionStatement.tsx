"use client";

import React from "react";

export default function MissionStatement() {
  return (
    <section id="entreprise" className="bg-[#141311] py-24 sm:py-32 border-b border-white/10 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark container box matching image.png background aesthetic */}
        <div className="relative rounded-3xl border border-white/10 bg-[#1A1816] p-8 sm:p-16 md:p-20 shadow-2xl overflow-hidden text-center">
          
          {/* Ambient glow matching image.png lighting */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 rounded-full blur-[120px] opacity-15"
              style={{ background: "#FF6500" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1816]/60 to-[#1A1816]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#FF6500] mb-6">
              01 — L&apos;ENTREPRISE
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              &ldquo;Apprendre, ça doit donner envie.&rdquo;
            </h2>
            <p className="text-lg sm:text-xl text-white/75 font-sans leading-relaxed max-w-3xl mx-auto mb-12">
              Clic&amp;Progress est l&apos;activité de formation et d&apos;accompagnement de <strong className="text-white font-semibold">Soufiyan</strong>, formateur indépendant basé à Clermont-Ferrand. Notre vocation est d&apos;accompagner les personnes et les organisations dans leurs transitions professionnelles stratégiques.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/90 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6500] shadow-[0_0_10px_rgba(255,101,0,0.8)]" />
                <span>Clermont-Ferrand &amp; Mobilité Nationale</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6500] shadow-[0_0_10px_rgba(255,101,0,0.8)]" />
                <span>Formateur Indépendant Certifié</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6500] shadow-[0_0_10px_rgba(255,101,0,0.8)]" />
                <span>Approche Ludopédagogique</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
