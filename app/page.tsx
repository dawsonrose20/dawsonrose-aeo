import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "./site";
import { FadeUp } from "./components/FadeUp";
import { CursorParallax } from "./components/CursorParallax";
import { StatCounter } from "./components/StatCounter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.url,
      "logo": `${SITE.url}${SITE.headshot}`,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": `mailto:${SITE.email}`,
          "telephone": SITE.phoneE164,
          "areaServed": SITE.region,
          "availableLanguage": "English"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "Answer Engine Optimization",
      "description": "Answer Engine Optimization for local businesses: audits, schema deployment, NAP cleanup, review systems, and ongoing monitoring across ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
      "provider": {
        "@type": "Organization",
        "name": SITE.name
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "Website Building",
      "description": "Custom website design and development for local businesses with SEO and Google Business Profile integration.",
      "provider": {
        "@type": "Organization",
        "name": SITE.name
      }
    }
  ]
};

function SectionHeader({ number, title, dark = false }: { number: string; title: string; dark?: boolean }) {
  return (
    <header className="mb-12">
      <p className={`text-sm font-bold tracking-tight mb-3 ${dark ? "text-red-400" : "text-red-900"}`}>
        {number}
      </p>
      <h2 className={`text-4xl sm:text-5xl md:text-6xl text-display pb-4 border-b-2 ${dark ? "border-emerald-500" : "border-emerald-700"}`}>
        {title}
      </h2>
    </header>
  );
}

