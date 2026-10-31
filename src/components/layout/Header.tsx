import Link from "next/link";
import { mainNav, site } from "@/data/site";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Ma<span className="text-cocoa">i</span>d in Hackney
          <span className="sr-only"> — home</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-pink-dark"
            >
              {link.label}
            </Link>
          ))}
          <Button href={site.bookingUrl} size="sm">
            Book now
          </Button>
        </nav>

        <MobileMenu links={mainNav} label={site.name} />
      </div>
    </header>
  );
}
