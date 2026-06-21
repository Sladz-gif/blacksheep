import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { ArrowUpRight, Check, Instagram, Twitter, Facebook } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved, Direct Action | Black Sheep Foundation GH" },
      { name: "description", content: "Volunteer, partner, or give. Three concrete ways to stand with a Ghanaian grassroots movement." },
      { property: "og:title", content: "Get Involved with Black Sheep Foundation GH" },
      { property: "og:description", content: "Direct action. Direct impact. No middle." },
    ],
  }),
  component: GetInvolvedPage,
});

const helpOptions = [
  "Make a donation",
  "Volunteer my time",
  "Corporate partnership",
  "Media or press",
  "Something else",
];

function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    help: helpOptions[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="container-edge pt-24 md:pt-40 pb-20">
        <p className="eyebrow">Get involved</p>
        <h1 className="mt-6 headline-xl max-w-5xl">
          Direct action.<br />
          <span className="serif-italic font-normal">Direct impact.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Three honest ways to stand with the work. Pick the one that fits, we'll write back personally.
        </p>
      </section>

      {/* Two paths */}
      <section className="container-edge pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-10 md:p-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">For individuals</p>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">Volunteer with us.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We bring on a small, intentional cohort of volunteers each year, from Ghana and beyond.
              Field placements run 4 to 12 weeks and are matched to your skills and our active projects.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Direct field placement", "Local team, local mentorship", "Rolling intake, limited spots"].map((b) => (
                <li key={b} className="flex items-start gap-3"><Check size={16} className="text-clay mt-0.5 shrink-0" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10 md:p-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">For organizations</p>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">Partner with us.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We build bespoke partnerships with companies, foundations, and NGOs who want their giving
              to land in the field, not in overhead. Every partnership is publicly reported.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Co-designed initiatives", "Quarterly impact reports", "Named, fully transparent funds"].map((b) => (
                <li key={b} className="flex items-start gap-3"><Check size={16} className="text-clay mt-0.5 shrink-0" />{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-4 headline-lg">Tell us<br /><span className="serif-italic font-normal">how you want to help.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
              Real humans answer this inbox. Expect a reply within two working days from our team in Accra.
            </p>
            <div className="mt-12">
              <p className="eyebrow mb-4">Find us</p>
              <p className="text-lg font-bold">@blacksheepgh</p>
              <p className="text-sm text-muted-foreground mt-1">hello@blacksheepgh.org · Accra, Ghana</p>
              <div className="mt-5 flex gap-3">
                <a aria-label="Instagram" href="https://instagram.com/blacksheepgh" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-clay hover:text-clay-foreground hover:border-clay transition">
                  <Instagram size={16} />
                </a>
                <a aria-label="Twitter" href="https://twitter.com/blacksheepgh" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-clay hover:text-clay-foreground hover:border-clay transition">
                  <Twitter size={16} />
                </a>
                <a aria-label="Facebook" href="https://facebook.com/blacksheepgh" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-clay hover:text-clay-foreground hover:border-clay transition">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="bg-background border border-border p-10 md:p-14 fade-up">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-clay text-clay-foreground"><Check size={20} /></span>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">Message received.</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
                  Thank you, {form.name.split(" ")[0]}. Someone from our Accra team will reach out within two working days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", organization: "", help: helpOptions[0], message: "" }); }}
                  className="mt-8 text-sm border-b border-foreground pb-1 hover:border-clay hover:text-clay transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <Field label="Full name" required>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="minimal-input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="minimal-input"
                  />
                </Field>
                <Field label="Organization (optional)">
                  <input
                    maxLength={120}
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="minimal-input"
                  />
                </Field>
                <Field label="How do you want to help?" required>
                  <select
                    value={form.help}
                    onChange={(e) => setForm({ ...form, help: e.target.value })}
                    className="minimal-input bg-transparent"
                  >
                    {helpOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Your message" required>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="minimal-input resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-clay"
                >
                  Send message
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .minimal-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 0.85rem 0;
          font-size: 1rem;
          font-family: var(--font-sans);
          color: var(--foreground);
          outline: none;
          transition: border-color 0.25s ease;
          border-radius: 0;
        }
        .minimal-input:focus {
          border-bottom-color: var(--clay);
        }
        .minimal-input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required && <span className="text-clay"> *</span>}
      </span>
      {children}
    </label>
  );
}
