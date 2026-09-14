"use client";

import React from "react";
import Link from "next/link";
import EditableText from "./EditableText";

export default function Briquettes() {
  return (
    <section id="publics" className="py-24 bg-white text-[#17140F]">
      <div className="max-w-[1100px] mx-auto px-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mb-14 sm:mb-20">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4 text-center mx-auto w-full text-[#FF6500]">
          <EditableText initialText="POUR QUI" />
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-center mx-auto w-full text-[#1A1A1A]" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>
          <EditableText initialText="À qui s'adressent" />{" "}
          <span className="italic font-serif font-normal inline-block text-[#FF6500]">
            <EditableText initialText="les formations" />
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-5 font-sans font-normal leading-relaxed text-center w-full text-[#666660]">
          <EditableText
            multiline
            initialText="Que vous soyez un organisme de formation, une entreprise ou une structure d'accompagnement, la méthode reste la même : partir de votre réalité, pas d'un programme standard."
          />
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-[#17140F]/10 rounded-[10px] p-[30px_28px] transition-colors duration-150 hover:border-[#FF6500]">
            <EditableText
              as="h3"
              className="font-display text-[18px] font-medium text-[#17140F] mb-3 block"
              initialText="Organismes de formation"
            />
            <EditableText
              as="p"
              multiline
              className="text-[14.5px] text-[#6E6A62] leading-[1.6] block"
              initialText="Vous cherchez un formateur fiable en sous-traitance ? Je conçois et j'anime des sessions complètes, mappées sur vos référentiels de certification (Qualiopi, RNCP, RS)."
            />
          </div>

          {/* Card 2 */}
          <div className="border border-[#17140F]/10 rounded-[10px] p-[30px_28px] transition-colors duration-150 hover:border-[#FF6500]">
            <EditableText
              as="h3"
              className="font-display text-[18px] font-medium text-[#17140F] mb-3 block"
              initialText="Entreprises & équipes"
            />
            <EditableText
              as="p"
              multiline
              className="text-[14.5px] text-[#6E6A62] leading-[1.6] block"
              initialText="Vous voulez faire monter vos équipes en compétence sur la vente, le commerce ou l'intelligence artificielle ? On construit ensemble un parcours adapté à votre contexte."
            />
          </div>

          {/* Card 3 */}
          <div className="border border-[#17140F]/10 rounded-[10px] p-[30px_28px] transition-colors duration-150 hover:border-[#FF6500]">
            <EditableText
              as="h3"
              className="font-display text-[18px] font-medium text-[#17140F] mb-3 block"
              initialText="Structures d'insertion"
            />
            <EditableText
              as="p"
              multiline
              className="text-[14.5px] text-[#6E6A62] leading-[1.6] block"
              initialText="Vous accompagnez des personnes en transition professionnelle ? Mon approche s'adapte à leur rythme, pour redonner confiance autant que compétences."
            />
          </div>
        </div>

        <div className="mt-11 flex flex-col md:flex-row md:items-center justify-between border-t border-[#17140F]/10 pt-8 gap-4">
          <div className="text-[15px] text-[#6E6A62] max-w-[44ch]">
            <b className="font-semibold text-[#17140F]">
              <EditableText initialText="Un projet spécifique ou un cahier des charges ?" />
            </b>{" "}
            <EditableText initialText="J'étudie votre demande et vous propose une ingénierie sur mesure sous 48h." />
          </div>
          <Link
            href="#contact"
            className="bg-[#FF6500] text-white px-6 py-[13px] rounded-[6px] text-[14.5px] font-semibold inline-block whitespace-nowrap hover:bg-[#FF7A1F] transition-colors"
          >
            <EditableText initialText="Réserver un échange" />
          </Link>
        </div>
      </div>
    </section>
  );
}
