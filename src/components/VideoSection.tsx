"use client";

import React from "react";

export default function VideoSection() {
  return (
    <section className="bg-white py-12 sm:py-20 relative overflow-hidden">
      {/* Conteneur avec marges et espacements autour de la vidéo */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/*
          Conteneur 16:9 (aspect-video) pour respecter scrupuleusement la hauteur (height) originale et le ratio de la vidéo sans aucun zoom ou rognage.
        */}
        <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#E0DDD6] bg-black">
          {/*
            Paramètres YouTube pour masquer le titre et les options de navigation/contrôle :
            - controls=0 : masque la barre de contrôle inférieure et les options
            - modestbranding=1 : minimise le branding
            - rel=0 : vidéos suggérées limitées à la chaîne
            - disablekb=1 : désactive les raccourcis clavier
            - iv_load_policy=3 : masque les annotations
            - fs=0 : masque l'option plein écran
          */}
          <iframe
            src="https://www.youtube-nocookie.com/embed/-L-igPCUSXs?controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&playsinline=1"
            title="Présentation Clic&Progress"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
