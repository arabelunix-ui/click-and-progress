"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DOMAINS = [
  {
    id: "situations-reelles",
    number: "01",
    label: "On part de tes situations réelles",
    tagline: "Ancré dans ton quotidien pro",
    description:
      "Chaque session s'appuie sur des cas concrets tirés de ton quotidien pro — pas des exemples génériques sortis d'un manuel.",
    target: "Tous professionnels en activité, salariés, indépendants, équipes.",
    highlights: [
      "Cas pratiques issus de ton secteur d'activité",
      "Zéro théorie hors-sol, 100% applicable dès le lendemain",
      "Contextualisation personnalisée à chaque apprenant",
    ],
    image: "/imgs/Gemini_Generated_Image_ (1).png",
  },
  {
    id: "pratique-immediate",
    number: "02",
    label: "On pratique tout de suite",
    tagline: "L'action avant les notes",
    description:
      "Chaque notion, tu la mets en application tout de suite, en atelier, pour ancrer les réflexes plutôt que d'accumuler des notes.",
    target: "Apprenants qui veulent des résultats concrets, pas des diplômes sur étagère.",
    highlights: [
      "Ateliers pratiques intégrés à chaque module",
      "Mise en situation immédiate après chaque apport",
      "Réflexes durables plutôt que mémorisation passagère",
    ],
    image: "/imgs/Gemini_Generated_Image_ (2).png",
  },
  {
    id: "mesure-progres",
    number: "03",
    label: "On mesure les progrès",
    tagline: "Un suivi qui te fait avancer",
    description:
      "Un suivi personnalisé ajuste le rythme et valorise chaque étape franchie, jusqu'à ce que tu voles de tes propres ailes.",
    target: "Tous niveaux — du débutant qui doute à l'expert qui veut se dépasser.",
    highlights: [
      "Suivi individuel et ajustement du parcours en temps réel",
      "Valorisation de chaque étape franchie",
      "Autonomie progressive jusqu'à l'indépendance complète",
    ],
    image: "/imgs/Gemini_Generated_Image_ (3).png",
  },
];

// Each panel takes this fraction of viewport width
const PANEL_VW = 0.65;
// Extra sticky duration after last panel (fraction of vh) so next section slides over
const OVERSHOOT_VH = 1;

