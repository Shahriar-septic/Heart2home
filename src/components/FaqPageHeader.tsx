"use client";

import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

export default function FaqPageHeader() {
  const { lang } = useLanguage();
  const page = content.faqPage;

  return (
    <Container className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-medium text-clay-dark">
        {t(page.eyebrow, lang)}
      </p>
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
        {t(page.heading, lang)}
      </h1>
    </Container>
  );
}
