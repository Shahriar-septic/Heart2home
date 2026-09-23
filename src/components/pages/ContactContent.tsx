"use client";

import { MapPin, Video, TriangleAlert, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";
import BookingForm from "@/components/BookingForm";

export default function ContactContent() {
  const { lang } = useLanguage();
  const page = content.contactPage;

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 -z-10 h-80 w-80 rounded-full bg-sage-tint/40 blur-3xl"
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
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            {t(page.intro, lang)}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.25fr]">
          {/* Clinic & Contact Cards */}
          <div className="space-y-5">
            {/* Dhaka Clinic */}
            <div className="group rounded-3xl border border-border/80 bg-white/90 p-6 shadow-card backdrop-blur-sm transition hover:border-sage/40 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-tint text-sage-dark">
                <MapPin size={20} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-ink">
                {t(page.clinicHeading, lang)}
              </h2>
              <p className="mt-2 text-sm text-slate">
                {t(content.site.addressLine1, lang)}
              </p>
              <p className="mt-1 text-xs text-slate/80">
                {t(content.site.exactAddressNote, lang)}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-sage-tint/70 px-3 py-1 text-xs font-medium text-sage-dark">
                <Clock size={12} />
                <span>{t(page.clinicHours, lang)}</span>
              </div>
            </div>

            {/* Online Worldwide */}
            <div className="group rounded-3xl border border-border/80 bg-white/90 p-6 shadow-card backdrop-blur-sm transition hover:border-sage/40 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-tint text-clay-dark">
                <Video size={20} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-ink">
                {t(page.onlineHeading, lang)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {t(page.onlineDescription, lang)}
              </p>
            </div>

            {/* Direct Connect */}
            <div className="rounded-3xl border border-border/80 bg-white/90 p-6 shadow-card backdrop-blur-sm sm:p-7">
              <h2 className="text-base font-semibold text-ink">
                {lang === "en" ? "Direct Contact" : "সরাসরি যোগাযোগ"}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                <li>
                  <a
                    href={`tel:${content.site.phone}`}
                    className="flex items-center gap-2.5 font-medium text-ink/80 transition hover:text-sage-dark"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-sage">
                      <Phone size={14} />
                    </span>
                    <span>{content.site.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${content.site.email}`}
                    className="flex items-center gap-2.5 font-medium text-ink/80 transition hover:text-sage-dark"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-clay">
                      <Mail size={14} />
                    </span>
                    <span className="break-all">{content.site.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Crisis Alert Banner */}
            <div className="flex gap-3.5 rounded-3xl border border-clay/30 bg-clay-tint/70 p-6 shadow-sm">
              <TriangleAlert
                className="mt-0.5 shrink-0 text-clay-dark"
                size={20}
              />
              <div>
                <h2 className="text-sm font-semibold text-ink">
                  {t(page.crisisHeading, lang)}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-slate sm:text-sm">
                  {t(page.crisisBody, lang)}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <BookingForm />
        </div>
      </Container>
    </div>
  );
}
