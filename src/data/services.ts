import type { Service } from "@/types";

// The 10 services from the "What we offer" slide, mapped to site pages.
export const services: Service[] = [
  {
    slug: "cleaning",
    number: 1,
    title: "Residential Cleaning",
    shortDescription:
      "Tailored, eco-friendly cleaning for weekly maintenance or deep-dive resets.",
    href: "/services/cleaning",
    category: "home-care",
  },
  {
    slug: "supplies",
    number: 2,
    title: "Cleaning Essential Supplies",
    shortDescription:
      "Never run out of the basics — we restock your cupboard during our cleans.",
    href: "/services/supplies",
    category: "home-care",
  },
  {
    slug: "flowers",
    number: 3,
    title: "Flowers Delivery",
    shortDescription:
      "Seasonal blooms from local markets, delivered weekly to brighten your space.",
    href: "/services/flowers",
    category: "deliveries",
  },

  {
    slug: "pantry",
    number: 4,
    title: "Pantry & Cupboards",
    shortDescription:
      "We declutter your physical space to help declutter your mind.",
    href: "/services/home-edit#pantry",
    category: "organisation",
  },
  {
    slug: "wardrobe",
    number: 5,
    title: "Clothes Organisation",
    shortDescription:
      "Seasonal flips, colour-coding and full wardrobe detoxes.",
    href: "/services/home-edit#wardrobe",
    category: "organisation",
  },
  {
    slug: "discovery-box",
    number: 6,
    title: "The Discovery Box",
    shortDescription:
      "A monthly health, beauty & snack box featuring local Hackney makers.",
    href: "/services/discovery-box",
    category: "lifestyle",
  },
  {
    slug: "personal-assistant",
    number: 7,
    title: "On-Demand PA",
    shortDescription:
      "Errands, wait-ins, paperwork, travel prep — consider it done.",
    href: "/services/personal-assistant",
    category: "lifestyle",
  }
];
