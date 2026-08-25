"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Star,
  Handshake,
  Mail,
  Newspaper,
  Settings,
  Globe,
  ChevronLeft,
  ChevronRight,
  Pencil,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: "/admin/edit", label: "Éditeur Visuel", icon: Pencil },
  { href: "/admin/formations", label: "Formations", icon: GraduationCap },
  { href: "/admin/avis", label: "Avis & Témoignages", icon: Star },
  { href: "/admin/partenaires", label: "Partenaires", icon: Handshake },
  { href: "/admin/contacts", label: "Contacts", icon: Mail },
  { href: "/admin/actualites", label: "Actualités", icon: Newspaper },
  { href: "/admin/parametres", label: "Paramètres", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const CurrentNav = NAV.find((n) => n.href === pathname);
  const CurrentIcon = CurrentNav?.icon ?? LayoutDashboard;

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

      {/* ── SIDEBAR ── */}
      <aside
        className={`fixed top-0 left-0 h-full z-30 flex flex-col transition-all duration-300 bg-[#141414] border-r border-white/[0.06] ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/[0.06] shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#FF6500] flex items-center justify-center shrink-0 text-white font-bold text-sm">C</div>
          {sidebarOpen && (
            <div>
              <p className="text-sm font-bold text-white leading-tight">Clic&Progress</p>
              <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Admin</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto text-white/30 hover:text-white/70 transition-colors shrink-0 p-1 rounded-lg hover:bg-white/5"
          >
            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl mb-0.5 transition-all duration-200 group relative ${
                  active
                    ? "bg-[#FF6500]/15 text-[#FF6500]"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && (
                  <span className="text-sm font-medium truncate">{item.label}</span>
                )}
                {active && (
                  <span className="absolute right-2 w-1.5 h-1.5 rounded-full bg-[#FF6500]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer sidebar */}
        <div className="px-4 py-4 border-t border-white/[0.06] shrink-0">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
          >
            <Globe className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span className="text-xs font-medium">Voir le site</span>}
          </Link>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <CurrentIcon className="w-4 h-4 text-[#FF6500]" />
            <p className="text-xs text-white/50 font-mono uppercase tracking-widest">
              {CurrentNav?.label ?? "Dashboard"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30 font-mono">
              {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6500] to-[#FF9A00] flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
