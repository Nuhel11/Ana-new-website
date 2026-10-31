// PA, Home Edit (wardrobe + pantry), wellness and membership content.

export const paTasks = [
  { title: "Grocery & errand running", text: "Picking up specific items, returning retail purchases, or collecting dry cleaning." },
  { title: "Wait-in service", text: "Being at the house to meet tradespeople or sign for high-value deliveries." },
  { title: "Travel prep", text: "Packing suitcases with professional folding techniques and checking flight check-in." },
  { title: "Pet admin", text: "Booking groomer appointments or making sure pet supplies are stocked." },
  { title: "Paperwork & filing", text: "Organising mail, filing household bills, and shredding sensitive documents." },
  { title: "Digital admin", text: "Booking restaurants, managing a family calendar, or replying to personal emails." },
  { title: "Retail admin", text: "Helping small business owners with inventory tracking or basic email correspondence." },
  { title: "Gift sourcing", text: "Finding and beautifully wrapping high-quality gifts." },
  { title: "Event prep", text: "Setting up for small home parties or dinners with our Eco-Table styling." },
];

// TODO: the PA slide mentions a "1h 30" option — confirm session lengths and prices.
export const paRate = "£35 / hour";

export const wardrobeServices = [
  {
    name: "The Seasonal Flip",
    text: "Swapping winter and summer clothes; packing off-season items into vacuum bags or labelled bins.",
  },
  {
    name: "The Aesthetic Edit",
    text: "Colour-coding hanging items, matching slim velvet or wooden hangers, bamboo drawer dividers and neatly labelled bins.",
  },
  {
    name: "The Full Detox",
    text: "Keep / donate / trash decluttering, a deep clean of the wardrobe interior, and a full organisation system.",
  },
];

export const pantryService = {
  name: "Pantry Organiser",
  text: "We declutter the kitchen, check expiry dates, and create beautiful, practical labelling.",
};

export const wellnessServices = [
  { id: "life-coach", name: "Life Coach on Demand", text: "A focused 30-minute session, booked when you need it.", price: "TBC" },
  { id: "personal-trainer", name: "PT on Demand", text: "A personal training session at your house.", price: "TBC" },
];

// From "The Pricing Table" slide.
export const membershipRows = [
  { service: "Cleaning", alaCarte: "£25 – £30 / hour", member: "Priority booking + 10% off" },
  { service: "Breakfast", alaCarte: "£12", member: "Free delivery 2x per week" },
  { service: "Flowers", alaCarte: "£35 per bouquet", member: "Included (1x monthly Luxe Bunch)" },
  { service: "PA services", alaCarte: "£35 / hour", member: "2 hours included per month" },
  { service: "Discovery Box", alaCarte: "£40 / box", member: "Included (quarterly)" },
];

export const membershipPlans = [
  { name: "The Essential", subtitle: "À la carte", bestFor: "One-off needs or a trial.", price: "Pay as you go" },
  { name: "The Hackney Resident", subtitle: "Subscription", bestFor: "Busy professionals & families.", price: "£199 / month" },
];
