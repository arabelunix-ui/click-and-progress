"use client";

import React, { useState } from "react";
import { X, Trash2 } from "lucide-react";

const CONTACTS_INIT = [
  { id: 1, nom: "Marie Dupont", email: "marie@example.com", telephone: "06 12 34 56 78", sujet: "Reconversion professionnelle", message: "Bonjour, je souhaite me reconvertir dans le digital. Pouvez-vous m'accompagner ?", date: "2026-07-11T14:32:00", statut: "Nouveau" },
  { id: 2, nom: "Thomas Bernard", email: "thomas@example.com", telephone: "07 98 76 54 32", sujet: "Formation IA en équipe", message: "Nous avons une équipe de 12 personnes à former sur l'IA.", date: "2026-07-10T09:15:00", statut: "En cours" },
  { id: 3, nom: "Sonia Mekki", email: "sonia@example.com", telephone: "", sujet: "Soft skills commercial", message: "Je cherche une formation courte sur les techniques de vente.", date: "2026-07-09T16:00:00", statut: "Traité" },
  { id: 4, nom: "Julien Roche", email: "julien@example.com", telephone: "06 55 44 33 22", sujet: "Devis formation sur-mesure", message: "Pouvez-vous me faire un devis pour une formation sur-mesure pour notre PME ?", date: "2026-07-08T11:22:00", statut: "Traité" },
  { id: 5, nom: "Amira Chérif", email: "amira@example.com", telephone: "06 77 88 99 00", sujet: "Partenariat organisme formation", message: "Nous sommes un organisme de formation et souhaitons un partenariat.", date: "2026-07-07T08:45:00", statut: "Nouveau" },
];

const STATUT_COLOR: Record<string, string> = {
  "Nouveau": "bg-[#FF6500]/15 text-[#FF6500]",
  "En cours": "bg-blue-500/15 text-blue-400",
  "Traité": "bg-emerald-500/15 text-emerald-400",
};

const STATUTS = ["Nouveau", "En cours", "Traité"];

export default function ContactsPage() {
  const [contacts, setContacts] = useState(CONTACTS_INIT);
  const [selected, setSelected] = useState<typeof CONTACTS_INIT[0] | null>(null);
  const [filter, setFilter] = useState("Tous");

  function changeStatut(id: number, statut: string) {
    setContacts(contacts.map((c) => c.id === id ? { ...c, statut } : c));
    if (selected?.id === id) setSelected({ ...selected, statut });
  }

  function deleteContact(id: number) {
    setContacts(contacts.filter((c) => c.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  const filtered = filter === "Tous" ? contacts : contacts.filter((c) => c.statut === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Contacts</h1>
        <p className="text-sm text-white/40 mt-1">{contacts.filter(c => c.statut === "Nouveau").length} nouveaux messages</p>
      </div>

      {/* Filtres */}
      <div className="flex gap-2 flex-wrap">
        {["Tous", ...STATUTS].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
              filter === s ? "bg-[#FF6500] text-white" : "bg-white/5 text-white/50 hover:bg-white/10"
            }`}
          >
            {s} {s !== "Tous" && `(${contacts.filter(c => c.statut === s).length})`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        {/* Liste */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
          <div className="divide-y divide-white/[0.04]">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={`w-full text-left flex items-start gap-4 px-5 py-4 hover:bg-white/[0.03] transition-all ${selected?.id === c.id ? "bg-white/[0.04] border-l-2 border-[#FF6500]" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6500]/30 to-[#FF6500]/10 flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                  {c.nom[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-white truncate">{c.nom}</p>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${STATUT_COLOR[c.statut]}`}>{c.statut}</span>
                  </div>
                  <p className="text-xs text-white/60 font-medium truncate">{c.sujet}</p>
                  <p className="text-xs text-white/30 truncate mt-0.5">{c.message}</p>
                </div>
                <p className="text-[10px] text-white/30 shrink-0">
                  {new Date(c.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                </p>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-center py-12 text-white/30 text-sm">Aucun contact dans cette catégorie.</p>
            )}
          </div>
        </div>

        {/* Détail */}
        {selected ? (
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-5 h-fit sticky top-24">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-base font-bold text-white">{selected.nom}</h2>
                <p className="text-xs text-white/40">{selected.email}</p>
                {selected.telephone && <p className="text-xs text-white/40">{selected.telephone}</p>}
              </div>
              <button onClick={() => setSelected(null)} title="Fermer" className="text-white/30 hover:text-white/60 p-1 rounded-lg hover:bg-white/5 transition-all">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white/5">
              <p className="text-xs font-mono text-[#FF6500] uppercase tracking-widest mb-2">{selected.sujet}</p>
              <p className="text-sm text-white/70 leading-relaxed">{selected.message}</p>
            </div>

            <div>
              <p className="text-xs text-white/30 mb-2 font-mono uppercase tracking-wider">Changer le statut</p>
              <div className="flex gap-2 flex-wrap">
                {STATUTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => changeStatut(selected.id, s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selected.statut === s ? "bg-[#FF6500] text-white" : "bg-white/5 text-white/50 hover:bg-white/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => deleteContact(selected.id)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-semibold transition-all"
            >
              <Trash2 className="w-4 h-4" /> Supprimer ce contact
            </button>
          </div>
        ) : (
          <div className="rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.08] p-8 flex items-center justify-center h-fit">
            <p className="text-white/20 text-sm text-center">Sélectionne un contact<br />pour voir le détail</p>
          </div>
        )}
      </div>
    </div>
  );
}
