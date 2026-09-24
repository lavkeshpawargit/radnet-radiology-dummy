import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { practice } from "@/data/site";

const nav = [
  { to: "/for-patients", label: "For Patients" },
  { to: "/for-providers", label: "For Providers" },
  { to: "/our-services", label: "Our Services" },
  { to: "/radiologists", label: "Radiologists" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About Us" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="bg-alert text-alert-foreground">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm">
          {practice.short} is back <strong>In Network</strong> with{" "}
          <strong>Humana</strong> insurance plans.{" "}
          <Link to="/news" className="italic underline underline-offset-2">
            Learn more
          </Link>
        </div>
      </div>

      <div className="border-b border-border bg-muted">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 rounded-sm bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm"
          >
            <MapPin className="size-4 text-primary" />
            Find an Imaging Center
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            <Link to="/for-patients" className="btn-pill-accent">
              Schedule Now
            </Link>
            <Link to="/contact" className="btn-pill">
              Feedback
            </Link>
            <Link to="/for-patients" className="btn-pill">
              Medical Records
            </Link>
            <Link to="/for-patients" className="btn-pill">
              Portal Login
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-10 grid-cols-2 gap-0.5" aria-hidden>
              <span className="rounded-[2px] bg-primary" />
              <span className="rounded-[2px] bg-secondary" />
              <span className="rounded-[2px] bg-secondary" />
              <span className="rounded-[2px] bg-primary" />
            </span>
            <span className="font-display text-xl leading-tight font-bold tracking-tight text-primary sm:text-2xl">
              Radiology Imaging Associates
            </span>
          </Link>
          <div className="hidden text-right lg:block">
            <p className="font-display text-lg font-semibold text-destructive">RadNet</p>
            <p className="text-sm text-muted-foreground">Affiliated Imaging Centers</p>
          </div>
          <button
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-sm">
          <Link to="/for-patients">› Billing &amp; Insurance</Link>
          <a href={`tel:${practice.phone}`} className="inline-flex items-center gap-1">
            <Phone className="size-3.5" /> Scheduling: {practice.phone}
          </a>
          <Link to="/contact">› Chat With Us</Link>
          <Link to="/about">› Careers</Link>
        </div>
      </div>

      <nav className="hidden border-b border-border bg-muted lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-7 px-4 py-2.5 text-sm font-medium">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="border-b border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
