"use client";

import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function TrustBadges() {
  const { lang } = useLanguage();
  const badges = content.home.trustBadges;

  return (
    <section className="border-y border-border/70 bg-white/40 py-10 sm:py-12 backdrop-blur-sm">
      <Container>
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-slate">
          {t(badges.heading, lang)}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {badges.items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/90 px-4 py-2 text-xs font-medium text-ink/80 shadow-sm transition hover:border-sage/40 hover:bg-white hover:text-sage-dark sm:text-sm"
            >
              <ShieldCheck size={14} className="text-sage" />
              <span>{t(item, lang)}</span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
