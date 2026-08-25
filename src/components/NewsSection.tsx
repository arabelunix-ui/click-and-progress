"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import EditableText from "./EditableText";

export default function NewsSection() {
  const articles = [
    {
      number: "01",
      slug: "ia-generative-equipes-operationnelles",
      category: "IA & Productivité",
      title: "Comment l'IA générative transforme le quotidien des équipes opérationnelles",
      desc: "Découvrez pourquoi l'intégration de ChatGPT et Claude au travail ne nécessite aucun bagage technique pour faire gagner 5h par semaine à vos collaborateurs tout en renforçant leur créativité.",
      date: "Juin 2026",
      readTime: "4 min de lecture",
      highlight: "Enjeux : Automatisation douce · Gain de temps · Zéro code",
    },
    {
      number: "02",
      slug: "reussir-transition-professionnelle",
      category: "Reconversion & Mindset",
      title: "Franchir le cap : réussir sa transition professionnelle sans perdre confiance",
      desc: "Les 4 étapes psychologiques et méthodologiques pour donner un nouvel élan à son parcours de carrière, surmonter le syndrome de l'imposteur et s'adapter aux nouveaux métiers.",
      date: "Mai 2026",
      readTime: "6 min de lecture",
      highlight: "Méthode : Accompagnement sur mesure · Posture active",
    },
    {
      number: "03",
      slug: "apprendre-en-faisant-ludopedagogie",
      category: "Ludopédagogie",
      title: "Pourquoi on apprend 5 fois mieux en faisant (le secret de la pratique)",
      desc: "Analyse comparative des formations descendantes classiques face aux ateliers actifs de mise en situation concrète. L'ancrage mémoriel expliqué par les neurosciences.",
      date: "Avril 2026",
      readTime: "5 min de lecture",
      highlight: "Impact : +85% d'ancrage mémoriel · Ateliers terrain",
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="ressources" className="bg-[#141311] py-24 sm:py-32 border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6500] mb-2 block">
              <EditableText initialText="RESSOURCES & RÉFLEXIONS" />
            </span>
            <EditableText
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1 block"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
              initialText="Le regard Clic&Progress"
            />
          </div>
          <EditableText
            as="p"
            multiline
            className="text-base text-white/70 max-w-md font-sans block"
            initialText="Analyses, cas pratiques et décryptages sur le futur du travail, l'apprentissage actif et la transition numérique."
          />
        </div>

        {/* ACCORDION / HORIZONTAL SPLIT CARDS (matching image.png on black theme) */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {articles.map((art, idx) => {
            const isExpanded = activeIdx === idx;
            return (
              <motion.div
                key={art.number}
                onClick={() => setActiveIdx(isExpanded ? null : idx)}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`w-full rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isExpanded
                    ? "bg-[#1A1816] border-[#FF6500] shadow-[0_0_30px_rgba(255,101,0,0.18)]"
                    : "bg-[#1A1816]/60 hover:bg-[#1A1816] border-white/10 hover:border-white/25"
                }`}
              >
                {/* Card Top Bar */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Number & Title */}
                  <div className="flex items-start md:items-center gap-4 sm:gap-6 flex-1">
                    <span
                      className={`font-mono text-2xl sm:text-3xl font-black ${
                        isExpanded ? "text-[#FF6500]" : "text-white/25"
                      }`}
                    >
                      {art.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#FF6500]/15 font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider">
                          <EditableText initialText={art.category} />
                        </span>
                        <span className="text-xs text-white/50 font-mono"><EditableText initialText={art.date} /></span>
                      </div>
                      <EditableText
                        as="h3"
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug block"
                        style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                        initialText={art.title}
                      />
                    </div>
                  </div>

                  {/* Right Action Button / Indicator */}
                  <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-white/10 flex-shrink-0">
                    <span className="text-xs font-mono text-white/50 hidden sm:inline">
                      <EditableText initialText={art.readTime} />
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isExpanded
                          ? "bg-[#FF6500] text-white rotate-180 shadow-[0_0_15px_rgba(255,101,0,0.4)]"
                          : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content (Split column preview exactly like image.png) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 md:px-10 pb-8 pt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        
                        <div className="md:col-span-8 md:pl-14">
                          <EditableText
                            as="p"
                            multiline
                            className="text-base sm:text-lg text-white/80 font-sans leading-relaxed mb-4 block"
                            initialText={art.desc}
                          />
                          <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 font-medium">
                            💡 <EditableText initialText={art.highlight} />
                          </div>
                        </div>

                        <div className="md:col-span-4 flex justify-start md:justify-end">
                          <Link
                            href={`/blog/${art.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="px-6 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,101,0,0.3)] flex items-center gap-2.5 group"
                          >
                            <EditableText initialText="Lire l'article complet" />
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Bouton "Voir tous les articles" */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/blog"
            className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF6500]/60 text-white font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-[0_0_25px_rgba(255,101,0,0.25)]"
          >
            <EditableText initialText="Voir tous les articles du blog" />
            <span className="w-8 h-8 rounded-full bg-[#FF6500]/20 text-[#FF6500] group-hover:bg-[#FF6500] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
