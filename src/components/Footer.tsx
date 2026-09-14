"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoApp from "./LogoApp";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">

      {/* ══ CORPS PRINCIPAL — 3 colonnes ══ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── Colonne 1 : Logo + liens nav ── */}
          <div>
            <LogoApp className="mb-7" />
            <nav className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold text-white/80">
              {[
                { label: "À propos", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Mentions Légales", href: "/mentions-legales" },
                { label: "Confidentialité", href: "/politique-de-confidentialite" },
                { label: "CGV / CGU", href: "/cgvu" },
                { label: "Pédagogie", href: "/#pedagogie" },
                { label: "Ressources", href: "/#ressources" },
                { label: "Contact", href: "/#contact" },
              ].map((item, i, arr) => (
                <span key={item.label} className="flex items-center gap-x-2">
                  <Link href={item.href} className="hover:text-[#FF6500] transition-colors">
                    {item.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="text-white/30">·</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

          {/* ── Colonne 2 : Contact centré avec icônes rondes ── */}
          <div className="flex flex-col items-center gap-6">
            {/* Adresse */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2E2E2E] flex items-center justify-center border border-white/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-white/70 text-center leading-relaxed">
                Clermont-Ferrand (63000)<br />
                <span className="text-white/40 text-xs">France entière · Visio à distance</span>
              </p>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2E2E2E] flex items-center justify-center border border-white/10 shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base font-semibold text-white">Réponse &lt; 48h</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2E2E2E] flex items-center justify-center border border-white/10 shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <a
                href="mailto:clicprogress@gmail.com"
                className="text-[#FF6500] hover:text-[#FF7A1F] font-semibold text-sm transition-colors"
              >
                clicprogress@gmail.com
              </a>
            </div>
          </div>

          {/* ── Colonne 3 : À propos + réseaux ── */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">
              À propos de Clic&amp;Progress
            </h4>
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              Activité de formation sur mesure et d&apos;accompagnement au changement portée par{" "}
              <strong className="text-white/80 font-semibold">Soufiyan</strong>, formateur
              indépendant basé à Clermont-Ferrand. Ce qu&apos;on apprend sert dès le lendemain.
              <br />
              <span className="text-white/35 text-xs mt-1 block">Créé en 2024</span>
            </p>

            {/* Icônes réseaux carrées */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/soufiyan",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "#",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-md bg-[#2E2E2E] hover:bg-[#FF6500] border border-white/10 hover:border-[#FF6500] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══ BARRE BASSE ══ */}
      <div className="border-t border-white/10 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4">

          {/* Icônes sociales rondés à gauche */}
          <div className="flex items-center gap-2">
            {[
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/soufiyan",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "#",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright à droite */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/40 font-mono">
            <Link href="/mentions-legales" className="hover:text-[#FF6500] transition-colors underline">
              Mentions Légales
            </Link>
            <span>·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-[#FF6500] transition-colors underline">
              Confidentialité
            </Link>
            <span>·</span>
            <Link href="/cgvu" className="hover:text-[#FF6500] transition-colors underline">
              CGV / CGU
            </Link>
            <span>·</span>
            <p>
              Tous droits réservés{" "}
              <strong className="text-white/60 font-semibold">clicandprogress.fr</strong>{" "}
              — © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
