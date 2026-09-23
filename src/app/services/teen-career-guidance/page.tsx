import type { Metadata } from "next";
import content from "@/data/content.json";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";

export const metadata: Metadata = {
  title: "Teen & Career Guidance",
  description:
    "Support for academic pressure, exam stress, motivation slumps, and career direction for teenagers — in Dhaka and online.",
  alternates: { canonical: "/services/teen-career-guidance" },
  openGraph: {
    title: "Teen & Career Guidance | Heart2Home",
    description:
      "Support for academic pressure, exam stress, motivation slumps, and career direction at Heart2Home with Shammy Akhter.",
    url: "/services/teen-career-guidance",
  },
};

export default function Page() {
  return <ServiceDetailContent page={content.teenCareerPage} />;
}
