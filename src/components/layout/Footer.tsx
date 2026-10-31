import Link from "next/link";
import { mainNav, site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Ma<span className="text-pink">i</span>d in Hackney
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="hover:text-pink">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-pink">{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-pink">{site.phone}</a>
            </li>
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-pink">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {site.name} ({site.shortName}). All rights reserved.
      </div>
    </footer>
  );
}
