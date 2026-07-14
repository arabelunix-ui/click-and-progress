"use client";

import React, { useState } from "react";

export default function ParametresPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "Clic&Progress",
    tagline: "Apprendre, ça doit donner envie",
    email: "contact@clic-progress.fr",
    telephone: "+33 6 XX XX XX XX",
    ville: "Clermont-Ferrand",
    delaiReponse: "48h",
    linkedIn: "https://linkedin.com/in/soufiyan",
    youtubeUrl: "",
    metaDescription: "Formations vivantes et accompagnement au changement par Soufiyan. Ce qu'on apprend sert dès le lendemain.",
    maintenanceMode: false,
    showLogosCarousel: true,
    showVideoSection: true,
    showNewsSection: true,
  });

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function Field({ label, name, type = "text", placeholder = "" }: { label: string; name: string; type?: string; placeholder?: string }) {
    return (
      <div>
        <label className="text-xs text-white/50 mb-1.5 block font-medium">{label}</label>
        <input
          type={type}
          value={(settings as any)[name]}
          onChange={(e) => setSettings({ ...settings, [name]: e.target.value })}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50 transition-colors"
        />
      </div>
    );
  }

  function Toggle({ label, name, description }: { label: string; name: string; description?: string }) {
    const val = (settings as any)[name] as boolean;
    return (
      <div className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0">
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          {description && <p className="text-xs text-white/40 mt-0.5">{description}</p>}
        </div>
        <button
          onClick={() => setSettings({ ...settings, [name]: !val })}
          className={`relative w-12 h-6 rounded-full transition-all duration-300 ${val ? "bg-[#FF6500]" : "bg-white/10"}`}
        >
          <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${val ? "left-7" : "left-1"}`} />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}>Paramètres</h1>
        <p className="text-sm text-white/40 mt-1">Configuration générale du site Clic&amp;Progress</p>
      </div>

      {/* Identité */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-5">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">🏷️ Identité du site</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom du site" name="siteName" />
          <Field label="Slogan" name="tagline" />
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-5">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">📬 Informations de contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Email de contact" name="email" type="email" />
          <Field label="Téléphone" name="telephone" />
          <Field label="Ville" name="ville" />
          <Field label="Délai de réponse affiché" name="delaiReponse" placeholder="Ex : 48h" />
        </div>
      </div>

      {/* Réseaux */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-5">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">🔗 Réseaux & liens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="LinkedIn" name="linkedIn" placeholder="https://linkedin.com/in/..." />
          <Field label="YouTube (embed URL)" name="youtubeUrl" placeholder="https://youtube.com/embed/..." />
        </div>
      </div>

      {/* SEO */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-5">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">🔍 SEO</h2>
        <div>
          <label className="text-xs text-white/50 mb-1.5 block font-medium">Meta description</label>
          <textarea
            value={settings.metaDescription}
            onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6500]/50 resize-none"
          />
          <p className="text-xs text-white/30 mt-1">{settings.metaDescription.length} / 160 caractères</p>
        </div>
      </div>

      {/* Sections visibles */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
        <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">👁️ Sections visibles sur le site</h2>
        <Toggle label="Carrousel partenaires" name="showLogosCarousel" description="Affiche la section 'Ils nous font confiance'" />
        <Toggle label="Section vidéo" name="showVideoSection" description="Affiche la vidéo YouTube sur la page d'accueil" />
        <Toggle label="Section actualités" name="showNewsSection" description="Affiche les dernières actualités" />
        <Toggle label="Mode maintenance" name="maintenanceMode" description="Affiche une page de maintenance aux visiteurs" />
      </div>

      {/* Save */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="px-8 py-3 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] text-white font-semibold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.35)]"
        >
          Enregistrer les modifications
        </button>
        {saved && (
          <span className="text-sm text-emerald-400 font-medium flex items-center gap-1.5">
            ✅ Sauvegardé !
          </span>
        )}
      </div>
    </div>
  );
}
