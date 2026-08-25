"use client";

import React from "react";
import Image from "next/image";
import EditableText from "../EditableText";

export default function AboutHero() {
  return (
    <section className="relative bg-[#F9F8F6] border-b border-[#E8E5DF] overflow-hidden">
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,101,0,0.07) 0%, transparent 65%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-4 block">
            <span className="w-5 h-px bg-[#FF6500]" />
            <EditableText initialText="À propos de moi" />
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            <EditableText initialText="Bonjour, je suis " />
            <span className="text-[#FF6500]">
              <EditableText initialText="Soufiyan" />
            </span>
          </h1>
          <EditableText
            as="p"
            multiline
            className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-6 max-w-xl font-normal block"
            initialText="Formateur indépendant basé à Clermont-Ferrand, j'aide les équipes et les individus à progresser là où ça compte vraiment — pas dans des salles de cours théoriques, mais dans la réalité concrète de leur travail et de leurs ambitions."
          />
          <EditableText
            as="p"
            multiline
            className="text-sm text-[#1A1A1A]/55 leading-relaxed max-w-xl font-sans block"
            initialText="Ma philosophie repose sur une pédagogie vivante, active et exigeante, conçue pour générer des réflexes durables dès le premier jour."
          />
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[340px] h-[420px] sm:w-[380px] sm:h-[460px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF6500]/10 to-transparent border border-[#FF6500]/20 translate-x-4 translate-y-4" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#E8E5DF] shadow-2xl">
              <Image
                src="/portrait-hero.png"
                alt="Soufiyan — Clic&Progress"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#E8E5DF]">
              <p className="text-xs font-mono uppercase tracking-widest text-[#FF6500] font-bold">
                <EditableText initialText="Clermont-Ferrand" />
              </p>
              <p className="text-sm font-semibold text-[#1A1A1A] mt-0.5">
                <EditableText initialText="France entière · Visio" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
