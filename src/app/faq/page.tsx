import type { Metadata } from "next";
import content from "@/data/content.json";
import FAQAccordion from "@/components/FAQAccordion";
import FaqPageHeader from "@/components/FaqPageHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about getting started, session formats, privacy, and the scope of counselling care.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Heart2Home",
    description:
      "Answers to common questions about getting started, session formats, privacy, and scope of care at Heart2Home.",
    url: "/faq",
  },
};

const allItems = content.faqPage.categories.flatMap((cat) => cat.items);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allItems.map((item) => ({
    "@type": "Question",
    name: item.q.en,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a.en,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="py-14 sm:py-20">
      <JsonLd data={jsonLd} />
      <FaqPageHeader />
      <FAQAccordion />
    </div>
  );
}
