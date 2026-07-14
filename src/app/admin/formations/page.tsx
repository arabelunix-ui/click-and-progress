"use client";

import React, { useState } from "react";
import { Plus, Edit, Trash2, PlusCircle } from "lucide-react";

const FORMATIONS_INIT = [
  { id: 1, titre: "Intelligence Artificielle en entreprise", categorie: "IA", duree: "2 jours", public: "Équipes & Managers", statut: "Actif", inscrits: 14 },
  { id: 2, titre: "Techniques de vente & relation client", categorie: "Commerce", duree: "1 jour", public: "Commerciaux", statut: "Actif", inscrits: 21 },
  { id: 3, titre: "Soft Skills & leadership", categorie: "Soft Skills", duree: "2 jours", public: "Tous profils", statut: "Actif", inscrits: 18 },
  { id: 4, titre: "Reconversion professionnelle guidée", categorie: "Reconversion", duree: "3 jours", public: "Particuliers", statut: "Brouillon", inscrits: 0 },
  { id: 5, titre: "Prompting & outils IA au quotidien", categorie: "IA", duree: "1 jour", public: "Tous profils", statut: "Actif", inscrits: 9 },
];

const STATUT_COLOR: Record<string, string> = {
  "Actif": "bg-emerald-500/15 text-emerald-400",
  "Brouillon": "bg-white/10 text-white/40",
  "Archivé": "bg-red-500/15 text-red-400",
};

const CAT_COLOR: Record<string, string> = {
  "IA": "bg-violet-500/15 text-violet-400",
  "Commerce": "bg-blue-500/15 text-blue-400",
  "Soft Skills": "bg-amber-500/15 text-amber-400",
  "Reconversion": "bg-[#FF6500]/15 text-[#FF6500]",
};

export default function FormationsPage() {
  const [formations, setFormations] = useState(FORMATIONS_INIT);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ titre: "", categorie: "IA", duree: "", public: "", statut: "Brouillon" });

  function handleSave() {
    if (!form.titre) return;
    if (editId !== null) {
      setFormations(formations.map((f) => f.id === editId ? { ...f, ...form } : f));
      setEditId(null);
    } else {
      setFormations([...formations, { id: Date.now(), ...form, inscrits: 0 }]);
    }
    setForm({ titre: "", categorie: "IA", duree: "", public: "", statut: "Brouillon" });
    setShowForm(false);
  }

  function handleEdit(f: typeof FORMATIONS_INIT[0]) {
    setForm({ titre: f.titre, categorie: f.categorie, duree: f.duree, public: f.public, statut: f.statut });
    setEditId(f.id);
    setShowForm(true);
  }

  function handleDelete(id: number) {
    setFormations(formations.filter((f) => f.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Formations</h1>
          <p className="text-sm text-white/40 mt-1">{formations.length} formations au catalogue</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm({ titre: "", categorie: "IA", duree: "", public: "", statut: "Brouillon" }); }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.35)]"
        >
          <Plus className="w-4 h-4" /> Nouvelle formation
        </button>
      </div>

      {/* Formulaire */}
      {showForm && (
        <div className="rounded-2xl bg-white/[0.04] border border-[#FF6500]/30 p-6 space-y-4">
          <div className="flex items-center gap-2">
            {editId ? <Edit className="w-4 h-4 text-[#FF6500]" /> : <PlusCircle className="w-4 h-4 text-[#FF6500]" />}
            <h2 className="text-sm font-semibold text-white">{editId ? "Modifier" : "Ajouter"} une formation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs text-white/50 mb-1 block">Titre *</label>
              <input value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50"
                placeholder="Ex : Formation IA pour managers" />
            </div>
            {[
              { key: "categorie", label: "Catégorie", type: "select", options: ["IA", "Commerce", "Soft Skills", "Reconversion"] },
              { key: "duree", label: "Durée", type: "text", placeholder: "Ex : 2 jours" },
              { key: "public", label: "Public cible", type: "text", placeholder: "Ex : Commerciaux" },
              { key: "statut", label: "Statut", type: "select", options: ["Actif", "Brouillon", "Archivé"] },
            ].map(({ key, label, type, options, placeholder }: any) => (
              <div key={key}>
                <label className="text-xs text-white/50 mb-1 block">{label}</label>
                {type === "select" ? (
                  <select value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF6500]/50">
                    {options.map((o: string) => <option key={o}>{o}</option>)}
                  </select>
                ) : (
                  <input value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50" />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} className="px-5 py-2 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all">
              {editId ? "Mettre à jour" : "Ajouter"}
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all">
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {["Titre", "Catégorie", "Durée", "Public", "Inscrits", "Statut", "Actions"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-mono uppercase tracking-widest text-white/30">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {formations.map((f) => (
              <tr key={f.id} className="hover:bg-white/[0.02] transition-all">
                <td className="px-5 py-4 text-white font-medium">{f.titre}</td>
                <td className="px-5 py-4">
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full ${CAT_COLOR[f.categorie] ?? "bg-white/10 text-white/50"}`}>
                    {f.categorie}
                  </span>
                </td>
                <td className="px-5 py-4 text-white/60">{f.duree}</td>
                <td className="px-5 py-4 text-white/60">{f.public}</td>
                <td className="px-5 py-4 text-white font-semibold">{f.inscrits}</td>
                <td className="px-5 py-4">
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full ${STATUT_COLOR[f.statut]}`}>
                    {f.statut}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(f)} title="Modifier" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"><Edit className="w-3.5 h-3.5" /></button>
                    <button onClick={() => handleDelete(f.id)} title="Supprimer" className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
