"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function Testimonials() {
  const { lang } = useLanguage();
  const testimonials = content.home.testimonials;

  return (
    <section className="relative py-16 sm:py-24">
      {/* Soft background ambient gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-full max-w-4xl -translate-x-1/2 rounded-full bg-clay-tint/20 blur-3xl"
      />

      <Container>
        <SectionHeading heading={t(testimonials.heading, lang)} />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:bg-white hover:shadow-float sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-tint text-sage-dark">
                    <Quote size={18} />
                  </div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-5 text-sm leading-relaxed text-ink/80 italic sm:text-[15px]">
                  &ldquo;{t(item.quote, lang)}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-clay-tint text-xs font-semibold text-clay-dark">
                  {i === 0 ? "AP" : i === 1 ? "TN" : "MK"}
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">
                    {t(item.attribution, lang)}
                  </p>
                  <p className="text-[11px] text-slate">
                    {lang === "en" ? "Confidential Client" : "গোপনীয় পরামর্শ গ্রহীতা"}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate">
          {t(testimonials.note, lang)}
        </p>
      </Container>
    </section>
  );
}
