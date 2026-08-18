"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentY < 10) {
        setVisible(true); // Always show at top
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false); // Scrolling DOWN → hide
        setMobileMenuOpen(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true); // Scrolling UP → show
      }

      setScrolled(currentY > 15);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Formations", href: "/#formations", id: "formations" },
    { name: "Méthode", href: "/#methode", id: "methode" },
    { name: "Publics", href: "/#publics", id: "publics" },
  ];

  const rightLinks = [
    { name: "Blog", href: "/blog", id: "blog" },
    { name: "À propos", href: "/about", id: "about" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled || pathname === "/about" || pathname === "/blog"
            ? "bg-[#1A1A1A]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-[#1A1A1A]"
        }`}
      >
        {/* Nav Row */}
        <div className="max-w-[1400px] mx-auto flex items-stretch justify-between">

          {/* LEFT NAV LINKS */}
          <nav className="hidden lg:flex items-stretch">
            {leftLinks.map((item) => {
              const isItemActive = activeLink === item.id || (pathname === item.href && (item.href === "/about" || item.href === "/blog"));
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setActiveLink(item.id)}
                  onMouseLeave={() => setActiveLink(null)}
                  className={`relative flex items-center px-5 lg:px-6 py-5 text-sm font-bold transition-colors duration-200 border-r border-white/8 ${
                    isItemActive ? "text-[#FF6500]" : "text-white hover:text-[#FF6500]"
                  }`}
                >
                  {/* Active orange underline indicator */}
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[3px] bg-[#FF6500] transition-all duration-300 ${
                      isItemActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    } origin-left`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center flex-1 lg:flex-none lg:w-auto px-6 lg:px-10 py-2">
            <Link href="/" className="group flex items-center">
              <Image
                src="/images/ClickandProgressLogo.png"
                alt="Clic & Progress"
                width={180}
                height={48}
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* RIGHT NAV LINKS */}
          <nav className="hidden lg:flex items-stretch">
            {rightLinks.map((item) => {
              const isItemActive = activeLink === item.id || (pathname === item.href && (item.href === "/about" || item.href === "/blog"));
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setActiveLink(item.id)}
                  onMouseLeave={() => setActiveLink(null)}
                  className={`relative flex items-center px-5 lg:px-6 py-5 text-sm font-bold transition-colors duration-200 border-l border-white/8 ${
                    isItemActive ? "text-[#FF6500]" : "text-white hover:text-[#FF6500]"
                  }`}
                >
                  {/* Active orange underline indicator */}
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[3px] bg-[#FF6500] transition-all duration-300 ${
                      isItemActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    } origin-left`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center px-5 text-white hover:text-[#FF6500] transition-colors border-l border-white/8"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Bottom Orange Accent Line — exactly like image.png */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#FF6500]/0 via-[#FF6500] to-[#FF6500]/0" />
      </header>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 z-40 bg-[#1A1A1A]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-fade-in"
             style={{ top: "calc(var(--navbar-height, 72px))" }}
        >
          <div className="flex flex-col divide-y divide-white/8">
            {[...leftLinks, ...rightLinks].map((item) => {
              const isItemActive = pathname === item.href && (item.href === "/about" || item.href === "/blog");
              return (
                <Link
                  key={item.id}
                  onClick={() => setMobileMenuOpen(false)}
                  href={item.href}
                  className={`flex items-center px-6 py-4 text-sm font-bold hover:bg-white/5 transition-colors ${
                    isItemActive ? "text-[#FF6500] bg-white/5" : "text-white hover:text-[#FF6500]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 ${
                    isItemActive ? "bg-[#FF6500] opacity-100 scale-125" : "bg-[#FF6500] opacity-70"
                  }`} />
                  {item.name}
                </Link>
              );
            })}
            <div className="p-5">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/#contact"
                className="flex items-center justify-center w-full py-3.5 px-6 text-xs font-extrabold uppercase tracking-widest text-white bg-[#FF6500] rounded-xl hover:bg-[#FF7A1F] shadow-[0_4px_20px_rgba(255,101,0,0.4)] transition-all"
              >
                Contacter Soufiyan — Réponse &lt; 48h
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
