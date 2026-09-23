"use client";

import Link from "next/link";
import { Facebook, Mail, Phone, TriangleAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import content from "@/data/content.json";

export default function Footer() {
  const { lang } = useLanguage();
  const footer = content.footer;
  const nav = content.nav;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white pb-safe">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        {/* Healthcare Medical Disclaimer */}
        <div className="mb-12 flex flex-col gap-3.5 rounded-3xl border-2 border-rose-100 bg-rose-50/60 p-5 sm:flex-row sm:items-start sm:p-6">
          <TriangleAlert className="mt-0.5 shrink-0 text-rose-600" size={20} aria-hidden="true" />
          <div>
            <p className="mb-1 text-sm font-bold text-slate-900">
              {t(footer.disclaimerHeading, lang)}
            </p>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              {t(footer.disclaimer, lang)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 leading-tight">
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-rose-600">Heart</span>
                <span className="text-teal-600">2</span>
                <span className="text-slate-900">Home</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse ml-1" />
            </Link>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              {lang === "en" ? "Child & Family Guidance • Shammy Akhter" : "শিশু ও পারিবারিক কাউন্সেলিং • শামী আক্তার"}
            </p>
            <p className="mt-3.5 max-w-xs text-xs leading-relaxed text-slate-600 sm:text-sm">
              {t(footer.about, lang)}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-900">
              {t(footer.quickLinksHeading, lang)}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 sm:text-sm">
              <li><Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href="/">{t(nav.home, lang)}</Link></li>
              <li><Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href="/about">{t(nav.about, lang)}</Link></li>
              <li><Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href="/credentials">{t(nav.credentials, lang)}</Link></li>
              <li><Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href="/parent-readiness-quiz">{t(nav.quiz, lang)}</Link></li>
              <li><Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href="/faq">{t(nav.faq, lang)}</Link></li>
              <li><Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href="/contact">{t(nav.contact, lang)}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-900">
              {t(footer.servicesHeading, lang)}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 sm:text-sm">
              <li><Link className="inline-block py-0.5 font-bold text-rose-600 transition hover:underline" href="/services">{t(nav.services, lang)}</Link></li>
              {nav.servicesDropdown.map((item) => (
                <li key={item.href}>
                  <Link className="inline-block py-0.5 font-medium transition hover:text-rose-600 hover:translate-x-0.5" href={item.href}>
                    {t(item.label, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-900">
              {t(footer.contactHeading, lang)}
            </p>
            <ul className="space-y-3 text-xs text-slate-600 sm:text-sm">
              <li>
                <a href={`tel:${content.site.phone}`} className="flex items-center gap-2.5 py-0.5 font-medium transition hover:text-rose-600">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                    <Phone size={13} className="shrink-0" />
                  </span>
                  <span>{content.site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${content.site.email}`} className="flex items-center gap-2.5 py-0.5 font-medium transition hover:text-rose-600 break-all">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-200">
                    <Mail size={13} className="shrink-0" />
                  </span>
                  <span>{content.site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={content.site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 py-0.5 font-medium transition hover:text-rose-600"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                    <Facebook size={13} className="shrink-0" />
                  </span>
                  <span>Facebook Profile</span>
                </a>
              </li>
              <li className="pt-1.5 text-xs text-slate-500">
                {t(content.site.addressLine1, lang)}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2.5 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Heart2Home. {t(footer.copyright, lang)}
          </p>
          <a
            href={content.site.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 font-medium transition hover:text-rose-600"
          >
            {t(footer.developedBy, lang)} {content.site.developerName}
          </a>
        </div>
      </div>
    </footer>
  );
}
