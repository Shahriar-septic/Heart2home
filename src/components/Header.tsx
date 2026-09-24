"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Facebook, ChevronDown, Menu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import MobileDrawer from "@/components/MobileDrawer";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const nav = content.nav;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t(nav.home, lang) },
    { href: "/services", label: t(nav.services, lang), hasDropdown: true },
    { href: "/about", label: t(nav.about, lang) },
    { href: "/credentials", label: t(nav.credentials, lang) },
    { href: "/parent-readiness-quiz", label: t(nav.quiz, lang) },
    { href: "/faq", label: t(nav.faq, lang) },
    { href: "/contact", label: t(nav.contact, lang) },
  ];

  return (
    <header className="sticky top-0 z-[100] ios-glass">
      {/* Dynamic Animated Ambient Shimmer Stripe */}
      <div
        aria-hidden="true"
        className="h-[2.5px] w-full bg-gradient-to-r from-rose-500 via-teal-400 via-indigo-500 to-rose-500 bg-[length:200%_100%] animate-shimmer-flow opacity-90"
      />

      <div className="w-full flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3">
        {/* 1. Hard Left Edge: Heart2Home Brand */}
        <div className="flex items-center justify-start min-w-0">
          <Link href="/" className="group flex flex-col leading-tight shrink-0">
            <span className="flex items-center gap-1.5 font-display text-xl font-bold tracking-tight sm:text-2xl">
              <span className="text-rose-600 transition-colors group-hover:text-rose-700">Heart</span>
              <span className="text-teal-600">2</span>
              <span className="text-slate-900">Home</span>
              <span className="relative ml-0.5 flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500 animate-heartbeat shadow-sm" />
              </span>
            </span>
            <span className="hidden text-[11px] font-medium text-slate-600 sm:block">
              {lang === "en" ? "Child & Family Guidance • Shammy Akhter" : "শিশু ও পারিবারিক কাউন্সেলিং • শামী আক্তার"}
            </span>
          </Link>
        </div>

        {/* 2. Middle: Floating Capsule Dock Navigation with Illuminated Active Pill */}
        <nav
          className="hidden items-center justify-center gap-1 xl:gap-1.5 p-1.5 rounded-full border-2 border-rose-300/80 bg-white/95 backdrop-blur-2xl shadow-[0_8px_30px_-4px_rgba(225,29,72,0.18),0_2px_8px_-1px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,1)] ring-2 ring-rose-200/70 lg:flex whitespace-nowrap transition-all duration-200"
          aria-label="Primary"
        >
          {links.map((link) => {
            const isRouteActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return link.hasDropdown ? (
              <div key={link.href} className="relative" ref={servicesRef}>
                {isRouteActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-600 via-rose-600 to-rose-500 shadow-[0_2px_12px_rgba(225,29,72,0.36)] ring-1 ring-white/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`relative z-10 flex items-center gap-1 rounded-full px-3.5 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-bold transition-colors duration-200 ${
                    isRouteActive
                      ? "text-white font-bold"
                      : servicesOpen
                      ? "bg-rose-100 text-rose-700 font-bold ring-1 ring-rose-300/80"
                      : "text-slate-800 hover:text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesOpen
                        ? isRouteActive
                          ? "rotate-180 text-white"
                          : "rotate-180 text-rose-600"
                        : isRouteActive
                        ? "text-white"
                        : "text-slate-400 group-hover:text-rose-500"
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-80 overflow-hidden rounded-2xl border-2 border-rose-200/90 bg-white p-2.5 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.25),0_10px_25px_-5px_rgba(225,29,72,0.15)] ring-1 ring-slate-900/10 z-50 animate-fade-up"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <Link
                      href="/services"
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold text-rose-600 transition bg-rose-50/80 hover:bg-rose-100"
                    >
                      <span>
                        {t(nav.services, lang)} —{" "}
                        {lang === "en" ? "Overview" : "সম্পূর্ণ তালিকা"}
                      </span>
                      <ArrowRight size={14} />
                    </Link>
                    <div className="my-1.5 h-px bg-slate-200/80" />
                    <div className="space-y-0.5">
                      {nav.servicesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-xl px-3.5 py-2 text-sm font-bold text-slate-800 transition hover:bg-rose-50 hover:text-rose-600"
                        >
                          {t(item.label, lang)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div key={link.href} className="relative">
                {isRouteActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-600 via-rose-600 to-rose-500 shadow-[0_2px_12px_rgba(225,29,72,0.36)] ring-1 ring-white/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Link
                  href={link.href}
                  className={`relative z-10 block rounded-full px-3.5 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-bold transition-colors duration-200 ${
                    isRouteActive
                      ? "text-white font-bold"
                      : "text-slate-800 hover:text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* 3. Hard Right Edge: Action Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-2.5 shrink-0">
          <a
            href={content.site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Heart2Home on Facebook"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-rose-200/80 bg-white/90 text-slate-700 shadow-sm backdrop-blur-md transition hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 xl:flex"
          >
            <Facebook size={15} />
          </a>

          <button
            type="button"
            onClick={toggleLang}
            className="flex min-h-[38px] sm:min-h-[40px] items-center justify-center rounded-full border border-rose-200/80 bg-white/90 px-3 py-1.5 text-xs font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-md transition active:scale-95 hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 sm:px-3.5 sm:text-sm shrink-0"
            aria-label="Toggle language"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>

          {/* Desktop Consultation Button with Cool Specular Light Sheen Animation */}
          <Link
            href="/contact"
            className="group relative overflow-hidden hidden rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-white shadow-md transition hover:from-rose-700 hover:to-rose-600 active:scale-[0.98] lg:inline-flex lg:items-center lg:gap-1.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-button-shine"
            />
            <span>{t(nav.bookConsultation, lang)}</span>
          </Link>

          {/* Optimized Apple iOS Glass Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-3.5 text-xs font-bold text-white shadow-md shadow-rose-500/25 border border-white/30 backdrop-blur-md transition active:scale-95 hover:from-rose-700 hover:to-rose-600 shrink-0 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={18} strokeWidth={2.4} />
            <span className="font-extrabold tracking-wide">Menu</span>
          </button>
        </div>
      </div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={links.map(({ href, label }) => ({ href, label }))}
        servicesLinks={nav.servicesDropdown.map((item) => ({
          href: item.href,
          label: t(item.label, lang),
        }))}
      />
    </header>
  );
}
