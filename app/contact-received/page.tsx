import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../layout";
import { FadeUp } from "../components/FadeUp";

export const metadata: Metadata = {
  title: `Contact Received | ${SITE.name}`,
  description:
    "Your inquiry has been received. Sparkbilt will respond within 24 hours.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: undefined },
};

export default function ContactReceivedPage() {
  return (
    <main className="font-sans">
      {/* Top brand bar */}
      <div className="px-6 py-5 max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/icon.svg"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-sm font-bold tracking-widest uppercase">
            {SITE.name}
          </span>
        </Link>
        <span className="text-xs text-slate-500 tracking-wide hidden sm:block">
          Answer Engine Optimization
        </span>
      </div>

      <section className="px-6 pt-24 pb-24 sm:pt-32 sm:pb-32 max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-red-900 font-bold mb-8">
            Confirmed
          </p>
        </FadeUp>
        <FadeUp delay={80}>
          <h1
            className="text-display mb-12 max-w-5xl pb-6 border-b-2 border-emerald-700"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}
          >
            Got it. We&apos;ll be in touch.
          </h1>
        </FadeUp>

        <FadeUp delay={160}>
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
              Your inquiry just landed in {SITE.email}. Here&apos;s what
              happens next.
            </p>

            <ul className="space-y-8 text-slate-700 text-base sm:text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-slate-900">
                  Response within 24 hours.
                </span>{" "}
                Usually faster on weekdays. You&apos;ll get a brief reply
                confirming what we&apos;ll cover and when.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Free audit.
                </span>{" "}
                If you asked for one, expect a 1-2 page summary with
                screenshots within 3 business days. No obligation, no
                follow-up unless you want it.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Honest answer.
                </span>{" "}
                If AEO isn&apos;t worth your time right now, you&apos;ll hear
                that. Not every business needs to invest in AI visibility
                this quarter.
              </li>
            </ul>

            <p className="text-sm text-slate-500 mt-16">
              In the meantime, nothing else is needed from you. No need to
              reply to this page; we already have your details.
            </p>
          </div>
        </FadeUp>
      </section>

      <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-200">
        <p className="text-xs text-slate-500 tracking-widest uppercase text-center">
          {SITE.name} &nbsp;&bull;&nbsp; Answer Engine Optimization
          &nbsp;&bull;&nbsp; {new Date().getFullYear()}
        </p>
      </footer>

      {/*
        Google Ads conversion tracking goes here once you create the
        conversion action in Google Ads. Paste the gtag snippet inside a
        <Script /> tag (import Script from "next/script") with the conversion
        ID and label Google gives you. Example:

        <Script id="gads-conversion" strategy="afterInteractive">
          {`gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/YYYYYYYY'});`}
        </Script>
      */}
    </main>
  );
}
