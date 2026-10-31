import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import PriceList from "@/components/services/PriceList";
import Button from "@/components/ui/Button";
import { cleaningBase, cleaningExtras, HOURLY_RATE } from "@/data/cleaning";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Professional Cleaning" };

export default function CleaningPage() {
  return (
    <>
      <PageHero
        eyebrow="Home care"
        title="Professional cleaning"
        intro="Thorough cleaning, book for a weekly maintenance or deep-dive resets."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <PriceList title="Standard clean" items={cleaningBase} />
          <PriceList title="Extras" items={cleaningExtras} />
        </div>
        <p className="mt-6 text-ink/70">
          It&apos;s a simple hourly rate of <strong>£{HOURLY_RATE}/hour</strong> for cleaning or any extra tasks.
        </p>
        <div className="mt-8">
          <Button href={site.bookingUrl}>Book a clean</Button>
        </div>
      </Section>
    </>
  );
}
