"use client";

import React, { useState } from "react";
import Link from "next/link";
import EditableText from "./EditableText";

/*
 * Formulaire de contact.
 *
 * Envoi : via Web3Forms (https://web3forms.com, gratuit). La clé d'accès est
 * publique par conception ; elle se règle dans Vercel avec la variable
 * NEXT_PUBLIC_WEB3FORMS_KEY (ou directement ci-dessous).
 * Tant qu'aucune clé n'est configurée, le formulaire ouvre la messagerie du
 * visiteur avec un email pré-rempli : aucun message n'est perdu.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const CONTACT_EMAIL = "clicprogress@gmail.com";

const PROFILS = [
  "Une entreprise",
  "Un organisme de formation",
  "Une structure d'insertion ou d'accompagnement",
  "Un particulier",
];

const DOMAINES = [
  "Commerce, vente et relation client",
  "Titres professionnels du commerce (Conseiller de vente, Employé commercial, MUM, NTC)",
  "Intelligence artificielle et outils numériques",
  "Soft skills et savoir-être professionnel",
  "Insertion, recherche d'emploi et préparation aux entretiens",
  "Bureautique (suite Office, découverte informatique)",
  "Formation de formateurs",
  "Sous-traitance pour un organisme de formation",
  "Autre / je ne sais pas encore",
];

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const inputClass =
  "w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6500]";
const labelClass = "block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profil, setProfil] = useState(PROFILS[0]);
  const [domaine, setDomaine] = useState(DOMAINES[0]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [botcheck, setBotcheck] = useState(false); // champ piège anti-spam
  const [status, setStatus] = useState<Status>("idle");

  const body = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Téléphone : ${phone || "non renseigné"}`,
    `Profil : ${profil}`,
    `Domaine : ${domaine}`,
    "",
    message,
  ].join("\n");

  const openMailto = () => {
    const subject = `Demande de contact : ${domaine}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botcheck) return;

    if (!WEB3FORMS_KEY) {
      openMailto();
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouvelle demande via le site : ${domaine}`,
          from_name: "Site Clic&Progress",
          replyto: email,
          name,
          email,
          telephone: phone || "non renseigné",
          profil,
          domaine,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(res.ok && data.success !== false ? "sent" : "error");
    } catch {
      setStatus("error");
    }
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 block [text-wrap:balance]"
            style={{ fontFamily: "var(--font-display)" }}
            initialText="Prêt à déclencher votre prochain cap ?"
          />
          <EditableText
            as="p"
            multiline
            className="text-neutral-300 text-base max-w-2xl mx-auto font-sans block"
            initialText="Échangez directement avec Soufiyan sur vos besoins de formation (en présentiel à Clermont-Ferrand ou à distance). Zéro intermédiaire, accompagnement sur mesure."
          />
        </div>

        {status === "sent" || status === "mailto" ? (
          <div className="bg-white/5 border border-[#FF6500] rounded-3xl p-8 text-center" role="status">
            <div className="w-12 h-12 rounded-full bg-[#FF6500]/20 text-[#FF6500] flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
              ✓
            </div>
            {status === "sent" ? (
              <>
                <h3 className="text-xl font-bold text-white mb-2">Message bien envoyé !</h3>
                <p className="text-sm text-neutral-300">
                  Merci {name.split(" ")[0]}. Je reviens vers vous personnellement sous 48h.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-2">Votre messagerie s&apos;est ouverte</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Votre message est prêt, il ne reste plus qu&apos;à cliquer sur « Envoyer ». Si rien ne s&apos;est
                  ouvert, écrivez-moi directement à{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#FF6500] underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cf-name" className={labelClass}>Prénom et nom *</label>
                <input id="cf-name" type="text" required autoComplete="name" value={name}
                  onChange={(e) => setName(e.target.value)} placeholder="Jean Dupont" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelClass}>Email *</label>
                <input id="cf-email" type="email" required autoComplete="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="jean@entreprise.fr" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-phone" className={labelClass}>Téléphone (facultatif)</label>
                <input id="cf-phone" type="tel" autoComplete="tel" value={phone}
                  onChange={(e) => setPhone(e.target.value)} placeholder="06 12 34 56 78" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-profil" className={labelClass}>Vous êtes *</label>
                <select id="cf-profil" value={profil} onChange={(e) => setProfil(e.target.value)} className={inputClass}>
                  {PROFILS.map((p) => (
                    <option key={p} value={p} className="bg-[#1A1A1A]">{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cf-domaine" className={labelClass}>Domaine de formation *</label>
              <select id="cf-domaine" value={domaine} onChange={(e) => setDomaine(e.target.value)} className={inputClass}>
                {DOMAINES.map((d) => (
                  <option key={d} value={d} className="bg-[#1A1A1A]">{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-message" className={labelClass}>Votre besoin *</label>
              <textarea id="cf-message" required rows={5} value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Public concerné, nombre de personnes, dates envisagées, objectifs…"
                className={`${inputClass} resize-y`} />
            </div>

            {/* Champ piège invisible : les robots le cochent, pas les humains */}
            <input type="checkbox" tabIndex={-1} autoComplete="off" aria-hidden="true"
              className="hidden" checked={botcheck} onChange={(e) => setBotcheck(e.target.checked)} />

            <label className="flex items-start gap-3 text-sm text-neutral-300 cursor-pointer">
              <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#FF6500]" />
              <span>
                J&apos;accepte que mes informations soient utilisées pour répondre à ma demande, conformément à la{" "}
                <Link href="/politique-de-confidentialite" className="text-[#FF6500] underline">
                  politique de confidentialité
                </Link>
                . *
              </span>
            </label>

            {status === "error" && (
              <p className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-xl px-4 py-3" role="alert">
                L&apos;envoi n&apos;a pas fonctionné. Réessayez, ou écrivez-moi directement à{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-xl bg-[#FF6500] hover:bg-[#FF7A1F] disabled:opacity-60 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)]"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
            <p className="text-xs text-neutral-500 text-center">* Champs obligatoires · Réponse sous 48h</p>
          </form>
        )}
      </div>
    </section>
  );
}
