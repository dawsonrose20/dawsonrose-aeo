import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Edit these to match your details before deploying.
export const SITE = {
  name: "Sparkbilt",
  personName: "Dawson Rose",
  role: "Answer Engine Optimization for Local Businesses",
  region: "Norfolk County, MA",
  regionShort: "Norfolk County",
  school: "Northeastern University",
  year: "Rising Sophomore",
  major: "Electrical Engineering",
  email: "dawson@sparkbilt.com",
  phone: "(617) 564-3805",
  phoneE164: "+16175643805",
  headshot: "/Headshot.jpeg",
  url: "https://sparkbilt.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | ${SITE.role}`,
  description: `${SITE.name} helps local businesses in ${SITE.region} get found and recommended by AI assistants like ChatGPT, Claude, Perplexity, Gemini, and Copilot. Audits, schema, NAP cleanup, review systems, and ongoing monitoring.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${SITE.name} | ${SITE.role}`,
    description: `Answer Engine Optimization for local businesses. Get found by ChatGPT, Claude, Perplexity, Gemini, and Copilot.`,
    url: "/",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.role}`,
    description: `Answer Engine Optimization for local businesses.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
