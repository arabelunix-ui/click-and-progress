"use client";

import React from "react";
import EditableText from "../EditableText";

export default function AboutCTA() {
  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-24 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
          <EditableText initialText="Philosophie" />
        </span>
        <EditableText
          as="h2"
          className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight block"
          style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          initialText="Une approche authentique et humaine"
        />
        <EditableText
          as="p"
          multiline
          className="text-white/60 text-sm sm:text-base leading-relaxed block"
          initialText="Je mets mon expérience et ma passion de la transmission au service de votre évolution professionnelle, dans une démarche directe, concrète et profondément bienveillante."
        />
      </div>
    </section>
  );
}
