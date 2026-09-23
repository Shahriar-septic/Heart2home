"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function MiniBio() {
  const { lang } = useLanguage();
  const bio = content.home.bio;

  return (
    <section className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border-2 border-rose-100/80 bg-white p-8 shadow-xl sm:p-12">
          {/* Subtle warm rose/teal aura corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl"
          />

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-[240px_1fr]">
            {/* Framed Portrait */}
            <div className="relative mx-auto md:mx-0 mb-4 md:mb-0">
              <div className="relative h-60 w-48 overflow-hidden rounded-t-[90px] rounded-b-[28px] border-4 border-white shadow-2xl ring-2 ring-rose-200/80">
                <Image
                  src="/images/shammy-portrait.jpg"
                  alt="Shammy Akhter — Heart2Home Lead Counsellor"
                  fill
                  sizes="200px"
                  className="object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>
              {/* Decorative reassurance tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-rose-200 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wide text-rose-700 shadow-md">
                Lead Counsellor
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600">
                <HeartHandshake size={15} />
                <span>
                  {lang === "en" ? "Meet Shammy Akhter" : "শামী আক্তারের পরিচিতি"}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t(bio.heading, lang)}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                {t(bio.body, lang)}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-rose-600 transition hover:text-rose-700"
                >
                  <span>{t(bio.cta, lang)}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  href="/credentials"
                  className="text-sm font-bold text-teal-700 hover:text-teal-800 transition"
                >
                  {lang === "en" ? "Verified Credentials & Timeline" : "সনদ ও অভিজ্ঞতার বিবরণ"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
