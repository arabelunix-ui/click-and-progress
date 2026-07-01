"use client";

import React from "react";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Le Cap que l'on franchit",
    description:
      "Une progression étape par étape pour lever les doutes et passer à l'action en toute sérénité. Chaque formation est construite comme un parcours, pas comme un contenu à avaler. Vous avancez à votre rythme, solidement accompagné.",
  },
  {
    number: "02",
    title: "Le Déclic par la Ludopédagogie",
    description:
      "On apprend en faisant, à travers des cas réels, des jeux de rôle vivants et des simulations immersives. La théorie ne vient qu'après la pratique — jamais avant. Parce que l'engagement naît de l'action, pas de la lecture.",
  },
  {
    number: "03",
    title: "L'Application Immédiate",
    description:
      "Rien d'académique ou d'abstrait : vos nouveaux réflexes s'appliquent directement à votre poste de travail dès le lendemain de la session. Ce que vous apprenez sert le jour même — c'est notre seul critère de réussite.",
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
          03 — Notre Pédagogie
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
          <p
            className="mt-8 max-w-[54ch] leading-relaxed text-base sm:text-lg"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Trop de formations vous placent en spectateur passif. Chez{" "}
            <strong style={{ color: "rgba(255,255,255,0.75)" }}>Clic&amp;Progress</strong>,
            tout tourne autour d&apos;un seul objectif : provoquer{" "}
            <strong style={{ color: "#FF6500" }}>le déclic</strong>.
          </p>
        </div>
      </div>

      {/* ── PART 2 : NUMBERED CARDS (STICKY STACKING EFFECT) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {STEPS.map((step, i) => (
          <div
            key={step.number}
            className={`sticky w-full rounded-3xl overflow-hidden transition-all duration-500 ${
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
            {/* Two-column layout */}
            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 1px 1.5fr" }}
            >
              {/* Left: solid luxury serif number like n1/2.png */}
              <div
                className="flex items-center justify-center"
                style={{
                  minHeight: "clamp(240px, 40vh, 420px)",
                  padding: "clamp(2.5rem, 6vw, 6rem)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display, Fraunces, serif)",
                    fontSize: "clamp(6.5rem, 14vw, 12rem)",
                    fontWeight: 400,
                    color: "#FF6500", // Brand color Clic&Progress
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    userSelect: "none",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Vertical divider */}
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }} />

              {/* Right: clean title and description */}
              <div
                className="flex flex-col justify-center"
                style={{ padding: "clamp(2.5rem, 6vw, 6rem)" }}
              >
                <h3
                  className="text-white font-normal mb-5 leading-tight"
                  style={{
                    fontFamily: "var(--font-display, Fraunces, serif)",
                    fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="leading-relaxed font-sans"
                  style={{
                    color: "rgba(255, 255, 255, 0.65)",
                    fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                    maxWidth: "54ch",
                  }}
                >
                  {step.description}
                </p>

                {/* CTA on last card */}
                {i === STEPS.length - 1 && (
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Link
                      href="#contact"
                      className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)] hover:shadow-[0_6px_28px_rgba(255,101,0,0.6)]"
                    >
                      <span>Échanger sur votre projet</span>
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform text-sm">→</span>
                    </Link>
                    <span className="text-xs text-white/40 font-mono uppercase tracking-widest">
                      Clermont-Ferrand &amp; France · &lt; 48h de réponse
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
