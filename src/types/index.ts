// Shared types used across the Maid in Hackney site.

export type Price = {
  /** Amount in pounds. Use null when the price is "on request". */
  amount: number | null;
  /** Optional unit shown after the price, e.g. "/hour", "per person". */
  unit?: string;
};

export type Service = {
  slug: string;
  number: number;
  title: string;
  shortDescription: string;
  href: string;
  category: "home-care" | "deliveries" | "organisation" | "lifestyle";
};

export type PriceItem = {
  name: string;
  duration?: string;
  price: Price;
  note?: string;
};

export type Product = {
  id: string;
  name: string;
  price: Price;
  image?: string;
  items?: string[];
  description?: string;
};

export type NavLink = {
  label: string;
  href: string;
};
