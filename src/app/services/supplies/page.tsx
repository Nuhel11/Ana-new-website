import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/ui/Section";
import ProductCard from "@/components/services/ProductCard";
import { individualSupplies, supplyKits } from "@/data/products";

export const metadata: Metadata = { title: "Home Supplies" };

export default function SuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Home care"
        title="The home supplies"
        intro="Never run out of the basics. We deliver during our cleans, right to your cupboard — everything you need to keep your home fresh every day."
      />
      <Section>
        <SectionHeading title="Clean kits" />
        <div className="grid gap-6 sm:grid-cols-2">
          {supplyKits.map((kit) => (
            <ProductCard key={kit.id} product={kit} />
          ))}
        </div>
      </Section>
      <Section tone="sage">
        <SectionHeading title="Individual reset" intro="Top up just what you need." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {individualSupplies.map((g) => (
            <div key={g.group} className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-display font-semibold">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.options.map((o) => (
                  <li key={o} className="rounded-full bg-blush px-3 py-1 text-sm">{o}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
