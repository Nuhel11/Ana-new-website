import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import ProductCard from "@/components/services/ProductCard";
import { discoveryBox } from "@/data/products";

export const metadata: Metadata = { title: "The Discovery Box" };

export default function DiscoveryBoxPage() {
  return (
    <>
      <PageHero
        eyebrow="Monthly subscription"
        title="The Discovery Box"
        intro="Discover your new favourite skincare or gourmet treat without leaving the house."
      />
      <Section>
        <div className="max-w-sm">
          <ProductCard product={discoveryBox} />
        </div>
      </Section>
    </>
  );
}
