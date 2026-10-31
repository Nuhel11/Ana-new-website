import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

// The form is not wired up yet — we'll connect it to email (e.g. a Server Action + Resend) later.
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Say hello to us" />
      <Section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-lg">
          <p>
            <span className="block text-sm font-semibold uppercase tracking-wider text-ink/50">Email</span>
            <a href={`mailto:${site.email}`} className="hover:text-pink-dark">{site.email}</a>
          </p>
          <p>
            <span className="block text-sm font-semibold uppercase tracking-wider text-ink/50">Phone</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-pink-dark">{site.phone}</a>
          </p>
        </div>

        <form className="space-y-4 rounded-2xl border border-black/5 p-6 shadow-sm">
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "postcode", label: "Postcode", type: "text" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-1 block text-sm font-medium">{f.label}</label>
              <input id={f.id} name={f.id} type={f.type} className="w-full rounded-lg border border-black/15 px-3 py-2 focus:border-pink focus:outline-none" />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-black/15 px-3 py-2 focus:border-pink focus:outline-none" />
          </div>
          <button type="submit" disabled className="w-full rounded-full bg-pink px-6 py-3 font-semibold text-white opacity-60">
            Send (coming soon)
          </button>
        </form>
      </Section>
    </>
  );
}
