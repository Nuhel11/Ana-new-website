# Maid in Hackney (MIH) — website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Folder structure

```
maid-in-hackney/
├── public/
│   └── images/
│       ├── brand/        ← logo, hero photo (hand + tray)
│       ├── flowers/      ← seasonal-bouquet.jpg, tulips.jpg, spray-roses.jpg, seasonal-bunch.jpg
│       ├── supplies/     ← daily-kit.jpg, eco-kit.jpg
│       └── services/     ← photos for each service
├── src/
│   ├── app/                         ← every folder here = a page (URL)
│   │   ├── layout.tsx               ← fonts, header, footer (wraps every page)
│   │   ├── globals.css              ← brand colours (pink, blush, sage, cocoa)
│   │   ├── page.tsx                 ← /  (home)
│   │   ├── not-found.tsx            ← 404 page
│   │   ├── about/page.tsx           ← /about
│   │   ├── pricing/page.tsx         ← /pricing (à la carte vs Hackney Resident)
│   │   ├── book/page.tsx            ← /book (Acuity booking goes here)
│   │   ├── contact/page.tsx         ← /contact
│   │   ├── cart/page.tsx            ← /cart (basket + upsells + SumUp later)
│   │   └── services/
│   │       ├── page.tsx             ← /services (all services)
│   │       ├── cleaning/            ← /services/cleaning
│   │       ├── supplies/            ← /services/supplies
│   │       ├── flowers/             ← /services/flowers
│   │       ├── breakfast/           ← /services/breakfast
│   │       ├── home-edit/           ← /services/home-edit (wardrobe + pantry)
│   │       ├── personal-assistant/  ← /services/personal-assistant
│   │       ├── discovery-box/       ← /services/discovery-box
│   │       └── wellness/            ← /services/wellness (life coach + PT)
│   ├── components/
│   │   ├── layout/   Header, MobileMenu, Footer
│   │   ├── ui/       Button, Section (Section, SectionHeading, PageHero)
│   │   └── services/ ServiceCard, PriceList, ProductCard
│   ├── data/         ← ALL text and prices live here — edit these, not the pages
│   │   ├── site.ts        name, tagline, email, phone, menu, "why choose us"
│   │   ├── services.ts    the 10 services
│   │   ├── cleaning.ts    cleaning prices + extras
│   │   ├── products.ts    supply kits, flowers, discovery box, checkout upsells
│   │   ├── breakfast.ts   tiers, menu, serving options, form options
│   │   └── lifestyle.ts   PA tasks, home edit, wellness, membership table
│   ├── lib/format.ts      price formatting helper
│   └── types/index.ts     shared TypeScript types
```



## Next steps

1. Add photos and the logo to `public/images`
2. Booking: embed Acuity Scheduling on `/book`
3. Cart + checkout with 1-click upsells, payments via SumUp
4. Contact form → email
5. Breakfast selection form
6. Deploy (e.g. Vercel) and connect the domain
