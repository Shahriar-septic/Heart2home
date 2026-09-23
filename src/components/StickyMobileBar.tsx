"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink } from "@/lib/utils";
import content from "@/data/content.json";

export default function StickyMobileBar() {
  const { lang } = useLanguage();
  const [keyboardActive, setKeyboardActive] = useState(false);

  useEffect(() => {
    function isTextInput(el: EventTarget | null) {
      if (!(el instanceof HTMLElement)) return false;
      const tag = el.tagName.toLowerCase();
      return tag === "input" || tag === "textarea" || el.isContentEditable;
    }

    function handleFocusIn(e: FocusEvent) {
      if (isTextInput(e.target)) setKeyboardActive(true);
    }
    function handleFocusOut(e: FocusEvent) {
      if (isTextInput(e.target)) setKeyboardActive(false);
    }

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const whatsappHref = waLink(
    content.site.whatsapp,
    lang === "en"
      ? "Hello Shammy, I'd like to know more about a consultation at Heart2Home."
      : "হ্যালো শামী, আমি হার্ট টু হোম (Heart2Home) এর পরামর্শ সেশন সম্পর্কে আরও জানতে চাই।"
  );

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-white/60 ios-glass pb-safe transition-transform duration-200 md:hidden ${
        keyboardActive ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2.5 px-4 py-2.5">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-full border border-teal-600/80 bg-white/80 px-3 text-sm font-bold text-teal-800 shadow-sm backdrop-blur-md active:bg-white"
        >
          <MessageCircle size={16} className="shrink-0 text-teal-600" />
          <span className="truncate">{t(content.common.whatsapp, lang)}</span>
        </a>
        <Link
          href="/contact"
          className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600/95 to-rose-500/95 px-3 text-sm font-bold text-white shadow-md shadow-rose-500/25 backdrop-blur-md active:scale-[0.98]"
        >
          <CalendarCheck size={16} className="shrink-0" />
          <span className="truncate">{t(content.common.bookNow, lang)}</span>
        </Link>
      </div>
    </div>
  );
}
