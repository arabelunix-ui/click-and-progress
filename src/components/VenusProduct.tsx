"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import EditableText from "./EditableText";

const STEPS = [
  {
    number: "01",
    title: "On part de vos situations réelles",
    description:
      "Chaque session s’appuie sur des cas concrets issus de votre quotidien professionnel, et non sur des exemples génériques déconnectés du terrain.",
    image: "/methods/methode-equipe.png",
    imageAlt: "Méthode équipe - situations réelles",
  },
  {
    number: "02",
    title: "On pratique tout de suite",
    description:
      "Chaque notion est mise en application immédiatement, à travers des exercices, des échanges ou des ateliers, pour ancrer les apprentissages durablement.",
    image: "/methods/methode-tableau.png",
    imageAlt: "Méthode tableau - pratique en atelier",
  },
  {
    number: "03",
    title: "On mesure les progrès",
    description:
      "Un suivi personnalisé permet d’ajuster le rythme, de valoriser chaque étape franchie et de consolider les compétences dans la durée.",
    image: "/methods/methode-suivi.png",
    imageAlt: "Méthode suivi - mesure des progrès",
  },
];

export default function VenusProduct() {
  return (
    <section id="pedagogie" className="bg-[#1A1A1A] text-white">

      {/* ── PART 1 : FULL-VIEWPORT STATEMENT ─────────────────── */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 sm:px-12 text-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Subtle ambient glow */}
        <div
          className="absolute pointer-events-none inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,101,0,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.22em] text-[#FF6500] mb-8">
          <EditableText initialText="03 — Notre Pédagogie" />
        </span>

        {/* Centered title */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <h2
            className="leading-[1.0] tracking-tight"
            style={{
              fontFamily: "var(--font-display, Fraunces, serif)",
              fontSize: "clamp(3.5rem, 10vw, 9.5rem)",
              color: "#FAF8F4",
              fontWeight: 700,
            }}
          >
            Le héros,<br />
            c&apos;est <span style={{ color: "#FF6500" }}>vous.</span>
          </h2>

          {/* Centered description underneath */}
          <EditableText
            as="p"
            className="mt-8 max-w-[54ch] leading-relaxed text-base sm:text-lg text-white/50"
            multiline
            initialText="Trop de formations vous placent en spectateur. Chez Click&Progress, notre objectif est simple : provoquer le déclic et vous mettre en action."
          />
        </div>
      </div>

      {/* ── PART 2 : NUMBERED CARDS (STICKY STACKING EFFECT) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {STEPS.map((step, i) => (
          <div
            key={step.number}
            className={`group sticky w-full rounded-3xl overflow-hidden transition-all duration-500 ${
              i !== STEPS.length - 1 ? "mb-[32vh]" : "mb-12"
            }`}
            style={{
              top: "14vh",
              zIndex: (i + 1) * 10,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "#161513",
              boxShadow: i > 0 ? "0 -25px 60px rgba(0, 0, 0, 0.95)" : "0 10px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Two-column responsive layout with image on left & description on right */}
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_1px_7fr] items-stretch">
              {/* Left: Image & Number */}
              <div className="relative overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[480px] flex flex-col justify-between p-6 sm:p-10">
                {/* Background Image with zoom on hover */}
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Dark gradient overlays for luxury contrast and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-[#161513]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#161513]/40 lg:to-[#161513] pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                {/* Step Number Badge */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 text-[#FF6500]">
                    Étape {step.number}
                  </span>
                </div>

                {/* Large Serif Number */}
                <div className="relative z-10 mt-auto pt-12">
                  <span
                    style={{
                      fontFamily: "var(--font-display, Fraunces, serif)",
                      fontSize: "clamp(4.5rem, 8vw, 7.5rem)",
                      fontWeight: 400,
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.04em",
                      textShadow: "0 4px 20px rgba(0,0,0,0.8)",
                    }}
                  >
                    {step.number}
                    <span className="text-[#FF6500] text-4xl align-top font-sans">.</span>
                  </span>
                </div>
              </div>

              {/* Vertical divider on Desktop */}
              <div className="hidden lg:block w-[1px] bg-white/[0.08]" />

              {/* Right: Title & Description */}
              <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20">
                {/* Subtle Step Label */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#FF6500]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6500]">
                    <EditableText initialText={`Notre Approche ${step.number}`} />
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-display, Fraunces, serif)",
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  }}
                >
                  <EditableText
                    as="h3"
                    className="text-white font-normal mb-6 leading-[1.1] block"
                    initialText={step.title}
                  />
                </div>

                <div
                  style={{
                    fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                    maxWidth: "54ch",
                  }}
                >
                  <EditableText
                    as="p"
                    multiline
                    className="leading-relaxed font-sans text-white/70 block"
                    initialText={step.description}
                  />
                </div>

                {/* CTA on last card */}
                {i === STEPS.length - 1 && (
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Link
                      href="#contact"
                      className="group/btn inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)] hover:shadow-[0_6px_28px_rgba(255,101,0,0.6)]"
                    >
                      <EditableText initialText="Échanger sur votre projet" />
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform text-sm">→</span>
                    </Link>
                    <span className="text-xs text-white/40 font-mono uppercase tracking-widest">
                      <EditableText initialText="Clermont-Ferrand & France · < 48h de réponse" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

