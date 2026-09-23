import type { Metadata } from "next";
import DmitContent from "@/components/pages/DmitContent";

export const metadata: Metadata = {
  title: "DMIT Assessment",
  description:
    "A transparent overview of DMIT as a supplementary learning-style and sensory-preference tool — not an IQ test or destiny predictor.",
  alternates: { canonical: "/services/dmit-assessment" },
  openGraph: {
    title: "DMIT Assessment | Heart2Home",
    description:
      "A transparent overview of DMIT as a supplementary learning-style and sensory-preference tool at Heart2Home with Shammy Akhter.",
    url: "/services/dmit-assessment",
  },
};

export default function Page() {
  return <DmitContent />;
}
