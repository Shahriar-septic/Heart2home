import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PainPointGrid from "@/components/PainPointGrid";
import PillarSummary from "@/components/PillarSummary";
import QuizTeaser from "@/components/QuizTeaser";
import TrustBadges from "@/components/TrustBadges";
import MiniBio from "@/components/MiniBio";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Child, Teen & Parent Guidance | Heart2Home by Shammy Akhter",
  description:
    "Heart2Home provides compassionate Child & Parent Counselling, Teen & Career Guidance, and Family Therapy in Dhaka and online by Shammy Akhter.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Heart2Home | Child & Family Guidance by Shammy Akhter",
    description:
      "Compassionate, research-grounded counselling for children, teens, and parents in Dhaka and online.",
    url: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.shammyakhter.com/#business",
  name: "Heart2Home — Child & Family Guidance by Shammy Akhter",
  description:
    "Heart2Home provides Child & Parent Counselling, Teen & Career Guidance, and Personal Growth coaching by Shammy Akhter in Dhaka and online.",
  image: "https://www.shammyakhter.com/images/shammy-portrait.jpg",
  url: "https://www.shammyakhter.com",
  telephone: "+8801700000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  areaServed: "Dhaka, Bangladesh",
  sameAs: ["https://www.facebook.com/profile.php?id=61584633989473"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Child & Parent Counselling",
        url: "https://www.shammyakhter.com/services/child-parent-counselling",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Teen & Career Guidance",
        url: "https://www.shammyakhter.com/services/teen-career-guidance",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Personal Growth & Mind Training",
        url: "https://www.shammyakhter.com/services/personal-growth-mind-training",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "DMIT Assessment",
        url: "https://www.shammyakhter.com/services/dmit-assessment",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <PainPointGrid />
      <PillarSummary />
      <QuizTeaser />
      <TrustBadges />
      <MiniBio />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
