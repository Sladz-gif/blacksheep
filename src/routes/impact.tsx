import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import waterImg from "@/assets/water.jpg";
import youthImg from "@/assets/youth.jpg";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact, Transparency in Action | Black Sheep Foundation GH" },
      { name: "description", content: "A decade of grassroots impact across Ghana. The numbers, the case studies, the receipts." },
      { property: "og:title", content: "Our Impact" },
      { property: "og:description", content: "Transparency in action. 10+ years. 100% direct giving." },
      { property: "og:image", content: "/og-impact.jpg" },
    ],
  }),
  component: ImpactPage,
});

const stats = [
  { value: "10+", label: "Years on the ground" },
  { value: "42", label: "Communities served" },
  { value: "1,800+", label: "Youth supported" },
  { value: "100%", label: "Direct giving" },
];

const articles = [
  {
    tag: "Water · April 2026",
    title: "How Nakpanduri got its borehole back",
    excerpt: "Three villages shared a single seasonal river. By March each year, families walked 9 km for drinking water, and waterborne illness peaked in children under five. This is how we changed that.",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed">
          When we first visited Nakpanduri in 2023, the village chief told us something simple: "We don't need your money. We need your partnership." 
          The community had already identified the problem, mapped the water table, and elected a water committee. What they lacked was the funding to drill.
        </p>
        <div className="my-12 grid md:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
            <img src={waterImg} alt="Nakpanduri borehole opening" loading="lazy" width={500} height={500} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-display text-4xl font-bold text-clay">64%</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">Reduction in child waterborne illness</p>
          </div>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          We co-funded the borehole with the village, trained four local technicians, and stepped back. Today, the committee sets the water rates, collects the fees, and schedules maintenance. 
          The committee, not us, owns and operates it. That's the point.
        </p>
      </>
    ),
    img: waterImg,
  },
  {
    tag: "Education · March 2026",
    title: "Salaga's classroom comes back to life",
    excerpt: "A closed-down JHS classroom sat empty for two years after government funding lapsed. Forty-eight students had no place to continue Form 2. This is how we got them back in school.",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The PTA in Salaga had been holding meetings for months trying to figure out how to reopen their classroom. They had the will, they had the parents, they just didn't have the funds to fix the roof or pay the teachers.
        </p>
        <div className="my-12 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="font-display text-4xl font-bold text-clay">11 weeks</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">From decision to reopening</p>
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted order-1 md:order-2">
            <img src={youthImg} alt="Salaga students in classroom" loading="lazy" width={500} height={500} className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          We repaired the building with local masons, paid two terms of teacher salaries, and worked with the PTA to build a sustainable funding model using community dues and small farm sales. 
          Today, year three of teacher salaries is fully community-funded.
        </p>
      </>
    ),
    img: youthImg,
  },
  {
    tag: "Community · February 2026",
    title: "Why the Council of Elders runs our roadmap",
    excerpt: "For years, we made decisions in Accra. Then we realized the people who know best are the people we serve. This is how we handed over the wheel.",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed">
          In 2023, we gathered 12 elders from every region we serve for a three-day meeting in Tamale. We asked them one question: "What should we do next?" 
          Their answers were nothing like our strategic plan. They wanted more focus on farm tools, less on grand openings. They wanted long-term mentorship, not one-off workshops.
        </p>
        <p className="mt-8 text-base text-muted-foreground leading-relaxed">
          Today, the Council of Elders sets our annual roadmap, approves every budget line, and signs off on every new project. We show up, we listen, and we execute. 
          That's the only way real change lasts.
        </p>
      </>
    ),
    img: waterImg,
  },
  {
    tag: "Transparency · January 2026",
    title: "Every cedi, accounted for",
    excerpt: "Transparency isn't about publishing reports. It's about showing up in the village square with a whiteboard and explaining every expense. This is how we do it.",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every quarter, we go back to every community we work with. We bring a whiteboard, a projector, and all our receipts. We go through every expense line by line. 
          We answer every question. We take every criticism. That's accountability.
        </p>
        <div className="my-12 p-8 bg-secondary/40 rounded-2xl">
          <p className="font-display text-4xl font-bold">100%</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">Direct giving, no overhead</p>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          No bloated budgets. No fancy offices. No six-figure salaries. Every cedi raised goes directly to the field. The communities see it, they approve it, they own it.
        </p>
      </>
    ),
    img: youthImg,
  },
];

function ImpactPage() {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  return (
    <SiteLayout>
      <section className="container-edge pt-24 md:pt-40 pb-20">
        <p className="eyebrow">Our impact</p>
        <h1 className="mt-6 headline-xl max-w-5xl">
          Stories from<br />
          <span className="serif-italic font-normal">the field.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          We measure ourselves by what's still standing after we leave, not by what we cut the ribbon on.
          Here are the stories of a decade.
        </p>
      </section>

      <section className="border-y border-border">
        <div className="container-edge grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-12 md:py-20 ${i !== 0 ? "md:border-l border-border" : ""} ${i % 2 !== 0 ? "border-l border-border md:border-l" : ""} ${i >= 2 ? "border-t border-border md:border-t-0" : ""}`}>
              <p className="font-display font-bold tracking-tighter text-[clamp(3rem,8vw,6rem)] leading-none">{s.value}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer" onClick={() => setActiveArticle(article.title)}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-6">
                <img src={article.img} alt={article.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="eyebrow mb-3">{article.tag}</p>
              <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-clay transition-colors">{article.title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{article.excerpt}</p>
              <p className="mt-4 text-sm text-clay font-medium inline-flex items-center gap-1">
                Read story <ArrowUpRight size={14} />
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setActiveArticle(null)} />
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl">
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 md:p-8 border-b border-border flex justify-between items-start">
              <div>
                <p className="eyebrow">{articles.find(a => a.title === activeArticle)?.tag}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{activeArticle}</h2>
              </div>
              <button onClick={() => setActiveArticle(null)} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              {articles.find(a => a.title === activeArticle)?.content}
            </div>
          </div>
        </div>
      )}

      <section className="bg-primary text-primary-foreground">
        <div className="container-edge py-24 md:py-32 text-center">
          <p className="eyebrow text-clay">Want the full report?</p>
          <h2 className="mt-6 headline-lg max-w-3xl mx-auto">
            We publish every cedi.<br /><span className="serif-italic font-normal">Ask us anything.</span>
          </h2>
          <Link to="/get-involved" className="mt-10 inline-flex items-center gap-2 rounded-full bg-clay px-7 py-4 text-sm font-medium text-clay-foreground hover:bg-clay/90 transition">
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
