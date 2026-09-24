import { Link } from "@tanstack/react-router";
import { practice, services, locations } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">{practice.name}</p>
          <p className="mt-2 text-sm opacity-80">{practice.affiliate}</p>
          <p className="mt-4 text-sm opacity-80">
            Serving the {practice.region} with subspecialty diagnostic imaging.
          </p>
          <a
            href={`tel:${practice.phone}`}
            className="mt-4 inline-block font-display text-xl font-semibold"
          >
            {practice.phone}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase opacity-70">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/our-services/$slug"
                  params={{ slug: s.slug }}
                  className="opacity-85 hover:opacity-100 hover:underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase opacity-70">Locations</p>
          <ul className="mt-3 space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="opacity-85 hover:opacity-100 hover:underline"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase opacity-70">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/for-patients" className="opacity-85 hover:underline">
                Request an appointment
              </Link>
            </li>
            <li>
              <Link to="/for-providers" className="opacity-85 hover:underline">
                Refer a patient
              </Link>
            </li>
            <li>
              <Link to="/radiologists" className="opacity-85 hover:underline">
                Meet our radiologists
              </Link>
            </li>
            <li>
              <Link to="/news" className="opacity-85 hover:underline">
                Newsroom
              </Link>
            </li>
            <li>
              <Link to="/contact" className="opacity-85 hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs opacity-70">
          © {new Date().getFullYear()} {practice.name}. This is a demonstration site. Content is
          illustrative and not medical advice.
        </div>
      </div>
    </footer>
  );
}
