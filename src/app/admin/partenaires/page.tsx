"use client";

import React, { useState } from "react";
import { Plus, PlusCircle, Eye, EyeOff, Trash2 } from "lucide-react";

const PARTENAIRES_INIT = [
  { id: 1, nom: "ADREC Formations", categorie: "Formation & Transformation", logo: "/logo/LOGO_ADREC_COUL_CMJN.svg", visible: true },
  { id: 2, nom: "Intelcia Group", categorie: "Grand Groupe International", logo: "/logo/intelcia_old_logo_10.svg", visible: true },
  { id: 3, nom: "Alors Formation", categorie: "Organisme de Formation", logo: "/logo/AlorsFormation_Logo.svg", visible: true },
  { id: 4, nom: "Nellapp", categorie: "Innovation & Tech", logo: "/logo/0b38b34d-8ad7-11ee-bff-06bd0f937899-logo.svg", visible: true },
  { id: 5, nom: "ABC Déménagements", categorie: "Logistique & Services", logo: "/logo/images.svg", visible: true },
];

export default function PartenairesPage() {
  const [partenaires, setPartenaires] = useState(PARTENAIRES_INIT);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ nom: "", categorie: "", logo: "" });

  function handleAdd() {
    if (!form.nom) return;
    setPartenaires([...partenaires, { id: Date.now(), ...form, visible: true }]);
    setForm({ nom: "", categorie: "", logo: "" });
    setShowForm(false);
  }

  function toggleVisible(id: number) {
    setPartenaires(partenaires.map((p) => p.id === id ? { ...p, visible: !p.visible } : p));
  }

  function handleDelete(id: number) {
    setPartenaires(partenaires.filter((p) => p.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Partenaires</h1>
          <p className="text-sm text-white/40 mt-1">{partenaires.length} partenaires affichés sur le site</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.35)]"
        >
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl bg-white/[0.04] border border-[#FF6500]/30 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4 text-[#FF6500]" />
            <h2 className="text-sm font-semibold text-white">Nouveau partenaire</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { key: "nom", label: "Nom", placeholder: "Ex : ADREC Formations" },
              { key: "categorie", label: "Catégorie", placeholder: "Ex : Organisme de Formation" },
              { key: "logo", label: "Chemin logo (public/)", placeholder: "Ex : /logo/mon-logo.svg" },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="text-xs text-white/50 mb-1 block">{label}</label>
                <input
                  value={(form as any)[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={handleAdd} className="px-5 py-2 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all">Ajouter</button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all">Annuler</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {partenaires.map((p) => (
          <div
            key={p.id}
            className={`rounded-2xl border p-5 flex flex-col gap-4 transition-all ${
              p.visible ? "bg-white/[0.03] border-white/[0.06]" : "bg-white/[0.01] border-white/[0.03] opacity-50"
            }`}
          >
            {/* Logo */}
            <div className="h-16 flex items-center justify-center bg-white/5 rounded-xl p-4">
              <img src={p.logo} alt={p.nom} className={`max-h-10 w-auto object-contain transition-all ${p.visible ? "" : "grayscale"}`} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">{p.nom}</p>
              <p className="text-xs text-white/40 mt-0.5">{p.categorie}</p>
            </div>

            <div className="flex items-center gap-2 mt-auto">
              <button
                onClick={() => toggleVisible(p.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  p.visible ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25" : "bg-white/5 text-white/40 hover:bg-white/10"
                }`}
              >
                {p.visible ? (
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
                onClick={() => handleDelete(p.id)}
                className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                title="Supprimer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
