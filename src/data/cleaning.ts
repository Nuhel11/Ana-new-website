import type { PriceItem } from "@/types";

// From the "Cleaning prices list" slide.
// NOTE: the deck says £20/hour here, but the membership table says £25–£30/hour.
// Pick one and update HOURLY_RATE.
export const HOURLY_RATE = 30;

export const cleaningBase: PriceItem[] = [
  {
    name: "1 bedroom flat",
    duration: "2 hours",
    price: { amount: 60 },
    note: "Includes kitchen, microwave, lounge and common areas.",
  },
  {
    name: "Each extra bedroom",
    duration: "30 min.",
    price: { amount: 10 },
  },
];

export const cleaningExtras: PriceItem[] = [
  { name: "Laundry", price: { amount: 15 } },
  { name: "Inside windows", duration: "30 min", price: { amount: 15 } },
  { name: "Inside fridge", duration: "30 min", price: { amount: 25 } },
  { name: "Inside oven", duration: "1h 30", price: { amount: 500 } },
  { name: "Furniture steaming", price: { amount: null }, note: "Price on request" },
];
