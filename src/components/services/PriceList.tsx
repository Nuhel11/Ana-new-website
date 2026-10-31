import type { PriceItem } from "@/types";
import { formatPrice } from "@/lib/format";

export default function PriceList({ items, title }: { items: PriceItem[]; title?: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      {title && <h3 className="mb-4 font-display text-lg font-semibold">{title}</h3>}
      <ul className="divide-y divide-black/5">
        {items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="font-medium">{item.name}</p>
              {(item.duration || item.note) && (
                <p className="text-sm text-ink/60">
                  {[item.duration, item.note].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
            <p className="shrink-0 font-semibold text-pink-dark">{formatPrice(item.price)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
