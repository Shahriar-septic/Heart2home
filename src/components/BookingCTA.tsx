"use client";

import Link from "next/link";
import Image from "next/image";
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
          className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 px-6 py-16 text-center text-white shadow-[0_25px_60px_-15px_rgba(225,29,72,0.35),0_15px_35px_-10px_rgba(13,148,136,0.25)] sm:px-12 sm:py-20"
        >
          {/* Photographic Family Reconnection Backdrop with Living Colors */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* 1. Underlying High-Visibility Photograph */}
            <Image
              src="/images/family-bonding-bg.jpg"
              alt="Heartfelt family bonding and peace of mind"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-[center_35%] opacity-80"
            />

            {/* 2. Fluid Animated Aurora Moving Gradient Mesh */}
            <div
              className="absolute inset-0 opacity-55 animate-aurora-mesh mix-blend-color"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #701A75 0%, #831843 30%, #0A3D36 70%, #064E3B 100%)",
                backgroundSize: "220% 220%",
              }}
            />

            {/* 3. Fluid Moving Floating Color Blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-20 h-[420px] w-[420px] rounded-full bg-rose-500/30 blur-[90px] animate-aurora-blob-1"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 h-[440px] w-[440px] rounded-full bg-teal-400/30 blur-[95px] animate-aurora-blob-2"
            />

            {/* 4. Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            {/* Confidentiality Pill with Beating Heart */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm backdrop-blur-md">
              <Heart size={13} className="text-white fill-white animate-heartbeat" />
              <span>
                {lang === "en" ? "Heart2Home Confidential Care" : "হার্ট টু হোম গোপনীয় সেবা"}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl !text-white drop-shadow-md" style={{ color: "#FFFFFF" }}>
              {t(cta.heading, lang)}
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg drop-shadow">
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
