import type { Product } from "@/types";

// ---------- Home supplies (from "The Daily clean kit" slide) ----------
export const supplyKits: Product[] = [
  {
    id: "daily-clean-kit",
    name: "The Daily Clean Kit",
    description: "The 5 essentials.",
    price: { amount: 10.00 },
    items: [
      "10 x sponges",
      "6 x toilet rolls",
      "15 x heavy duty sacks",
      "1 x 330ml washing up liquid",
      "2 x kitchen towel",
    ],
    image: "/images/supplies/daily-kit.jpg",
  },
  {
    id: "eco-daily-clean-kit",
    name: "The Eco Daily Clean Kit",
    description: "The 5 eco-friendly essentials.",
    price: { amount: 15.00 },
    items: [
      "2 x sponges",
      "6 x toilet rolls",
      "15 x heavy duty sacks",
      "1 x 330ml Ecover washing up liquid",
      "2 x kitchen towel",
    ],
    image: "/images/supplies/eco-kit.jpg",
  },
];

// "Reset individual" slide — sizes only, no prices in the deck yet.
// TODO: add prices before launch.
export const individualSupplies = [
  { group: "Toilet rolls", options: ["4", "6", "9", "12", "16", "18", "32", "40"].map((n) => `${n} rolls`) },
  { group: "Washing up liquid", options: ["320 ml", "730 ml", "1015 ml"] },
  { group: "Kitchen roll", options: ["1 roll", "2 rolls", "3 rolls"] },
  { group: "Hand soap", options: ["Standard", "Eco"] },
  { group: "Sponges & scrubbers", options: ["10x sponges", "2x scourers", "1x eco sponge", "Scrubbers"] },
  { group: "Flushable wipes", options: ["1 pack"] },
];



// ---------- Discovery box ----------
export const discoveryBox: Product = {
  id: "discovery-box",
  name: "The Discovery Box",
  description:
    "A curated monthly surprise of health, beauty and snacks featuring local Hackney makers and global cult favourites.",
  price: { amount: 40, unit: "/ box" },
};


