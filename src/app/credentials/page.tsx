import type { Metadata } from "next";
import CredentialsContent from "@/components/pages/CredentialsContent";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Academic grounding, certified training, and ongoing professional development behind Shammy Akhter's counselling practice.",
  alternates: { canonical: "/credentials" },
  openGraph: {
    title: "Credentials | Heart2Home by Shammy Akhter",
    description:
      "Academic grounding, certified training, and ongoing professional development behind Shammy Akhter's counselling practice at Heart2Home.",
    url: "/credentials",
  },
};

export default function Page() {
  return <CredentialsContent />;
}
