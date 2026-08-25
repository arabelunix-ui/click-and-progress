"use client";

import React from 'react';
import Link from 'next/link';
import { Save, RotateCcw, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EditToolbar({ pageName }: { pageName: string }) {
  const router = useRouter();

  const handleResetAll = async () => {
    if (confirm("Attention : Voulez-vous vraiment réinitialiser TOUS les textes du site à leur version d'origine ? Cette action effacera toutes vos modifications.")) {
      try {
        await fetch('/api/content/reset-all', { method: 'POST' });
        window.location.reload();
      } catch (e) {
        console.error(e);
        alert("Erreur lors de la réinitialisation.");
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-[#1A1A1A] text-white p-2 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.5)] border border-white/10 flex items-center gap-2 animate-in slide-in-from-bottom-8 duration-500">
      <div className="px-4 flex flex-col justify-center">
        <span className="text-[10px] font-mono text-[#FF6500] uppercase tracking-widest leading-tight">Éditeur Visuel</span>
        <span className="font-bold text-sm whitespace-nowrap">{pageName}</span>
      </div>
      
      <div className="w-px h-8 bg-white/10 mx-1" />
      
      <button 
        onClick={handleResetAll}
        title="Annuler toutes les modifications sur tout le site"
        className="px-4 py-2.5 text-sm font-semibold hover:bg-red-500/10 text-red-400 hover:text-red-300 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
      >
        <RotateCcw className="w-4 h-4" /> Tout annuler
      </button>
      
      <button 
        onClick={() => router.push('/admin')}
        className="px-4 py-2.5 text-sm font-semibold hover:bg-white/10 text-white/70 hover:text-white rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
      >
        <X className="w-4 h-4" /> Quitter
      </button>

      <Link 
        href="/admin"
        className="px-6 py-2.5 text-sm font-bold bg-[#FF6500] hover:bg-[#FF7A1F] text-white rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shadow-[0_4px_15px_rgba(255,101,0,0.3)]"
      >
        <Save className="w-4 h-4" /> Valider & Terminer
      </Link>
    </div>
  );
}
