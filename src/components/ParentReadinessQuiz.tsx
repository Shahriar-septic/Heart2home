"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  MessageCircle,
  RotateCcw,
  CheckCircle2,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink, cn } from "@/lib/utils";
import content from "@/data/content.json";

type Tier = "low" | "moderate" | "elevated" | "urgent";

type Bi = { en: string; bn: string };
type TierResult = { title: Bi; description: Bi; action: "download" | "whatsapp" };
const tierResults = content.quiz.results as unknown as Record<Tier, TierResult> & {
  whatsappMessage: string;
  downloadLabelEn: Bi;
  downloadLabelBn: Bi;
  whatsappLabel: Bi;
  bookLabel: Bi;
};

function tierFromScore(score: number): Tier {
  if (score <= 2) return "low";
  if (score <= 5) return "moderate";
  if (score <= 8) return "elevated";
  return "urgent";
}

export default function ParentReadinessQuiz({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { lang } = useLanguage();
  const quiz = content.quiz;
  const steps = quiz.steps;

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentStep = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;
  const canAdvance = Boolean(answers[currentStep?.id]);

  const score = useMemo(() => {
    return steps.reduce((total, step) => {
      const chosen = answers[step.id];
      const option = step.options.find((o) => o.id === chosen);
      return total + (option?.weight ?? 0);
    }, 0);
  }, [answers, steps]);

  const tier = tierFromScore(score);
  const result = tierResults[tier];

  function selectOption(stepId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: optionId }));
  }

  function handleNext() {
    if (isLastStep) {
      setSubmitted(true);
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  function handleBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function handleRestart() {
    setAnswers({});
    setStepIndex(0);
    setSubmitted(false);
  }

  const whatsappHref = waLink(content.site.whatsapp, quiz.results.whatsappMessage);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-xl sm:p-9",
        compact && "sm:p-7"
      )}
    >
      {!submitted && (
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
            <span>
              {t(quiz.stepLabel, lang)} {stepIndex + 1} {t(quiz.ofLabel, lang)}{" "}
              {steps.length}
            </span>
            <span className="text-rose-600 font-extrabold">
              {Math.round(((stepIndex + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-rose-100">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-600"
              initial={{ width: 0 }}
              animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              {t(currentStep.question, lang)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {t(currentStep.helper, lang)}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {currentStep.options.map((option) => {
                const active = answers[currentStep.id] === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(currentStep.id, option.id)}
                    aria-pressed={active}
                    className={cn(
                      "group flex items-center justify-between rounded-2xl border-2 p-4 text-left text-sm transition-all duration-200 sm:text-[15px]",
                      active
                        ? "border-rose-500 bg-rose-50/90 text-rose-950 font-bold shadow-sm ring-2 ring-rose-200"
                        : "border-slate-200 bg-white text-slate-800 font-medium hover:border-rose-300 hover:bg-rose-50/30"
                    )}
                  >
                    <span>{t(option.label, lang)}</span>
                    <span
                      className={cn(
                        "ml-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition",
                        active
                          ? "border-rose-600 bg-rose-600 text-white"
                          : "border-slate-300 text-transparent group-hover:border-rose-400"
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-slate-500 transition hover:text-slate-900 active:bg-slate-100 disabled:opacity-0 disabled:pointer-events-none"
              >
                <ArrowLeft size={16} />
                <span>{t(quiz.backLabel, lang)}</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canAdvance}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-rose-500/20 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span>
                  {isLastStep ? t(quiz.seeResultsLabel, lang) : t(quiz.nextLabel, lang)}
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              {tier === "urgent" || tier === "elevated" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 border border-rose-200 px-3.5 py-1 text-rose-800">
                  <AlertCircle size={14} className="text-rose-600" />
                  Recommended Action: Direct Consultation
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 border border-teal-200 px-3.5 py-1 text-teal-800">
                  <CheckCircle2 size={14} className="text-teal-600" />
                  Self-Help Guide Available
                </span>
              )}
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {t(result.title, lang)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t(result.description, lang)}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5">
              {result.action === "whatsapp" ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition active:scale-[0.98]"
                >
                  <MessageCircle size={17} />
                  <span>{t(quiz.results.whatsappLabel, lang)}</span>
                </a>
              ) : (
                <>
                  <a
                    href="/downloads/family-de-escalation-guide-en.pdf?v=1.0"
                    download
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-rose-500/20 transition active:scale-[0.98]"
                  >
                    <Download size={16} />
                    <span>{t(quiz.results.downloadLabelEn, lang)}</span>
                  </a>
                  <a
                    href="/downloads/family-de-escalation-guide-bn.pdf?v=1.0"
                    download
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-teal-600 bg-teal-50 px-6 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-100 active:scale-[0.98]"
                  >
                    <Download size={16} />
                    <span>{t(quiz.results.downloadLabelBn, lang)}</span>
                  </a>
                </>
              )}
              <a
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-rose-400 hover:text-rose-600"
              >
                <CalendarCheck size={16} />
                <span>{t(quiz.results.bookLabel, lang)}</span>
              </a>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-slate-800"
              >
                <RotateCcw size={13} />
                <span>{t(quiz.restartLabel, lang)}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
