import type { Metadata } from "next";
import content from "@/data/content.json";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";

export const metadata: Metadata = {
  title: "Child & Parent Counselling in Dhaka",
  description:
    "Support for behavioural struggles, emotional regulation, screen overuse, and rebuilding the parent-child bond — in Dhaka and online.",
  alternates: { canonical: "/services/child-parent-counselling" },
  openGraph: {
    title: "Child & Parent Counselling | Heart2Home",
    description:
      "Support for behavioural struggles, emotional regulation, and rebuilding the parent-child bond at Heart2Home with Shammy Akhter.",
    url: "/services/child-parent-counselling",
  },
};

export default function Page() {
  return <ServiceDetailContent page={content.childParentPage} />;
}