export default function Applications() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0); // 0→1 progress through panels

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const panelTotalW = DOMAINS.length * PANEL_VW * window.innerWidth;

      // How far into the sticky zone
      const rawScrolled = scrollY - sectionTop;

      // Clamp between 0 and panelTotalW
      const scrolled = Math.max(0, Math.min(rawScrolled, panelTotalW));
      const ratio = scrolled / panelTotalW;

      setScrollRatio(ratio);

      // Slide the track horizontally
      track.style.transform = `translateX(-${scrolled}px)`;

      // Active panel
      const idx = Math.min(
        Math.floor(scrolled / (PANEL_VW * window.innerWidth)),
        DOMAINS.length - 1
      );
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = DOMAINS[activeIndex];

  return (
    <section
      id="expertises"
      ref={sectionRef}
      className="relative"
      style={{
        // Height = viewport + total panel scroll + overshoot (for next-section slide-over)
        height: `calc(100vh * ${1 + OVERSHOOT_VH} + ${DOMAINS.length * PANEL_VW * 100}vw)`,
        zIndex: 1,
        backgroundColor: "#1A1A1A",
      }}
    >
      {/* ── STICKY VIEWPORT ─────────────────────────────────────── */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh", zIndex: 1 }}
      >
        {/* Background: current panel image — FIXED inside sticky */}
        <div className="absolute inset-0 z-0">
          {DOMAINS.map((d, i) => (
            <div
              key={d.id}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: activeIndex === i ? 1 : 0 }}
            >
              <img
                src={d.image}
                alt={d.label}
                width={1280}
                height={720}
                className="w-full h-full object-cover object-center"
                style={{
                  aspectRatio: "16/9",
                  // Subtle parallax: image slightly zoomed and offset
                  transform: `scale(1.06) translateX(${(activeIndex - i) * 4}%)`,
                  transition: "transform 0.9s cubic-bezier(0.25,1,0.5,1), opacity 0.7s ease",
                }}
              />
            </div>
          ))}
          {/* Global dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/10 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]/60 z-10" />
        </div>

        {/* ── LEFT FIXED PANEL ──────────────────────────────────── */}
        <div
          className="absolute top-0 left-0 h-full z-20 flex flex-col justify-between"
          style={{
            width: "clamp(260px, 28vw, 420px)",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            background: "linear-gradient(to right, #1A1A1A 85%, transparent)",
          }}
        >
          <div>
           

            {/* Title */}
            <h2
              className="font-bold text-white leading-[1.05] mb-5"
              style={{
                fontFamily: "var(--font-display, Fraunces, serif)",
                fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              }}
            >
              Trois domaines<br />d&apos;expertise
            </h2>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-[290px]">
              Des parcours concrets basés sur la pédagogie active pour accompagner toutes vos transitions professionnelles.
            </p>

            {/* Nav dots */}
            <div className="flex flex-col gap-4">
              {DOMAINS.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => {
                    const section = sectionRef.current;
                    if (!section) return;
                    const target = section.offsetTop + i * PANEL_VW * window.innerWidth;
                    window.scrollTo({ top: target, behavior: "smooth" });
                  }}
                  className="flex items-center gap-4 group text-left transition-all"
                >
                  {/* Number bubble */}
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-mono font-bold transition-all duration-400"
                    style={{
                      borderColor: activeIndex === i ? "#FF6500" : "rgba(255,255,255,0.15)",
                      backgroundColor: activeIndex === i ? "#FF6500" : "transparent",
                      color: activeIndex === i ? "#fff" : "rgba(255,255,255,0.3)",
                      transform: activeIndex === i ? "scale(1.1)" : "scale(1)",
                      boxShadow: activeIndex === i ? "0 0 16px rgba(255,101,0,0.4)" : "none",
                    }}
                  >
                    {d.number}
                  </span>

                  {/* Label */}
                  <span
                    className="text-xs font-semibold leading-tight transition-colors duration-300"
                    style={{
                      color: activeIndex === i ? "#fff" : "rgba(255,255,255,0.3)",
                      maxWidth: "180px",
                    }}
                  >
                    {d.label}
                  </span>

                  {/* Active indicator line */}
                  {activeIndex === i && (
                    <span className="flex-1 h-px bg-[#FF6500] opacity-40 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-between gap-4 w-full px-5 py-3.5 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_4px_24px_rgba(255,101,0,0.45)] hover:shadow-[0_8px_30px_rgba(255,101,0,0.65)]"
            >
              <span>Demander un programme</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── HORIZONTAL PANELS TRACK ───────────────────────────── */}
        <div
          ref={trackRef}
          className="absolute top-0 h-full flex will-change-transform"
          style={{
            left: "clamp(260px, 28vw, 420px)",
            width: `${DOMAINS.length * PANEL_VW * 100}vw`,
          }}
        >
          {DOMAINS.map((domain, i) => {
            const distFromActive = i - activeIndex;
            return (
              <div
                key={domain.id}
                className="relative h-full flex-shrink-0 overflow-hidden"
                style={{
                  width: `${PANEL_VW * 100}vw`,
                  // Slightly narrow inactive panels
                  transition: "transform 0.6s cubic-bezier(0.25,1,0.5,1)",
                }}
              >
                {/* Panel image (same as background but scoped) */}
                <img
                  src={domain.image}
                  alt={domain.label}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{
                    transform: `scale(1.04) translateX(${distFromActive * -2}%)`,
                    transition: "transform 0.9s cubic-bezier(0.25,1,0.5,1)",
                  }}
                />

                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/75" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* TOP label */}
                <div className="absolute top-8 left-8 z-10 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF6500] flex-shrink-0" />
                  <span className="text-white text-sm font-semibold tracking-wide drop-shadow-lg">
                    {domain.label}
                  </span>
                </div>

                {/* BOTTOM content */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 p-8 sm:p-10"
                  style={{
                    transform: activeIndex === i ? "translateY(0)" : "translateY(8px)",
                    opacity: activeIndex === i ? 1 : 0.4,
                    transition: "transform 0.6s ease, opacity 0.6s ease",
                  }}
                >
                  {/* Orange bar */}
                  <div
                    className="h-[2px] bg-[#FF6500] mb-5"
                    style={{
                      width: activeIndex === i ? "48px" : "24px",
                      transition: "width 0.5s ease 0.2s",
                    }}
                  />

                  {/* Tagline + description */}
                  <p className="text-white text-sm sm:text-base font-medium leading-relaxed mb-5 max-w-lg">
                    <span className="font-bold text-[#FF6500]">{domain.tagline} —&nbsp;</span>
                    {domain.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-1.5 mb-6">
                    {domain.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
                        style={{
                          opacity: activeIndex === i ? 1 : 0,
                          transform: activeIndex === i ? "translateY(0)" : "translateY(6px)",
                          transition: `opacity 0.4s ease ${0.1 + idx * 0.08}s, transform 0.4s ease ${0.1 + idx * 0.08}s`,
                        }}
                      >
                        <span className="text-[#FF6500] text-xs mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-neutral-200 text-xs font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* "Pour qui" pill */}
                  <div
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full"
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      transition: "opacity 0.4s ease 0.3s",
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6500]">Pour qui ?</span>
                    <span className="text-[11px] text-white/80 leading-snug">{domain.target}</span>
                  </div>
                </div>

                {/* Ghost number watermark */}
                <div
                  className="absolute bottom-8 right-8 z-0 font-black text-white leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(6rem, 14vw, 16rem)",
                    fontFamily: "var(--font-display, Fraunces, serif)",
                    opacity: activeIndex === i ? 0.06 : 0.03,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  {domain.number}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── SCROLL INDICATOR ──────────────────────────────────── */}
        <div
          className="absolute bottom-10 right-10 z-30 flex items-center gap-2.5 transition-opacity duration-500"
          style={{ opacity: scrollRatio < 0.97 ? 1 : 0 }}
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">Scroll</span>
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px bg-white/60 transition-all duration-300"
                style={{
                  width: i === 0 ? "20px" : i === 1 ? "12px" : "6px",
                  opacity: 0.6 - i * 0.15,
                }}
              />
            ))}
          </div>
          <svg
            className="w-4 h-4 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ animation: "bounceX 1.2s ease-in-out infinite" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* ── PROGRESS BAR ──────────────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/8">
          <div
            className="h-full bg-[#FF6500] origin-left transition-all duration-150"
            style={{
              width: `${scrollRatio * 100}%`,
              boxShadow: "0 0 8px rgba(255,101,0,0.7)",
            }}
          />
        </div>

        {/* ── PANEL COUNTER ─────────────────────────────────────── */}
        <div className="absolute top-8 right-10 z-30 flex items-center gap-2 text-white/30 font-mono text-xs">
          <span
            className="text-white font-bold tabular-nums transition-all duration-300"
            style={{ fontSize: "1.1rem" }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(DOMAINS.length).padStart(2, "0")}</span>
        </div>

        <style>{`
          @keyframes bounceX {
            0%, 100% { transform: translateX(0); }
            50%       { transform: translateX(5px); }
          }
        `}</style>
      </div>
    </section>
  );
}
