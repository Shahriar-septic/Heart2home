"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
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
    <section className="relative overflow-hidden my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] py-18 sm:py-24 shadow-2xl">
      {/* ========================================================================= */}
      {/* Photographic Therapy Consultation Sanctuary Backdrop                     */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/therapy-lounge-bg.jpg"
          alt="Peaceful and comforting psychotherapy consultation room"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        {/* Deep Slate & Teal Gradient Mask for Perfect Glass Card Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-teal-950/90 to-slate-950/96" />
        
        {/* Ambient Subtle Color Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-1/4 h-80 w-80 rounded-full bg-teal-500/15 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-10 bottom-1/4 h-72 w-72 rounded-full bg-rose-500/15 blur-[120px]"
        />
      </div>

      <Container>
        {/* Reassurance pill */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-3.5 py-1 text-xs font-bold text-teal-300 backdrop-blur-md">
          <Sparkles size={13} className="text-teal-300" />
          <span>Heart2Home Care Pillars</span>
        </div>

        <SectionHeading
          heading={t(pillars.heading, lang)}
          description={t(pillars.subheading, lang)}
          className="[&>h2]:text-white [&>h2]:font-extrabold [&>p]:text-slate-300"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="dark-glass-card-interactive group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8"
              >
                {/* Vibrant top edge glow bar on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500/0 via-rose-500 to-rose-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-500/30 bg-teal-500/20 text-teal-300 transition-all duration-300 group-hover:scale-105 group-hover:border-rose-400 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-rose-500/25">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-rose-200">
                    {t(item.title, lang)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {t(item.description, lang)}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300 transition-colors group-hover:text-rose-300">
                    {t(content.common.readMore, lang)}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-rose-500">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* DMIT assessment callout box */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:flex-row sm:px-6">
          <div className="flex items-center gap-3 text-sm text-slate-200">
            <Compass size={18} className="shrink-0 text-rose-400" />
            <span>{t(pillars.dmitNote, lang)}</span>
          </div>
          <Link
            href="/services/dmit-assessment"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal-400/40 bg-teal-500/20 px-4 py-2 text-xs font-semibold text-teal-200 transition hover:bg-teal-500 hover:text-white"
          >
            <span>{t(pillars.dmitLink, lang)}</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
