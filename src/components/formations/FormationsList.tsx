"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CATEGORIES = [
  { id: "all", label: "Toutes" },
  { id: "commerce", label: "Commerce & Vente" },
  { id: "insertion", label: "Insertion & Accompagnement" },
  { id: "numerique", label: "Numérique & Bureautique" },
  { id: "formateurs", label: "Formation de formateurs" },
];

const FORMATIONS = [
  { cat: "commerce", badge: "N3", title: "TP Employé Commercial" },
  { cat: "commerce", badge: "N3", title: "TP Conseiller de Vente" },
  { cat: "commerce", badge: "N4", title: "TP Assistant Manager d'Unité Marchande" },
  { cat: "commerce", badge: "N5", title: "TP Manager d'Unité Marchande" },
  { cat: "commerce", badge: "N4", title: "TP Conseiller Commercial" },
  { cat: "commerce", badge: "N5", title: "TP Négociateur Technico-Commercial" },
  { cat: "commerce", badge: "N6", title: "Bachelor Management & Gestion des Entreprises" },
  { cat: "commerce", badge: "N6", title: "Bachelor Responsable du Développement Commercial" },
  
  { cat: "insertion", badge: "—", title: "Techniques de recherche d'emploi", subtitle: "Préparation aux entretiens d'embauche" },
  { cat: "insertion", badge: "—", title: "Formation en insertion professionnelle" },
  { cat: "insertion", badge: "—", title: "Accompagnement vers l'emploi ou la formation" },
  { cat: "insertion", badge: "—", title: "Développement des compétences professionnelles" },
  { cat: "insertion", badge: "—", title: "Savoir-être professionnel" },
  { cat: "insertion", badge: "—", title: "Construction de projet professionnel" },
  { cat: "insertion", badge: "CléA", title: "Préparation à la certification CléA" },
  
  { cat: "numerique", badge: "—", title: "Découverte informatique" },
  { cat: "numerique", badge: "—", title: "Suite Office, du débutant à l'expert" },
  { cat: "numerique", badge: "—", title: "Outils numériques au quotidien" },
  
  { cat: "formateurs", badge: "—", title: "Formateur Professionnel d'Adultes" },
  { cat: "formateurs", badge: "—", title: "Créer des formations dynamiques" },
  { cat: "formateurs", badge: "—", title: "Outils numériques pour formateurs" },
];

export default function FormationsList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const pathname = usePathname();
  const isEditMode = pathname?.startsWith("/admin/edit") ?? false;

  const filteredFormations = FORMATIONS.filter(
    (f) => activeFilter === "all" || f.cat === activeFilter
  );

  return (
    <div className="max-w-[1100px] mx-auto px-8">
      <div className="max-w-[600px] mb-9">
        <div className="text-[13.5px] font-semibold text-[#FF6500] mb-2.5">
          — Formations déjà animées
        </div>
        <h2 className="font-display text-[32px] font-medium leading-[1.2] text-[#17140F] tracking-[-0.01em]">
          Quatre domaines, une même approche
        </h2>
        <p className="mt-[14px] text-[#6E6A62] text-[15.5px]">
          Filtrez par domaine pour voir les formations animées dans chaque catégorie.
        </p>
      </div>

      <div className="flex gap-[10px] flex-wrap mb-9 border-b border-[#17140F]/10 pb-7">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`font-sans text-[14px] font-semibold px-[18px] py-[10px] rounded-[20px] border transition-all duration-150 ${
              activeFilter === cat.id
                ? "bg-[#17140F] text-white border-[#17140F]"
                : "bg-white text-[#6E6A62] border-[#17140F]/10 hover:border-[#FF6500] hover:text-[#17140F]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredFormations.map((item, i) => {
          const slug = item.title
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
            
          const href = isEditMode ? `/admin/edit/formations/${slug}` : `/formations/${slug}`;

          return (
            <Link
              key={i}
              href={href}
              className="flex items-center gap-4 border border-[#17140F]/10 rounded-lg px-5 py-4 transition-colors duration-150 hover:border-[#FF6500] animate-fade-in group bg-white"
            >
              <div className="bg-[#17140F] text-white font-display font-semibold text-[14px] px-3 py-1.5 rounded-[5px] shrink-0">
                {item.badge}
              </div>
              <div>
                <div className="text-[15px] font-medium text-[#17140F]">
                  {item.title}
                </div>
                {item.subtitle && (
                  <div className="text-[12.5px] text-[#6E6A62] mt-0.5">
                    {item.subtitle}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
