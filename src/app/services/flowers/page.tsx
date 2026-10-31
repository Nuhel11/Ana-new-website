import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Fresh Flowers Delivery" };

export default function FlowersPage() {
  return (
    <>
      <PageHero
        eyebrow="Deliveries"
        title="Fresh flowers delivery"
        intro="Seasonal blooms sourced from local markets, delivered weekly to brighten your living space and lift your mood."
      />
      <Section>
        <p className="max-w-2xl text-ink/70">
          From seasonal flowers to blossoming arrangements, we curate fresh
          blooms to suit the mood of your home — just let us know what you
          have in mind when you book.
        </p>
        <div className="mt-8">
          <Button href={site.bookingUrl}>Book flowers</Button>
        </div>
      </Section>
    </>
  );
}
