import type { NavLink } from "@/types";

// TODO: fill in real contact details once the phone number and email are set up
// (see the "To do" slide in the business deck).
export const site = {
  name: "Maid in Hackney",
  shortName: "MIH",
  tagline: "Your Life, Reclaimed. Hackney's Premier Lifestyle Concierge.",
  strapline: "Lifestyle and household services",
  description:
    "Eco-conscious cleaning, personal assistance, fresh breakfast and flower deliveries — a full-service home ecosystem, only in Hackney.",
  email: "hello@maidinhackney.co.uk", // placeholder
  phone: "+44 0000 000000", // placeholder
  area: "Hackney, East London",
  // Client books through her existing Acuity Scheduling account — every
  // "Book now" button links straight out to this instead of an in-site form.
  bookingUrl: "https://app.acuityscheduling.com/schedule/302fe5a2?ref=booking_button",
  social: {
    instagram: "", // add when ready
  },
};

export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const whyChooseUs = [
  {
    title: "Hyper-local",
    text: "We only serve Hackney. That means we're never far away and always on time.",
  },
  {
    title: "Single point of contact",
    text: "One invoice, one trusted team, and one relationship for all your home needs.",
  },
  {
    title: "Vetted & trusted",
    text: "Every member of the team is background-checked and trained to our exacting standards.",
  },
  {
    title: "Support a local business",
    text: "We are an independant business based in Hackney and our cleaners are also local"
  },
];
