import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/radiologists")({
  head: () => ({
    meta: [
      { title: "Our Radiologists | Radiology Imaging Associates" },
      {
        name: "description",
        content:
          "Meet the fellowship-trained, board-certified radiologists reading every exam at Radiology Imaging Associates.",
      },
      { property: "og:title", content: "Our Radiologists" },
      {
        property: "og:description",
        content: "Fellowship-trained subspecialty radiologists on the Treasure Coast.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/radiologists" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/radiologists" }],
  }),
  component: Radiologists,
});

const team = [
  { name: "Dr. Elena Marchetti, MD", focus: "Breast Imaging", school: "Fellowship, Mayo Clinic" },
  { name: "Dr. Samuel Okonkwo, MD", focus: "Neuroradiology", school: "Fellowship, Emory" },
  { name: "Dr. Priya Raghavan, MD", focus: "Body MRI", school: "Fellowship, Johns Hopkins" },
  { name: "Dr. Thomas Beaulieu, DO", focus: "Musculoskeletal", school: "Fellowship, UCSF" },
  { name: "Dr. Grace Lindqvist, MD", focus: "Cardiothoracic", school: "Fellowship, Cleveland Clinic" },
  { name: "Dr. Marcus Hale, MD", focus: "Interventional", school: "Fellowship, Miami" },
];

function Radiologists() {
  return (
    <>
      <PageHero
        eyebrow="Radiologists"
        title="Every image read by a subspecialist"
        description="Your exam is interpreted by a physician who reads that body part all day, every day — not a generalist."
      />
      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((d) => (
          <div key={d.name} className="card-surface p-6">
            <div className="grid size-12 place-items-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">
              {d.name.split(" ")[1]?.[0]}
              {d.name.split(" ")[2]?.[0]}
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-primary">{d.name}</h2>
            <p className="mt-1 text-sm font-medium text-secondary-foreground">{d.focus}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d.school}</p>
          </div>
        ))}
      </div>
    </>
  );
}
