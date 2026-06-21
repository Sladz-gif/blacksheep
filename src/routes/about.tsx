import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, The Story Behind the Movement | Black Sheep Foundation GH" },
      { name: "description", content: "Founded in July 2016 in Ghana. Our story, our values, and why we choose to be built different." },
      { property: "og:title", content: "About Black Sheep Foundation GH" },
      { property: "og:description", content: "The story behind a Ghanaian grassroots movement built on radical transparency and community ownership." },
      { property: "og:image", content: "/og-about.jpg" },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "July 2016", title: "The first conversation", body: "A small circle of friends in Accra commit to one rule: any work we do, we do alongside the community, never above it." },
  { year: "2018", title: "First learning center", body: "We help reopen a shuttered classroom in the Northern Region, staffed and operated entirely by local educators." },
  { year: "2020", title: "Direct-giving model", body: "We formalize our 100% direct giving promise: every cedi raised goes to the field." },
  { year: "2023", title: "Council of Elders", body: "Our roadmap moves under the guidance of an elected council of community elders from every region we serve." },
  { year: "Today", title: "Still showing up", body: "A decade in, the work is harder, slower, and more honest than ever." },
];

const values = [
  { title: "Radical Transparency", body: "Every receipt. Every decision. Published. Audited. Open to the people we serve." },
  { title: "Community Ownership", body: "Programs are designed, led, and eventually owned by the communities they exist for." },
  { title: "Sustainable Impact", body: "If it won't outlive our funding, we don't build it." },
  { title: "Slow Work, Real Trust", body: "We move at the speed of relationship, not the speed of headlines." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-edge pt-24 md:pt-40 pb-20">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-6 headline-xl max-w-5xl">
          The story behind<br />
          <span className="serif-italic font-normal">the movement.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          We started in July 2016 with no offices, no overhead, and no interest in the polished theatre of traditional charity.
          What we had was a conviction: that real change is local, slow, and led from inside the community, not delivered to it.
        </p>
      </section>

      {/* FOUNDER SECTION */}
      <section className="container-edge py-24 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow">Founder</p>
            <h2 className="mt-4 headline-lg">The voice behind the mission.</h2>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-square max-w-sm overflow-hidden rounded-2xl mb-8">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop" 
                alt="Dela Sseade, Black Sheep Foundation founder" 
                loading="lazy" 
                width={500} 
                height={500} 
                className="h-full w-full object-cover" 
              />
            </div>
            <p className="text-2xl md:text-[1.7rem] leading-[1.35] tracking-tight text-foreground/90">
              "Real change doesn't come from conferences. It comes from showing up on Tuesday mornings, when the cameras are gone, and the work is hard."
            </p>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              Our founder grew up in Accra and spent a decade working in traditional aid before deciding to do things differently. 
              The Black Sheep Foundation was born from a simple question: what if we trusted communities to lead their own change?
            </p>
            <div className="mt-8">
              <p className="font-display text-xl font-bold">Dela Sseade</p>
              <p className="text-sm text-muted-foreground mt-1">Founder & Executive Director</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img src={communityImg} alt="Community gathering in Ghana" width={1400} height={1000} className="h-full w-full object-cover" />
      </section>

      <section className="container-edge py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="eyebrow">Milestones</p>
            <h2 className="mt-4 headline-lg">A decade,<br /><span className="serif-italic font-normal">in motion.</span></h2>
          </div>
          <ol className="md:col-span-7 space-y-12 relative">
            {timeline.map((t, i) => (
              <li key={t.year} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-t border-border pt-8 first:border-t-0 first:pt-0">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay pt-1 min-w-[88px]">
                  {String(i + 1).padStart(2, "0")} · {t.year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{t.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-clay">Built different</p>
            <h2 className="mt-4 headline-lg">
              We chose the<br />harder honest path.
            </h2>
            <p className="mt-8 text-primary-foreground/80 leading-relaxed max-w-md">
              Ghana doesn't need another organization arriving with predetermined answers. It needs partners willing to listen
              long enough to ask better questions. That's the standard we hold ourselves to — and the standard our communities hold us to.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1024&h=1280&fit=crop" alt="Black Sheep Foundation volunteers" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <p className="eyebrow">Our core values</p>
        <h2 className="mt-4 headline-lg max-w-2xl">What drives the foundation.</h2>
        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border">
          {values.map((v, i) => (
            <div key={v.title} className="bg-background p-8 md:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">/ {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
