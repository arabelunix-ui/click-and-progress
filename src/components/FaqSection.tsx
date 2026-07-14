"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  id: string;
  category: "Pédagogie & Méthode" | "Financements & OPCO" | "Organisation & Logistique" | "Sous-traitance OF";
  question: string;
  answer: string | React.ReactNode;
  tag?: string;
}

const FAQ_DATA: FaqItem[] = [
  // ── Pédagogie & Méthode ──
  {
    id: "pedagogie-deroulement",
    category: "Pédagogie & Méthode",
    question: "Comment se déroule concrètement une session de formation Clic&Progress ?",
    tag: "Ludopédagogie active",
    answer: (
      <div className="space-y-3.5">
        <p>
          Finis les cours magistraux de 7 heures avec 150 slides PowerPoint. Chez Clic&amp;Progress, nous appliquons une pédagogie 100% active et vivante : <strong className="text-[#1A1A1A]">80% d&apos;ateliers pratiques et 20% d&apos;apports théoriques ciblés</strong>.
        </p>
        <p>
          Chaque notion est immédiatement testée sur le terrain. Vous travaillez directement sur vos propres documents, vos vrais cas clients et vos défis professionnels actuels pour ancrer des réflexes que vous utiliserez dès le lendemain matin.
        </p>
      </div>
    ),
  },
  {
    id: "pedagogie-publics",
    category: "Pédagogie & Méthode",
    question: "À qui s'adressent vos formations et vos parcours d'accompagnement ?",
    tag: "Sur-mesure",
    answer: (
      <div className="space-y-3.5">
        <p>Nous intervenons principalement auprès de trois grands publics :</p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#1A1A1A]/80">
          <li><strong className="text-[#1A1A1A]">Les équipes opérationnelles en entreprise (PME &amp; grands comptes) :</strong> pour accélérer leur productivité (IA générative), renforcer leurs techniques de vente ou développer leur leadership.</li>
          <li><strong className="text-[#1A1A1A]">Les Organismes de Formation (OF) :</strong> qui recherchent un formateur expert pour animer des parcours certifiants (Qualiopi, RNCP, RS) en sous-traitance ou en marque blanche.</li>
          <li><strong className="text-[#1A1A1A]">Les professionnels en reconversion ou transition de carrière :</strong> accompagnement individuel ou en groupe pour surmonter les blocages et réussir sa transformation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "pedagogie-ia-technique",
    category: "Pédagogie & Méthode",
    question: "Faut-il un niveau technique préalable pour suivre les modules IA Générative ?",
    tag: "Zéro prérequis",
    answer: (
      <p>
        <strong className="text-[#1A1A1A]">Aucun prérequis technique ou bagage informatique n&apos;est nécessaire !</strong> Nos modules d&apos;IA générative (ChatGPT, Claude, outils d&apos;automatisation) sont conçus pour être accessibles à tous sans aucune ligne de code. Nous vous apprenons l&apos;art de formuler des requêtes claires (prompting) et d&apos;intégrer ces assistants dans vos tâches quotidiennes (rédaction de rapports, synthèse de réunions, relation client) pour faire gagner jusqu&apos;à 5 heures par semaine à votre équipe.
      </p>
    ),
  },

  // ── Financements & OPCO ──
  {
    id: "financement-opco",
    category: "Financements & OPCO",
    question: "Vos formations sont-elles éligibles à une prise en charge par mon OPCO ?",
    tag: "Finançable OPCO",
    answer: (
      <div className="space-y-3.5">
        <p>
          Oui, absolument. En tant que formateur indépendant intervenant dans un cadre réglementaire rigoureux (et via des partenariats étroits avec des organismes certifiés Qualiopi), nos actions de développement des compétences pour les salariés sont <strong className="text-[#1A1A1A]">finançables par votre OPCO de rattachement</strong> (Atlas, AKTO, OPCO EP, AFDAS, etc.).
        </p>
        <p>
          Nous veillons à ce que chaque programme pédagogique respecte scrupuleusement les critères d&apos;éligibilité, d&apos;évaluation et de traçabilité requis par les financeurs.
        </p>
      </div>
    ),
  },
  {
    id: "financement-demarche",
    category: "Financements & OPCO",
    question: "Quelle est la démarche à suivre pour monter le dossier de prise en charge OPCO ?",
    tag: "Accompagnement administratif",
    answer: (
      <p>
        Dès notre premier échange d&apos;analyse de vos besoins, nous vous fournissons un dossier administratif complet comprenant : <strong className="text-[#1A1A1A]">le devis chiffré, le programme pédagogique détaillé et la convention de formation</strong>. Vous transmettez ensuite ces documents directement à votre conseiller OPCO (généralement 3 à 4 semaines avant le début de l&apos;intervention) pour obtenir l&apos;accord de prise en charge avant le lancement.
      </p>
    ),
  },

  // ── Organisation & Logistique ──
  {
    id: "orga-lieu",
    category: "Organisation & Logistique",
    question: "Où se déroulent les formations (présentiel ou visioconférence) ?",
    tag: "France entière & Visio",
    answer: (
      <p>
        Soufiyan est basé à <strong className="text-[#1A1A1A]">Clermont-Ferrand</strong> et se déplace directement dans vos locaux en Auvergne-Rhône-Alpes et dans toute la France pour les sessions intra-entreprise. Nous animons également des classes virtuelles en <strong className="text-[#1A1A1A]">visioconférence interactive (Zoom / Teams)</strong> avec sous-salles de travail, tableaux blancs dynamiques et ateliers en direct pour une immersion totale à distance, sans perte de dynamisme.
      </p>
    ),
  },
  {
    id: "orga-duree",
    category: "Organisation & Logistique",
    question: "Quelle est la durée moyenne des formats et modules proposés ?",
    tag: "Formats flexibles",
    answer: (
      <div className="space-y-3">
        <p>Nous concevons des formats souples qui s&apos;adaptent au planning et au rythme de votre activité :</p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#1A1A1A]/80">
          <li><strong className="text-[#1A1A1A]">Ateliers &amp; Masterclasses (3h30 à 7h) :</strong> idéal pour acculturer rapidement une équipe sur un sujet clé (ex : prise en main de l&apos;IA au quotidien).</li>
          <li><strong className="text-[#1A1A1A]">Formations intensives (2 à 3 jours) :</strong> pour une montée en compétences complète avec mises en situation terrain et jeux de rôles approfondis.</li>
          <li><strong className="text-[#1A1A1A]">Parcours d&apos;accompagnement dans la durée :</strong> sessions espacées de quelques semaines avec suivi individuel ou co-développement pour ancrer durablement les pratiques.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "orga-sur-mesure",
    category: "Organisation & Logistique",
    question: "Peut-on adapter le contenu de formation à notre secteur d'activité ?",
    tag: "100% Personnalisé",
    answer: (
      <p>
        Le sur-mesure est notre standard pédagogique. Avant chaque intervention en entreprise, nous réalisons un entretien de cadrage (ou une immersion terrain rapide) pour analyser vos outils informatiques, votre vocabulaire métier, vos freins actuels et vos objectifs exacts. Les études de cas, ateliers et simulations sont ensuite conçus spécifiquement pour faire écho à la réalité de vos équipes.
      </p>
    ),
  },

  // ── Sous-traitance OF ──
  {
    id: "of-collaboration",
    category: "Sous-traitance OF",
    question: "Comment collaborez-vous avec les Organismes de Formation (OF) partenaires ?",
    tag: "Marque blanche & Qualiopi",
    answer: (
      <p>
        Soufiyan intervient régulièrement en tant que formateur expert ou sous-traitant pour le compte d&apos;organismes de formation reconnus. Nous intervenons en parfaite transparence (<strong className="text-[#1A1A1A]">en marque blanche sous votre nom</strong>) en respectant scrupuleusement votre cahier des charges, les exigences de l&apos;audit <strong className="text-[#1A1A1A]">Qualiopi</strong> (émargements, évaluations des acquis, enquêtes de satisfaction) et le référentiel de vos certifications (RNCP / RS).
      </p>
    ),
  },
];

const CATEGORIES = [
  "Tout",
  "Pédagogie & Méthode",
  "Financements & OPCO",
  "Organisation & Logistique",
  "Sous-traitance OF",
] as const;

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tout");
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaq = FAQ_DATA.filter((item) => {
    const matchCategory = selectedCategory === "Tout" || item.category === selectedCategory;
    const matchSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === "string" && item.answer.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-16 sm:py-24 text-[#1A1A1A]">
      {/* ── CONTENEUR BIEN CENTRÉ (max-w-4xl) ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── BARRE DE RECHERCHE CENTRÉE ── */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <div className="relative shadow-lg rounded-2xl overflow-hidden border border-[#E8E5DF] transition-all focus-within:border-[#FF6500] focus-within:ring-4 focus-within:ring-[#FF6500]/15">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 pointer-events-none">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Rechercher une question (ex: OPCO, visio, IA, tarif, durée...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-13 pr-24 py-4 sm:py-4.5 bg-[#F9F8F6] text-sm sm:text-base text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-[#1A1A1A]/50 hover:text-[#FF6500] px-3 py-1.5 bg-white rounded-lg border border-[#E8E5DF] shadow-sm transition-colors"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* ── ONGLETS DE CATÉGORIES BIEN CENTRÉS ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1A1A1A] text-white shadow-md scale-[1.03]"
                  : "bg-[#F9F8F6] text-[#1A1A1A]/70 hover:bg-[#E8E5DF]/60 hover:text-[#1A1A1A] border border-[#E8E5DF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── LISTE DES QUESTIONS (ACCORDÉONS BIEN CENTRÉS & ALIGNÉS) ── */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaq.length === 0 ? (
            <div className="text-center py-16 bg-[#F9F8F6] rounded-3xl border border-[#E8E5DF] px-6 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p className="text-xl font-bold text-[#1A1A1A] mb-2 font-display" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>
                Aucune question trouvée pour &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-sm text-[#1A1A1A]/60 max-w-md mx-auto mb-6">
                Vous avez un projet de formation ou une interrogation spécifique qui n&apos;est pas listée ici ?
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF6500] text-white text-xs font-extrabold uppercase tracking-widest hover:bg-[#FF7A1F] transition-all shadow-md"
              >
                Poser la question à Soufiyan
              </Link>
            </div>
          ) : (
            filteredFaq.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#F9F8F6] border-[#FF6500]/45 shadow-[0_8px_30px_rgba(255,101,0,0.06)]"
                      : "bg-white border-[#E8E5DF] hover:border-[#C8C5BB]"
                  }`}
                >
                  <button
                    onClick={() => toggleOpen(item.id)}
                    className="w-full text-left px-6 sm:px-8 py-6 sm:py-7 flex items-start justify-between gap-5 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF6500] bg-[#FF6500]/12 px-2.5 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        {item.tag && (
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A]/55 bg-white border border-[#E8E5DF] px-2.5 py-0.5 rounded-full">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-lg sm:text-xl font-bold tracking-tight transition-colors leading-snug ${
                          isOpen ? "text-[#FF6500]" : "text-[#1A1A1A]"
                        }`}
                        style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Icône animée */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FF6500] text-white rotate-180 shadow-md"
                          : "bg-[#F9F8F6] text-[#1A1A1A]/60 border border-[#E8E5DF]"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>

                  {/* Contenu de la réponse — framer motion fluide */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-2 text-[15px] sm:text-base text-[#1A1A1A]/80 leading-relaxed border-t border-[#E8E5DF]/60">
                          <div className="bg-white/80 p-5 sm:p-6 rounded-2xl border border-[#E8E5DF]/60 shadow-sm">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* ── ENCART AIDE DIRECTE BIEN CENTRÉ EN BAS ── */}
        <div className="mt-20 max-w-3xl mx-auto rounded-3xl bg-[#1A1A1A] p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div
            className="absolute pointer-events-none inset-0"
            style={{
              background: "radial-gradient(circle at 50% 20%, rgba(255,101,0,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] block">
              Dialogue direct &amp; sans intermédiaire
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Vous ne trouvez pas la réponse que vous cherchez ?
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Chaque structure a des défis uniques. Écrivez directement à Soufiyan pour échanger sur vos objectifs et obtenir une réponse personnalisée en moins de 48 heures.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#FF6500] text-white text-xs font-extrabold uppercase tracking-widest hover:bg-[#FF7A1F] shadow-[0_4px_20px_rgba(255,101,0,0.4)] transition-all scale-100 hover:scale-[1.02]"
              >
                Échanger avec Soufiyan
              </Link>
              <a
                href="mailto:contact@clicandprogress.fr"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/10 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-white/15 border border-white/15 transition-all scale-100 hover:scale-[1.02]"
              >
                Envoyer un email
              </a>
            </div>
            <p className="text-[11px] font-mono text-white/40 pt-2">
              Réponse garantie sous 48h · Formations en Auvergne-Rhône-Alpes &amp; France entière
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
