import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { practice } from "@/data/site";

export const Route = createFileRoute("/for-providers")({
  head: () => ({
    meta: [
      { title: "For Providers: Referrals & Results | Radiology Imaging Associates" },
      {
        name: "description",
        content:
          "Refer a patient, access reports and images, and reach our subspecialty radiologists directly for consultations.",
      },
      { property: "og:title", content: "For Providers | Radiology Imaging Associates" },
      {
        property: "og:description",
        content: "Referral tools, results access and direct radiologist consults.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-providers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/for-providers" }],
  }),
  component: ForProviders,
});

const tools = [
  {
    title: "Send a referral",
    body: "Fax, EMR interface or the secure provider portal — whichever fits your workflow. Orders received before 3pm are usually scheduled the same day.",
  },
  {
    title: "Results & images",
    body: "Reports post to the portal within one business day; STAT reads are called directly to the ordering physician.",
  },
  {
    title: "Talk to a radiologist",
    body: "Our subspecialty readers take direct calls for protocol questions, urgent findings and second opinions.",
  },
  {
    title: "Appropriate use criteria",
    body: "Need help selecting the right exam? Our clinical team will suggest the lowest-cost study that answers your question.",
  },
];

function ForProviders() {
  return (
    <>
      <PageHero
        eyebrow="For Providers"
        title="A referral partner that answers the phone"
        description="Subspecialty reads, fast turnaround and a scheduling team your staff can reach without waiting on hold."
      />
      <div className="section grid gap-6 md:grid-cols-2">
        {tools.map((t) => (
          <div key={t.title} className="card-surface p-6">
            <h2 className="font-display text-xl font-bold text-primary">{t.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
          </div>
        ))}
      </div>
      <section className="bg-hero-gradient">
        <div className="section flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary-foreground">
              Provider line
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              Scheduling, protocols and STAT reads: {practice.phone}
            </p>
          </div>
          <Link to="/contact" className="btn-accent">
            Request a rep visit
          </Link>
        </div>
      </section>
    </>
  );
}
