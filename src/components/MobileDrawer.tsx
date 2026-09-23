"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Facebook, Globe, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";

type NavLink = { href: string; label: string };

export default function MobileDrawer({
  open,
  onClose,
  links,
  servicesLinks,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  servicesLinks: NavLink[];
}) {
  const { lang, toggleLang } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        "a, button"
      );
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = "";
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "a, button"
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const servicesIndex = links.findIndex((l) => l.href === "/services");
  const beforeServices = servicesIndex >= 0 ? links.slice(0, servicesIndex + 1) : links;
  const afterServices = servicesIndex >= 0 ? links.slice(servicesIndex + 1) : [];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            ref={panelRef}
            className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col ios-glass-drawer p-6 shadow-2xl lg:hidden"
          >
            <div className="mb-5 flex items-center justify-between">
              <Link href="/" onClick={onClose} className="flex items-center gap-1 font-display text-xl font-bold tracking-tight">
                <span className="text-rose-600">Heart</span>
                <span className="text-teal-600">2</span>
                <span className="text-slate-900">Home</span>
                <span className="relative ml-0.5 flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500 animate-heartbeat shadow-sm" />
                </span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md active:scale-95 active:bg-white"
              >
                <X size={18} />
              </button>
            </div>

            <button
              type="button"
              onClick={toggleLang}
              className="mb-4 flex min-h-[46px] items-center justify-center gap-2 rounded-2xl border border-rose-200/80 bg-rose-50/80 text-sm font-bold text-rose-700 shadow-sm backdrop-blur-md active:scale-[0.98]"
            >
              <Globe size={16} />
              <span>{lang === "en" ? "বাংলায় দেখুন (Switch to Bangla)" : "Switch to English"}</span>
            </button>

            <nav
              className="flex flex-1 flex-col gap-1.5 overflow-y-auto overscroll-contain pr-1"
              aria-label="Mobile"
            >
              {beforeServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex min-h-[46px] items-center rounded-2xl border border-white/60 bg-white/50 px-4 text-base font-bold text-slate-800 shadow-sm backdrop-blur-md transition active:bg-white/90 hover:bg-white/80 hover:text-rose-600"
                >
                  {link.label}
                </Link>
              ))}

              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="ml-3 flex min-h-[42px] items-center gap-2 rounded-xl border-l-2 border-rose-400 bg-white/40 pl-3.5 pr-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition active:bg-white/80 hover:text-rose-600"
                >
                  <ChevronRight size={14} className="shrink-0 text-rose-500" />
                  <span>{link.label}</span>
                </Link>
              ))}

              {afterServices.length > 0 && (
                <div className="my-1.5 h-px bg-white/50" />
              )}

              {afterServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex min-h-[46px] items-center rounded-2xl border border-white/60 bg-white/50 px-4 text-base font-bold text-slate-800 shadow-sm backdrop-blur-md transition active:bg-white/90 hover:bg-white/80 hover:text-rose-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-white/60 pt-4">
              <a
                href={content.site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/80 bg-white/70 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-md active:scale-[0.98] active:bg-white"
              >
                <Facebook size={16} />
                <span>Facebook Profile</span>
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-rose-500 text-sm font-bold text-white shadow-lg shadow-rose-500/25 active:scale-[0.98]"
              >
                {t(content.nav.bookConsultation, lang)}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
