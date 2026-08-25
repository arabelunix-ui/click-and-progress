"use client";

import React, { useState } from "react";
import Link from "next/link";
import EditableText from "./EditableText";

export default function Briquettes() {
  const [activeIdx, setActiveIdx] = useState(0);

  const channels = [
    {
      title: "Organismes de formation",
      subtitle: "Sous-traitance & sessions clés en main",
      desc: "Conception et animation pédagogique de sessions de formation complètes, rigoureusement mappées sur vos référentiels de certification (Qualiopi, RNCP, RS).",
      tag: "Partenariat OF",
    },
    {
      title: "Entreprises & Équipes",
      subtitle: "Formations terrain finançables OPCO",
      desc: "Des modules sur mesure pensés pour générer un retour sur investissement direct et mesurable sur le terrain : montée en compétences IA, relation commerciale et leadership.",
      tag: "Prise en charge OPCO",
    },
    {
      title: "Insertion & Secteur IAE",
      subtitle: "Valorisation des publics en transition",
      desc: "Parcours adaptés pour les publics éloignés de l'emploi : travail approfondi sur la posture professionnelle, le savoir-être, la confiance et la réinsertion durable.",
      tag: "Impact social",
    },
  ];

  const activeChannel = channels[activeIdx];

  return (
    <section id="canaux" className="bg-[#FAF8F4] py-24 sm:py-32 border-b border-neutral-200/80 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-screen container matching image.png (White Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xl bg-white">
          
          {/* Left Column: Header & Accordion List */}
          <div className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200/80">
            
            {/* Top Title Block */}
            <div className="p-8 sm:p-12 border-b border-neutral-200/80 bg-white">
              <EditableText
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] block"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                initialText="Clic&Progress"
              />
              <EditableText
                as="p"
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-400 mt-1 block"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                initialText="Publics & Solutions"
              />
            </div>

            {/* Accordion List */}
            <div className="flex-1 flex flex-col justify-center">
              {channels.map((ch, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center justify-between p-8 sm:px-12 py-8 border-b border-neutral-100 last:border-b-0 cursor-pointer transition-all ${
                      isActive
                        ? "bg-[#FAF8F4] border-r-4 border-r-[#FF6500]"
                        : "hover:bg-neutral-50"
                    }`}
                  >
                    <span
                      className={`text-2xl sm:text-3xl font-normal transition-colors ${
                        isActive ? "text-[#1A1A1A] font-medium" : "text-neutral-400 hover:text-neutral-700"
                      }`}
                    >
                      <EditableText initialText={ch.title} />
                    </span>
                    <span
                      className={`text-2xl font-light transition-colors ${
                        isActive ? "text-[#FF6500]" : "text-neutral-300"
                      }`}
                    >
                      {isActive ? "✕" : "+"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Preview & Detail Text (Flush Ceiling) */}
          <div className="lg:col-span-6 relative flex flex-col justify-end min-h-[460px] lg:min-h-full p-8 sm:p-14 overflow-hidden bg-[#FAF8F4]">
            {/* Ambient Light Texture Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(255,101,0,0.08) 0%, transparent 65%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-[#FAF8F4]/40 to-transparent z-10" />
            </div>

            {/* Content Display */}
            <div className="relative z-20 max-w-xl">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#FF6500] mb-4">
                <EditableText initialText={activeChannel.tag} />
              </span>
              <EditableText
                as="h3"
                className="text-2xl sm:text-4xl font-bold text-[#1A1A1A] mb-5 leading-tight block"
                style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
                initialText={activeChannel.subtitle}
              />
              <EditableText
                as="p"
                multiline
                className="text-base sm:text-lg text-[#666660] font-sans leading-relaxed mb-8 block"
                initialText={activeChannel.desc}
              />

              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(255,101,0,0.2)] hover:shadow-[0_6px_28px_rgba(255,101,0,0.4)]"
              >
                <EditableText initialText="Échanger sur ce format" />
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform text-sm">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 rounded-3xl bg-[#1A1A1A] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <EditableText
              as="h3"
              className="text-2xl font-bold font-display mb-2 block"
              initialText="Un projet spécifique ou un cahier des charges ?"
            />
            <EditableText
              as="p"
              multiline
              className="text-sm text-neutral-300 block"
              initialText="Soufiyan étudie votre demande de formation et vous propose une ingénierie sur mesure sous 48h."
            />
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 px-8 py-4 rounded-full bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
          >
            <EditableText initialText="Contacter Soufiyan" />
          </Link>
        </div>

      </div>
    </section>
  );
}
