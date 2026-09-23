"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import { getIcon } from "@/lib/icon-map";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function ServicesIndexContent() {
  const { lang } = useLanguage();
  const page = content.servicesIndex;

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container>
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
            <Sparkles size={14} />
            <span>{t(page.hero.eyebrow, lang)}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {t(page.hero.heading, lang)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            {t(page.hero.description, lang)}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {page.cards.map((card) => {
            const Icon = getIcon(card.icon);
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sage/40 hover:bg-white hover:shadow-float sm:p-9"
              >
                {/* Subtle top edge glow bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage/0 via-sage/60 to-sage/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-tint text-sage-dark transition-all duration-300 group-hover:scale-105 group-hover:bg-sage group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {t(card.title, lang)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate sm:text-[15px]">
                    {t(card.description, lang)}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
                    {t(content.common.readMore, lang)}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-ink/70 transition-all duration-300 group-hover:bg-sage group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
