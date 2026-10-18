"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/*
 * Contenu de la FAQ.
 * Pour modifier une réponse : changer le texte ci-dessous.
 * - Un paragraphe = une chaîne de caractères.
 * - Une liste à puces = un tableau de chaînes.
 * - **texte** = texte en gras.
 */
type Block = string | string[];

export interface FaqItem {
  id: string;
  category: "Pédagogie & Méthode" | "Tarifs & Financement" | "Organisation" | "Organismes de formation";
  question: string;
  answer: Block[];
  tag?: string;
}

const FAQ_DATA: FaqItem[] = [
  // ── Pédagogie & Méthode ──
  {
    id: "pedagogie-deroulement",
    category: "Pédagogie & Méthode",
    question: "Comment se passe concrètement une formation avec vous ?",
    tag: "Pédagogie active",
    answer: [
      "Pas de journée entière à écouter quelqu'un lire des slides. Dans mes formations, **la plus grande partie du temps est consacrée à la pratique** : mises en situation, jeux de rôle, ateliers, cas concrets. La théorie arrive au moment où elle sert.",
      "On travaille sur vos situations réelles : vos clients, vos objections, vos outils. L'objectif est simple, que ce que vous apprenez serve dès le lendemain.",
    ],
  },
  {
    id: "pedagogie-publics",
    category: "Pédagogie & Méthode",
    question: "À qui s'adressent vos formations ?",
    tag: "Sur mesure",
    answer: [
      "J'interviens auprès de quatre types de publics :",
      [
        "**Les entreprises et leurs équipes** : vente, relation client, management de proximité, intelligence artificielle au quotidien.",
        "**Les organismes de formation** : j'anime des parcours certifiants en sous-traitance (titres professionnels du commerce, BTS).",
        "**Les structures d'insertion et d'accompagnement** : recherche d'emploi, préparation aux entretiens, savoir-être professionnel, CléA.",
        "**Les personnes en reconversion** : pour reprendre confiance et construire un projet professionnel solide.",
      ],
    ],
  },
  {
    id: "pedagogie-ia-technique",
    category: "Pédagogie & Méthode",
    question: "Faut-il un niveau technique pour suivre les modules sur l'IA ?",
    tag: "Zéro prérequis",
    answer: [
      "**Non, aucun.** Les modules sur l'IA générative (ChatGPT, Claude, etc.) sont pensés pour des personnes qui n'ont jamais codé. On apprend à formuler des demandes claires et à utiliser ces outils dans les tâches de tous les jours : rédiger un mail, préparer un rendez-vous, synthétiser une réunion, répondre à un client.",
    ],
  },
  {
    id: "pedagogie-evaluation",
    category: "Pédagogie & Méthode",
    question: "Comment mesurez-vous les progrès des participants ?",
    tag: "Suivi",
    answer: [
      "Chaque formation commence par un **positionnement** (où en est chacun ?) et se termine par une **évaluation des acquis**, le plus souvent en situation pratique plutôt qu'en QCM.",
      "Vous recevez aussi un bilan de satisfaction. Pour les parcours longs, je fais des points d'étape pour ajuster le rythme et le contenu.",
    ],
  },

  // ── Tarifs & Financement ──
  {
    id: "tarifs",
    category: "Tarifs & Financement",
    question: "Combien coûte une formation ?",
    tag: "Devis gratuit",
    answer: [
      "Chaque formation est construite pour votre contexte, donc **le tarif est établi sur devis**. Il dépend surtout de la durée, du nombre de participants, du format (présentiel ou à distance) et du travail de conception sur mesure.",
      "Le premier échange de 20 minutes est offert et sans engagement. Je vous envoie ensuite un devis détaillé sous 48h.",
    ],
  },
  {
    id: "financement-opco",
    category: "Tarifs & Financement",
    question: "Ma formation peut-elle être financée par mon OPCO ?",
    tag: "Financement",
    answer: [
      "C'est souvent possible, mais **cela dépend du montage**. Pour qu'un OPCO prenne en charge une formation, elle doit en général être portée par un organisme certifié Qualiopi.",
      "Selon votre projet, je peux intervenir via un organisme de formation partenaire certifié, qui porte alors la convention et le dossier de financement. Lors de notre premier échange, on regarde ensemble la solution la plus simple pour vous : prise en charge OPCO, plan de développement des compétences ou financement direct par l'entreprise.",
    ],
  },
  {
    id: "financement-demarche",
    category: "Tarifs & Financement",
    question: "Quelles démarches pour obtenir une prise en charge ?",
    tag: "Accompagnement",
    answer: [
      "Je vous fournis les documents nécessaires : **devis, programme détaillé avec objectifs et modalités d'évaluation**. Vous les transmettez à votre OPCO avant le début de la formation.",
      "Comptez idéalement 3 à 4 semaines d'avance, les délais de traitement variant selon les OPCO. Je reste disponible pour répondre à leurs questions si besoin.",
    ],
  },

  // ── Organisation ──
  {
    id: "orga-lieu",
    category: "Organisation",
    question: "Où se déroulent les formations ?",
    tag: "Présentiel & visio",
    answer: [
      "Je suis basé à **Clermont-Ferrand** et je me déplace dans vos locaux, en Auvergne-Rhône-Alpes comme ailleurs en France.",
      "J'anime aussi des classes virtuelles (Teams, Zoom) avec des sous-groupes, des tableaux collaboratifs et des mises en situation en direct, pour garder le même rythme qu'en salle.",
    ],
  },
  {
    id: "orga-duree",
    category: "Organisation",
    question: "Quelle est la durée des formations ?",
    tag: "Formats souples",
    answer: [
      "Le format s'adapte à votre activité :",
      [
        "**Atelier (une demi-journée à une journée)** : pour lancer une équipe sur un sujet précis, par exemple l'IA au quotidien.",
        "**Formation intensive (2 à 3 jours)** : pour une vraie montée en compétences, avec beaucoup de mises en situation.",
        "**Parcours dans la durée** : des sessions espacées de quelques semaines, avec un suivi entre chaque, pour ancrer les nouvelles pratiques.",
      ],
    ],
  },
  {
    id: "orga-sur-mesure",
    category: "Organisation",
    question: "Pouvez-vous adapter le contenu à notre secteur ?",
    tag: "Sur mesure",
    answer: [
      "Oui, c'est même la base. Avant chaque intervention, je prends le temps d'un **entretien de cadrage** pour comprendre votre métier, vos outils, votre vocabulaire et ce qui coince aujourd'hui. Les cas pratiques et jeux de rôle sont ensuite construits à partir de votre réalité.",
    ],
  },
  {
    id: "orga-handicap",
    category: "Organisation",
    question: "La formation est-elle accessible aux personnes en situation de handicap ?",
    tag: "Accessibilité",
    answer: [
      "Oui. Je suis votre interlocuteur direct pour toute question d'accessibilité. Signalez-moi un besoin d'adaptation dès notre premier échange (supports, rythme, pauses, lieu, outils) : je mets en place les aménagements possibles et, si nécessaire, je vous oriente vers les partenaires spécialisés.",
    ],
  },
  {
    id: "orga-annulation",
    category: "Organisation",
    question: "Que se passe-t-il en cas d'annulation ou de report ?",
    tag: "Conditions",
    answer: [
      "Prévenez-moi par écrit le plus tôt possible. Une annulation ou un report demandé **plus de 15 jours avant** la formation est sans frais. Un report reste sans frais jusqu'à 48h avant, sauf frais de déplacement ou de salle déjà engagés.",
      "Le détail est précisé dans les conditions générales de vente.",
    ],
  },

  // ── Organismes de formation ──
  {
    id: "of-collaboration",
    category: "Organismes de formation",
    question: "Comment travaillez-vous avec les organismes de formation ?",
    tag: "Sous-traitance",
    answer: [
      "J'interviens régulièrement comme formateur sous-traitant pour des organismes de formation. Je respecte votre cahier des charges et vos exigences **Qualiopi** : émargements, évaluations des acquis, enquêtes de satisfaction, traçabilité.",
      "Je peux prendre en charge l'animation seule, ou aussi la conception des séquences et des supports.",
    ],
  },
  {
    id: "of-titres",
    category: "Organismes de formation",
    question: "Sur quels titres et diplômes intervenez-vous ?",
    tag: "Certifications",
    answer: [
      "Principalement sur les certifications du commerce et de la vente :",
      [
        "Titre professionnel **Conseiller de vente**",
        "Titre professionnel **Employé commercial**",
        "Titres professionnels **MUM et AMUM** (manager et assistant manager d'unité marchande)",
        "**BTS MCO (ex-MUM) et BTS NTC**",
      ],
      "Je suis titulaire du titre **Formateur professionnel d'adultes** (AFPA, 2020) et j'ai passé une dizaine d'années sur le terrain commercial avant de devenir formateur.",
    ],
  },
];

