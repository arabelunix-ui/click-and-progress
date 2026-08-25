"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EditableText from "../EditableText";

export default function FormationsList() {
  const [formations, setFormations] = useState<any[]>([]);
  const pathname = usePathname();
  const isEditMode = pathname?.startsWith("/admin/edit") ?? false;

  useEffect(() => {
    fetch("/api/formations")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setFormations(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1.5 bg-[#FF6500] flex-shrink-0" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight text-[#1A1A1A] flex flex-wrap gap-2">
            <EditableText initialText="FORMATIONS DÉJÀ" />
            <span className="text-[#FF6500]">
              <EditableText initialText="ANIMÉES" />
            </span>
          </h1>
        </div>
        <EditableText
          as="p"
          multiline
          className="text-[#1A1A1A]/70 text-lg sm:text-xl max-w-3xl leading-relaxed block"
          initialText="Des titres professionnels et diplômes couverts sur toute la filière commerce, de l'employé au responsable de développement."
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {formations.map((f, i) => {
          const href = isEditMode ? `/admin/edit/formations/${f.slug}` : `/formations/${f.slug}`;
          return (
          <Link
            key={f.id || i}
            href={href}
            className="flex items-center bg-white border-[3px] border-[#1A1A1A] p-2 sm:p-3 hover:-translate-y-1 transition-transform cursor-pointer"
            style={{ boxShadow: "6px 6px 0px 0px #FAD7C4" }}
          >
            <div className="bg-[#1A1A1A] text-white font-black italic px-4 py-2 text-xl flex-shrink-0">
              <EditableText contentKey={`formation-level-${f.slug}`} initialText={f.level || "N3"} />
            </div>
            <div className="ml-4 font-bold text-[#1A1A1A] text-base sm:text-lg flex-1">
              <EditableText contentKey={`formation-title-${f.slug}`} initialText={f.titre} />
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
