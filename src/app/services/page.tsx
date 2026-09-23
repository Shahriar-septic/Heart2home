import type { Metadata } from "next";
import ServicesIndexContent from "@/components/pages/ServicesIndexContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Child & Parent Counselling, Teen & Career Guidance, Personal Growth & Mind Training, and DMIT Assessment — in Dhaka and online.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Heart2Home by Shammy Akhter",
    description:
      "Child & Parent Counselling, Teen & Career Guidance, Personal Growth & Mind Training, and DMIT Assessment at Heart2Home.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesIndexContent />;
}
