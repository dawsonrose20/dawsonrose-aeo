import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../layout";

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
      {/* Top brand bar (links back to home) */}
      <div className="px-6 py-4 max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/icon.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="text-sm font-bold tracking-widest uppercase">
            {SITE.name}
          </span>
        </Link>
        <span className="text-xs text-slate-500 tracking-wide hidden sm:block">
          Answer Engine Optimization
        </span>
      </div>

      {/* Confirmation */}
      <section className="px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <header className="mb-10 max-w-3xl">
          <p className="text-sm font-bold text-red-900 tracking-tight mb-2">
            CONFIRMED
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight pb-3 border-b-2 border-emerald-700">
            Got it. We&apos;ll be in touch.
          </h1>
        </header>

        <div className="max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Your inquiry just landed in {SITE.email}. Here&apos;s what happens
            next.
          </p>

          <ul className="space-y-6 text-slate-700">
            <li className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                Response within 24 hours.
              </span>{" "}
              Usually faster on weekdays. You&apos;ll get a brief reply
              confirming what we&apos;ll cover and when.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                Free 10-query mini-audit.
              </span>{" "}
              If you asked for one, expect a 1-2 page summary with screenshots
              within 3 business days. No obligation, no follow-up unless you
              want it.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                Honest answer.
              </span>{" "}
              If AEO isn&apos;t worth your time right now, you&apos;ll hear
              that. Not every business needs to invest in AI visibility this
              quarter.
            </li>
          </ul>

          <p className="text-sm text-slate-500 mt-12">
            In the meantime, nothing else is needed from you. No need to reply
            to this page; we already have your details.
          </p>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-200">
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
