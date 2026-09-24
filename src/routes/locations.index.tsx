import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { locations } from "@/data/site";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Imaging Centers Near You | Radiology Imaging Associates" },
      {
        name: "description",
        content:
          "Five Treasure Coast imaging centers in Fort Pierce, Jupiter, Port St. Lucie, Stuart and Tradition with evening and weekend hours.",
      },
      { property: "og:title", content: "Imaging Centers Near You" },
      { property: "og:description", content: "Find hours, addresses and services at each center." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Imaging centers near you"
        description="Five centers across the Treasure Coast, each with free parking, on-site radiologists and appointments that fit around work."
      />
      <div className="section grid gap-6 md:grid-cols-2">
        {locations.map((l) => (
          <div key={l.slug} className="card-surface p-6">
            <h2 className="font-display text-xl font-bold text-primary">{l.name}</h2>
            <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
              <span>
                {l.address}
                <br />
                {l.city}
              </span>
            </p>
            <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-secondary" />
              {l.hours}
            </p>
            <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
              <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
              {l.phone}
            </p>
            <Link
              to="/locations/$slug"
              params={{ slug: l.slug }}
              className="mt-5 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Center details →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