function StatCard({ number, suffix = "", label, sublabel, dark = false, animated = true }: { number: number; suffix?: string; label: string; sublabel: string; dark?: boolean; animated?: boolean }) {
  return (
    <div className={`rounded-xl p-7 ${dark ? "bg-slate-800/60 border border-slate-700" : "bg-white border border-slate-200 shadow-floating"}`}>
      <p className={`text-6xl sm:text-7xl font-black leading-none tracking-tighter ${dark ? "text-red-400" : "text-red-900"}`}>
        {animated ? <StatCounter value={number} suffix={suffix} /> : `${number}${suffix}`}
      </p>
      <p className={`text-base font-semibold mt-4 ${dark ? "text-slate-100" : "text-slate-900"}`}>{label}</p>
      <p className={`text-sm mt-1 leading-snug ${dark ? "text-slate-400" : "text-slate-500"}`}>{sublabel}</p>
    </div>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Local Business Websites & AEO`,
  description: `Sparkbilt helps local businesses with Answer Engine Optimization and custom website building through personal, one-on-one service.`,
  alternates: { canonical: new URL("/", SITE.url).toString() },
  openGraph: {
    title: `${SITE.name} | Local Business Websites & AEO`,
    description: `Sparkbilt helps local businesses with Answer Engine Optimization and custom website building through personal, one-on-one service.`,
    url: new URL("/", SITE.url).toString(),
    siteName: SITE.name,
    images: [{ url: new URL("/opengraph-image", SITE.url).toString(), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Local Business Websites & AEO`,
    description: "Sparkbilt helps local businesses with website design and AI visibility.",
    images: [new URL("/opengraph-image", SITE.url).toString()],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="font-sans overflow-x-hidden">
        <section className="relative px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 max-w-6xl mx-auto">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <CursorParallax intensity={18} className="absolute right-0 top-0 sm:right-4 sm:top-4">
              <img
                src="/icon.svg"
                alt=""
                width={640}
                height={640}
                className="opacity-[0.05] select-none"
                style={{ width: "min(640px, 55vw)", height: "auto" }}
              />
            </CursorParallax>
          </div>

          <FadeUp>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-red-900 font-bold mb-8">
              Local business websites + AI visibility
            </p>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 className="text-display mb-10 max-w-5xl" style={{ fontSize: "clamp(48px, 9vw, 104px)" }}>
              Custom websites and AI-ready optimization for local business owners.
            </h1>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
              <div>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                  I build modern, local-first websites from scratch and make sure they work for AI assistants like ChatGPT, Claude, and Perplexity. The result is a website that looks great and is positioned to be cited by the next generation of search.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/aeo"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-slate-700 transition shadow-floating"
                  >
                    Explore AEO
                  </a>
                  <a
                    href="/website-building"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition"
                  >
                    Website Building →
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={280}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20">
              <StatCard number={2} label="Core services" sublabel="AEO and Website Building" />
              <StatCard number={1} suffix=":1" label="Client relationship" sublabel="Personal work with every business" />
              <StatCard number={24} suffix="/7" label="Local attention" sublabel="Focused on small business visibility" />
            </div>
          </FadeUp>
        </section>

        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="01" title="About me." />
          </FadeUp>
          <FadeUp delay={80}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
              <div className="max-w-3xl">
                <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed">
                  I&apos;m {SITE.personName}, a {SITE.year.toLowerCase()} studying {SITE.major} at {SITE.school}. I help small businesses in {SITE.region} build strong websites and get found by AI assistants.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6">
                  I use AI tools every day so I understand how they work, what they extract, and which sites they trust. That experience turns into practical work for local business owners: better websites, cleaner data, and real visibility in the next wave of search.
                </p>
              </div>
              <div className="lg:order-last">
                <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-floating">
                  <Image
                    src={SITE.headshot}
                    alt={`${SITE.personName}, founder of ${SITE.name}`}
                    width={1009}
                    height={793}
                    className="w-full h-auto block"
                  />
                </div>
                <p className="mt-3 text-sm italic text-slate-600 text-center">
                  {SITE.personName}
                </p>
              </div>
            </div>
          </FadeUp>
        </section>

        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader number="02" title="What clients say." dark />
            </FadeUp>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  quote:
                    "Dawson turned our website into a powerful local marketing tool. The process was easy and the results felt modern.",
                  name: "Local Salon Owner",
                  role: "Owner, beauty salon",
                },
                {
                  quote:
                    "I liked the personal attention and practical advice. We now have a website that works for customers and AI assistants.",
                  name: "Plumbing Business",
                  role: "Owner, home services",
                },
                {
                  quote:
                    "The website feels fresh, and the local SEO guidance made the whole project more valuable.",
                  name: "Health Coach",
                  role: "Founder, wellness brand",
                },
              ].map((testimonial) => (
                <FadeUp key={testimonial.name} delay={80}>
                  <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-floating">
                    <p className="text-lg leading-relaxed">“{testimonial.quote}”</p>
                    <p className="mt-8 font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="03" title="Services at a glance." />
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <FadeUp>
              <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-floating">
                <p className="text-sm uppercase tracking-[0.2em] text-red-900 font-bold mb-4">Answer Engine Optimization</p>
                <h3 className="text-3xl font-semibold text-slate-900 mb-5">AI visibility for local businesses.</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  AEO is the foundation for being recommended by AI assistants like ChatGPT, Claude, and Perplexity. I audit your schema, citations, and Google Business Profile, then deliver a roadmap that helps your business appear in answer results.
                </p>
                <a href="/aeo" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700">
                  Learn more about AEO →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-floating">
                <p className="text-sm uppercase tracking-[0.2em] text-red-900 font-bold mb-4">Website Building</p>
                <h3 className="text-3xl font-semibold text-slate-900 mb-5">Fully custom site design, built locally.</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  I design and build custom websites that feel modern and convert visitors. Every build is optimized for local search, Google Business Profile, and AI-ready content so your site is ready for the next wave of customer discovery.
                </p>
                <a href="/website-building" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700">
                  Learn more about Website Building →
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader number="04" title="Ready to get started?" dark />
            </FadeUp>
            <FadeUp delay={80}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
                If you want a custom website that supports your local brand and a plan to be visible in AI answers, let&apos;s talk. I keep the process personal and clear, from discovery to launch.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${SITE.email}?subject=Sparkbilt%20Inquiry`} className="inline-flex items-center gap-2 bg-warm text-slate-900 px-7 py-3.5 rounded-full font-medium hover:bg-white transition shadow-floating">
                  Email {SITE.email}
                </a>
                <a href={`tel:${SITE.phoneE164}`} className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3.5 rounded-full font-medium text-slate-100 hover:bg-slate-800 transition">
                  Call {SITE.phone}
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-200">
          <p className="text-xs text-slate-500 tracking-widest uppercase text-center">
            {SITE.name} • Local business websites + AI visibility • {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
