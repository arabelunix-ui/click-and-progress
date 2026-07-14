"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Star,
  Mail,
  Handshake,
  PlusCircle,
  ShieldCheck,
  Newspaper,
  Settings,
} from "lucide-react";

/* ── Données mock ── */
const STATS = [
  { label: "Formations actives", value: "8", delta: "+2 ce mois", icon: GraduationCap, color: "#FF6500" },
  { label: "Avis & témoignages", value: "47", delta: "+5 cette semaine", icon: Star, color: "#F59E0B" },
  { label: "Contacts reçus", value: "23", delta: "+8 ce mois", icon: Mail, color: "#10B981" },
  { label: "Partenaires", value: "5", delta: "Stable", icon: Handshake, color: "#6366F1" },
];

const RECENT_CONTACTS = [
  { name: "Marie Dupont", email: "marie@example.com", sujet: "Reconversion professionnelle", date: "Aujourd'hui, 14h32", status: "Nouveau" },
  { name: "Thomas Bernard", email: "thomas@example.com", sujet: "Formation IA en équipe", date: "Hier, 09h15", status: "En cours" },
  { name: "Sonia Mekki", email: "sonia@example.com", sujet: "Soft skills commercial", date: "10 juil.", status: "Traité" },
  { name: "Julien Roche", email: "julien@example.com", sujet: "Devis formation sur-mesure", date: "09 juil.", status: "Traité" },
];

const RECENT_AVIS = [
  { auteur: "Claire M.", note: 5, texte: "Formation bluffante, je repars avec des réflexes concrets.", formation: "Soft Skills Commerce" },
  { auteur: "Karim B.", note: 5, texte: "Soufiyan sait exactement comment nous faire progresser.", formation: "IA en entreprise" },
  { auteur: "Nadia L.", note: 4, texte: "Très bien structuré, les ateliers pratiques font la différence.", formation: "Reconversion" },
];

const STATUS_COLOR: Record<string, string> = {
  "Nouveau": "bg-[#FF6500]/15 text-[#FF6500]",
  "En cours": "bg-blue-500/15 text-blue-400",
  "Traité": "bg-emerald-500/15 text-emerald-400",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* ── Titre ── */}
      <div>
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>
          Vue d&apos;ensemble
        </h1>
        <p className="text-sm text-white/40 mt-1">Bienvenue Soufiyan — voici l&apos;état du site Clic&amp;Progress.</p>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.05] transition-all overflow-hidden group"
            >
              {/* Glow */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: s.color }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                    style={{ backgroundColor: `${s.color}15`, color: s.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold"
                    style={{ color: s.color, backgroundColor: `${s.color}20` }}
                  >
                    {s.delta}
                  </span>
                </div>
                <p className="text-4xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-white/40 mt-1 font-medium">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Grille principale ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Contacts récents */}
        <div className="xl:col-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF6500]" />
              <h2 className="text-sm font-semibold text-white">Contacts récents</h2>
            </div>
            <Link href="/admin/contacts" className="text-xs text-[#FF6500] hover:underline font-mono">Voir tout →</Link>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {RECENT_CONTACTS.map((c) => (
              <div key={c.email} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-all">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF6500]/40 to-[#FF6500]/10 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {c.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{c.name}</p>
                  <p className="text-xs text-white/40 truncate">{c.sujet}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${STATUS_COLOR[c.status]}`}>
                    {c.status}
                  </span>
                  <p className="text-[10px] text-white/30 mt-1">{c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Derniers avis */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#F59E0B]" />
              <h2 className="text-sm font-semibold text-white">Derniers avis</h2>
            </div>
            <Link href="/admin/avis" className="text-xs text-[#FF6500] hover:underline font-mono">Voir tout →</Link>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {RECENT_AVIS.map((a, i) => (
              <div key={i} className="px-6 py-4 hover:bg-white/[0.02] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                    {a.auteur[0]}
                  </div>
                  <p className="text-sm font-medium text-white">{a.auteur}</p>
                  <div className="flex gap-0.5 ml-auto">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3 h-3 ${j < a.note ? "text-amber-400 fill-amber-400" : "text-white/20"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-white/50 italic leading-relaxed">&ldquo;{a.texte}&rdquo;</p>
                <span className="inline-block mt-2 text-[10px] font-mono text-[#FF6500] bg-[#FF6500]/10 px-2 py-0.5 rounded-full">
                  {a.formation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Accès rapides ── */}
      <div>
        <h2 className="text-sm font-semibold text-white/50 uppercase tracking-widest font-mono mb-4">Accès rapides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { href: "/admin/formations", label: "Ajouter formation", icon: PlusCircle, color: "text-[#FF6500]" },
            { href: "/admin/avis", label: "Modérer avis", icon: ShieldCheck, color: "text-[#F59E0B]" },
            { href: "/admin/partenaires", label: "Partenaires", icon: Handshake, color: "text-[#6366F1]" },
            { href: "/admin/contacts", label: "Contacts", icon: Mail, color: "text-[#10B981]" },
            { href: "/admin/actualites", label: "Actualité", icon: Newspaper, color: "text-[#EC4899]" },
            { href: "/admin/parametres", label: "Paramètres", icon: Settings, color: "text-white/70" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-[#FF6500]/30 transition-all group text-center"
              >
                <Icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
