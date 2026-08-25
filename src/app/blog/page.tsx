"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EditableText from "@/components/EditableText";

/* ── Données centralisées des articles ── */
const ARTICLES = [
  {
    slug: "ia-generative-equipes-operationnelles",
    number: "01",
    category: "IA & Productivité",
    date: "Juin 2026",
    readTime: "4 min de lecture",
    title: "Comment l'IA générative transforme le quotidien des équipes opérationnelles",
    intro:
      "Découvrez pourquoi l'intégration de ChatGPT et Claude au travail ne nécessite aucun bagage technique pour faire gagner 5h par semaine à vos collaborateurs tout en renforçant leur créativité.",
    highlight: "Enjeux : Automatisation douce · Gain de temps · Zéro code",
  },
  {
    slug: "reussir-transition-professionnelle",
    number: "02",
    category: "Reconversion & Mindset",
    date: "Mai 2026",
    readTime: "6 min de lecture",
    title: "Franchir le cap : réussir sa transition professionnelle sans perdre confiance",
    intro:
      "Les 4 étapes psychologiques et méthodologiques pour donner un nouvel élan à son parcours de carrière, surmonter le syndrome de l'imposteur et s'adapter aux nouveaux métiers.",
    highlight: "Méthode : Accompagnement sur mesure · Posture active",
  },
  {
    slug: "apprendre-en-faisant-ludopedagogie",
    number: "03",
    category: "Ludopédagogie",
    date: "Avril 2026",
    readTime: "5 min de lecture",
    title: "Pourquoi on apprend 5 fois mieux en faisant (le secret de la pratique)",
    intro:
      "Analyse comparative des formations descendantes classiques face aux ateliers actifs de mise en situation concrète. L'ancrage mémoriel expliqué par les neurosciences.",
    highlight: "Impact : +85% d'ancrage mémoriel · Ateliers terrain",
  },
];

const CATEGORIES = ["Tous", "IA & Productivité", "Reconversion & Mindset", "Ludopédagogie"];

export default function BlogListingPage() {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const pathname = usePathname();
  const isEditMode = pathname?.startsWith("/admin/edit") ?? false;

  const filtered = selectedCat === "Tous"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCat);

  return (
    <div className="min-h-screen bg-[#141311] text-white flex flex-col justify-between" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      
      {/* ── NAVBAR ── */}
      <Navbar />

      <main className="flex-1">
        {/* ── HERO BLOG ── */}
        <div className="relative overflow-hidden bg-[#1A1816] border-b border-white/10 py-20 sm:py-28">
          {/* Glow ambiance subtil */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(255,101,0,0.12) 0%, transparent 75%)",
            }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Link
                  href={isEditMode ? "/admin/edit" : "/"}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-[#FF6500] transition-colors mb-6"
                >
                  <span>←</span> Retour à l'accueil
                </Link>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6500] mb-2 block">
                  <EditableText initialText="RESSOURCES & RÉFLEXIONS" contentKey="blog-hero-badge" />
                </span>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-1"
                  style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                >
                  <EditableText initialText="Le Blog Clic&Progress" contentKey="blog-hero-title" />
                </h1>
              </div>
              <EditableText 
                as="p"
                multiline
                className="text-base sm:text-lg text-white/70 max-w-md font-sans block"
                initialText="Analyses, cas pratiques et décryptages sur le futur du travail, l'apprentissage actif et la transition numérique."
                contentKey="blog-hero-desc"
              />
            </div>

            {/* Filtres de catégorie */}
            <div className="flex items-center gap-2 flex-wrap pt-6 border-t border-white/10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                    selectedCat === cat
                      ? "bg-[#FF6500] text-white shadow-[0_0_20px_rgba(255,101,0,0.4)]"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat} {cat !== "Tous" && `(${ARTICLES.filter(a => a.category === cat).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── LISTE DES ARTICLES ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 gap-8">
              {filtered.map((art) => {
                const artHref = isEditMode ? `/admin/edit/blog/${art.slug}` : `/blog/${art.slug}`;
                return (
                <motion.div
                  key={art.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-3xl bg-[#1A1816]/80 hover:bg-[#1A1816] border border-white/10 hover:border-[#FF6500]/60 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_rgba(255,101,0,0.12)] flex flex-col lg:flex-row lg:items-center justify-between gap-8"
                >
                  {/* Gauche : numéro, titre, intro */}
                  <div className="flex items-start gap-6 flex-1">
                    <span className="font-mono text-3xl sm:text-5xl font-black text-white/15 group-hover:text-[#FF6500]/40 transition-colors select-none shrink-0">
                      {art.number}
                    </span>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-[#FF6500]/15 font-mono text-xs font-bold text-[#FF6500] uppercase tracking-wider">
                          <EditableText initialText={art.category} contentKey={`blog-art-${art.slug}-cat`} />
                        </span>
                        <span className="text-xs text-white/40 font-mono"><EditableText initialText={art.date} contentKey={`blog-art-${art.slug}-date`} /></span>
                        <span className="text-xs text-white/40 font-mono">· <EditableText initialText={art.readTime} contentKey={`blog-art-${art.slug}-time`} /></span>
                      </div>
                      <h2
                        className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF6500] transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                      >
                        <Link href={artHref}>
                          <EditableText initialText={art.title} contentKey={`blog-art-${art.slug}-title`} />
                        </Link>
                      </h2>
                      <EditableText 
                        as="p" 
                        multiline 
                        initialText={art.intro} 
                        contentKey={`blog-art-${art.slug}-intro`} 
                        className="text-base text-white/70 leading-relaxed max-w-3xl block" 
                      />
                      <div className="pt-2">
                        <span className="inline-block px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 font-medium">
                          💡 <EditableText initialText={art.highlight} contentKey={`blog-art-${art.slug}-highlight`} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Droite : bouton d'action */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 pt-6 lg:pt-0 border-white/10 shrink-0">
                    <Link
                      href={artHref}
                      className="px-6 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-bold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.3)] flex items-center gap-2 group-hover:translate-x-1"
                    >
                      <span><EditableText initialText="Lire l'article" contentKey="blog-btn-read" /></span>
                      <span>→</span>
                    </Link>
                  </div>
                </motion.div>
                );
              })}

              {filtered.length === 0 && (
                <div className="text-center py-20 rounded-3xl bg-[#1A1816]/40 border border-dashed border-white/10">
                  <p className="text-white/40 text-base">Aucun article dans la catégorie sélectionnée.</p>
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>

        {/* ── CTA BAS DE PAGE ── */}
        <section className="bg-[#1A1816] border-t border-white/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6500] mb-3 block">
              <EditableText initialText="Passons à l'action" contentKey="blog-cta-badge" />
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              <EditableText initialText="Envie de transformer vos équipes concrètement ?" contentKey="blog-cta-title" />
            </h2>
            <EditableText
              as="p"
              multiline
              initialText="Chaque réflexion partagée sur ce blog est issue de cas pratiques vécus sur le terrain. Échangeons sur vos enjeux de formation."
              contentKey="blog-cta-desc"
              className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed block"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={isEditMode ? "/admin/edit/#contact" : "/#contact"}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white font-bold uppercase tracking-widest text-xs transition-all shadow-[0_4px_24px_rgba(255,101,0,0.4)]"
              >
                <span><EditableText initialText="Demander un échange gratuit" contentKey="blog-cta-btn" /></span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
