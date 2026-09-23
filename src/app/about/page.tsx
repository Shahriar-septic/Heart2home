import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Shammy Akhter",
  description:
    "MSS in Applied Criminology, with research on family bonding and youth behaviour — the foundation of Shammy Akhter's counselling philosophy at Heart2Home.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Shammy Akhter | Heart2Home",
    description:
      "MSS in Applied Criminology, with research on family bonding and youth behaviour — Heart2Home Lead Counsellor.",
    url: "/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shammy Akhter",
  jobTitle: "Child & Parent Counsellor, Family Guidance Practitioner, Life Coach",
  description:
    "Holds an MSS in Applied Criminology & Police Management, with research on the correlation between family bonding, parental attachment, and youth behavioural patterns.",
  url: "https://www.shammyakhter.com/about",
  image: "https://www.shammyakhter.com/images/shammy-portrait.jpg",
  worksFor: {
    "@type": "CounselingService",
    name: "Heart2Home — Child & Family Guidance by Shammy Akhter",
    areaServed: "Dhaka, Bangladesh",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Applied Criminology & Police Management program",
  },
  sameAs: ["https://www.facebook.com/profile.php?id=61584633989473"],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutContent />
    </>
  );
}
