import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { services, locations, practice } from "@/data/site";

export const Route = createFileRoute("/for-patients")({
  head: () => ({
    meta: [
      { title: "For Patients: Appointments & Preparation | Radiology Imaging Associates" },
      {
        name: "description",
        content:
          "Request an imaging appointment, learn how to prepare for your exam, and find billing, insurance and medical records information.",
      },
      { property: "og:title", content: "For Patients | Radiology Imaging Associates" },
      {
        property: "og:description",
        content: "Appointments, exam preparation, billing and records in one place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-patients" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/for-patients" }],
  }),
  component: ForPatients,
});

const faqs = [
  {
    q: "Do I need a physician order?",
    a: "Most diagnostic exams require an order from your referring physician. Screening mammograms can be booked without one.",
  },
  {
    q: "When will my results be ready?",
    a: "Your radiologist's report is sent to your physician within one business day, and images appear in the patient portal shortly after.",
  },
  {
    q: "What should I bring?",
    a: "A photo ID, your insurance card, your physician order and a list of current medications.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We are in network with most major plans including Humana, Aetna, Cigna, UnitedHealthcare, Medicare and Florida Blue.",
  },
];

function ForPatients() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Request an appointment in a few minutes"
        description="Tell us what you need and where it's convenient. Our scheduling team confirms by phone, usually the same day."
      />

      <div className="section grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="card-surface p-7">
          <h2 className="font-display text-2xl font-bold text-primary">Appointment request</h2>
          {sent ? (
            <p className="mt-6 rounded-md bg-accent p-5 text-sm text-accent-foreground">
              Thank you — your request has been noted. A scheduler would call you at the number
              provided. (This demo site does not send real requests.)
            </p>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="First name" name="first" />
              <Field label="Last name" name="last" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
              <label className="text-sm sm:col-span-1">
                <span className="font-medium">Exam</span>
                <select className="mt-1 w-full rounded-md border border-input bg-card p-2.5 text-sm">
                  {services.map((s) => (
                    <option key={s.slug}>{s.name}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm sm:col-span-1">
                <span className="font-medium">Preferred center</span>
                <select className="mt-1 w-full rounded-md border border-input bg-card p-2.5 text-sm">
                  {locations.map((l) => (
                    <option key={l.slug}>{l.name}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="font-medium">Anything we should know?</span>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-md border border-input bg-card p-2.5 text-sm"
                />
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">
                Submit request
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="card-surface p-6">
            <p className="font-display text-lg font-bold text-primary">Prefer to call?</p>
            <a
              href={`tel:${practice.phone}`}
              className="mt-1 block font-display text-2xl font-bold"
            >
              {practice.phone}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Mon–Fri 7:00am – 7:00pm ET</p>
          </div>
          <div className="card-surface p-6">
            <p className="font-display text-lg font-bold text-primary">Billing &amp; insurance</p>
            <p className="mt-2 text-sm text-muted-foreground">
              We verify benefits before your visit and give you a cost estimate up front. Payment
              plans are available for balances over $200.
            </p>
          </div>
          <div className="card-surface p-6">
            <p className="font-display text-lg font-bold text-primary">Medical records</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Images and reports are available in the patient portal for seven years. Request a CD
              or secure download at any center.
            </p>
          </div>
        </aside>
      </div>

      <section className="bg-muted">
        <div className="section">
          <h2 className="font-display text-2xl font-bold text-primary">Questions patients ask</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="card-surface p-5">
                <p className="font-semibold">{f.q}</p>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm">
            Preparing for a specific exam?{" "}
            <Link to="/our-services" className="font-semibold text-primary hover:underline">
              See preparation instructions by service
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="text-sm">
      <span className="font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-md border border-input bg-card p-2.5 text-sm"
      />
    </label>
  );
}
