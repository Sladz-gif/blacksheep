import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-edge py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="serif-italic text-3xl md:text-4xl leading-tight max-w-md">
              Built different to make a difference — one community at a time.
            </p>
            <Link
              to="/get-involved"
              className="mt-10 inline-flex items-center gap-3 border-b border-primary-foreground/40 pb-2 text-sm tracking-wide hover:border-clay hover:text-clay transition-colors"
            >
              Stand with us
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60 mb-5">Navigate</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-clay transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-clay transition">About</Link></li>
              <li><Link to="/impact" className="hover:text-clay transition">Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-clay transition">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60 mb-5">Reach us</p>
            <ul className="space-y-3 text-sm">
              <li>Accra, Ghana</li>
              <li><a href="mailto:hello@blacksheepgh.org" className="hover:text-clay">hello@blacksheepgh.org</a></li>
              <li>
                <a href="https://instagram.com/blacksheepgh" target="_blank" rel="noreferrer" className="hover:text-clay">
                  @blacksheepgh
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a aria-label="Instagram" href="https://instagram.com/blacksheepgh" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:border-clay hover:text-clay transition">
                <Instagram size={16} />
              </a>
              <a aria-label="Twitter" href="https://twitter.com/blacksheepgh" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:border-clay hover:text-clay transition">
                <Twitter size={16} />
              </a>
              <a aria-label="Facebook" href="https://facebook.com/blacksheepgh" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:border-clay hover:text-clay transition">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="rule mt-20 bg-primary-foreground/15" />

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Black Sheep Foundation GH. A grassroots non-profit.</p>
          <div className="flex items-center gap-4">
            <p className="font-mono uppercase tracking-[0.2em]">NGO · Accra · 2016 Now</p>
            <Link to="/admin" className="hover:text-clay transition">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
