import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-hind",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.shammyakhter.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heart2Home | Child, Teen & Family Guidance by Shammy Akhter",
    template: "%s | Heart2Home",
  },
  description:
    "Heart2Home offers compassionate, research-grounded psychotherapy and counselling for children, teens, and parents by Shammy Akhter in Dhaka and online.",
  openGraph: {
    type: "website",
    siteName: "Heart2Home — Child & Family Guidance",
    title: "Heart2Home | Child, Teen & Family Guidance by Shammy Akhter",
    description:
      "Compassionate, research-grounded counselling for children, teens, and parents in Dhaka and online.",
    url: siteUrl,
    images: [
      {
        url: "/images/shammy-portrait.jpg",
        width: 960,
        height: 1280,
        alt: "Shammy Akhter — Heart2Home Lead Counsellor",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart2Home | Child, Teen & Family Guidance by Shammy Akhter",
    description:
      "Compassionate, research-grounded counselling for children, teens, and parents in Dhaka and online.",
    images: ["/images/shammy-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${hindSiliguri.variable}`}>
      <body className="flex min-h-screen flex-col pb-24 md:pb-0">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
