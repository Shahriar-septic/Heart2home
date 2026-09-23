"use client";

import Link from "next/link";
import { MessageCircle, CalendarCheck, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function BookingCTA() {
  const { lang } = useLanguage();
  const cta = content.home.bookingCta;

  const whatsappHref = waLink(
    content.site.whatsapp,
    lang === "en"
      ? "Hello Shammy, I'd like to know more about a consultation at Heart2Home."
      : "হ্যালো শামী, আমি হার্ট টু হোম (Heart2Home) এর পরামর্শ সেশন সম্পর্কে আরও জানতে চাই।"
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        {/* Living Color Aurora Card with continuous moving color animation */}
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/25 px-6 py-14 text-center text-white shadow-[0_25px_60px_-15px_rgba(225,29,72,0.35),0_15px_35px_-10px_rgba(13,148,136,0.25)] sm:px-12 sm:py-18 animate-aurora-mesh"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #BE123C 0%, #E11D48 20%, #9F1239 40%, #0F766E 65%, #0D9488 85%, #E11D48 100%)",
            backgroundSize: "300% 300%",
          }}
        >
          {/* Fluid Moving Aurora Light Orbs */}
          {/* Orb 1: Luminous Warm Rose Blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-28 h-[420px] w-[420px] rounded-full bg-rose-400/50 blur-[90px] animate-aurora-blob-1"
          />

          {/* Orb 2: Deep Healing Teal Blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-28 h-[460px] w-[460px] rounded-full bg-teal-400/45 blur-[100px] animate-aurora-blob-2"
          />

          {/* Orb 3: Coral & Magenta Center Swirl */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-pink-500/35 blur-[85px] animate-aurora-blob-3"
          />

          {/* Orb 4: Indigo Depth Accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-600/30 blur-[90px] animate-aurora-blob-2"
          />

          {/* Specular Radial Overlay for Rich Saturation */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            {/* Confidentiality Pill with Beating Heart */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm backdrop-blur-md">
              <Heart size={13} className="text-white fill-white animate-heartbeat" />
              <span>
                {lang === "en" ? "Heart2Home Confidential Care" : "হার্ট টু হোম গোপনীয় সেবা"}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl drop-shadow-sm">
              {t(cta.heading, lang)}
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg drop-shadow-sm">
              {t(cta.description, lang)}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-rose-600 shadow-2xl transition duration-200 hover:bg-rose-50 active:scale-[0.98]"
              >
                {/* Specular light sweep animation */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-rose-100/60 to-transparent animate-button-shine"
                />
                <CalendarCheck size={16} />
                <span>{t(content.nav.bookConsultation, lang)}</span>
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/15 px-7 py-3.5 text-sm font-bold text-white shadow-lg backdrop-blur-md transition duration-200 hover:bg-white/25 active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                <span>{t(content.nav.chatWhatsapp, lang)}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
