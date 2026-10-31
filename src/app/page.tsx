import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { site, whyChooseUs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-light">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cocoa">
              {site.strapline}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Your life, <span className="text-pink-dark">reclaimed.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70">
              Your cleaner around the corner, is our best offer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.bookingUrl}>Book a clean</Button>
              <Button href="/services" variant="outline">Explore services</Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-[2rem] bg-sage">
            {/* Replace with the brand photo (hand holding the tray) in /public/images/brand */}
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
              <p>
                Ma<span className="text-cocoa">i</span>d
                <br />
                Hackney
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title="Everything your home needs"
          intro="We don't just scrub floors — we curate your day, organise your chaos, and bring a touch of beauty to your doorstep."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="blush">
        <SectionHeading eyebrow="Why choose us" title="Your local partner in living well" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
