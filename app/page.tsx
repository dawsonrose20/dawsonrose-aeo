import Image from "next/image";
import { SITE } from "./layout";

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
        text: "30–50 customer queries run across 5 AI platforms",
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
        text: "30–100 representative queries run weekly across all major AI assistants",
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
      "30–50 representative queries across ChatGPT, Claude, Perplexity, Gemini, and Copilot. Service searches, location queries, and competitor comparisons. Scored for citation presence and sentiment.",
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
    a: "Yes. Same 30–50 queries, same 5 AI platforms, run before and 30 days after, side by side. Plus crawler logs showing OAI-SearchBot, ClaudeBot, and PerplexityBot literally fetching your new pages. Plus indexing dashboards from Bing Webmaster Tools and Google Search Console. Lead-source attribution is genuinely fuzzy in AEO and I will not pretend otherwise.",
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

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <header className="mb-10">
      <p className="text-sm font-bold text-red-900 tracking-tight mb-2">
        {number}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight pb-3 border-b-2 border-emerald-700">
        {title}
      </h2>
    </header>
  );
}

function TierPill({ tier }: { tier: Tier }) {
  return (
    <span
      className={`inline-block ${tierStyles[tier]} text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shrink-0 mt-1`}
    >
      {tier}
    </span>
  );
}

