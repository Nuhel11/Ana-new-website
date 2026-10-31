import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

const groups = [
  { key: "home-care", title: "Home care" },
  { key: "deliveries", title: "Deliveries" },
  { key: "organisation", title: "The Home Edit" },
  { key: "lifestyle", title: "Lifestyle" },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Book a service"
        intro="and let us look after everything"
      />
      <Section>
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.key}>
              <h2 className="mb-5 font-display text-2xl font-bold">{group.title}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.category === group.key)
                  .map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
