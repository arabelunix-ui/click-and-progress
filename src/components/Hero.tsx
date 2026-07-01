"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [isSimOpen, setIsSimOpen] = useState<boolean>(false);
  const [selectedGoal, setSelectedGoal] = useState<string>("ia");
  const [selectedFormat, setSelectedFormat] = useState<string>("entreprise");
  // 0 = hidden | 1 = both texts centered forming phrase | 2 = split apart + image
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync with LoadingScreen: wait for loading-complete event
  useEffect(() => {
    const onDone = () => {
      // Small delay then show texts centered
      setTimeout(() => setPhase(1), 80);
      // After 900ms pause at center → split apart + reveal image
      setTimeout(() => setPhase(2), 980);
    };
    window.addEventListener("loading-complete", onDone);
    // Fallback for dev (no loading screen)
    const fallback = setTimeout(() => {
      setPhase(1);
      setTimeout(() => setPhase(2), 900);
    }, 4200);
    return () => {
      window.removeEventListener("loading-complete", onDone);
      clearTimeout(fallback);
    };
  }, []);

  // Subtle interactive ambient canvas representing the "spark / déclic"
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.4 - 0.15,
      size: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 101, 0, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#FF6500";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Diagnostic recommendation helper
  const getRecommendation = () => {
    if (selectedGoal === "ia") {
      return {
        title: "Formation IA Pratique & Quotidienne",
        desc: "Comprendre et utiliser l'IA générative au quotidien pour gagner du temps, sans aucun jargon technique.",
        target: "Professionnels, équipes opérationnelles, formateurs.",
        duration: "Session courte active (1 à 2 jours)",
      };
    }
    if (selectedGoal === "reconversion") {
      return {
        title: "Accompagnement Reconversion & Cap",
        desc: "Retrouver confiance, donner un nouveau sens à votre parcours et franchir le point de bascule en douceur.",
        target: "Personnes en transition, bilans de compétences, secteur IAE.",
        duration: "Parcours individualisé sur mesure",
      };
    }
    return {
      title: "Posture Commerciale, Vente & Soft Skills",
      desc: "Techniques de vente empathiques, aisance relationnelle et posture professionnelle directement sur le terrain.",
      target: "Équipes commerciales, apprentis BTS/TP, relation client.",
      duration: "Ateliers ludopédagogiques & mise en situation",
    };
  };

  const rec = getRecommendation();

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between overflow-hidden select-none text-white"
      style={{
        minHeight: "calc(100dvh - 73px)",
        backgroundColor: "#1A1A1A", // Exact Noir from Clic&Progress brief
      }}
    >
      {/* Ambient Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Warm Ambient Orange Glow */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle at center, rgba(255, 101, 0, 0.12) 0%, rgba(26, 26, 26, 0) 70%)",
          filter: "blur(70px)",
        }}
      />



      {/* Interactive Diagnostic Modal Drawer */}
      {isSimOpen && (
        <div className="relative z-30 mx-auto mt-4 w-full max-w-2xl px-4 animate-fade-in">
          <div className="rounded-3xl border border-white/15 bg-[#1A1A1A]/95 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#FF6500]">
                  Diagnostic de Transition &amp; Compétences
                </h3>
                <p className="text-xs text-neutral-400">Identifiez le parcours adapté à votre objectif professionnel</p>
              </div>
              <button onClick={() => setIsSimOpen(false)} className="text-neutral-400 hover:text-white p-2">✕</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                  1. Quel est votre enjeu prioritaire ?
                </label>
                <div className="flex flex-col gap-2 text-xs font-medium">
                  {[
                    { id: "ia", label: "Maîtriser l'IA au quotidien (Gagner du temps)" },
                    { id: "reconversion", label: "Reconversion & Accompagnement au changement" },
                    { id: "softskills", label: "Commerce, Vente & Aisance relationnelle" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedGoal(item.id)}
                      className={`text-left px-3.5 py-2.5 rounded-xl border transition-all ${
                        selectedGoal === item.id
                          ? "border-[#FF6500] bg-[#FF6500]/20 text-white font-semibold"
                          : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/30"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                  2. Vous êtes ?
                </label>
                <div className="flex flex-col gap-2 text-xs font-medium">
                  {[
                    { id: "entreprise", label: "Entreprise / Équipe (Financement OPCO)" },
                    { id: "of", label: "Organisme de formation (Sous-traitance clés en main)" },
                    { id: "particulier", label: "En reconversion / Secteur Insertion & IAE" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFormat(item.id)}
                      className={`text-left px-3.5 py-2.5 rounded-xl border transition-all ${
                        selectedFormat === item.id
                          ? "border-[#FF6500] bg-[#FF6500]/20 text-white font-semibold"
                          : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/30"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Result Box */}
            <div className="rounded-2xl bg-gradient-to-r from-[#FF6500]/15 via-white/5 to-transparent border border-[#FF6500]/30 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#FF6500] text-white mb-1.5">
                    Recommandation Soufiyan
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1">{rec.title}</h4>
                  <p className="text-xs text-neutral-300 mb-2">{rec.desc}</p>
                  <p className="text-[11px] text-[#FF6500] font-mono font-medium">⏱ {rec.duration} · Pédagogie active &amp; sur mesure</p>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsSimOpen(false)}
                  className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-center"
                >
                  Demander un devis &lt; 48h
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Center Editorial Lockup */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-8 my-8 sm:my-12">
        
        {/* L'idée force du site au-dessus du titre */}
        <p className="max-w-2xl text-center text-xs sm:text-sm font-medium tracking-wide uppercase text-neutral-400 mb-6 sm:mb-10 px-4">
          Le héros, ce n&apos;est pas le formateur ni la méthode : <span className="text-[#FF6500] font-semibold">c&apos;est vous qui vous transformez.</span>
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 lg:gap-8 relative">

          {/* Shared CSS transitions */}
          <style>{`
            .hero-text-left {
              transition: transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease;
            }
            .hero-text-right {
              transition: transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease;
            }
            .hero-image-wrap {
              transition: opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s, filter 0.7s ease 0.2s;
            }
            .hero-line {
              transition: opacity 0.5s ease 0.4s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.4s;
              transform-origin: center;
            }
          `}</style>

          {/* LEFT TEXT */}
          <div
            className="hero-text-left flex flex-col sm:flex-row items-center gap-4 lg:gap-6 flex-1 justify-end text-center sm:text-right"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              // phase 1 → centered (pushed right), phase 2 → natural left position
              transform: phase === 1 ? "translateX(33vw)" : "translateX(0)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium tracking-tight text-white whitespace-nowrap"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Apprendre,
            </h1>
            {/* Connector line — only visible in phase 2 */}
            <div
              className="hero-line hidden sm:flex items-center w-16 md:w-24 lg:w-36"
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "scaleX(1)" : "scaleX(0)",
              }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FF6500] opacity-60" />
              <span className="mx-2 text-sm font-bold text-[#FF6500] opacity-70">+</span>
              <div className="h-px w-6 bg-[#FF6500] opacity-60" />
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div
            className="hero-image-wrap relative group cursor-pointer flex-shrink-0 my-2 lg:my-0"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "scale(1) rotate(0deg)" : "scale(0.6) rotate(-8deg)",
              filter: phase >= 2 ? "blur(0px)" : "blur(12px)",
            }}
          >
            <div className="absolute -inset-4 rounded-full bg-[#FF6500]/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.95)] transform transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:rotate-2">
              <img
                src="/images/clic-hero.jpg"
                alt="Pédagogie active Clic&Progress"
                className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div
            className="hero-text-right flex flex-col sm:flex-row items-center gap-4 lg:gap-6 flex-1 justify-start text-center sm:text-left"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              // phase 1 → centered (pushed left), phase 2 → natural right position
              transform: phase === 1 ? "translateX(-33vw)" : "translateX(0)",
            }}
          >
            {/* Connector line — only visible in phase 2 */}
            <div
              className="hero-line hidden sm:flex items-center w-16 md:w-24 lg:w-36 order-2 sm:order-1"
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "scaleX(1)" : "scaleX(0)",
              }}
            >
              <div className="h-px w-6 bg-[#FF6500] opacity-60" />
              <span className="mx-2 text-sm font-bold text-[#FF6500] opacity-70">+</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#FF6500] to-transparent opacity-60" />
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium tracking-tight text-[#FF6500] whitespace-nowrap order-1 sm:order-2"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              ça doit donner envie.
            </h1>
          </div>

        </div>



        {/* Subtitle explanation */}
        <p className="mt-8 sm:mt-12 max-w-xl text-center text-sm sm:text-base text-neutral-300 font-sans leading-relaxed px-4">
          Là où trop de formations sont subies, <strong className="text-white">Clic&amp;Progress</strong> mise sur une pédagogie active et vivante : on apprend en faisant, en échangeant, et ce qu&apos;on apprend sert dès le lendemain.
        </p>
      </div>

      {/* Bottom Massive Brand Typography */}
      <div className="relative z-10 w-full px-4 sm:px-8 pb-4 sm:pb-8 flex justify-center items-end overflow-hidden">
        <span
          className="w-full text-center font-black tracking-tighter uppercase leading-none text-white/90 transition-transform duration-700 hover:scale-[1.01]"
          style={{
            fontSize: "clamp(3.2rem, 13vw, 14rem)",
            fontFamily: "var(--font-display, Fraunces, serif)",
            letterSpacing: "-0.04em",
          }}
        >
          Clic<span className="text-[#FF6500]">&amp;</span>Progress
        </span>
      </div>
    </section>
  );
}
