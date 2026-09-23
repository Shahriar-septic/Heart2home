"use client";

import { useState } from "react";
import { Send, Lock, Video, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, waLink } from "@/lib/utils";
import content from "@/data/content.json";

export default function BookingForm() {
  const { lang } = useLanguage();
  const form = content.contactPage.form;

  const [name, setName] = useState("");
  const [age, setAge] = useState(form.ageOptions[0].en);
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState(form.modeOptions[0].en);
  const [topic, setTopic] = useState(form.topicOptions[0].en);
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines =
      lang === "en"
        ? [
            `Hello Shammy, I'd like to book a consultation at Heart2Home.`,
            `Parent/Guardian: ${name || "-"}`,
            `Child's age bracket: ${age}`,
            `Phone/WhatsApp: ${phone || "-"}`,
            `Preference: ${mode}`,
            `Topic: ${topic}`,
            note ? `Note: ${note}` : "",
          ]
        : [
            `হ্যালো শামী, আমি হার্ট টু হোম (Heart2Home) এ একটি পরামর্শ বুক করতে চাই।`,
            `অভিভাবক: ${name || "-"}`,
            `সন্তানের বয়সসীমা: ${age}`,
            `ফোন/হোয়াটসঅ্যাপ: ${phone || "-"}`,
            `পছন্দ: ${mode}`,
            `বিষয়: ${topic}`,
            note ? `নোট: ${note}` : "",
          ];

    const message = lines.filter(Boolean).join("\n");
    const href = waLink(content.site.whatsapp, message);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border-2 border-slate-200/80 bg-white p-6 pb-28 shadow-xl sm:p-9 sm:pb-9"
    >
      {/* Confidentiality Seal */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            {t(form.heading, lang)}
          </h2>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            {lang === "en"
              ? "Share your concern safely and receive personalized guidance from Shammy Akhter."
              : "নিরাপদে আপনার সমস্যা শেয়ার করুন ও শামী আক্তারের পরামর্শ পান।"}
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800 sm:flex">
          <Lock size={13} />
          <span>{lang === "en" ? "100% Confidential" : "সম্পূর্ণ গোপনীয়"}</span>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="parent-name" className="mb-1.5 block text-sm font-bold text-slate-800">
            {t(form.nameLabel, lang)}
          </label>
          <input
            id="parent-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t(form.namePlaceholder, lang)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="child-age" className="mb-1.5 block text-sm font-bold text-slate-800">
              {t(form.ageLabel, lang)}
            </label>
            <select
              id="child-age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200"
            >
              {form.ageOptions.map((opt, i) => (
                <option key={i} value={opt.en}>
                  {t(opt, lang)}
                </option>
              ))}
            </select>
            {age === form.ageOptions[form.ageOptions.length - 1].en && (
              <p className="mt-2 text-xs leading-relaxed text-rose-600 font-medium">
                {t(form.ageAdultNote, lang)}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-slate-800">
              {t(form.phoneLabel, lang)}
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t(form.phonePlaceholder, lang)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200"
            />
          </div>
        </div>

        <div>
          <span className="mb-2 block text-sm font-bold text-slate-800">
            {t(form.modeLabel, lang)}
          </span>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {form.modeOptions.map((opt, i) => {
              const selected = mode === opt.en;
              const isOnline = opt.en.toLowerCase().includes("online");
              return (
                <button
                  type="button"
                  key={i}
                  onClick={() => setMode(opt.en)}
                  aria-pressed={selected}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-3.5 py-3 text-sm font-bold transition ${
                    selected
                      ? "border-rose-500 bg-rose-50 text-rose-700 shadow-sm ring-2 ring-rose-200"
                      : "border-slate-200 bg-white text-slate-700 hover:border-rose-300 hover:bg-rose-50/40"
                  }`}
                >
                  {isOnline ? (
                    <Video size={15} className={selected ? "text-rose-600" : "text-slate-400"} />
                  ) : (
                    <MapPin size={15} className={selected ? "text-rose-600" : "text-slate-400"} />
                  )}
                  <span>{t(opt, lang)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-bold text-slate-800">
            {t(form.topicLabel, lang)}
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200"
          >
            {form.topicOptions.map((opt, i) => (
              <option key={i} value={opt.en}>
                {t(opt, lang)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="note" className="mb-1.5 block text-sm font-bold text-slate-800">
            {t(form.noteLabel, lang)}
          </label>
          <textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t(form.notePlaceholder, lang)}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-rose-500/25 transition active:scale-[0.98]"
      >
        <Send size={16} />
        <span>{t(form.submitLabel, lang)}</span>
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
        <Lock size={12} className="text-teal-600" />
        <span>{t(form.privacyNote, lang)}</span>
      </div>
    </form>
  );
}
