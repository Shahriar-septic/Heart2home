"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Facebook, ChevronDown, Menu, ArrowRight } from "lucide-react";
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

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        {/* Heart2Home Brand with Animated Beating Indicator */}
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return link.hasDropdown ? (
              <div key={link.href} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition duration-200 ${
                    isActive || servicesOpen
                      ? "bg-rose-50/90 text-rose-700 font-bold shadow-sm border border-rose-200/60"
                      : "text-slate-700 hover:bg-white/70 hover:text-rose-600"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl backdrop-saturate-200 ring-1 ring-black/5 animate-fade-up">
                    <Link
                      href="/services"
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold text-rose-600 transition hover:bg-rose-50/80"
                    >
                      <span>
                        {t(nav.services, lang)} —{" "}
                        {lang === "en" ? "Overview" : "সম্পূর্ণ তালিকা"}
                      </span>
                      <ArrowRight size={14} />
                    </Link>
                    <div className="my-1 h-px bg-slate-200/50" />
                    {nav.servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/90 hover:text-rose-700"
                      >
                        {t(item.label, lang)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition duration-200 ${
                  isActive
                    ? "bg-rose-50/90 text-rose-700 font-bold shadow-sm border border-rose-200/60"
                    : "text-slate-700 hover:bg-white/70 hover:text-rose-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href={content.site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Heart2Home on Facebook"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/60 text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-white hover:text-rose-600 sm:flex"
          >
            <Facebook size={15} />
          </a>

          <button
            type="button"
            onClick={toggleLang}
            className="flex min-h-[40px] items-center justify-center rounded-full border border-white/70 bg-white/60 px-3.5 py-1.5 text-xs font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-md transition active:scale-95 hover:bg-white hover:text-rose-600 sm:px-4 sm:text-sm shrink-0"
            aria-label="Toggle language"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>

          {/* Desktop Consultation Button with Cool Specular Light Sheen Animation */}
          <Link
            href="/contact"
            className="group relative overflow-hidden hidden rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:from-rose-700 hover:to-rose-600 active:scale-[0.98] md:inline-flex md:items-center md:gap-1.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-button-shine"
            />
            <span>{t(nav.bookConsultation, lang)}</span>
          </Link>

          {/* Apple iOS Glassy Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600/95 to-rose-500/95 px-3 text-xs font-bold text-white shadow-md shadow-rose-500/25 border border-white/30 backdrop-blur-md transition active:scale-95 hover:from-rose-700 hover:to-rose-600 shrink-0 lg:hidden"
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
