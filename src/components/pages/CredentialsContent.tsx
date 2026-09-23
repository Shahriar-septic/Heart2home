"use client";

import { BadgeCheck, Shield, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function CredentialsContent() {
  const { lang } = useLanguage();
  const page = content.credentialsPage;

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-20 -z-10 h-72 w-72 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container>
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
            <GraduationCap size={14} />
            <span>{t(page.eyebrow, lang)}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {t(page.heading, lang)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            {t(page.intro, lang)}
          </p>
        </div>

        {/* Timeline */}
        <ol className="mt-14 max-w-3xl space-y-0">
          {page.timeline.map((entry, i) => (
            <li key={i} className="group relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage text-white shadow-soft transition group-hover:scale-105 group-hover:bg-sage-dark">
                  <BadgeCheck size={20} />
                </span>
                {i < page.timeline.length - 1 && (
                  <span className="mt-2 w-0.5 flex-1 bg-border/80" aria-hidden="true" />
                )}
              </div>
              <div className="flex-1 rounded-3xl border border-border/80 bg-white/90 p-6 shadow-card backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-sage/40 group-hover:bg-white group-hover:shadow-float sm:p-7">
                <span className="inline-block rounded-full bg-clay-tint/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-dark">
                  {t(entry.type, lang)}
                </span>
                <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {t(entry.title, lang)}
                </h2>
                <p className="mt-1.5 text-sm text-slate">
                  {t(entry.institution, lang)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Ongoing Professional Development Box */}
        <div className="mt-8 max-w-3xl rounded-3xl border border-sage/30 bg-gradient-to-br from-sage-tint/90 to-surface-warm p-7 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sage-dark">
            <Shield size={18} />
            <h2 className="text-base font-semibold">
              {t(page.ongoingHeading, lang)}
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-[15px]">
            {t(page.ongoing, lang)}
          </p>
        </div>
      </Container>
    </div>
  );
}
