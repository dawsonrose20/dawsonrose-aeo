import Image from "next/image";
import { SITE } from "./layout";
import { FadeUp } from "./components/FadeUp";
import { StatCounter } from "./components/StatCounter";
import { CursorParallax } from "./components/CursorParallax";

type Tier = "CRITICAL" | "HIGH" | "MEDIUM";

const services: {
  name: string;
  summary: string;
  items: { tier: Tier; text: string }[];
}[] = [
  {
    name: "AEO Audit",
    summary:
      "Where you stand today across ChatGPT, Claude, Perplexity, Gemini, and Copilot, with proof.",
    items: [
      {
        tier: "CRITICAL",
        text: "Schema, NAP, and Google Business Profile gap analysis",
      },
      {
        tier: "HIGH",
        text: "20 customer queries run across ChatGPT, Claude, Perplexity, Gemini, and Copilot",
      },
      {
        tier: "HIGH",
        text: "Citation rate and share-of-voice vs. your two top competitors",
      },
      { tier: "MEDIUM", text: "Branded PDF report you keep" },
    ],
  },
  {
    name: "Foundation Setup",
    summary:
      "The technical and content work that turns invisibility into citations within 3–6 weeks.",
    items: [
      {
        tier: "CRITICAL",
        text: "JSON-LD schema deployed (LocalBusiness, Service, FAQ, Review, Hours)",
      },
      {
        tier: "CRITICAL",
        text: "NAP cleanup across Google, Bing, Apple Maps, Yelp, and industry directories",
      },
      {
        tier: "CRITICAL",
        text: "Bing Webmaster Tools setup: the single biggest lever for ChatGPT visibility",
      },
      {
        tier: "HIGH",
        text: "FAQ, service-area, and pricing pages written for AI extraction",
      },
      {
        tier: "HIGH",
        text: "Review request flow rebuilt to prompt for specific, citable language",
      },
    ],
  },
  {
    name: "Ongoing Monitoring",
    summary:
      "Weekly prompt panels, monthly reports, misinformation alerts. The compounding work.",
    items: [
      {
        tier: "CRITICAL",
        text: "Alerts when AI gives wrong hours, wrong services, or confuses you with a competitor",
      },
      {
        tier: "HIGH",
        text: "20 representative queries run weekly across ChatGPT, Claude, Perplexity, Gemini, and Copilot",
      },
      {
        tier: "HIGH",
        text: "Citation tracking, share-of-voice trend, sentiment monitoring",
      },
      {
        tier: "MEDIUM",
        text: "Crawler log analysis: proof AI bots are reading your pages",
      },
      { tier: "MEDIUM", text: "Monthly branded report" },
    ],
  },
];

const methodology = [
  {
    method: "Bot Crawler Simulation",
    description:
      "curl run against the live site with User-Agent strings set to OAI-SearchBot, ClaudeBot, PerplexityBot, and Googlebot. Response HTML analyzed for content volume, structure, and information density.",
  },
  {
    method: "Prompt Panel Testing",
    description:
      "20 representative queries across ChatGPT, Claude, Perplexity, Gemini, and Copilot. Service searches, location queries, and competitor comparisons. Scored for citation presence and sentiment.",
  },
  {
    method: "Schema & Structured Data Audit",
    description:
      "Live HTML parsed for JSON-LD, microdata, and Open Graph tags. Validated against Schema.org specs for LocalBusiness, Service, FAQPage, AggregateRating.",
  },
  {
    method: "Bing / ChatGPT Index Check",
    description:
      "site: queries run in Bing. Bing Webmaster Tools submission status checked. Domain confirmed indexed or flagged for submission.",
  },
  {
    method: "NAP Audit",
    description:
      "Business name, address, and phone cross-referenced across Google Business Profile, Yelp, Facebook, and 8–10 industry-specific directories. Inconsistencies documented.",
  },
  {
    method: "robots.txt Review",
    description:
      "robots.txt fetched directly and reviewed for bot-specific rules. AI crawler user agents (OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot, ChatGPT-User, Bingbot) checked for access.",
  },
  {
    method: "Baseline Measurement Protocol",
    description:
      "Before any implementation: queries documented with screenshots, server logs checked for crawler visits, GBP Insights screenshotted. Forms the baseline for the 30-day re-audit.",
  },
];

