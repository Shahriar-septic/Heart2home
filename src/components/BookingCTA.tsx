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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-rose-600 to-teal-700 px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-18">
          {/* Subtle decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-teal-400/20 blur-2xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
              <Heart size={13} className="text-white fill-white" />
              <span>
                {lang === "en" ? "Heart2Home Confidential Care" : "হার্ট টু হোম গোপনীয় সেবা"}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {t(cta.heading, lang)}
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              {t(cta.description, lang)}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-rose-600 shadow-xl transition duration-200 hover:bg-rose-50 active:scale-[0.98]"
              >
                <CalendarCheck size={16} />
                <span>{t(content.nav.bookConsultation, lang)}</span>
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/20 active:scale-[0.98]"
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
