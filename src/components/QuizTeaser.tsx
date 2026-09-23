"use client";

import { ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";
import ParentReadinessQuiz from "@/components/ParentReadinessQuiz";

export default function QuizTeaser() {
  const { lang } = useLanguage();
  const teaser = content.home.quizTeaser;

  return (
    <section className="relative border-t border-border/70 bg-gradient-to-b from-sage-tint/40 via-surface-warm to-canvas py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-tint/80 px-3.5 py-1 text-xs font-semibold text-clay-dark backdrop-blur-sm">
              <ClipboardCheck size={14} />
              <span>
                {lang === "en" ? "2-Minute Self Assessment" : "২ মিনিটের সেলফ অ্যাসেসমেন্ট"}
              </span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {t(teaser.heading, lang)}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate sm:text-lg">
              {t(teaser.description, lang)}
            </p>
            <div className="mt-8 hidden space-y-3 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-card backdrop-blur-sm sm:block">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sage-dark">
                <span>Why Take This Assessment?</span>
              </div>
              <ul className="space-y-2 text-xs text-slate">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {lang === "en"
                    ? "Identify escalating family stress patterns early"
                    : "পারিবারিক মানসিক চাপের প্যাটার্ন আগে থেকেই চিহ্নিত করুন"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {lang === "en"
                    ? "Download our curated Bengali or English de-escalation guide"
                    : "বাংলা ও ইংরেজি ভাষায় তৈরি পারিবারিক ডি-এস্কেলেশন গাইড পান"}
                </li>
              </ul>
            </div>
          </div>

          <ParentReadinessQuiz compact />
        </div>
      </Container>
    </section>
  );
}
