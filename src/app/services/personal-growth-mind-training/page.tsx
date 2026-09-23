import type { Metadata } from "next";
import content from "@/data/content.json";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";

export const metadata: Metadata = {
  title: "Personal Growth & Mind Training",
  description:
    "Parental stress relief, emotional regulation, habit-building, and family relationship harmony — in Dhaka and online.",
  alternates: { canonical: "/services/personal-growth-mind-training" },
  openGraph: {
    title: "Personal Growth & Mind Training | Heart2Home",
    description:
      "Parental stress relief, emotional regulation, habit-building, and family relationship harmony at Heart2Home with Shammy Akhter.",
    url: "/services/personal-growth-mind-training",
  },
};

export default function Page() {
  return <ServiceDetailContent page={content.personalGrowthPage} />;
}
