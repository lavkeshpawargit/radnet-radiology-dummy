import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-patient.jpg";
import { services, news, trending, locations } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radiology Imaging Associates | Treasure Coast Imaging Centers" },
      {
        name: "description",
        content:
          "MRI, CT, 3D mammography with AI, ultrasound, X-ray, DEXA and PET/CT at five Treasure Coast imaging centers.",
      },
      { property: "og:title", content: "Radiology Imaging Associates" },
      {
        property: "og:description",
        content: "Advanced, AI-powered diagnostic imaging close to home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Patient greeted by a technologist at an MRI suite"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <p className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
            Enhanced Breast Cancer Detection
          </p>
          <h1 className="mt-3 max-w-xl font-display text-5xl leading-tight font-bold text-primary-foreground sm:text-6xl">
            You deserve more.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-primary-foreground/90">
            Put the power of artificial intelligence behind your mammogram.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/for-patients" className="btn-accent">
              Schedule now
            </Link>
            <Link
              to="/our-services/$slug"
              params={{ slug: "mammography" }}
              className="btn-outline text-primary-foreground"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="font-display text-3xl font-bold text-primary">Radiology imaging centers</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          As one of the largest imaging providers on the Treasure Coast, RIA offers a complete
          range of imaging services including 3D mammography, X-ray, MRI/MRA, CT/CTA, PET/CT,
          nuclear medicine, DEXA and more.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/our-services/$slug"
              params={{ slug: s.slug }}
              className="card-surface group overflow-hidden"
            >
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                width={1024}
                height={768}
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="p-3 text-sm font-semibold text-primary">{s.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <p className="text-sm font-semibold tracking-[0.2em] text-secondary-foreground uppercase">
            Now trending
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((t) => (
              <a key={t.title} href={t.to} className="card-surface p-6">
                <h3 className="font-display text-lg font-bold text-primary">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground italic">{t.sub}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold text-primary">Recent radiology news</h2>
          <Link to="/news" className="text-sm font-semibold text-primary hover:underline">
            More news →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <div key={n.slug} className="card-surface p-5">
              <p className="text-xs text-muted-foreground">{n.date}</p>
              <p className="mt-2 font-semibold">{n.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-hero-gradient">
        <div className="section">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">
            Imaging centers near you
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to="/locations/$slug"
                params={{ slug: l.slug }}
                className="rounded-lg bg-card p-4 transition-transform hover:-translate-y-0.5"
              >
                <p className="font-semibold text-primary">{l.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l.city}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-card p-6">
            <div>
              <p className="font-display text-xl font-bold text-primary">
                Flexible exam hours designed around your schedule.
              </p>
              <p className="text-sm text-muted-foreground">
                Radiology appointments available on your terms.
              </p>
            </div>
            <Link to="/for-patients" className="btn-accent">
              Schedule now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
