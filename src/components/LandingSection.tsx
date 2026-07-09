"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Animated counter hook
   ───────────────────────────────────────────── */
function useCountUp(target: number, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

/* ─────────────────────────────────────────────
   Stat item
   ───────────────────────────────────────────── */
interface StatProps {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}
function Stat({ value, suffix, label, started }: StatProps) {
  const count = useCountUp(value, 1400, started);
  return (
    <div className="landing-stat">
      <span className="landing-stat__number">
        {count}
        <span className="landing-stat__suffix">{suffix}</span>
      </span>
      <span className="landing-stat__label">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
   ───────────────────────────────────────────── */
export default function LandingSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  /* Intersection observer – triggers entrance animation */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStatsStarted(true), 600);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Inline styles ── */}
      <style>{`
        /* ======================================================
           LANDING SECTION
           ====================================================== */

        .landing-section {
          position: relative;
          background-color: var(--bg-primary);
          overflow: hidden;
          padding: clamp(64px, 8vw, 120px) clamp(24px, 6vw, 96px);
        }

        /* subtle ambient glow */
        .landing-section::before {
          content: "";
          position: absolute;
          top: -120px;
          left: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(255,101,0,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Layout ── */
        .landing-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Left column ── */
        .landing-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Badge / eyebrow */
        .landing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s;
        }

        .landing-section.is-visible .landing-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .landing-badge__star {
          font-size: 1rem;
          line-height: 1;
          color: var(--accent);
        }

        /* Headline */
        .landing-headline {
          font-family: var(--font-sans);
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          font-weight: 900;
          line-height: 1.08;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
        }

        .landing-section.is-visible .landing-headline {
          opacity: 1;
          transform: translateY(0);
        }

        /* Italic orange accent word */
        .landing-headline__accent {
          font-style: italic;
          color: var(--accent);
          position: relative;
          display: inline-block;
        }

        /* Underline squiggle */
        .landing-headline__accent::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--accent);
          border-radius: 2px;
          /* wave via mask */
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0,4 C10,0 20,8 30,4 C40,0 50,8 60,4 C70,0 80,8 90,4 C100,0 110,8 120,4' stroke='black' stroke-width='3' fill='none'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0,4 C10,0 20,8 30,4 C40,0 50,8 60,4 C70,0 80,8 90,4 C100,0 110,8 120,4' stroke='black' stroke-width='3' fill='none'/%3E%3C/svg%3E");
          -webkit-mask-size: 40px 100%;
          mask-size: 40px 100%;
          -webkit-mask-repeat: repeat-x;
          mask-repeat: repeat-x;
        }

        /* Description */
        .landing-desc {
          font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
          line-height: 1.65;
          color: var(--text-muted);
          max-width: 540px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s;
        }

        .landing-section.is-visible .landing-desc {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA row */
        .landing-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }

        .landing-section.is-visible .landing-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .landing-cta__primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: var(--accent);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 999px;
          border: 2px solid var(--accent);
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }

        .landing-cta__primary:hover {
          background: var(--accent-hover);
          border-color: var(--accent-hover);
          transform: translateY(-2px);
        }

        .landing-cta__secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: transparent;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 999px;
          border: 2px solid var(--text-primary);
          cursor: pointer;
          transition: background 0.25s, color 0.25s, transform 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }

        .landing-cta__secondary:hover {
          background: var(--text-primary);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Sub-caption under CTAs */
        .landing-cta__caption {
          width: 100%;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: -4px;
        }

        /* Stats row */
        .landing-stats {
          display: flex;
          gap: clamp(24px, 4vw, 56px);
          padding-top: 8px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s;
        }

        .landing-section.is-visible .landing-stats {
          opacity: 1;
          transform: translateY(0);
        }

        .landing-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .landing-stat__number {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .landing-stat__suffix {
          font-size: 0.85em;
        }

        .landing-stat__label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* ── Right column ── */
        .landing-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        .landing-section.is-visible .landing-right {
          opacity: 1;
          transform: translateX(0);
        }

        /* Decorative orange blob behind portrait */
        .landing-blob {
          position: absolute;
          top: -32px;
          right: -20px;
          width: 75%;
          height: 88%;
          background: var(--accent);
          border-radius: 40% 60% 55% 45% / 45% 55% 60% 40%;
          z-index: 0;
          opacity: 0.15;
          filter: blur(1px);
        }

        /* Portrait card */
        .landing-portrait {
          position: relative;
          z-index: 1;
          width: clamp(280px, 38vw, 460px);
          aspect-ratio: 3 / 4;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 24px 64px rgba(255,101,0,0.15),
            0 4px 16px rgba(0,0,0,0.08);
        }

        .landing-portrait img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 24px;
        }

        /* Floating accent shapes */
        .landing-shape {
          position: absolute;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.85;
          z-index: 2;
        }

        .landing-shape--top {
          width: clamp(60px, 8vw, 100px);
          height: clamp(60px, 8vw, 100px);
          top: -16px;
          right: clamp(40px, 8vw, 80px);
        }

        .landing-shape--bottom {
          width: clamp(40px, 5vw, 64px);
          height: clamp(40px, 5vw, 64px);
          bottom: clamp(24px, 5vw, 60px);
          right: -12px;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .landing-inner {
            grid-template-columns: 1fr;
          }

          .landing-right {
            order: -1;
            transform: translateY(-24px);
            justify-content: center;
          }

          .landing-section.is-visible .landing-right {
            transform: translateY(0);
          }

          .landing-portrait {
            width: clamp(220px, 60vw, 340px);
          }
        }
        /* ── Cinematic transition keyframes ── */

        /* Video burns out: scale + blur + white flash */
        @keyframes videoBurnOut {
          0%   { opacity: 1;  filter: blur(0px)   brightness(1);   transform: scale(1); }
          60%  { opacity: 1;  filter: blur(2px)   brightness(1.6); transform: scale(1.04); }
          100% { opacity: 0;  filter: blur(12px)  brightness(3);   transform: scale(1.08); }
        }

        /* Image reveals: scale down from oversized + fade in */
        @keyframes imageReveal {
          0%   { opacity: 0;  filter: blur(8px)  brightness(2.5); transform: scale(1.1); }
          40%  { opacity: 0.7; filter: blur(2px) brightness(1.3); transform: scale(1.03); }
          100% { opacity: 1;  filter: blur(0px)  brightness(1);   transform: scale(1); }
        }

        /* Lens-flare streak across the image */
        @keyframes lensFlare {
          0%   { left: -60%;  opacity: 0; }
          15%  { opacity: 0.55; }
          85%  { opacity: 0.45; }
          100% { left: 130%;  opacity: 0; }
        }

        .landing-portrait__video {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          display: block;
          position: absolute;
          inset: 0;
        }

        .landing-portrait__video--burning {
          animation: videoBurnOut 0.9s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        .landing-portrait__video--hidden {
          opacity: 0;
          pointer-events: none;
        }

        .landing-portrait__image {
          object-fit: cover;
          border-radius: 24px;
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          inset: 0;
        }

        .landing-portrait__image--revealed {
          animation: imageReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .landing-portrait__image--hidden {
          opacity: 0;
        }

        /* Lens flare overlay — only visible during reveal */
        .landing-portrait__flare {
          position: absolute;
          top: -20%;
          width: 55%;
          height: 140%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.08) 30%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.08) 70%,
            transparent 100%
          );
          transform: skewX(-15deg);
          z-index: 10;
          pointer-events: none;
          opacity: 0;
        }

        .landing-portrait__flare--active {
          animation: lensFlare 1s cubic-bezier(0.4, 0, 0.6, 1) 0.15s forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`landing-section${visible ? " is-visible" : ""}`}
        aria-labelledby="landing-headline"
      >
        <div className="landing-inner">
          {/* ── Left ── */}
          <div className="landing-left">
            {/* Eyebrow badge */}
            <span className="landing-badge">
              <span className="landing-badge__star" aria-hidden="true">✦</span>
              Formations en ligne
            </span>

            {/* Headline */}
            <h2 className="landing-headline" id="landing-headline">
              Apprendre, ça doit<br />
              donner{" "}
              <span className="landing-headline__accent">ENVIE.</span>
            </h2>

            {/* Description */}
            <p className="landing-desc">
              Reconversion, IA générative au quotidien, posture commerciale qui
              convertit&nbsp;: tu progresses en faisant, pas en écoutant un cours de
              plus. Et ce que tu apprends aujourd'hui, tu l'utilises dès demain.
            </p>

            {/* CTA buttons */}
            <div className="landing-cta">
              <Link href="#formations" className="landing-cta__primary">
                Découvre les formations
              </Link>
              <Link href="#echange" className="landing-cta__secondary">
                Réserve ton échange
              </Link>
              <span className="landing-cta__caption">
                20 minutes, gratuites, pour cadrer ton besoin ensemble — sans engagement.
              </span>
            </div>

            {/* Stats */}
            <div className="landing-stats">
              <Stat value={10} suffix="+" label="ans d'expérience" started={statsStarted} />
              <Stat value={300} suffix="+" label="apprenants accompagnés" started={statsStarted} />
              <Stat value={96} suffix="%" label="de satisfaction" started={statsStarted} />
            </div>
          </div>

          {/* ── Right ── */}
          <div className="landing-right">
            {/* Floating decorative circles */}
            <span className="landing-shape landing-shape--top" aria-hidden="true" />
            <span className="landing-shape landing-shape--bottom" aria-hidden="true" />

            {/* Soft organic blob behind the portrait */}
            <span className="landing-blob" aria-hidden="true" />

            {/* Cinematic video → image transition */}
            <div className="landing-portrait" style={{ position: "relative", overflow: "hidden" }}>

              {/* ── VIDEO ── */}
              <video
                src="/donner_moi_un_vedio_dans_pour.mp4"
                autoPlay
                muted
                playsInline
                onEnded={() => {
                  // Start burn-out, then after 850ms hide it and reveal image
                  const vid = document.querySelector<HTMLVideoElement>(".landing-portrait__video");
                  const img = document.querySelector<HTMLImageElement | HTMLDivElement>(".landing-portrait__image");
                  const flare = document.querySelector<HTMLSpanElement>(".landing-portrait__flare");
                  if (vid)   vid.classList.add("landing-portrait__video--burning");
                  setTimeout(() => {
                    if (vid)   vid.classList.add("landing-portrait__video--hidden");
                    if (img)   img.classList.add("landing-portrait__image--revealed");
                    if (flare) flare.classList.add("landing-portrait__flare--active");
                    setVideoEnded(true);
                  }, 850);
                }}
                className={`landing-portrait__video${
                  videoEnded ? " landing-portrait__video--hidden" : ""
                }`}
              />

              {/* ── IMAGE ── */}
              <Image
                src="/portrait-hero.png"
                alt="Formateur souriant — illustration"
                width={460}
                height={614}
                priority
                className={`landing-portrait__image${
                  videoEnded ? "" : " landing-portrait__image--hidden"
                }`}
              />

              {/* ── LENS FLARE ── fires once during the reveal */}
              <span className="landing-portrait__flare" aria-hidden="true" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
