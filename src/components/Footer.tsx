"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#141311] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Top Banner CTA inside Footer */}
      <div className="border-b border-white/10 bg-[#1A1816]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF6500] font-bold block mb-1">
              PASSEZ À L&apos;ACTION
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Prêt à redonner de l&apos;élan à vos équipes ?
            </h3>
          </div>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-2xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(255,101,0,0.3)] hover:scale-105 flex items-center gap-2 flex-shrink-0"
          >
            <span>Réserver un diagnostic (&lt; 48h)</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Column (Col 1-4) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src="/images/ClickandProgressLogo.png"
                  alt="Clic & Progress"
                  width={220}
                  height={60}
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-base text-white/70 max-w-sm leading-relaxed mb-6 font-sans">
                Activité de formation sur mesure et d&apos;accompagnement portée par <strong className="text-white font-semibold">Soufiyan</strong>, formateur indépendant basé à Clermont-Ferrand.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <p className="text-sm font-medium text-[#FF6500] italic mb-1">
                  &ldquo;Apprendre, ça doit donner envie.&rdquo;
                </p>
                <span className="text-xs font-mono text-white/50 block">
                  Pédagogie active &amp; ancrage durable
                </span>
              </div>
            </div>
          </div>

          {/* Expertises Column (Col 5-7) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF6500] mb-6">
              EXPERTISES &amp; PARCOURS
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70 font-sans">
              <li>
                <Link href="#expertises" className="hover:text-[#FF6500] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]/50" />
                  <span>Reconversion &amp; Transition</span>
                </Link>
              </li>
              <li>
                <Link href="#expertises" className="hover:text-[#FF6500] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]/50" />
                  <span>IA Générative au quotidien</span>
                </Link>
              </li>
              <li>
                <Link href="#expertises" className="hover:text-[#FF6500] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]/50" />
                  <span>Vente, Commerce &amp; Négociation</span>
                </Link>
              </li>
              <li>
                <Link href="#pedagogie" className="hover:text-[#FF6500] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]/50" />
                  <span>Ludopédagogie Active</span>
                </Link>
              </li>
              <li>
                <Link href="#ressources" className="hover:text-[#FF6500] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]/50" />
                  <span>Ressources &amp; Articles</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Localisation Column (Col 8-12) */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF6500] mb-6">
              LOCALISATION &amp; CONTACT
            </h4>
            <div className="space-y-4 text-sm text-white/75 font-sans">
              <div className="flex items-start gap-3">
                <span className="text-[#FF6500] mt-0.5">📍</span>
                <div>
                  <strong className="text-white block">Clermont-Ferrand (63000)</strong>
                  <span className="text-xs text-white/50">Auvergne-Rhône-Alpes</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-[#FF6500] mt-0.5">🚀</span>
                <div>
                  <strong className="text-white block">Interventions Flexible</strong>
                  <span className="text-xs text-white/50">Sur site en France entière &amp; Visio à distance</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:contact@clicandprogress.fr"
                  className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-[#FF6500] transition-colors bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 w-full justify-center"
                >
                  <span>✉️</span>
                  <span>contact@clicandprogress.fr</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-6">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Clic&amp;Progress · Soufiyan.</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#FF6500]/80">Pédagogie d&apos;excellence</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#mentions" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="#confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="#qualiopi" className="hover:text-white transition-colors">
              Référentiels &amp; Qualité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
