import type { Metadata } from "next";
import QuizPageContent from "@/components/pages/QuizPageContent";

export const metadata: Metadata = {
  title: "Parent Readiness Check",
  description:
    "A private, two-minute diagnostic to understand what you're seeing at home and what to do next.",
  alternates: { canonical: "/parent-readiness-quiz" },
  openGraph: {
    title: "Parent Readiness Check | Heart2Home",
    description:
      "A private, two-minute diagnostic to understand what you're seeing at home and what to do next — by Heart2Home.",
    url: "/parent-readiness-quiz",
  },
};

export default function Page() {
  return <QuizPageContent />;
}