const faqs = [
  {
    q: "What is Answer Engine Optimization?",
    a: "Answer Engine Optimization (AEO) is the practice of making a business discoverable and recommendable inside AI assistants like ChatGPT, Claude, Perplexity, Google AI Overviews, and Microsoft Copilot. It combines technical SEO, schema markup, content engineering, citation building, and review management. Most local businesses are optimized for traditional Google search but invisible to AI systems, which are increasingly how people find local services.",
  },
  {
    q: "Why does AEO matter for a local business right now?",
    a: 'Gartner projects that roughly 25% of organic search traffic will shift to AI assistants. For a local query like "plumber near Quincy MA", the AI considers a small pool of 20–40 sources before citing 1–3. That makes the work to enter and survive the citation cut unusually tractable for local businesses, and the businesses that move first take the seats.',
  },
  {
    q: "How fast does AEO work show up?",
    a: "Most technical work shows measurable citation improvement in 3–6 weeks. Schema and Google Business Profile changes propagate within days. Authority and review effects compound over 3–6+ months. Some directory cleanup takes longer and is partially out of our control, and I will tell you that up front.",
  },
  {
    q: "Can you actually prove the work worked?",
    a: "Yes. Same 20 queries, same 5 AI platforms (ChatGPT, Claude, Perplexity, Gemini, Copilot), run before and 30 days after, side by side. Plus crawler logs showing OAI-SearchBot, ClaudeBot, and PerplexityBot literally fetching your new pages. Plus indexing dashboards from Bing Webmaster Tools and Google Search Console. Lead-source attribution is genuinely fuzzy in AEO and I will not pretend otherwise.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.personName,
      jobTitle: `Founder, ${SITE.name}`,
      email: `mailto:${SITE.email}`,
      telephone: SITE.phoneE164,
      url: SITE.url,
      image: `${SITE.url}${SITE.headshot}`,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: SITE.school,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#service`,
      name: SITE.name,
      alternateName: "Sparkbilt AEO",
      description:
        "Sparkbilt provides Answer Engine Optimization for local businesses: audits, schema deployment, NAP cleanup, review systems, and ongoing monitoring across ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
      email: `mailto:${SITE.email}`,
      telephone: SITE.phoneE164,
      founder: { "@id": `${SITE.url}/#person` },
      provider: { "@id": `${SITE.url}/#person` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: SITE.region,
      },
      url: SITE.url,
      serviceType: [
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Local SEO",
        "Schema markup deployment",
        "AI visibility monitoring",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sparkbilt AEO Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.summary,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const tierStyles: Record<Tier, string> = {
  CRITICAL: "bg-red-50 text-red-900",
  HIGH: "bg-amber-50 text-amber-800",
  MEDIUM: "bg-emerald-50 text-emerald-700",
};

const tierStylesDark: Record<Tier, string> = {
  CRITICAL: "bg-red-950/60 text-red-300",
  HIGH: "bg-amber-950/60 text-amber-300",
  MEDIUM: "bg-emerald-950/60 text-emerald-300",
};

function SectionHeader({
  number,
  title,
  dark = false,
}: {
  number: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <header className="mb-12">
      <p
        className={`text-sm font-bold tracking-tight mb-3 ${
          dark ? "text-red-400" : "text-red-900"
        }`}
      >
        {number}
      </p>
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl text-display pb-4 border-b-2 ${
          dark ? "border-emerald-500" : "border-emerald-700"
        }`}
      >
        {title}
      </h2>
    </header>
  );
}

function TierPill({ tier, dark = false }: { tier: Tier; dark?: boolean }) {
  const styles = dark ? tierStylesDark : tierStyles;
  return (
    <span
      className={`inline-block ${styles[tier]} text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shrink-0 mt-1`}
    >
      {tier}
    </span>
  );
}

function StatCard({
  number,
  suffix = "",
  label,
  sublabel,
  dark = false,
  animated = true,
}: {
  number: number;
  suffix?: string;
  label: string;
  sublabel: string;
  dark?: boolean;
  animated?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-7 ${
        dark
          ? "bg-slate-800/60 border border-slate-700"
          : "bg-white border border-slate-200 shadow-floating"
      }`}
    >
      <p
        className={`text-6xl sm:text-7xl font-black leading-none tracking-tighter ${
          dark ? "text-red-400" : "text-red-900"
        }`}
      >
        {animated ? <StatCounter value={number} suffix={suffix} /> : `${number}${suffix}`}
      </p>
      <p
        className={`text-base font-semibold mt-4 ${
          dark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        {label}
      </p>
      <p
        className={`text-sm mt-1 leading-snug ${
          dark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {sublabel}
      </p>
    </div>
  );
}

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
        {/* Top brand bar */}
        <div className="px-6 py-5 max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>
          <span className="text-xs text-slate-500 tracking-wide hidden sm:block">
            Answer Engine Optimization
          </span>
        </div>

        {/* Hero */}
        <section className="relative px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 max-w-6xl mx-auto">
          {/* Compass watermark with cursor parallax */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <CursorParallax
              intensity={18}
              className="absolute right-0 top-0 sm:right-4 sm:top-4"
            >
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
              Answer Engine Optimization
            </p>
          </FadeUp>
          <FadeUp delay={80}>
            <h1
              className="text-display mb-10 max-w-5xl"
              style={{ fontSize: "clamp(48px, 9vw, 124px)" }}
            >
              Get found and recommended by AI.
            </h1>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
              <div>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                  When your customers ask ChatGPT, Claude, or Perplexity for a{" "}
                  <em>plumber near them</em>, a{" "}
                  <em>salon in their neighborhood</em>, or a{" "}
                  <em>contractor they can trust</em>, your business should be
                  in the answer. Most aren&apos;t. We fix that.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-slate-700 transition shadow-floating"
                  >
                    Get an AEO audit
                  </a>
                  <a
                    href="#what-is-aeo"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition"
                  >
                    What is AEO? →
                  </a>
                </div>
              </div>
              <div className="md:order-last">
                <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-floating">
                  <Image
                    src={SITE.headshot}
                    alt={`${SITE.personName}, founder of ${SITE.name}`}
                    width={1009}
                    height={793}
                    priority
                    className="w-full h-auto block"
                  />
                </div>
                <p className="mt-3 text-sm italic text-slate-600 text-center">
                  {SITE.personName} - Founder
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Stat strip */}
          <FadeUp delay={280}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20">
              <StatCard
                number={20}
                label="Queries Per Audit"
                sublabel="ChatGPT, Claude, Perplexity, Gemini, Copilot"
              />
              <StatCard
                number={30}
                label="Day Re-audit Cycle"
                sublabel="Same queries, before vs. after"
              />
              <StatCard
                number={100}
                suffix="%"
                label="Schema Validated"
                sublabel="JSON-LD on every build"
              />
            </div>
          </FadeUp>
        </section>

        {/* 01 What is AEO — light */}
        <section
          id="what-is-aeo"
          className="px-6 py-28 sm:py-36 max-w-6xl mx-auto"
        >
          <FadeUp>
            <SectionHeader
              number="01"
              title="Answer Engine Optimization, plainly stated."
            />
          </FadeUp>
          <FadeUp delay={80}>
            <ul className="space-y-8 text-slate-700 max-w-3xl text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-slate-900">
                  It&apos;s how you get into AI answers.
                </span>{" "}
                When ChatGPT, Claude, Perplexity, Google AI Overviews, or
                Copilot recommend a business, they pick from a small pool of
                sources and only cite a fraction. AEO is the work of getting
                in that pool, then surviving the cut.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  It&apos;s a layer on top of SEO, not a replacement.
                </span>{" "}
                Schema markup, NAP consistency, structured FAQs, review
                velocity, and authority citations all matter, but they have to
                be engineered for retrieval, not just ranking. Different game,
                different rules.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Local categories are unusually winnable.
                </span>{" "}
                The retrieval pool for &quot;plumber near Quincy MA&quot; is
                20–40 sources, not 20 million. The businesses that move first
                take the seats, and AI assistants are sticky once they pick a
                recommendation.
              </li>
            </ul>
          </FadeUp>
        </section>

        {/* 02 Services — DARK */}
        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader
                number="02"
                title="How we work with clients."
                dark
              />
            </FadeUp>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <FadeUp key={s.name} delay={i * 100}>
                  <div className="bg-warm rounded-2xl p-7 flex flex-col h-full shadow-floating">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">
                      {s.name}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {s.summary}
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 mt-auto">
                      {s.items.map((item) => (
                        <li
                          key={item.text}
                          className="flex gap-3 items-start"
                        >
                          <TierPill tier={item.tier} />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 03 Methodology — light */}
        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="03" title="Methodology." />
          </FadeUp>
          <FadeUp delay={80}>
            <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl">
              Every {SITE.name} engagement uses the same instrument before and
              after. The same prompts, the same platforms, the same
              measurement protocol. The 30-day re-audit is the proof.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-floating">
              <div className="bg-slate-900 text-white grid grid-cols-[1fr_2fr] gap-4 px-6 py-4 text-xs uppercase tracking-wider font-semibold">
                <div>Method</div>
                <div>Description</div>
              </div>
              {methodology.map((m, i) => (
                <div
                  key={m.method}
                  className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 px-6 py-5 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                  }`}
                >
                  <div className="font-semibold text-slate-900">
                    {m.method}
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* 04 Sample Audit — light */}
        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="04" title="What you receive." />
          </FadeUp>
          <FadeUp delay={80}>
            <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl">
              Every engagement ends with a branded PDF report tied to
              measurable outcomes. Citation rate, crawler access, indexed
              content, NAP consistency, schema coverage, and a prioritized
              remediation roadmap. The 30-day re-audit documents the
              before-and-after.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Critical",
                color: "red",
                count: "3 blocking fixes",
                desc: "Rendering, schema, indexing path. Nothing else takes effect until these are live.",
              },
              {
                tier: "High",
                color: "amber",
                count: "5 direct-impact fixes",
                desc: "robots.txt, NAP standardization, GBP optimization, crawler content, llms.txt.",
              },
              {
                tier: "Medium",
                color: "emerald",
                count: "4 long-term plays",
                desc: "Directory citations, review templates, badge cleanup, Apple Business Connect.",
              },
            ].map((card, i) => (
              <FadeUp key={card.tier} delay={i * 100}>
                <div
                  className={`border rounded-2xl p-7 h-full shadow-floating ${
                    card.color === "red"
                      ? "bg-red-50 border-red-100"
                      : card.color === "amber"
                      ? "bg-amber-50 border-amber-100"
                      : "bg-emerald-50 border-emerald-100"
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-wider font-bold mb-3 ${
                      card.color === "red"
                        ? "text-red-900"
                        : card.color === "amber"
                        ? "text-amber-800"
                        : "text-emerald-700"
                    }`}
                  >
                    {card.tier}
                  </p>
                  <p className="font-semibold text-slate-900 mb-2 text-lg">
                    {card.count}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400}>
            <p className="text-sm text-slate-500 mt-10 text-center">
              Sample taken from a real {SITE.name} client audit. Specifics
              vary by industry and current state.
            </p>
          </FadeUp>
        </section>

        {/* 05 Case Study — DARK */}
        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader
                number="05"
                title="Case study: RISE Studios."
                dark
              />
            </FadeUp>
            <FadeUp delay={80}>
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 sm:p-12">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-8">
                  <p className="text-sm font-semibold tracking-wider uppercase text-slate-100">
                    RISE Studios
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Weymouth, MA &nbsp;•&nbsp; Audited April 2026
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed mb-10 max-w-3xl text-lg">
                  First {SITE.name} engagement. Premier recording studio
                  serving Greater Boston. 30-day re-audit pending May 2026.
                  Before-and-after numbers fill in next month.
                </p>
                <div className="grid sm:grid-cols-3 gap-5 mb-10">
                  <StatCard
                    number={0}
                    suffix="%"
                    label="Baseline Citation Rate"
                    sublabel="20 queries across 3 platforms"
                    dark
                  />
                  <StatCard
                    number={47}
                    label="Words Crawled"
                    sublabel="What AI bots see today"
                    dark
                  />
                  <StatCard
                    number={3}
                    label="Critical Fixes"
                    sublabel="Blocking all other progress"
                    dark
                  />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  <span className="font-semibold text-slate-100">
                    Diagnosis:
                  </span>{" "}
                  RISE Studios&apos; site is rendered entirely via JavaScript.
                  AI crawlers do not execute JavaScript. When they visit, they
                  receive a 47-word HTML shell with no room descriptions, no
                  service detail, no location data, nothing to extract or
                  cite. The fix is a Cloudflare Worker that detects bot user
                  agents and serves pre-rendered, structured HTML directly.
                  Every other AEO fix is blocked until that lands.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* 06 About — light */}
        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="06" title="About." />
          </FadeUp>
          <FadeUp delay={80}>
            <div className="max-w-3xl">
              <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed">
                {SITE.name} is run by {SITE.personName}, a{" "}
                {SITE.year.toLowerCase()} studying {SITE.major} at{" "}
                {SITE.school}. We work with local businesses in{" "}
                {SITE.regionShort} to get found by AI assistants. Prompt
                panels across ChatGPT, Claude, and Perplexity. Technical
                foundation underneath your website. Review and citation flows
                that decide whether AI cites you or your competitor.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6">
                We&apos;re in these AI tools every day for school and side
                projects, which means we see how they actually retrieve and
                cite local sources, not how a marketing blog from 2019 says
                they do. The engineering background means schema, structured
                data, and crawler logs are tools we&apos;re comfortable with,
                not buzzwords.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* 07 FAQ — light */}
        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="07" title="Common questions." />
          </FadeUp>
          <div className="space-y-10 max-w-3xl">
            {faqs.map((f, i) => (
              <FadeUp key={f.q} delay={i * 60}>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900">
                    {f.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {f.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* 08 Contact — DARK CTA */}
        <section id="contact" className="section-deep">
          <div className="px-6 py-32 sm:py-40 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader
                number="08"
                title="Want to know if AI mentions your business?"
                dark
              />
            </FadeUp>
            <FadeUp delay={80}>
              <div className="max-w-3xl">
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
                  We&apos;ll run a free audit across ChatGPT, Claude,
                  Perplexity, Gemini, and Copilot, and tell you honestly
                  whether AEO is worth your time right now.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${SITE.email}?subject=Sparkbilt%20AEO%20Audit%20Inquiry`}
                    className="inline-flex items-center gap-2 bg-warm text-slate-900 px-7 py-3.5 rounded-full font-medium hover:bg-white transition shadow-floating"
                  >
                    Email {SITE.email}
                  </a>
                  <a
                    href={`tel:${SITE.phoneE164}`}
                    className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3.5 rounded-full font-medium text-slate-100 hover:bg-slate-800 transition"
                  >
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-200">
          <p className="text-xs text-slate-500 tracking-widest uppercase text-center">
            {SITE.name} &nbsp;•&nbsp; Answer Engine Optimization &nbsp;•&nbsp;{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
