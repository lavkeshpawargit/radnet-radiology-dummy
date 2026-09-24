import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/data/site";

export const Route = createFileRoute("/our-services/")({
  head: () => ({
    meta: [
      { title: "Our Imaging Services | Radiology Imaging Associates" },
      {
        name: "description",
        content:
          "MRI, CT, 3D mammography, ultrasound, X-ray, DEXA, PET/CT and image-guided procedures across the Treasure Coast.",
      },
      { property: "og:title", content: "Our Imaging Services | Radiology Imaging Associates" },
      {
        property: "og:description",
        content: "A complete range of subspecialty diagnostic imaging services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A complete range of diagnostic imaging"
        description="Every exam is read by a fellowship-trained, board-certified radiologist and reported back to your physician within one business day."
      />
      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            to="/our-services/$slug"
            params={{ slug: s.slug }}
            className="card-surface flex flex-col overflow-hidden"
          >
            <img
              src={s.image}
              alt={s.name}
              loading="lazy"
              width={1024}
              height={768}
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="font-display text-xl font-bold text-primary">{s.name}</h2>
              <p className="mt-1 text-sm font-medium text-secondary-foreground">{s.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.summary}</p>
              <span className="mt-4 text-sm font-semibold text-primary">Learn more →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
