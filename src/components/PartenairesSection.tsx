"use client";

import React from "react";

export interface Partner {
  id: string;
  name: string;
  src: string;
}

export const partnersData: Partner[] = [
  {
    id: "auchan",
    name: "Auchan",
    src: "/logos_partenaires/auchan.svg",
  },
  {
    id: "adrec",
    name: "ADREC Formations",
    src: "/logos_partenaires/adrec_formations.png",
  },
  {
    id: "intelcia",
    name: "Intelcia Group",
    src: "/logos_partenaires/intelcia.png",
  },
  {
    id: "alors-formation",
    name: "Alors Formation",
    src: "/logos_partenaires/alors_formation.svg",
  },
  {
    id: "nellapp",
    name: "Nellapp",
    src: "/logos_partenaires/nellapp.webp",
  },
  {
    id: "abc",
    name: "ABC Déménagements",
    src: "/logos_partenaires/abc_demenagements.jpg",
  },
];

export default function PartenairesSection() {
  // On triplique la liste pour garantir une boucle infinie ultra-fluide sans coupure
  const marqueeLogos = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section
      id="partenaires"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary, #F9F8F6)" }}
    >
      {/* En-tête (Tagline, Titre avec notre couleur système & italique orange, Sous-titre - TOUT PARFAITEMENT CENTRÉ) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mb-14 sm:mb-20">
        <p
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4 text-center mx-auto w-full"
          style={{ color: "var(--accent, #FF6500)" }}
        >
          ILS NOUS ONT FAIT CONFIANCE
        </p>

        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-center mx-auto w-full"
          style={{
            color: "var(--text-primary, #1A1A1A)",
            fontFamily: "var(--font-display, Fraunces, serif)",
          }}
        >
          Des partenaires qui partagent{" "}
          <span
            className="italic font-serif font-normal inline-block"
            style={{ color: "var(--accent, #FF6500)" }}
          >
            notre exigence
          </span>
        </h2>

        <p
          className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-5 font-sans font-normal leading-relaxed text-center w-full"
          style={{ color: "var(--text-muted, #666660)" }}
        >
          Chaque collaboration est une rencontre entre ambition et authenticité. Nous accompagnons ceux qui refusent le statu quo et choisissent de performer autrement.
        </p>
      </div>

      {/* Bandeau de logos défilant (Marquee libre) */}
      <div className="relative w-full overflow-hidden py-6 sm:py-10">
        {/* Fondus en dégradé aux extrémités avec notre couleur système de fond */}
        <div
          className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--bg-primary, #F9F8F6), rgba(249, 248, 246, 0.8), transparent)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--bg-primary, #F9F8F6), rgba(249, 248, 246, 0.8), transparent)",
          }}
        />

        {/* Piste de défilement horizontale */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-16 sm:gap-24 md:gap-32 w-max px-8 items-center">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="group flex items-center justify-center flex-shrink-0 transition-all duration-500 py-2"
              style={{ minWidth: 160, maxWidth: 240 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain filter grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes CSS pures pour la boucle infinie sans saut (GPU accelerated) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
