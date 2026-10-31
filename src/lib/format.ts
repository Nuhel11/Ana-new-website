import type { Price } from "@/types";

const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

/** Formats a Price, e.g. { amount: 9.99 } -> "£9.99", { amount: null } -> "On request". */
export function formatPrice(price: Price): string {
  if (price.amount === null) return "On request";
  const value = gbp.format(price.amount);
  return price.unit ? `${value} ${price.unit}` : value;
}

/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
