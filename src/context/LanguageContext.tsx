"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Lang } from "@/lib/utils";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "heart2home-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "bn") {
        setLangState(stored);
      }
    } catch {
      // Storage may be unavailable (private browsing, in-app browsers,
      // restricted contexts) — fall back to the in-memory default silently.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  const setLang = (next: Lang) => {
    // Always update in-memory state first and unconditionally — the UI
    // must switch language even if persisting the choice fails.
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Non-fatal: the toggle still works for this session, it just won't
      // be remembered on the next visit.
    }
  };

  const toggleLang = () => setLang(lang === "en" ? "bn" : "en");

  const value = useMemo(
    () => ({ lang, setLang, toggleLang }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
