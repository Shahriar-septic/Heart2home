"use client";

import { useId, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";
import Container from "@/components/Container";

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-border/60 last:border-none">
      <h3>
        <button
          type="button"
          id={`faq-trigger-${id}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-tight text-ink transition hover:text-sage-dark sm:text-lg"
        >
          <span>{question}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
              open
                ? "border-sage bg-sage text-white rotate-180"
                : "border-border/80 bg-surface-warm/60 text-slate"
            }`}
          >
            <ChevronDown size={16} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-slate sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const { lang } = useLanguage();
  const categories = content.faqPage.categories;

  return (
    <Container className="max-w-3xl pb-16">
      <div className="space-y-12">
        {categories.map((category, i) => (
          <div key={i}>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sage-tint text-sage-dark">
                <HelpCircle size={15} />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {t(category.title, lang)}
              </h2>
            </div>
            <div className="rounded-3xl border border-border/80 bg-white/90 px-6 shadow-card backdrop-blur-sm sm:px-8">
              {category.items.map((item, j) => (
                <AccordionItem
                  key={j}
                  question={t(item.q, lang)}
                  answer={t(item.a, lang)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