function StatCard({
  number,
  label,
  sublabel,
}: {
  number: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="border border-slate-200 rounded-lg p-6 bg-white text-center sm:text-left">
      <p className="text-5xl sm:text-6xl font-bold text-red-900 leading-none">
        {number}
      </p>
      <p className="text-base font-semibold mt-3">{label}</p>
      <p className="text-sm text-slate-500 mt-1 leading-snug">{sublabel}</p>
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

      <main className="font-sans">
        {/* Top brand bar */}
        <div className="px-6 py-4 max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest uppercase">
            {SITE.name}
          </span>
          <span className="text-xs text-slate-500 tracking-wide hidden sm:block">
            Answer Engine Optimization
          </span>
        </div>

        {/* Hero */}
        <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-red-900 font-bold mb-6">
                Answer Engine Optimization
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {SITE.name} helps local businesses get found and recommended
                by AI.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                When your customers ask ChatGPT, Claude, or Perplexity for a{" "}
                <em>plumber near them</em>, a{" "}
                <em>salon in their neighborhood</em>, or a{" "}
                <em>contractor they can trust</em>, your business should be in
                the answer. Most aren&apos;t. We fix that.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition"
                >
                  Get an AEO audit
                </a>
                <a
                  href="#what-is-aeo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition"
                >
                  What is AEO? →
                </a>
              </div>
            </div>
            <div className="md:order-last">
              <Image
                src={SITE.headshot}
                alt={`${SITE.personName}, founder of ${SITE.name}`}
                width={1009}
                height={793}
                priority
                className="rounded-2xl shadow-md w-full h-auto bg-slate-100"
              />
            </div>
          </div>

          {/* Hero stat strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <StatCard
              number="5"
              label="AI Platforms Tested"
              sublabel="ChatGPT, Claude, Perplexity, Gemini, Copilot"
            />
            <StatCard
              number="30"
              label="Day Re-audit Cycle"
              sublabel="Same queries, before vs. after"
            />
            <StatCard
              number="100%"
              label="Schema Validated"
              sublabel="JSON-LD on every build"
            />
          </div>
        </section>

        {/* 01 What is AEO */}
        <section
          id="what-is-aeo"
          className="px-6 py-20 max-w-3xl mx-auto border-t border-slate-200"
        >
          <SectionHeader
            number="01"
            title="Answer Engine Optimization, plainly stated."
          />
          <ul className="space-y-6 text-slate-700">
            <li className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                It&apos;s how you get into AI answers.
              </span>{" "}
              When ChatGPT, Claude, Perplexity, Google AI Overviews, or
              Copilot recommend a business, they pick from a small pool of
              sources and only cite a fraction. AEO is the work of getting in
              that pool, then surviving the cut.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                It&apos;s a layer on top of SEO, not a replacement.
              </span>{" "}
              Schema markup, NAP consistency, structured FAQs, review
              velocity, and authority citations all matter, but they have to
              be engineered for retrieval, not just ranking. Different game,
              different rules.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                Local categories are unusually winnable.
              </span>{" "}
              The retrieval pool for &quot;plumber near Quincy MA&quot; is
              20–40 sources, not 20 million. The businesses that move first
              take the seats, and AI assistants are sticky once they pick a
              recommendation.
            </li>
          </ul>
        </section>

        {/* 02 Services */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <SectionHeader number="02" title="How we work with clients." />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-slate-400 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{s.name}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  {s.summary}
                </p>
                <ul className="space-y-3 text-sm text-slate-700 mt-auto">
                  {s.items.map((item) => (
                    <li key={item.text} className="flex gap-3 items-start">
                      <TierPill tier={item.tier} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 03 Methodology */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <SectionHeader number="03" title="Methodology." />
            <p className="text-slate-600 leading-relaxed mb-10">
              Every {SITE.name} engagement uses the same instrument before
              and after. The same prompts, the same platforms, the same
              measurement protocol. The 30-day re-audit is the proof.
            </p>
          </div>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-900 text-white grid grid-cols-[1fr_2fr] gap-4 px-5 py-3 text-xs uppercase tracking-wider font-semibold">
              <div>Method</div>
              <div>Description</div>
            </div>
            {methodology.map((m, i) => (
              <div
                key={m.method}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 px-5 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className="font-semibold text-slate-900">{m.method}</div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Sample Audit */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <SectionHeader number="04" title="What you receive." />
            <p className="text-slate-600 leading-relaxed mb-10">
              Every engagement ends with a branded PDF report tied to
              measurable outcomes. Citation rate, crawler access, indexed
              content, NAP consistency, schema coverage, and a prioritized
              remediation roadmap. The 30-day re-audit documents the
              before-and-after.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-lg p-6 bg-red-50">
              <p className="text-xs uppercase tracking-wider font-bold text-red-900 mb-2">
                Critical
              </p>
              <p className="font-semibold text-slate-900 mb-1">
                3 blocking fixes
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rendering, schema, indexing path. Nothing else takes effect
                until these are live.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6 bg-amber-50">
              <p className="text-xs uppercase tracking-wider font-bold text-amber-800 mb-2">
                High
              </p>
              <p className="font-semibold text-slate-900 mb-1">
                5 direct-impact fixes
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                robots.txt, NAP standardization, GBP optimization, crawler
                content, llms.txt.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6 bg-emerald-50">
              <p className="text-xs uppercase tracking-wider font-bold text-emerald-700 mb-2">
                Medium
              </p>
              <p className="font-semibold text-slate-900 mb-1">
                4 long-term plays
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Directory citations, review templates, badge cleanup, Apple
                Business Connect.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-8 text-center">
            Sample taken from a real {SITE.name} client audit. Specifics vary
            by industry and current state.
          </p>
        </section>

        {/* 05 Case Study */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <SectionHeader number="05" title="Case study: RISE Studios." />
            <p className="text-slate-600 leading-relaxed mb-10">
              First {SITE.name} engagement. Premier recording studio in
              Weymouth, MA, serving Greater Boston. Audited April 2026,
              30-day re-audit pending May 2026. Before-and-after numbers fill
              in next month.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <StatCard
              number="0%"
              label="Baseline Citation Rate"
              sublabel="20 queries across 3 platforms"
            />
            <StatCard
              number="47"
              label="Words Crawled"
              sublabel="What AI bots see today"
            />
            <StatCard
              number="3"
              label="Critical Fixes"
              sublabel="Blocking all other progress"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold">Diagnosis:</span> RISE
              Studios&apos; site is rendered entirely via JavaScript. AI
              crawlers do not execute JavaScript. When they visit, they
              receive a 47-word HTML shell with no room descriptions, no
              service detail, no location data — nothing to extract or cite.
              The fix is a Cloudflare Worker that detects bot user agents and
              serves pre-rendered, structured HTML directly. Every other AEO
              fix is blocked until that lands.
            </p>
          </div>
        </section>

        {/* 06 About */}
        <section className="px-6 py-20 max-w-3xl mx-auto border-t border-slate-200">
          <SectionHeader number="06" title="About." />
          <p className="text-xl text-slate-800 leading-relaxed">
            {SITE.name} is run by {SITE.personName}, a{" "}
            {SITE.year.toLowerCase()} studying {SITE.major} at {SITE.school}.
            We work with local businesses in {SITE.regionShort} to get found
            by AI assistants. Prompt panels across ChatGPT, Claude, and
            Perplexity. Technical foundation underneath your website. Review
            and citation flows that decide whether AI cites you or your
            competitor.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mt-4">
            We&apos;re in these AI tools every day for school and side
            projects, which means we see how they actually retrieve and cite
            local sources, not how a marketing blog from 2019 says they do.
            The engineering background means schema, structured data, and
            crawler logs are tools we&apos;re comfortable with, not
            buzzwords.
          </p>
        </section>

        {/* 07 FAQ */}
        <section className="px-6 py-20 max-w-3xl mx-auto border-t border-slate-200">
          <SectionHeader number="07" title="Common questions." />
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 08 Contact */}
        <section
          id="contact"
          className="px-6 py-24 max-w-3xl mx-auto border-t border-slate-200"
        >
          <SectionHeader
            number="08"
            title="Want to know if AI mentions your business?"
          />
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We&apos;ll run a free 10-query mini-audit across ChatGPT, Claude,
            and Perplexity, and tell you honestly whether AEO is worth your
            time right now.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Sparkbilt%20AEO%20Audit%20Inquiry`}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition"
          >
            Email {SITE.email} →
          </a>
        </section>

        <footer className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-200">
          <p className="text-xs text-slate-500 tracking-widest uppercase text-center">
            {SITE.name} &nbsp;•&nbsp; Answer Engine Optimization &nbsp;•&nbsp;{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
