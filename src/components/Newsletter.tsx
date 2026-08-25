"use client";

import React, { useState } from "react";
import EditableText from "./EditableText";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [need, setNeed] = useState("ia");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#1A1A1A] text-white py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF6500]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF6500]/20 text-[#FF6500] text-xs font-bold uppercase tracking-widest mb-4">
            <EditableText initialText="RÉACTIVITÉ SOUS 48H GARANTIE" />
          </span>
          <EditableText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 block"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
            initialText="Prêt à déclencher votre prochain cap ?"
          />
          <EditableText
            as="p"
            multiline
            className="text-neutral-300 text-base max-w-2xl mx-auto font-sans block"
            initialText="Échangez directement avec Soufiyan sur vos besoins de formation (en présentiel à Clermont-Ferrand ou à distance). Zéro intermédiaire, accompagnement sur mesure."
          />
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-[#FF6500] rounded-3xl p-8 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#FF6500]/20 text-[#FF6500] flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
              ✓
            </div>
            <EditableText
              as="h3"
              className="text-xl font-bold text-white mb-2 block"
              initialText="Demande bien enregistrée !"
            />
            <p className="text-sm text-neutral-300">
              Merci {name}. <EditableText initialText="Soufiyan étudiera votre demande et vous répondra personnellement sous 48h." />
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                  <EditableText initialText="Votre Prénom & Nom" />
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6500]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                  <EditableText initialText="Votre Email Professionnel" />
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jean@entreprise.fr"
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6500]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                <EditableText initialText="Domaine de formation souhaité" />
              </label>
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6500]"
              >
                <option value="ia" className="bg-[#1A1A1A]">01 — Intelligence Artificielle au quotidien</option>
                <option value="reconversion" className="bg-[#1A1A1A]">02 — Reconversion &amp; Accompagnement au changement</option>
                <option value="softskills" className="bg-[#1A1A1A]">03 — Commerce, Vente &amp; Soft Skills</option>
                <option value="of" className="bg-[#1A1A1A]">04 — Partenariat / Sous-traitance Organisme de Formation</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)]"
            >
              Contacter Soufiyan (Réponse sous 48h)
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
