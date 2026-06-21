import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        open ? "bg-black" : (scrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-0" : "bg-transparent py-2")
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-[11px] font-black tracking-tighter">
            BS
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-[13px] font-bold tracking-tight ${open ? "text-white" : (scrolled ? "text-foreground" : "text-primary-foreground")}`}>
              Black Sheep Foundation
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${open ? "text-white/70" : (scrolled ? "text-muted-foreground" : "text-primary-foreground/70")}`}>
              Ghana · est. 2016
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: scrolled ? "text-foreground" : "text-primary-foreground" }}
              inactiveProps={{ className: `${scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}` }}
              className="text-sm transition-colors duration-200 relative"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/get-involved"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-all hover:bg-clay"
          >
            Support the work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden grid h-10 w-10 place-items-center rounded-full transition-colors duration-300 ${
            open ? "border-2 border-white bg-black text-white" : (scrolled ? "border-2 border-primary bg-background text-primary" : "border-2 border-white bg-black text-white")
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-[60] bg-black fade-up">
          <div className="container-edge flex flex-col gap-1 pt-8">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/20 py-5 text-3xl font-display font-bold tracking-tight text-white"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-clay px-6 py-4 text-sm font-medium text-clay-foreground"
            >
              Support the work →
            </Link>
            <p className="mt-10 eyebrow text-white">@blacksheepgh</p>
          </div>
        </div>
      )}
    </header>
  );
}
