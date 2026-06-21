import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import communityImg from "@/assets/community.jpg";
import youthImg from "@/assets/youth.jpg";
import waterImg from "@/assets/water.jpg";
import handsImg from "@/assets/hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Sheep Foundation GH — Built Different To Make A Difference" },
      { name: "description", content: "Grassroots non-profit in Ghana doing the unconventional work that creates real change. Youth, community, sustainability." },
      { property: "og:title", content: "Black Sheep Foundation GH" },
      { property: "og:description", content: "Built Different To Make A Difference." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    n: "01",
    title: "Youth Empowerment",
    body: "Mentorship, skills training, and scholarships that move young Ghanaians from surviving to authoring their own future.",
  },
  {
    n: "02",
    title: "Community Development",
    body: "Infrastructure and resources built with — not for — the villages and neighborhoods that asked for them first.",
  },
  {
    n: "03",
    title: "Sustainable Support",
    body: "We design every initiative to outlast our involvement. Local ownership is the only finish line we recognize.",
  },
];

const stories = [
  { tag: "Education", title: "Reopening the Salaga learning center", img: youthImg, date: "May 2026" },
  { tag: "Water", title: "Clean borehole, three villages later", img: waterImg, date: "Mar 2026" },
  { tag: "Community", title: "How the Council of Elders shapes our roadmap", img: communityImg, date: "Feb 2026" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Children playing in a Ghanaian village at golden hour"
          width={1600}
          height={1800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/20" />
        <div className="relative container-edge pb-16 md:pb-24 pt-32 text-primary-foreground">
          <div className="max-w-5xl">
            <p className="eyebrow text-primary-foreground/90">Non-profit · Accra, Ghana · Since 2016</p>
            <h1 className="mt-6 headline-xl">
              Built Different<br />
              <span className="serif-italic font-normal tracking-normal">to make a</span> Difference.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed">
              We're a Ghanaian grassroots foundation stepping outside the script of traditional charity,
              showing up, staying long, and doing the unconventional work real change demands.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/get-involved"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-4 text-sm font-medium text-clay-foreground transition-all hover:bg-clay/90"
              >
                Support our mission
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition"
              >
                Who we are
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
          <span className="h-px w-10 bg-primary-foreground/40" />
          Scroll
        </div>
      </section>

      {/* MARQUEE / TAGLINE STRIP */}
      <section aria-hidden className="bg-primary text-primary-foreground py-5 overflow-hidden border-y border-primary-foreground/10">
        <div className="flex w-max marquee-track gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).flatMap((_, j) =>
            ["Built Different", "Grassroots First", "Radical Transparency", "Community Owned", "Since 2016", "Made in Ghana"].map((t, i) => (
              <span key={`${j}-${i}`} className="font-display text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-12">
                {t}
                <span className="text-clay">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* THE BLACK SHEEP IDENTITY */}
      <section className="container-edge py-24 md:py-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <p className="eyebrow">Why "Black Sheep"</p>
            <h2 className="mt-6 headline-lg">
              We don't fit the<br />charity mold.<br />
              <span className="serif-italic font-normal">Good.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="text-2xl md:text-[1.7rem] leading-[1.35] tracking-tight text-foreground/90">
              We embrace being the <em className="serif-italic text-clay not-italic"><span className="serif-italic">black sheep</span></em>,
              stepping outside the norm, challenging the traditional charity playbook, and doing the slow,
              uncomfortable, deeply local work that creates real change.
            </p>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-xl">
              No bloated overhead. No parachute giving. No photo-ops dressed up as impact.
              Just years of showing up in the same villages, listening to the same elders,
              and rebuilding trust the only way it's ever built, in person, over time.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="font-display text-4xl font-bold">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Direct giving</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold">10<span className="text-clay">+</span></p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Years on the ground</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 headline-lg max-w-xl">Three pillars. <span className="serif-italic font-normal">One promise.</span></h2>
            </div>
            <Link to="/impact" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 hover:border-clay hover:text-clay transition">
              See the work <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background p-8 md:p-12 group hover:bg-clay transition-colors duration-500">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-clay group-hover:text-clay-foreground transition-colors">
                    {p.n}
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-clay-foreground transition" size={18} />
                </div>
                <h3 className="mt-12 text-2xl md:text-[1.7rem] font-bold tracking-tight group-hover:text-clay-foreground">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-clay-foreground/85">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST STORIES */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">From the field</p>
            <h2 className="mt-4 headline-lg max-w-xl">Latest stories.</h2>
          </div>
          <a href="https://instagram.com/blacksheepgh" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-clay transition inline-flex items-center gap-2">
            Follow @blacksheepgh <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="grid gap-10 md:gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <article key={s.title} className={`group cursor-pointer ${i === 0 ? "md:col-span-1" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{s.tag}</span>
                <span>{s.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight leading-snug group-hover:text-clay transition-colors">
                {s.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={handsImg} alt="" aria-hidden width={1400} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="container-edge relative py-28 md:py-44">
          <p className="eyebrow text-clay">Stand with us</p>
          <h2 className="mt-6 max-w-4xl headline-xl">
            Different work needs<br /> <span className="serif-italic font-normal text-clay">different</span> partners.
          </h2>
          <p className="mt-8 max-w-lg text-primary-foreground/80 leading-relaxed">
            Whether you give, volunteer, or build with us — every contribution lands directly in the hands of the communities we serve. No middle. No noise.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-4 text-sm font-medium text-clay-foreground hover:bg-clay/90 transition">
              Donate now <ArrowUpRight size={16} />
            </Link>
            <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium hover:bg-primary-foreground/10 transition">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
