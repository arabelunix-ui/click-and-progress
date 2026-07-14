"use client";

import React, { useState } from "react";
import { Star, Eye, EyeOff, Trash2 } from "lucide-react";

const AVIS_INIT = [
  { id: 1, auteur: "Claire M.", email: "claire@example.com", note: 5, texte: "Formation bluffante, je repars avec des réflexes concrets utilisables dès le lendemain.", formation: "Soft Skills Commerce", date: "2026-07-10", visible: true },
  { id: 2, auteur: "Karim B.", email: "karim@example.com", note: 5, texte: "Soufiyan sait exactement comment nous faire progresser. Les ateliers pratiques sont top.", formation: "IA en entreprise", date: "2026-07-08", visible: true },
  { id: 3, auteur: "Nadia L.", email: "nadia@example.com", note: 4, texte: "Très bien structuré, les ateliers pratiques font la différence. Quelques points à améliorer.", formation: "Reconversion", date: "2026-07-05", visible: true },
  { id: 4, auteur: "Pierre D.", email: "pierre@example.com", note: 3, texte: "Correct mais j'attendais plus de contenu sur l'aspect technique.", formation: "IA en entreprise", date: "2026-07-01", visible: false },
  { id: 5, auteur: "Sara H.", email: "sara@example.com", note: 5, texte: "Ambiance super et formatrice excellente. Je recommande à 100%.", formation: "Soft Skills Commerce", date: "2026-06-28", visible: true },
];

export default function AvisPage() {
  const [avis, setAvis] = useState(AVIS_INIT);

  function toggleVisible(id: number) {
    setAvis(avis.map((a) => a.id === id ? { ...a, visible: !a.visible } : a));
  }

  function deleteAvis(id: number) {
    setAvis(avis.filter((a) => a.id !== id));
  }

  const avgNote = avis.length ? (avis.reduce((s, a) => s + a.note, 0) / avis.length).toFixed(1) : "—";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Avis & Témoignages</h1>
          <div className="flex items-center gap-1.5 text-sm text-white/40 mt-1">
            <span>{avis.length} avis · Moyenne : {avgNote}</span>
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" />
          </div>
        </div>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Note moyenne", value: `${avgNote} / 5`, icon: Star, color: "text-amber-400" },
          { label: "Avis visibles", value: avis.filter(a => a.visible).length, icon: Eye, color: "text-emerald-400" },
          { label: "Avis masqués", value: avis.filter(a => !a.visible).length, icon: EyeOff, color: "text-white/40" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-white/40">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Liste des avis */}
      <div className="space-y-3">
        {avis.map((a) => (
          <div
            key={a.id}
            className={`rounded-2xl border p-5 transition-all ${
              a.visible ? "bg-white/[0.03] border-white/[0.06]" : "bg-white/[0.01] border-white/[0.03] opacity-60"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">
                  {a.auteur[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <p className="text-sm font-semibold text-white">{a.auteur}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < a.note ? "text-amber-400 fill-amber-400" : "text-white/15"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#FF6500] bg-[#FF6500]/10 px-2 py-0.5 rounded-full">{a.formation}</span>
                    <span className="text-[10px] text-white/30 ml-auto">{a.date}</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed italic">&ldquo;{a.texte}&rdquo;</p>
                  <p className="text-[10px] text-white/30 mt-1">{a.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleVisible(a.id)}
                  title={a.visible ? "Masquer" : "Afficher"}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    a.visible
                      ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                      : "bg-white/5 text-white/30 hover:bg-white/10"
                  }`}
                >
                  {a.visible ? (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Visible
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Masqué
                    </>
                  )}
                </button>
                <button
                  onClick={() => deleteAvis(a.id)}
                  className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                  title="Supprimer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
