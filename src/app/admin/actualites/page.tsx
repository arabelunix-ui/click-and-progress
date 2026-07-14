"use client";

import React, { useState } from "react";

const ACTU_INIT = [
  { id: 1, titre: "Clic&Progress à Viva Technology 2026", categorie: "Événement", date: "2026-07-01", extrait: "Soufiyan présente ses méthodes pédagogiques innovantes à VivaTech.", visible: true },
  { id: 2, titre: "Nouveau programme IA pour les PME", categorie: "Formation", date: "2026-06-15", extrait: "Un programme complet pour former vos équipes à l'IA en seulement 1 journée.", visible: true },
  { id: 3, titre: "Témoignage : comment l'IA a transformé notre service client", categorie: "Témoignage", date: "2026-06-01", extrait: "Retour d'expérience d'Intelcia après 6 mois d'accompagnement.", visible: false },
];

const CATS = ["Événement", "Formation", "Témoignage", "Presse", "Autre"];

export default function ActualitesPage() {
  const [actus, setActus] = useState(ACTU_INIT);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ titre: "", categorie: "Événement", date: "", extrait: "" });

  function handleSave() {
    if (!form.titre) return;
    if (editId !== null) {
      setActus(actus.map((a) => a.id === editId ? { ...a, ...form } : a));
      setEditId(null);
    } else {
      setActus([...actus, { id: Date.now(), ...form, visible: true }]);
    }
    setForm({ titre: "", categorie: "Événement", date: "", extrait: "" });
    setShowForm(false);
  }

  function handleEdit(a: typeof ACTU_INIT[0]) {
    setForm({ titre: a.titre, categorie: a.categorie, date: a.date, extrait: a.extrait });
    setEditId(a.id);
    setShowForm(true);
  }

  function toggleVisible(id: number) {
    setActus(actus.map((a) => a.id === id ? { ...a, visible: !a.visible } : a));
  }

  function handleDelete(id: number) {
    setActus(actus.filter((a) => a.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Actualités</h1>
          <p className="text-sm text-white/40 mt-1">{actus.length} articles · {actus.filter(a => a.visible).length} publiés</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm({ titre: "", categorie: "Événement", date: "", extrait: "" }); }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.35)]"
        >
          + Nouvel article
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl bg-white/[0.04] border border-[#FF6500]/30 p-6 space-y-4">
          <h2 className="text-sm font-semibold text-white">{editId ? "✏️ Modifier" : "➕ Nouvel"} article</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs text-white/50 mb-1 block">Titre *</label>
              <input value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50"
                placeholder="Titre de l'article" />
            </div>
            <div>
              <label className="text-xs text-white/50 mb-1 block">Catégorie</label>
              <select value={form.categorie} onChange={(e) => setForm({ ...form, categorie: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF6500]/50">
                {CATS.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-white/50 mb-1 block">Date de publication</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF6500]/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-white/50 mb-1 block">Extrait / Résumé</label>
              <textarea value={form.extrait} onChange={(e) => setForm({ ...form, extrait: e.target.value })} rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50 resize-none"
                placeholder="Résumé de l'article affiché sur le site..." />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} className="px-5 py-2 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all">
              {editId ? "Mettre à jour" : "Publier"}
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all">Annuler</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {actus.map((a) => (
          <div key={a.id} className={`rounded-2xl border p-5 flex gap-4 items-start transition-all ${a.visible ? "bg-white/[0.03] border-white/[0.06]" : "bg-white/[0.01] border-white/[0.03] opacity-60"}`}>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <span className="text-[10px] font-mono font-bold text-[#FF6500] bg-[#FF6500]/10 px-2.5 py-1 rounded-full">{a.categorie}</span>
                <span className="text-[10px] text-white/30">{a.date}</span>
                {!a.visible && <span className="text-[10px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded-full">Brouillon</span>}
              </div>
              <p className="text-sm font-semibold text-white mb-1">{a.titre}</p>
              <p className="text-xs text-white/50 leading-relaxed">{a.extrait}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => handleEdit(a)} className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all">✏️</button>
              <button onClick={() => toggleVisible(a.id)} className={`px-3 py-2 rounded-xl text-xs transition-all ${a.visible ? "bg-emerald-500/15 text-emerald-400" : "bg-white/5 text-white/40"}`}>
                {a.visible ? "👁️" : "🚫"}
              </button>
              <button onClick={() => handleDelete(a.id)} className="px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs transition-all">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
