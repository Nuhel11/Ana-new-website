import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { pantryService, wardrobeServices } from "@/data/lifestyle";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "The Home Edit" };

export default function HomeEditPage() {
  return (
    <>
      <PageHero
        eyebrow="Organisation"
        title="The Home Edit"
        intro="A clean pantry is a clean mind, and an organised closet gives you clarity."
      />

      <Section id="wardrobe">
        <SectionHeading title="Wardrobe organiser" />
        <div className="grid gap-6 md:grid-cols-3">
          {wardrobeServices.map((s) => (
            <div key={s.name} className="rounded-2xl border border-black/5 p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-ink/70">
          <strong>Signature scent:</strong> we finish with a linen spray from our own line to leave
          your wardrobe smelling fresh.
        </p>
      </Section>

      <Section id="pantry" tone="sage">
        <SectionHeading title={pantryService.name} intro={pantryService.text} />
        <Button href={site.bookingUrl}>Book a Home Edit</Button>
      </Section>
    </>
  );
}
