"use client";

import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import { getIcon } from "@/lib/icon-map";
import content from "@/data/content.json";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function PillarSummary() {
  const { lang } = useLanguage();
  const pillars = content.home.pillars;

  return (
    <section className="relative py-16 sm:py-24">
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 -z-10 h-72 w-72 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container>
        <SectionHeading
          heading={t(pillars.heading, lang)}
          description={t(pillars.subheading, lang)}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white/85 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sage/40 hover:bg-white hover:shadow-float sm:p-8"
              >
                {/* Subtle top edge glow bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage/0 via-sage/60 to-sage/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-tint text-sage-dark transition-all duration-300 group-hover:scale-105 group-hover:bg-sage group-hover:text-white group-hover:shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    {t(item.title, lang)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {t(item.description, lang)}
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

        {/* DMIT assessment callout box */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm sm:flex-row sm:px-6">
          <div className="flex items-center gap-3 text-sm text-slate">
            <Compass size={18} className="shrink-0 text-clay" />
            <span>{t(pillars.dmitNote, lang)}</span>
          </div>
          <Link
            href="/services/dmit-assessment"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sage/30 bg-sage-tint/80 px-4 py-2 text-xs font-semibold text-sage-dark transition hover:bg-sage hover:text-white"
          >
            <span>{t(pillars.dmitLink, lang)}</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
