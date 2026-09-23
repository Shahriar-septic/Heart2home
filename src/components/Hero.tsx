"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Lock, MapPin, Sparkles, Calendar, UserCheck } from "lucide-react";
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
    <div className="relative lg:sticky lg:top-0 z-10 min-h-[85vh] lg:min-h-screen w-full flex flex-col justify-between overflow-visible pb-8 sm:pb-12 lg:pb-16">
      {/* ========================================================================= */}
      {/* 1. Curved Canopy Hero with Contextual Photographic Family Background     */}
      {/* ========================================================================= */}
      <section className="relative flex-1 flex flex-col justify-center overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[4.5rem] pt-8 pb-18 sm:pt-12 sm:pb-24 text-white shadow-2xl">
        {/* Photographic Family Care Backdrop with Living Moving Tints & High Image Visibility */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* 1. Underlying High-Visibility Photograph (Mother & Child clearly seen) */}
          <Image
            src="/images/hero-family-bg.jpg"
            alt="Warm and reassuring family guidance atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%] scale-100 opacity-90 transition-transform duration-1000 ease-out"
          />

          {/* 2. Fluid Moving Aurora Mesh Overlay (Plum into Emerald animation) */}
          <div
            className="absolute inset-0 opacity-50 animate-aurora-mesh mix-blend-color"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #701A75 0%, #831843 30%, #0A3D36 70%, #064E3B 100%)",
              backgroundSize: "220% 220%",
            }}
          />

          {/* 3. Fluid Moving Floating Color Blobs (Living animated ambient light) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-[480px] w-[480px] rounded-full bg-rose-500/25 blur-[100px] animate-aurora-blob-1"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-24 h-[520px] w-[520px] rounded-full bg-teal-400/25 blur-[110px] animate-aurora-blob-2"
          />

          {/* 4. Left-to-Right Directional Readability Mask: Darker on text (left), soft & clear on photo (right) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(12, 3, 16, 0.85) 0%, rgba(12, 3, 16, 0.70) 45%, rgba(12, 3, 16, 0.15) 75%, rgba(4, 25, 22, 0.25) 100%)",
            }}
          />

          {/* 5. Subtle Edge Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Reassurance pill */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-rose-400 animate-ping" />
                <span className="text-xs font-bold tracking-wide text-rose-200 sm:text-sm">
                  Heart2Home • {t(hero.eyebrow, lang)}
                </span>
              </div>

              {/* Bengali Hook */}
              <p className="mb-2.5 font-bn text-xl font-bold tracking-tight text-rose-300 sm:text-2xl drop-shadow-md">
                {hero.bengaliHook}
              </p>

              {/* Main Headline */}
              <h1 className="max-w-xl text-[2rem] font-extrabold leading-[1.16] text-white sm:text-5xl lg:text-[3.25rem] drop-shadow-lg">
                {t(hero.headline, lang)}
              </h1>

              {/* Subhead */}
              <p className="mt-4 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-slate-100 font-medium drop-shadow">
                {t(hero.subhead, lang)}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-rose-600/40 transition hover:from-rose-500 hover:to-rose-400 active:scale-[0.98]"
                >
                  <span>{t(hero.ctaPrimary, lang)}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/20 px-6 py-3.5 text-sm font-bold text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-900 active:scale-[0.98]"
                >
                  <MessageCircle size={16} className="text-white" />
                  <span>{t(hero.ctaSecondary, lang)}</span>
                </a>
              </div>

              {/* Reassurance Micro-Footer */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/20 pt-4 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 font-semibold text-white drop-shadow-sm">
                  <Lock size={13} className="text-teal-300" />
                  {lang === "en" ? "100% Confidential Care" : "সম্পূর্ণ গোপনীয়তা ও নিরাপত্তা"}
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-white drop-shadow-sm">
                  <MapPin size={13} className="text-rose-400" />
                  {lang === "en" ? "Mirpur Pallabi & Online" : "মিরপুর পল্লবী ও অনলাইন"}
                </span>
              </div>
            </motion.div>

            {/* 3D Tilt Portrait of Shammy Akhter */}
            <TiltPortrait
              credentialCards={hero.credentialCards.map((c) => t(c, lang))}
            />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. Floating Quick Consultation Bar (Mirrors Reference Image Design)        */}
      {/* ========================================================================= */}
      <div className="relative z-30 -mt-10 sm:-mt-14 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl border border-white/90 bg-white p-4 sm:p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12),0_4px_16px_rgba(225,29,72,0.06)] ring-1 ring-slate-900/5 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:divide-x lg:divide-slate-200/80">
            {/* 1. Services */}
            <div className="flex items-center gap-3 lg:pr-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Sparkles size={18} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {lang === "en" ? "Guidance Focus" : "পরামর্শ ক্ষেত্র"}
                </span>
                <span className="block truncate text-xs sm:text-sm font-bold text-slate-800">
                  {lang === "en" ? "Child, Teen & Parenting" : "শিশু, কিশোর ও প্যারেন্টিং"}
                </span>
              </div>
            </div>

            {/* 2. Mode */}
            <div className="flex items-center gap-3 lg:px-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {lang === "en" ? "Session Format" : "সেশন মাধ্যম"}
                </span>
                <span className="block truncate text-xs sm:text-sm font-bold text-slate-800">
                  {lang === "en" ? "Mirpur Clinic & Online" : "মিরপুর ক্লিনিক ও অনলাইন"}
                </span>
              </div>
            </div>

            {/* 3. Specialist */}
            <div className="flex items-center gap-3 lg:px-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <UserCheck size={18} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {lang === "en" ? "Lead Therapist" : "প্রধান থেরাপিস্ট"}
                </span>
                <span className="block truncate text-xs sm:text-sm font-bold text-slate-800">
                  Shammy Akhter (M.S.)
                </span>
              </div>
            </div>

            {/* 4. Action */}
            <div className="pt-2 sm:pt-0 lg:pl-4">
              <Link
                href="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-rose-500/20 transition hover:from-rose-700 hover:to-rose-600 active:scale-[0.98]"
              >
                <Calendar size={15} />
                <span>{lang === "en" ? "Book Consultation" : "সেশন বুক করুন"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
