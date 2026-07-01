"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

export default function ThreeBenefits() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const steps = [
    {
      step: "01",
      title: "Le Diagnostic & L'Écoute",
      desc: "Nous analysons votre contexte, vos enjeux et vos freins. Chaque parcours commence par une immersion et une écoute attentive pour bâtir un programme au plus près du réel.",
      badge: "Phase 1 · Immersion & Audit",
      keywords: ["IMMERSION TERRAIN", "AUDIT SUR MESURE", "OBJECTIFS CLAIRS"],
      accent: "#FF6500",
    },
    {
      step: "02",
      title: "L'Expérience Active",
      desc: "En session, place à la pratique : ateliers collaboratifs, simulations en temps réel, cas concrets et ludopédagogie pour ancrer durablement les nouvelles compétences.",
      badge: "Phase 2 · Pratique Collaborative",
      keywords: ["ZÉRO THÉORIE ENNUYEUSE", "SIMULATIONS RÉELLES", "ANCRAGE +85%"],
      accent: "#FF7A1F",
    },
    {
      step: "03",
      title: "L'Autonomie Dès le Lendemain",
      desc: "Vous repartez avec des outils directement exploitables et une confiance renforcée. Le véritable succès, c'est ce que vos équipes réalisent après la formation.",
      badge: "Phase 3 · Transformation & Impact",
      keywords: ["100% OPÉRATIONNEL", "CONFIANCE RENFORCÉE", "IMPACT PÉRENNE"],
      accent: "#D6B56D",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.34) {
        setActiveStep(0);
      } else if (latest < 0.68) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });
  }, [scrollYProgress]);

  const current = steps[activeStep];

  return (
    <section ref={containerRef} className="relative bg-[#141311] text-white border-b border-white/10 h-[280vh]">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center relative">
        
        {/* CINEMATIC BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="/_ _project_Clic_Progress (1).mp4"
          />
          {/* Multi-layer luxury gradients & blur overlays over the video */}
          <div className="absolute inset-0 bg-[#141311]/75 backdrop-blur-[4px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-[#141311]" />
        </div>

        {/* Content over background video */}
        <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-full py-16 sm:py-20">
          
          {/* Top Section Title */}
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6500] mb-2 block">
              MÉTHODOLOGIE EN ACTION
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white drop-shadow-md"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Votre transformation en 3 étapes
            </h2>
          </div>

          {/* Central Animated Content overlaying the video */}
          <div className="my-auto w-full max-w-5xl mx-auto">
            
            {/* Step Selector Tabs */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 pb-6 border-b border-white/15">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`flex-1 max-w-xs flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer ${
                      isActive
                        ? "bg-[#FF6500] text-white shadow-[0_0_30px_rgba(255,101,0,0.4)] border border-white/20"
                        : "bg-black/40 text-white/50 hover:text-white border border-white/10 hover:bg-black/60"
                    }`}
                  >
                    <span className={isActive ? "text-white" : "text-[#FF6500]"}>{s.step}</span>
                    <span className="hidden sm:inline truncate font-sans">{s.badge.split("·")[1]}</span>
                  </button>
                );
              })}
            </div>

            {/* Step Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, filter: "blur(12px)", y: 25 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(12px)", y: -25 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-black/50 border border-white/15 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl"
              >
                {/* Left side: Step info */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#FF6500]/20 border border-[#FF6500]/40 font-mono text-xs font-bold text-[#FF6500] uppercase tracking-widest">
                      {current.badge}
                    </span>
                  </div>
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                  >
                    {current.title}
                  </h3>
                  <p className="text-base sm:text-xl text-white/85 font-sans leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                {/* Right side: Floating Keywords over Video */}
                <div className="lg:col-span-5 flex flex-col justify-center gap-3.5 pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0">
                  <span className="font-mono text-xs uppercase text-[#FF6500] tracking-widest font-bold mb-1">
                    LES MOTS CLÉS DU SUCCÈS :
                  </span>
                  {current.keywords.map((kw, i) => (
                    <motion.div
                      key={kw}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12 + 0.1, duration: 0.4 }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-sm sm:text-base font-bold tracking-wide text-white hover:border-[#FF6500]/60 transition-all shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6500] shadow-[0_0_10px_rgba(255,101,0,0.8)]" />
                        <span>{kw}</span>
                      </div>
                      <span className="font-mono text-xs text-white/40">✓</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Bottom Guidance */}
          <div className="flex items-center justify-between font-mono text-xs text-white/50 pt-4 border-t border-white/10 max-w-5xl w-full mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6500] animate-pulse" />
              <span>Défilez pour voir l&apos;évolution en vidéo</span>
            </div>
            <span>Étape {activeStep + 1} / 3</span>
          </div>

        </div>

      </div>
    </section>
  );
}
