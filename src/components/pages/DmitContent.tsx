"use client";

import Link from "next/link";
import { Check, X, Compass, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function DmitContent() {
  const { lang } = useLanguage();
  const page = content.dmitPage;

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-20 -z-10 h-72 w-72 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container>
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
            <Compass size={14} />
            <span>{t(page.eyebrow, lang)}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {t(page.heading, lang)}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            {t(page.intro, lang)}
          </p>
        </div>

        {/* Clarity Comparison */}
        <h2 className="mt-16 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t(page.clarityHeading, lang)}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* What it is */}
          <div className="rounded-3xl border border-sage/30 bg-white/90 p-7 shadow-card backdrop-blur-sm sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sage-tint px-3.5 py-1 text-xs font-semibold text-sage-dark">
              <Check size={15} />
              <span>{lang === "en" ? "This Assessment Is" : "এই অ্যাসেসমেন্ট যা"}</span>
            </div>
            <ul className="space-y-3.5">
              {page.isList.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage-dark">
                    <Check size={11} />
                  </span>
                  <span>{t(item, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What it is not */}
          <div className="rounded-3xl border border-clay/30 bg-white/90 p-7 shadow-card backdrop-blur-sm sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-clay-tint px-3.5 py-1 text-xs font-semibold text-clay-dark">
              <X size={15} />
              <span>{lang === "en" ? "This Assessment Is Not" : "এই অ্যাসেসমেন্ট যা নয়"}</span>
            </div>
            <ul className="space-y-3.5">
              {page.isNotList.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-clay-tint text-clay-dark">
                    <X size={11} />
                  </span>
                  <span>{t(item, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <h2 className="mt-20 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t(page.processHeading, lang)}
        </h2>

        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {page.process.map((step, i) => (
            <li
              key={i}
              className="relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white/90 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-float sm:p-8"
            >
              <div>
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sage-tint text-sm font-semibold text-sage-dark">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {t(step.title, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {t(step.description, lang)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA Card */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-gradient-to-br from-sage-tint/80 via-white to-clay-tint/40 p-8 text-center shadow-card sm:p-12">
          <p className="mx-auto max-w-xl text-lg font-medium text-ink sm:text-xl">
            {t(page.cta, lang)}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-sage-dark active:scale-[0.98]"
          >
            <span>{t(content.nav.bookConsultation, lang)}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </div>
  );
}
