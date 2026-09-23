"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import { getIcon } from "@/lib/icon-map";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function AboutContent() {
  const { lang } = useLanguage();
  const page = content.aboutPage;

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Calming ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 -z-10 h-80 w-80 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_360px] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
              <Sparkles size={13} />
              <span>{t(page.eyebrow, lang)}</span>
            </div>

            <h1 className="text-3xl font-semibold leading-[1.15] text-ink sm:text-5xl">
              {t(page.heading, lang)}
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate sm:text-lg">
              {page.narrative.map((para, i) => (
                <p key={i}>{t(para, lang)}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/credentials"
                className="group inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-sage-dark active:scale-[0.98]"
              >
                <span>
                  {lang === "en" ? "View Full Credentials & Timeline" : "সম্পূর্ণ যোগ্যতা ও অভিজ্ঞতা"}
                </span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-white px-5 py-3 text-sm font-semibold text-ink/80 transition hover:border-sage hover:text-sage-dark"
              >
                {t(content.nav.bookConsultation, lang)}
              </Link>
            </div>
          </div>

          {/* Arched Framed Portrait Presentation */}
          <div className="relative order-first mx-auto max-w-sm lg:order-last lg:mx-0 lg:max-w-none">
            <div className="relative mx-auto h-[400px] w-[280px] overflow-hidden rounded-t-[140px] rounded-b-[36px] border-4 border-white shadow-float ring-1 ring-sage/20 sm:h-[460px] sm:w-[320px]">
              <Image
                src="/images/shammy-portrait.jpg"
                alt="Shammy Akhter, Child & Family Guidance Counsellor"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 340px"
                className="object-cover object-top"
              />
            </div>

            {/* Companion Quote Card */}
            <div className="absolute -bottom-8 -left-4 right-4 rounded-2xl border-2 border-rose-200/90 bg-white p-4 shadow-xl sm:-bottom-10 sm:-left-6">
              <div className="flex gap-2.5">
                <Quote size={18} className="shrink-0 text-rose-500" />
                <p className="text-xs leading-relaxed text-slate-800 font-medium italic sm:text-[13px]">
                  {lang === "en"
                    ? "Guiding families with empathy, evidence, and patience."
                    : "সহমর্মিতা, বিজ্ঞানসম্মত পদ্ধতি ও ধৈর্যের সাথে পরিবারকে পথ দেখানো।"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Philosophy */}
        <div className="mt-24 sm:mt-32">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t(page.philosophyHeading, lang)}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate sm:text-base">
              {lang === "en"
                ? "The therapeutic foundation of every child, adolescent, and parental session."
                : "প্রতিটি সেশনের ভিত্তি যা শিশুর সুস্থ বিকাশ ও পারিবারিক শান্তি নিশ্চিত করে।"}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {page.philosophy.map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:bg-white hover:shadow-float sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-tint text-sage-dark transition-all duration-300 group-hover:bg-sage group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {t(item.title, lang)}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate">
                    {t(item.description, lang)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
