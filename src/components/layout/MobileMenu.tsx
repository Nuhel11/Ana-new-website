"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/types";
import { site } from "@/data/site";

export default function MobileMenu({ links, label }: { links: NavLink[]; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="rounded-md p-2 text-ink hover:bg-blush"
      >
        <span className="sr-only">{open ? "Close menu" : `Open ${label} menu`}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-16 border-b border-black/5 bg-white px-4 pb-6 shadow-sm"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-medium hover:bg-blush"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {/* External booking link (Acuity) — not an in-site route, so a
                  plain anchor in a new tab rather than next/link. */}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 font-medium hover:bg-blush"
              >
                Book now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
