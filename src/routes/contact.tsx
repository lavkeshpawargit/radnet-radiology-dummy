import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { practice, locations } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Radiology Imaging Associates" },
      {
        name: "description",
        content: "Call, message or visit any of our five Treasure Coast imaging centers.",
      },
      { property: "og:title", content: "Contact Radiology Imaging Associates" },
      { property: "og:description", content: "We're here to help — reach our team today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to help"
        description={`Scheduling, billing or feedback — call ${practice.phone} or send us a note.`}
      />
      <div className="section grid gap-10 lg:grid-cols-2">
        <div className="card-surface p-7">
          {sent ? (
            <p className="rounded-md bg-accent p-5 text-sm text-accent-foreground">
              Thanks for reaching out. (Demo site — messages are not sent.)
            </p>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {["Name", "Email", "Phone"].map((l) => (
                <label key={l} className="text-sm">
                  <span className="font-medium">{l}</span>
                  <input
                    required={l !== "Phone"}
                    type={l === "Email" ? "email" : "text"}
                    className="mt-1 w-full rounded-md border border-input bg-card p-2.5 text-sm"
                  />
                </label>
              ))}
              <label className="text-sm">
                <span className="font-medium">Message</span>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-md border border-input bg-card p-2.5 text-sm"
                />
              </label>
              <button className="btn-primary" type="submit">
                Send message
              </button>
            </form>
          )}
        </div>
        <div className="space-y-4">
          {locations.map((l) => (
            <div key={l.slug} className="card-surface p-5">
              <p className="font-semibold text-primary">{l.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {l.address}, {l.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
