import Link from "next/link";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-pink/40 hover:shadow-md"
    >
      <span className="font-display text-sm font-semibold text-pink-dark">
        {String(service.number).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-display text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink/70">{service.shortDescription}</p>
      <span className="mt-4 text-sm font-semibold text-ink group-hover:text-pink-dark">
        Find out more →
      </span>
    </Link>
  );
}
