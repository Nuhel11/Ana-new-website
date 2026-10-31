import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { membershipPlans, membershipRows } from "@/data/lifestyle";

export const metadata: Metadata = { title: "Pricing & Membership" };

export default function PricingPage() {
  const [essential] = membershipPlans;
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pay as you book"
        intro=""
      />
      <Section>
        <div className="overflow-x-auto rounded-2xl border border-black/5 shadow-sm">
          <table className="w-full min-w-[560px] text-left">
            <thead className="bg-blush/60">
              <tr>
                <th className="p-4 font-display">Service</th>
                <th className="p-4 font-display">
                  {essential.name}
                  <span className="block text-sm font-normal text-ink/60">{essential.subtitle}</span>
                </th>
                
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              <tr>
                <td className="p-4 font-medium">Best for</td>
                <td className="p-4">{essential.bestFor}</td>
                
              </tr>
              {membershipRows.map((row) => (
                <tr key={row.service}>
                  <td className="p-4 font-medium">{row.service}</td>
                  <td className="p-4">{row.alaCarte}</td>
                  
                </tr>
              ))}
              
              
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          
          <Button href="/services" variant="outline">Browse services</Button>
        </div>
      </Section>
    </>
  );
}
