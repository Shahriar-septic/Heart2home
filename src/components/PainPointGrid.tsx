"use client";

import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import { getIcon } from "@/lib/icon-map";
import content from "@/data/content.json";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function PainPointGrid() {
  const { lang } = useLanguage();
  const pain = content.home.painPoints;

  return (
    <section className="relative bg-transparent py-6 sm:py-10 lg:py-12">
      {/* Subtle background ambient touch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-clay-tint/25 blur-3xl"
      />

      <Container>
        <SectionHeading
          heading={t(pain.heading, lang)}
          description={t(pain.subheading, lang)}
        />

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pain.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-white/80 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:bg-white hover:shadow-float sm:p-7"
              >
                {/* Subtle top edge gradient bar on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-clay/0 via-clay/60 to-clay/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-tint/70 text-clay-dark transition-all duration-300 group-hover:scale-105 group-hover:bg-clay group-hover:text-white group-hover:shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {t(item.title, lang)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {t(item.description, lang)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
