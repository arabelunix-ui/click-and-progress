"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LogoApp from "./LogoApp";

// Reusable SVG component rendering the EXACT stepped contour curves pixel-for-pixel from image.png
function BackgroundContourLines() {
  return (
    <svg
      className="w-full h-full stroke-[#1A1816]/[0.12] fill-none pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      {/* 1. Top-Left Small Loop */}
      <path d="M 0 340 L 70 400 Q 90 420 70 430 L 0 430" strokeWidth="1.2" />

      {/* 2. Top-Left Stepped Terrace */}
      <path d="M 570 0 L 570 110 Q 570 150 530 150 L 180 150 Q 140 150 140 190 L 140 390 Q 140 430 100 430 L 0 330" strokeWidth="1.2" />

      {/* 3. Top-Right Stepped Terrace */}
      <path d="M 860 0 L 860 170 Q 860 210 900 210 L 1230 210 Q 1270 210 1270 250 L 1270 370 Q 1270 410 1310 410 L 1440 410" strokeWidth="1.2" />

      {/* 4. Bottom-Left Stepped Terrace */}
      <path d="M 0 720 L 260 720 Q 300 720 300 760 L 210 900" strokeWidth="1.2" />

      {/* 5. Bottom-Right Stepped Terrace */}
      <path d="M 1440 500 L 1330 500 Q 1290 500 1290 540 L 1290 710 Q 1290 750 1250 750 L 1000 750 Q 960 750 1000 810 L 1420 900" strokeWidth="1.2" />
    </svg>
  );
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurtainsOpen(true);
      }, 250);
      setTimeout(() => {
        setIsLoading(false);
        // Signal to other components that loading is complete
        window.dispatchEvent(new CustomEvent("loading-complete"));
      }, 1750);
    }, 2200);

    return () => clearTimeout(exitTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden select-none"
      aria-label="Welcome Splash Screen"
    >
      {/* TOP CURTAIN PANEL */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          curtainsOpen ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ backgroundColor: "#FAF8F4" }}
      >
        <div className="absolute top-0 left-0 w-full h-[200%] pointer-events-none">
          <BackgroundContourLines />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/[0.05] to-transparent pointer-events-none" />
      </div>

      {/* BOTTOM CURTAIN PANEL */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          curtainsOpen ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ backgroundColor: "#FAF8F4" }}
      >
        <div className="absolute -top-[100%] left-0 w-full h-[200%] pointer-events-none">
          <BackgroundContourLines />
        </div>
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/[0.05] to-transparent pointer-events-none" />
      </div>

      {/* CENTERED OFFICIAL LOGO BLOCK */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-out ${
          isExiting
            ? "opacity-0 scale-105 filter blur-md"
            : "opacity-100 scale-100 filter blur-0"
        }`}
      >
        <div className="flex flex-col items-center animate-fade-in p-6 text-center">
          <LogoApp className="mb-6 justify-center scale-150 origin-center" />
          <span
            className="text-sm md:text-base font-semibold tracking-wide text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            &ldquo;Apprendre, ça doit donner envie.&rdquo;
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6500] mt-1.5">
            Soufiyan · Formateur Indépendant
          </span>
        </div>
      </div>
    </div>
  );
}
