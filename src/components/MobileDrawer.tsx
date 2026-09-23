"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Facebook, Globe, ChevronRight, MessageCircle, Calendar, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink } from "@/lib/utils";
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
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappHref = waLink(
    content.site.whatsapp,
    lang === "en"
      ? "Hello Shammy, I'd like to know more about a consultation at Heart2Home."
      : "হ্যালো শামী, আমি হার্ট টু হোম (Heart2Home) এর পরামর্শ সেশন সম্পর্কে জানতে চাই।"
  );

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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Dimmed backdrop covering 100% of viewport */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Solid Opaque Drawer Panel (escapes any containing block, never see-through) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            ref={panelRef}
            className="fixed inset-y-0 right-0 z-10 flex h-[100dvh] w-[86%] max-w-sm flex-col bg-white p-5 shadow-2xl border-l border-slate-200"
          >
            {/* Drawer Header: Logo & Close button */}
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 shadow-sm active:scale-95 active:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLang}
              className="mb-3.5 flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 text-xs sm:text-sm font-bold text-rose-700 shadow-sm transition active:scale-[0.98] hover:bg-rose-100"
            >
              <Globe size={15} />
              <span>{lang === "en" ? "বাংলায় দেখুন (Switch to Bangla)" : "Switch to English"}</span>
            </button>

            {/* Navigation Links List */}
            <nav
              className="flex flex-1 flex-col gap-1.5 overflow-y-auto overscroll-contain min-h-0 pr-1 py-1"
              aria-label="Mobile"
            >
              {beforeServices.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex min-h-[46px] items-center justify-between rounded-2xl px-4 text-sm sm:text-base font-bold transition active:scale-[0.99] ${
                      isActive
                        ? "border border-rose-300 bg-rose-50 text-rose-700 shadow-sm"
                        : "border border-slate-200 bg-slate-50/80 text-slate-800 shadow-sm hover:bg-slate-100 hover:text-rose-600"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={15} className={isActive ? "text-rose-600" : "text-slate-400"} />
                  </Link>
                );
              })}

              {/* Sub-services links */}
              <div className="my-1 space-y-1.5 pl-2">
                {servicesLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`flex min-h-[40px] items-center gap-2 rounded-xl pl-3 pr-3 text-xs sm:text-sm font-semibold transition active:bg-slate-200 ${
                        isActive
                          ? "border-l-3 border-rose-600 bg-rose-50 text-rose-700 font-bold shadow-sm"
                          : "border-l-2 border-rose-400/80 bg-slate-50 text-slate-700 hover:text-rose-600"
                      }`}
                    >
                      <ChevronRight size={13} className="shrink-0 text-rose-500" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              {afterServices.length > 0 && (
                <div className="my-1.5 h-px bg-slate-200" />
              )}

              {afterServices.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex min-h-[46px] items-center justify-between rounded-2xl px-4 text-sm sm:text-base font-bold transition active:scale-[0.99] ${
                      isActive
                        ? "border border-rose-300 bg-rose-50 text-rose-700 shadow-sm"
                        : "border border-slate-200 bg-slate-50/80 text-slate-800 shadow-sm hover:bg-slate-100 hover:text-rose-600"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={15} className={isActive ? "text-rose-600" : "text-slate-400"} />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Action Footer in Drawer */}
            <div className="mt-3 flex flex-col gap-2.5 border-t border-slate-200 pt-3">
              <div className="flex items-center gap-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 text-xs font-bold text-teal-800 shadow-sm transition active:scale-95 hover:bg-teal-100"
                >
                  <MessageCircle size={15} className="text-teal-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={content.site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 text-xs font-bold text-slate-700 shadow-sm transition active:scale-95 hover:bg-slate-200"
                >
                  <Facebook size={15} />
                  <span>Facebook</span>
                </a>
              </div>

              <Link
                href="/contact"
                onClick={onClose}
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition active:scale-[0.98] hover:from-rose-700 hover:to-rose-600"
              >
                <Calendar size={16} />
                <span>{t(content.nav.bookConsultation, lang)}</span>
              </Link>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                <ShieldCheck size={13} className="text-teal-600" />
                <span>Mirpur Pallabi, Dhaka • 100% Confidential</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
