import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "Your Basket" };

// Placeholder: the cart, 1-click upsells (see src/data/products.ts → upsells)
// and payment (SumUp, per the deck) are built in a later step.
export default function CartPage() {
  return (
    <>
      <PageHero title="Your basket" />
      <Section className="text-center">
        <p className="text-lg text-ink/70">Your basket is empty.</p>
        <div className="mt-6">
          <Button href="/services">Browse services</Button>
        </div>
      </Section>
    </>
  );
}
