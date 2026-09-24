import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { locations, services } from "@/data/site";
import lobby from "@/assets/lobby.jpg";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = locations.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Center not found" }, { name: "robots", content: "noindex" }] };
    }
    const { location } = loaderData;
    const title = `${location.name} | Radiology Imaging Associates`;
    const description = `Imaging services, hours and directions for ${location.name} at ${location.address}, ${location.city}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/locations/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/locations/${params.slug}` }],
    };
  },
  component: LocationDetail,
});

function LocationDetail() {
  const { location } = Route.useLoaderData();
  const offered = services.filter((s) => location.services.includes(s.name));

  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <Link to="/locations" className="text-sm text-primary-foreground/70 hover:underline">
            ← All locations
          </Link>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            {location.name}
          </h1>
          <p className="mt-3 text-lg text-primary-foreground/85">
            {location.address} · {location.city}
          </p>
        </div>
      </section>

      <div className="section grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <img
            src={lobby}
            alt={`${location.name} reception`}
            loading="lazy"
            width={1536}
            height={864}
            className="w-full rounded-lg object-cover"
          />
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">
            Services at this center
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {offered.map((s) => (
              <Link
                key={s.slug}
                to="/our-services/$slug"
                params={{ slug: s.slug }}
                className="card-surface p-4"
              >
                <p className="font-semibold text-primary">{s.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card-surface p-6">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Hours
            </p>
            <p className="mt-2 text-sm">{location.hours}</p>
            <p className="mt-5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Scheduling
            </p>
            <a
              href={`tel:${location.phone}`}
              className="mt-1 block font-display text-xl font-bold text-primary"
            >
              {location.phone}
            </a>
            <Link to="/for-patients" className="btn-primary mt-5 w-full">
              Request an appointment
            </Link>
          </div>
          <div className="card-surface p-6 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Good to know</p>
            <ul className="mt-3 space-y-2">
              <li>Free surface parking at the entrance.</li>
              <li>Bring your photo ID, insurance card and physician order.</li>
              <li>Arrive 15 minutes early for registration.</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
