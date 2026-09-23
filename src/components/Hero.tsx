"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight, Lock, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink } from "@/lib/utils";
import content from "@/data/content.json";
import TiltPortrait from "@/components/TiltPortrait";
import Container from "@/components/Container";

export default function Hero() {
  const { lang } = useLanguage();
  const hero = content.home.hero;

  const whatsappHref = waLink(
    content.site.whatsapp,
    lang === "en"
      ? "Hello Shammy, I'd like to know more about a consultation at Heart2Home."
      : "হ্যালো শামী, আমি হার্ট টু হোম (Heart2Home) এর পরামর্শ সেশন সম্পর্কে জানতে চাই।"
  );

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20">
      {/* Background vibrant ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[550px] w-full max-w-7xl -translate-x-1/2 opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(225, 29, 72, 0.16), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 40%, rgba(13, 148, 136, 0.16), transparent 70%)",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Reassurance pill */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/90 px-3.5 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-bold tracking-wide text-rose-700 sm:text-sm">
                Heart2Home • {t(hero.eyebrow, lang)}
              </span>
            </div>

            {/* Bengali Hook */}
            <p className="mb-2.5 font-bn text-lg font-bold tracking-tight text-rose-600 sm:text-2xl">
              {hero.bengaliHook}
            </p>

            {/* Main Headline */}
            <h1 className="max-w-xl text-[1.85rem] font-extrabold leading-[1.18] text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              {t(hero.headline, lang)}
            </h1>

            {/* Subhead */}
            <p className="mt-4 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">
              {t(hero.subhead, lang)}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition hover:from-rose-700 hover:to-rose-600 active:scale-[0.98]"
              >
                <span>{t(hero.ctaPrimary, lang)}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-teal-600 bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-sm transition hover:bg-teal-50 active:scale-[0.98]"
              >
                <MessageCircle size={16} className="text-teal-600" />
                <span>{t(hero.ctaSecondary, lang)}</span>
              </a>
            </div>

            {/* Reassurance Micro-Footer */}
            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5 border-t border-slate-200 pt-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                <Lock size={13} className="text-teal-600" />
                {lang === "en" ? "100% Confidential Care" : "সম্পূর্ণ গোপনীয়তা ও নিরাপত্তা"}
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                <MapPin size={13} className="text-rose-600" />
                {lang === "en" ? "Dhaka Clinic & Online" : "ঢাকা ক্লিনিক ও অনলাইন"}
              </span>
            </div>
          </motion.div>

          <TiltPortrait
            credentialCards={hero.credentialCards.map((c) => t(c, lang))}
          />
        </div>
      </Container>
    </section>
  );
}
