import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "On-Demand Personal Assistant" };

export default function PersonalAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Concierge"
        title="On-demand personal assistant"
        intro="From booking travel to managing calendars and running errands, our PAs handle the logistics of daily life so you don't have to."
      />
      <Section>
        <p className="max-w-2xl text-ink/70">
          Whether it&apos;s a one-off dry cleaning run or ongoing support with
          your diary and admin, our on-demand PA service flexes around what
          you need, when you need it. Get in touch to tell us what you&apos;d
          like help with and we&apos;ll take it from there.
        </p>
        <div className="mt-8">
          <Button href={site.bookingUrl}>Book a PA</Button>
        </div>
      </Section>
    </>
  );
}
