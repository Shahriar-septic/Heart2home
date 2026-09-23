import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book a consultation with Shammy Akhter — in-person in Dhaka or online. Includes crisis guidance for urgent situations.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Booking | Heart2Home",
    description:
      "Book a consultation with Shammy Akhter at Heart2Home — in-person in Dhaka or online.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactContent />;
}
