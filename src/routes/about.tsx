import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { practice } from "@/data/site";
import lobby from "@/assets/lobby.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Radiology Imaging Associates | Treasure Coast Imaging" },
      {
        name: "description",
        content:
          "One of the largest imaging providers on the Treasure Coast, RIA is a RadNet affiliate offering subspecialty diagnostic imaging across five centers.",
      },
      { property: "og:title", content: "About Radiology Imaging Associates" },
      {
        property: "og:description",
        content: "Our story, our standards and careers at RIA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const stats = [
  { value: "5", label: "Imaging centers" },
  { value: "30+", label: "Years on the Treasure Coast" },
  { value: "250k", label: "Exams read each year" },
  { value: "<24h", label: "Typical report turnaround" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Advanced imaging, close to home"
        description={`As one of the largest imaging providers in the region, ${practice.short} combines hospital-grade technology with the access and pricing of an outpatient center.`}
      />
      <div className="section grid items-center gap-10 lg:grid-cols-2">
        <img
          src={lobby}
          alt="RIA imaging center reception"
          loading="lazy"
          width={1536}
          height={864}
          className="w-full rounded-lg object-cover"
        />
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Our story</h2>
          <p className="mt-3 text-muted-foreground">
            {practice.name} has cared for Treasure Coast families for more than three decades. As a{" "}
            {practice.affiliate.toLowerCase()} practice, our centers run the same scanners and
            clinical protocols as large academic systems, with AI-assisted reading built into
            mammography, lung and prostate programs.
          </p>
          <p className="mt-3 text-muted-foreground">
            We believe an imaging visit should be quick, clearly priced and genuinely kind. That
            means evening and Saturday hours, verified benefits before you arrive, and a
            technologist who explains every step.
          </p>
        </div>
      </div>
      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card-surface p-6 text-center">
            <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <section className="bg-muted">
        <div className="section">
          <h2 className="font-display text-2xl font-bold text-primary">Careers</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We hire technologists, schedulers and front-office teams who like people as much as they
            like precision. Openings across all five centers include MRI and CT technologists,
            mammography techs and patient service representatives.
          </p>
        </div>
      </section>
    </>
  );
}
