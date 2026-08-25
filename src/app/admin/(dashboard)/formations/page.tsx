"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, PlusCircle, X } from "lucide-react";

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
  const [formations, setFormations] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [form, setForm] = useState({ level: "N3", titre: "", categorie: "Commerce", duree: "", public: "", statut: "Brouillon" });
  const [loading, setLoading] = useState(true);

  const loadFormations = async () => {
    try {
      const res = await fetch("/api/formations");
      const data = await res.json();
      setFormations(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFormations();
  }, []);

  async function handleSave() {
    if (!form.titre) return;
    
    const payload = editId ? { id: editId, ...form } : { ...form, inscrits: 0 };
    
    try {
      const res = await fetch("/api/formations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        await loadFormations();
        setForm({ level: "N3", titre: "", categorie: "Commerce", duree: "", public: "", statut: "Brouillon" });
        setShowForm(false);
        setEditId(null);
      }
    } catch (e) {
      console.error(e);
    }
  }

  function handleEdit(f: any) {
    setForm({ level: f.level || "N3", titre: f.titre, categorie: f.categorie, duree: f.duree, public: f.public, statut: f.statut });
    setEditId(f.id);
    setShowForm(true);
  }

  function requestDelete(id: number) {
    setDeleteId(id);
  }

  async function confirmDelete() {
    if (deleteId === null) return;
    try {
      const res = await fetch("/api/formations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteId }),
      });
      if (res.ok) {
        await loadFormations();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setDeleteId(null);
    }
  }

  if (loading) {
    return <div className="text-white/50 p-6">Chargement des formations...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Formations</h1>
          <p className="text-sm text-white/40 mt-1">{formations.length} formations au catalogue</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm({ level: "N3", titre: "", categorie: "Commerce", duree: "", public: "", statut: "Brouillon" }); }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.35)]"
        >
          <Plus className="w-4 h-4" /> Nouvelle formation
        </button>
      </div>

      {/* Formulaire Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl p-6 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              {editId ? <Edit className="w-5 h-5 text-[#FF6500]" /> : <PlusCircle className="w-5 h-5 text-[#FF6500]" />}
              <h2 className="text-lg font-bold text-white">{editId ? "Modifier" : "Ajouter"} une formation</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="text-xs text-white/50 mb-1.5 block uppercase tracking-wider font-semibold">Titre *</label>
                <input value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50 transition-colors"
                  placeholder="Ex : Formation IA pour managers" />
              </div>
              {[
                { key: "level", label: "Niveau", type: "text", placeholder: "Ex : N3, N4, etc." },
                { key: "categorie", label: "Catégorie", type: "select", options: ["IA", "Commerce", "Soft Skills", "Reconversion"] },
                { key: "duree", label: "Durée", type: "text", placeholder: "Ex : 2 jours" },
                { key: "public", label: "Public cible", type: "text", placeholder: "Ex : Commerciaux" },
                { key: "statut", label: "Statut", type: "select", options: ["Actif", "Brouillon", "Archivé"] },
              ].map(({ key, label, type, options, placeholder }: any) => (
                <div key={key}>
                  <label className="text-xs text-white/50 mb-1.5 block uppercase tracking-wider font-semibold">{label}</label>
                  {type === "select" ? (
                    <select value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6500]/50 transition-colors">
                      {options.map((o: string) => <option key={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50 transition-colors" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-3 justify-end pt-4 border-t border-white/10">
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 text-sm font-semibold transition-all">
                Annuler
              </button>
              <button onClick={handleSave} className="px-6 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.2)]">
                {editId ? "Mettre à jour" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {["Niveau", "Titre", "Catégorie", "Durée", "Public", "Statut", "Actions"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-mono uppercase tracking-widest text-white/30">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {formations.map((f) => (
              <tr key={f.id} className="hover:bg-white/[0.02] transition-all">
                <td className="px-5 py-4 text-white font-medium">{f.level || "—"}</td>
                <td className="px-5 py-4 text-white font-medium">{f.titre}</td>
                <td className="px-5 py-4">
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full ${CAT_COLOR[f.categorie] ?? "bg-white/10 text-white/50"}`}>
                    {f.categorie}
                  </span>
                </td>
                <td className="px-5 py-4 text-white/60">{f.duree}</td>
                <td className="px-5 py-4 text-white/60">{f.public}</td>
                <td className="px-5 py-4">
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full ${STATUT_COLOR[f.statut]}`}>
                    {f.statut}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(f)} title="Modifier" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"><Edit className="w-3.5 h-3.5" /></button>
                    <button onClick={() => requestDelete(f.id)} title="Supprimer" className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-white mb-2">Confirmer la suppression</h3>
            <p className="text-sm text-white/60 mb-6">Êtes-vous sûr de vouloir supprimer cette formation ? Cette action est irréversible.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteId(null)} className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 text-sm font-semibold transition-all">
                Annuler
              </button>
              <button onClick={confirmDelete} className="px-5 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(239,68,68,0.2)]">
                Oui, supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
