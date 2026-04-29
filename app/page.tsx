import Image from "next/image";
import { SITE } from "./layout";

const services = [
  {
    name: "AEO Audit",
    summary:
      "Where you stand today across ChatGPT, Claude, Perplexity, Gemini, and Copilot, with proof.",
    bullets: [
      "30–50 customer queries run across 5 AI platforms",
      "Citation rate and share-of-voice vs. your two top competitors",
      "Schema, NAP, and Google Business Profile gap analysis",
      "Branded PDF report you keep",
    ],
  },
  {
    name: "Foundation Setup",
    summary:
      "The technical and content work that turns invisibility into citations within 3–6 weeks.",
    bullets: [
      "JSON-LD schema deployed (LocalBusiness, Service, FAQ, Review, Hours)",
      "NAP cleanup across Google, Bing, Apple Maps, Yelp, and industry directories",
      "Bing Webmaster Tools setup: the single biggest lever for ChatGPT visibility",
      "FAQ, service-area, and pricing pages written for AI extraction",
      "Review request flow rebuilt to prompt for specific, citable language",
    ],
  },
  {
    name: "Ongoing Monitoring",
    summary:
      "Weekly prompt panels, monthly reports, misinformation alerts. The compounding work.",
    bullets: [
      "30–100 representative queries run weekly across all major AI assistants",
      "Citation tracking, share-of-voice trend, sentiment monitoring",
      "Crawler log analysis: proof AI bots are reading your pages",
      "Alerts when AI gives wrong hours, wrong services, or confuses you with a competitor",
      "Monthly branded report",
    ],
  },
];

const faqs = [
  {
    q: "What is Answer Engine Optimization?",
    a: "Answer Engine Optimization (AEO) is the practice of making a business discoverable and recommendable inside AI assistants like ChatGPT, Claude, Perplexity, Google AI Overviews, and Microsoft Copilot. It combines technical SEO, schema markup, content engineering, citation building, and review management. Most local businesses are optimized for traditional Google search but invisible to AI systems, which are increasingly how people find local services.",
  },
  {
    q: "Why does AEO matter for a local business right now?",
    a: "Gartner projects that roughly 25% of organic search traffic will shift to AI assistants. For a local query like \"plumber near Quincy MA\", the AI considers a small pool of 20–40 sources before citing 1–3. That makes the work to enter and survive the citation cut unusually tractable for local businesses, and the businesses that move first take the seats.",
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
      name: SITE.name,
      jobTitle: SITE.role,
      email: `mailto:${SITE.email}`,
      url: SITE.url,
      image: `${SITE.url}${SITE.headshot}`,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: SITE.school,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: SITE.region,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#service`,
      name: `${SITE.name}: Answer Engine Optimization`,
      description:
        "AEO consulting for local businesses: audits, schema deployment, NAP cleanup, review systems, and ongoing monitoring across ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
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
        name: "AEO Services",
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
        {/* Hero */}
        <section className="px-6 pt-20 pb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-medium mb-6">
                Answer Engine Optimization
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                I help local businesses get found and recommended by AI.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                When your customers ask ChatGPT, Claude, or Perplexity for a{" "}
                <em>plumber near them</em>, a{" "}
                <em>salon in their neighborhood</em>, or a{" "}
                <em>contractor they can trust</em>, your business should be
                in the answer. Most aren&apos;t. I fix that.
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
                alt={`${SITE.name}, ${SITE.role}`}
                width={1009}
                height={793}
                priority
                className="rounded-2xl shadow-md w-full h-auto bg-slate-100"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-6 py-20 max-w-3xl mx-auto border-t border-slate-200">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4">
            About
          </h2>
          <p className="text-xl text-slate-800 leading-relaxed">
            I&apos;m {SITE.name}, a {SITE.year.toLowerCase()} studying{" "}
            {SITE.major} at {SITE.school}, and I help local businesses in{" "}
            {SITE.regionShort} get found by AI assistants. I run prompt
            panels across ChatGPT, Claude, and Perplexity, fix the technical
            foundation underneath your website, and rebuild the review and
            citation flows that decide whether AI cites you or your
            competitor.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mt-4">
            I&apos;m in these AI tools every day for school and side
            projects, which means I see how they actually retrieve and cite
            local sources, not how a marketing blog from 2019 says they do.
            The engineering background means schema, structured data, and
            crawler logs are tools I&apos;m comfortable with, not buzzwords.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mt-4">
            The pitch I make to clients is the same one this site makes for
            itself: ask Claude or ChatGPT &ldquo;who does AEO consulting in{" "}
            {SITE.regionShort} MA&rdquo;, and I should show up. If I
            don&apos;t, you shouldn&apos;t hire me. If I do, I&apos;ll do for
            you what I&apos;ve done for myself.
          </p>
        </section>

        {/* What is AEO */}
        <section
          id="what-is-aeo"
          className="px-6 py-20 max-w-3xl mx-auto border-t border-slate-200"
        >
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4">
            What is AEO
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight mb-8">
            Answer Engine Optimization, plainly stated.
          </h3>
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

        {/* Services */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-t border-slate-200">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4 max-w-3xl mx-auto">
            Services
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight mb-12 max-w-3xl mx-auto">
            How I work with clients.
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-slate-400 transition"
              >
                <h4 className="text-xl font-semibold mb-3">{s.name}</h4>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  {s.summary}
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mt-auto">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 max-w-3xl mx-auto border-t border-slate-200">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4">
            FAQ
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight mb-10">
            Common questions.
          </h3>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h4 className="text-lg font-semibold mb-2">{f.q}</h4>
                <p className="text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 py-24 max-w-3xl mx-auto border-t border-slate-200"
        >
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4">
            Contact
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight mb-6">
            Want to know if AI mentions your business?
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            I&apos;ll run a free 10-query mini-audit across ChatGPT, Claude,
            and Perplexity, and tell you honestly whether AEO is worth your
            time right now.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=AEO%20Audit%20Inquiry`}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition"
          >
            Email {SITE.email} →
          </a>
        </section>

        <footer className="px-6 py-10 max-w-3xl mx-auto border-t border-slate-200 text-sm text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. AEO consulting for local
          businesses in {SITE.region}.
        </footer>
      </main>
    </>
  );
}
