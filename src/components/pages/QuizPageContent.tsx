"use client";

import { ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";
import ParentReadinessQuiz from "@/components/ParentReadinessQuiz";

export default function QuizPageContent() {
  const { lang } = useLanguage();
  const quiz = content.quiz;

  return (
    <div className="relative overflow-hidden py-14 sm:py-24">
      {/* Background calming ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-full max-w-4xl -translate-x-1/2 rounded-full bg-sage-tint/40 blur-3xl"
      />

      <Container className="max-w-3xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
            <ClipboardCheck size={14} />
            <span>{content.nav.quiz ? t(content.nav.quiz, lang) : "Assessment"}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {t(quiz.title, lang)}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
            {t(quiz.intro, lang)}
          </p>
        </div>

        <div className="mt-12">
          <ParentReadinessQuiz />
        </div>
      </Container>
    </div>
  );
}
