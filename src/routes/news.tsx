import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { news } from "@/data/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Radiology News | Radiology Imaging Associates" },
      {
        name: "description",
        content: "Announcements, new centers, insurance updates and holiday hours from RIA.",
      },
      { property: "og:title", content: "Radiology News | RIA" },
      { property: "og:description", content: "The latest from Radiology Imaging Associates." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/news" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHero eyebrow="Newsroom" title="Recent radiology news" />
      <div className="section grid gap-6 md:grid-cols-2">
        {news.map((n) => (
          <article key={n.slug} className="card-surface p-6">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {n.date}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-primary">{n.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
          </article>
        ))}
      </div>
    </>
  );
}