/** Transforme **texte** en gras */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-[#1A1A1A]">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

function renderAnswer(blocks: Block[]) {
  return (
    <div className="space-y-3.5">
      {blocks.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i} className="list-disc pl-5 space-y-2 text-[15px] text-[#1A1A1A]/80">
            {b.map((li, j) => <li key={j}>{rich(li)}</li>)}
          </ul>
        ) : (
          <p key={i}>{rich(b)}</p>
        )
      )}
    </div>
  );
}

function plainText(item: FaqItem) {
  return [item.question, item.tag ?? "", ...item.answer.flat()].join(" ").replace(/\*\*/g, "").toLowerCase();
}

const CATEGORIES = [
  "Tout",
  "Pédagogie & Méthode",
  "Tarifs & Financement",
  "Organisation",
  "Organismes de formation",
] as const;

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tout");
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaq = FAQ_DATA.filter((item) => {
    const matchCategory = selectedCategory === "Tout" || item.category === selectedCategory;
    const matchSearch =
      searchQuery.trim() === "" || plainText(item).includes(searchQuery.trim().toLowerCase());
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
              placeholder="Rechercher une question (ex : tarif, OPCO, visio, IA, durée…)"
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
                Me poser la question
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
                            {renderAnswer(item.answer)}
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
              Un échange direct, sans intermédiaire
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            >
              Vous ne trouvez pas la réponse que vous cherchez ?
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Chaque projet est différent. Écrivez-moi directement, je vous réponds personnellement sous 48h.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#FF6500] text-white text-xs font-extrabold uppercase tracking-widest hover:bg-[#FF7A1F] shadow-[0_4px_20px_rgba(255,101,0,0.4)] transition-all scale-100 hover:scale-[1.02]"
              >
                Me poser votre question
              </Link>
              <a
                href="mailto:clicprogress@gmail.com"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/10 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-white/15 border border-white/15 transition-all scale-100 hover:scale-[1.02]"
              >
                Envoyer un email
              </a>
            </div>
            <p className="text-[11px] font-mono text-white/40 pt-2">
              Réponse sous 48h · Clermont-Ferrand, France entière et à distance
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
