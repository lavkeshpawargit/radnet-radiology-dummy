import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, locations, practice } from "@/data/site";

export const Route = createFileRoute("/our-services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} | Radiology Imaging Associates`;
    return {
      meta: [
        { title },
        { name: "description", content: service.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/our-services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/our-services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const centers = locations.filter((l) => l.services.includes(service.name));

  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
          <div>
            <Link to="/our-services" className="text-sm text-primary-foreground/70 hover:underline">
              ← All services
            </Link>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 text-lg text-primary-foreground/85">{service.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/for-patients" className="btn-accent">
                Schedule this exam
              </Link>
              <a href={`tel:${practice.phone}`} className="btn-outline text-primary-foreground">
                Call {practice.phone}
              </a>
            </div>
          </div>
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      </section>

      <div className="section grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">About the exam</h2>
          <p className="mt-3 text-muted-foreground">{service.summary}</p>

          <h3 className="mt-10 font-display text-xl font-bold text-primary">How to prepare</h3>
          <ul className="mt-3 space-y-2">
            {service.prep.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                {p}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-xl font-bold text-primary">What to expect</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {service.highlights.map((h) => (
              <div key={h} className="card-surface p-4 text-sm font-medium">
                {h}
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card-surface p-5">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Typical exam time
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-primary">{service.duration}</p>
          </div>
          <div className="card-surface p-5">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Offered at
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {(centers.length ? centers : locations).map((l) => (
                <li key={l.slug}>
                  <Link
                    to="/locations/$slug"
                    params={{ slug: l.slug }}
                    className="text-primary hover:underline"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-5">
            <p className="text-sm font-semibold">Other services</p>
            <ul className="mt-3 space-y-2 text-sm">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 5)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/our-services/$slug"
                      params={{ slug: s.slug }}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
