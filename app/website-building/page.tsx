import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "../site";
import { FadeUp } from "../components/FadeUp";
import { CursorParallax } from "../components/CursorParallax";

const deliverables = [
  {
    title: "Custom website design",
    description:
      "A custom homepage, service pages, and contact experience designed around your local business and customer intent.",
  },
  {
    title: "AI-ready content structure",
    description:
      "Service descriptions, FAQs, and page copy written for both customers and answer engines to discover and cite.",
  },
  {
    title: "Google Business Profile alignment",
    description:
      "Website content, address details, and service categories aligned with your GBP listing so AI assistants see one consistent business profile.",
  },
  {
    title: "Technical launch support",
    description:
      "Fast page speed, mobile-first layout, and clean markup so your website performs well for people and AI crawlers alike.",
  },
];

const faqs = [
  {
    q: "What makes a website 'AI-ready'?",
    a: "AI-ready means the site uses clear, structured content, fast delivery, and consistent business data. When the website is easy for assistants to understand, it is more likely to be cited in answer results.",
  },
  {
    q: "Do you build the whole site from scratch?",
    a: "Yes. I design and build a custom website for your business — not a template redo. The process includes strategy, branding, copy guidance, development, and launch support.",
  },
  {
    q: "Will the website work with my Google Business Profile?",
    a: "Absolutely. I ensure your website details, service descriptions, and local signals are aligned with your Google Business Profile and other local listings.",
  },
  {
    q: "Can I update the site later?",
    a: "Yes. The final build is easy to maintain, and I can provide handoff notes or ongoing support depending on your needs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.url,
      "logo": `${SITE.url}${SITE.headshot}`,
    },
    {
      "@type": "ProfessionalService",
      "name": "Website Building for Local Businesses",
      "description": "Custom website design and development for local businesses with SEO and Google Business Profile integration.",
      "provider": {
        "@type": "Organization",
        "name": SITE.name,
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Custom Website Building for Local Businesses`,
  description:
    "We design fully custom websites for local businesses with built-in SEO and Google Business Profile integration. Personal one-on-one service.",
  alternates: { canonical: new URL("/website-building", SITE.url).toString() },
  openGraph: {
    title: `${SITE.name} | Custom Website Building for Local Businesses`,
    description:
      "We design fully custom websites for local businesses with SEO and Google Business Profile integration.",
    url: new URL("/website-building", SITE.url).toString(),
    siteName: SITE.name,
    images: [{ url: new URL("/website-building/opengraph-image", SITE.url).toString(), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Custom Website Building for Local Businesses`,
    description: "Custom website design and local visibility for small businesses.",
    images: [new URL("/website-building/opengraph-image", SITE.url).toString()],
  },
};

export default function WebsiteBuilding() {
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
              Website design for local businesses
            </p>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 className="text-display mb-10 max-w-5xl" style={{ fontSize: "clamp(48px, 9vw, 104px)" }}>
              Build a custom website that supports your brand and your local discovery.
            </h1>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
              <div>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                  I design and build websites from scratch for local businesses. Every build is tailored to your market, optimized for mobile, and aligned with your Google Business Profile so customers and AI assistants both find the right version of your brand.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#deliverables"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-slate-700 transition shadow-floating"
                  >
                    View deliverables
                  </a>
                  <Link
                    href="/aeo"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition"
                  >
                    AEO integration →
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        <section id="deliverables" className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="01" title="What you receive." />
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            {deliverables.map((item, index) => (
              <FadeUp key={item.title} delay={index * 80}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-floating">
                  <p className="text-sm uppercase tracking-[0.2em] text-red-900 font-bold mb-4">{item.title}</p>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader number="02" title="How we work together." dark />
            </FadeUp>
            <FadeUp delay={80}>
              <div className="grid gap-6">
                {[
                  {
                    title: "Discovery + strategy",
                    description:
                      "We start with your business, your customers, and your local market. I map the website around the services and search terms your customers actually use.",
                  },
                  {
                    title: "Design + development",
                    description:
                      "I build the site from scratch with a clear, modern layout, fast performance, and easy navigation for both people and AI.",
                  },
                  {
                    title: "Launch + local alignment",
                    description:
                      "I verify the site launch, fix technical issues, and align your website content with your Google Business Profile and local listings.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-900/90 p-8 text-slate-100 shadow-floating">
                    <p className="text-xl font-semibold mb-3">{item.title}</p>
                    <p className="leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="03" title="Google Business Profile alignment." />
          </FadeUp>
          <FadeUp delay={80}>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-floating">
              <p className="text-lg leading-relaxed text-slate-700">
                Your website content, service categories, and contact details should match the information in Google Business Profile. When they do, AI assistants and local search systems are more likely to trust your business and surface it for local customers.
              </p>
              <p className="text-sm text-slate-500 mt-6 leading-relaxed">
                I make sure your website speaks the same language as your GBP listing, including service names, location signals, and structured business details.
              </p>
            </div>
          </FadeUp>
        </section>

        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader number="04" title="Case study." dark />
            </FadeUp>
            <FadeUp delay={80}>
              <div className="rounded-3xl bg-slate-800/60 border border-slate-700 p-10 shadow-floating">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400 font-semibold mb-4">Local website launch</p>
                <h3 className="text-3xl font-semibold text-white mb-6">Modern website for a neighborhood business</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Built a custom website for a service-based local business, including mobile-first layout, GBP alignment, and a content structure tailored for both customers and AI citation.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The project focused on local discovery, clean navigation, and clear business details so the site works equally well for people and search assistants.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
          <FadeUp>
            <SectionHeader number="05" title="Frequently asked questions." />
          </FadeUp>
          <div className="space-y-10 mt-10 max-w-3xl">
            {faqs.map((faq, index) => (
              <FadeUp key={faq.q} delay={index * 80}>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="section-deep">
          <div className="px-6 py-28 sm:py-36 max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader number="06" title="Let&apos;s build your site." dark />
            </FadeUp>
            <FadeUp delay={80}>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
                I work personally with each client through every step: discovery, design, development, and launch. If you want a website that looks good and supports local visibility, this is the page to start on.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}?subject=Website%20Building%20Inquiry`}
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
            </FadeUp>
          </div>
        </section>

        <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-200">
          <p className="text-xs text-slate-500 tracking-widest uppercase text-center">
            {SITE.name} • Website Building for Local Businesses • {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
