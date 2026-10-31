import type { Product } from "@/types";
import { formatPrice } from "@/lib/format";

// The "Add to cart" button is a placeholder for now — the cart is built in a later step.
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="flex aspect-[4/3] items-center justify-center bg-sage-light text-sm text-ink/40">
        {/* Replace with <Image src={product.image} … /> once photos are in /public/images */}
        Photo coming soon
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{product.name}</h3>
          <p className="shrink-0 font-semibold text-pink-dark">{formatPrice(product.price)}</p>
        </div>
        {product.description && <p className="mt-1 text-sm text-ink/70">{product.description}</p>}
        {product.items && (
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink/70">
            {product.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
        <button
          type="button"
          disabled
          className="mt-5 rounded-full bg-pink px-4 py-2 text-sm font-semibold text-white opacity-60"
          title="Cart coming soon"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
