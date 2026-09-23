"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink } from "@/lib/utils";
import { getIcon } from "@/lib/icon-map";
import content from "@/data/content.json";
import Container from "@/components/Container";

type Bi = { en: string; bn: string };
type FocusArea = { icon: string; title: Bi; description: Bi };
type ProcessStep = { title: Bi; description: Bi };

type ServicePageData = {
  eyebrow: Bi;
  heading: Bi;
  intro: Bi;
  focusHeading: Bi;
  focusAreas: FocusArea[];
  processHeading: Bi;
  process: ProcessStep[];
  cta: Bi;
};

export default function ServiceDetailContent({
  page,
}: {
  page: ServicePageData;
}) {
  const { lang } = useLanguage();

  const whatsappHref = waLink(
    content.site.whatsapp,
    lang === "en"
      ? "Hello Shammy, I'd like to discuss a consultation."
      : "হ্যালো শামী, আমি একটি পরামর্শ সেশন নিয়ে কথা বলতে চাই।"
  );

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container>
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
            <ShieldCheck size={14} />
            <span>{t(page.eyebrow, lang)}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {t(page.heading, lang)}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            {t(page.intro, lang)}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-sage-dark active:scale-[0.98]"
            >
              <span>{t(page.cta, lang)}</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-clay/40 bg-white/70 px-5 py-3.5 text-sm font-semibold text-clay-dark shadow-sm backdrop-blur-sm transition hover:border-clay hover:bg-clay-tint/50 active:scale-[0.98]"
            >
              <MessageCircle size={16} className="text-clay" />
              <span>{t(content.nav.chatWhatsapp, lang)}</span>
            </a>
          </div>
        </div>

        {/* Focus Areas */}
        <h2 className="mt-20 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t(page.focusHeading, lang)}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {page.focusAreas.map((area, i) => {
            const Icon = getIcon(area.icon);
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:bg-white hover:shadow-float sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-tint text-sage-dark transition-all duration-300 group-hover:scale-105 group-hover:bg-sage group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {t(area.title, lang)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate sm:text-[15px]">
                  {t(area.description, lang)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Step-by-Step Process */}
        <h2 className="mt-20 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t(page.processHeading, lang)}
        </h2>
        <ol className="mt-8 space-y-4 sm:space-y-5">
          {page.process.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-5 rounded-3xl border border-border/80 bg-white/90 p-6 shadow-card backdrop-blur-sm transition hover:border-sage/40 sm:p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sage-tint text-sm font-semibold text-sage-dark">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {t(step.title, lang)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate sm:text-[15px]">
                  {t(step.description, lang)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-gradient-to-br from-sage-tint/80 via-white to-clay-tint/40 p-8 text-center shadow-card sm:p-12">
          <p className="mx-auto max-w-lg text-lg font-medium text-ink sm:text-xl">
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
