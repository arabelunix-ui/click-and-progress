"use client";

import React from "react";

const partners = [
  {
    name: "ADREC Formations & transformation",
    src: "/logo/LOGO_ADREC_COUL_CMJN.svg",
    badge: false,
    category: "Formation & Transformation",
  },
  {
    name: "Intelcia Group",
    src: "/logo/intelcia_old_logo_10.svg",
    badge: false,
    category: "Grand Groupe International",
  },
  {
    name: "Alors Formation",
    src: "/logo/AlorsFormation_Logo.svg",
    badge: false,
    category: "Organisme de Formation",
  },
  {
    name: "Nellapp",
    src: "/logo/0b38b34d-8ad7-11ee-bff-06bd0f937899-logo.svg",
    badge: false,
    category: "Innovation & Tech",
  },
  {
    name: "ABC Déménagements",
    src: "/logo/images.svg",
    badge: true,
    category: "Logistique & Services",
  },
  {
    name: "Auchan",
    src: "/logo/Logo_Auchan_(1983-2015).svg",
    badge: false,
    category: "Leader de la Distribution",
  },
];

export default function LogosCarousel() {
  // On quadruple la liste pour s'assurer que le défilement CSS (-50%) couvre largement tous les écrans, même en 4K
  const displayLogos = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-[#F9F8F6] py-16 sm:py-24 border-b border-[#EAE7E0] relative overflow-hidden">
      {/* ── En-tête / Eyebrow ultra-professionnel ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#FFE0CC] shadow-sm text-[#FF6500] font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF6500] animate-pulse" />
          <span>Ils m&apos;ont fait confiance</span>
        </div>
        
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
        >
          Des leaders et organismes qui font évoluer leurs équipes avec nous
        </h2>
        <p className="text-sm sm:text-base text-[#666660] max-w-xl mx-auto mt-3 font-sans">
          Accompagnement stratégique, pédagogie innovante et transformation digitale au service d&apos;acteurs clés.
        </p>
      </div>

      {/* ── Track Marquee GPU-accéléré ── */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Masques alpha (fade) aux extrémités gauche et droite pour une intégration douce et luxueuse */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#F9F8F6] via-[#F9F8F6]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#F9F8F6] via-[#F9F8F6]/80 to-transparent z-10 pointer-events-none" />

        {/* Bandeau défilant CSS haute fluidité (Marquee) - se met en pause au survol */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 sm:gap-8 w-max px-4 items-center">
          {displayLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="group relative flex flex-col justify-center items-center bg-white border border-[#EAE7E0] rounded-2xl h-22 sm:h-24 px-8 sm:px-10 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#FF6500]/60 hover:shadow-[0_12px_32px_rgba(255,101,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex-shrink-0 cursor-default"
              style={{ minWidth: 210, maxWidth: 260 }}
            >
              {/* Image Logo */}
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 sm:max-h-12 w-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-105"
              />

              {/* Petit badge de catégorie subtil visible au survol */}
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-mono tracking-wider uppercase text-[#FF6500] font-semibold whitespace-nowrap bg-[#FFF8F3] px-2 py-0.5 rounded border border-[#FFE0CC]">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mention de pause sous le carrousel */}
      <div className="text-center mt-8">
        <p className="text-xs text-[#888884] inline-flex items-center gap-1.5 font-mono">
          <span>💡</span>
          <span>Survolez un partenaire pour mettre le défilement en pause et voir les détails</span>
        </p>
      </div>

      {/* Keyframes CSS pures pour une fluidité absolue (GPU acceleration) */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
