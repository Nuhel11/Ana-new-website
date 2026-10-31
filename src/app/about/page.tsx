import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/ui/Section";
import { whyChooseUs } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your local partner in living well"
        intro="At Maid in Hackney, we believe a well-lived life shouldn't be a constant struggle against a to-do list."
      />
      <Section>
        <div className="max-w-3xl space-y-5 text-lg text-ink/80">
          <p>
            Born in the heart of East London,
            we don&apos;t just scrub floors; we organise your chaos, and bring a
            touch of beauty to your doorstep. We clean your
            home so you can focus on what truly matters.
          </p>
          <p>We are more than a service; we are your local partner in living well.</p>
        </div>
      </Section>
      <Section tone="blush">
        <SectionHeading title="Why choose us" />
        <div className="grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
