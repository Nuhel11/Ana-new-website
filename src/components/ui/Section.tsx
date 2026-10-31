import { cn } from "@/lib/format";

/** Page-width wrapper with consistent vertical spacing. */
export function Section({
  children,
  className,
  id,
  tone = "white",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "blush" | "sage";
}) {
  const tones = { white: "bg-white", blush: "bg-blush/60", sage: "bg-sage-light" };
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 sm:py-20", tones[tone])}>
      <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", className)}>{children}</div>
    </section>
  );
}

/** Section title with the pink brush-stroke feel from the deck. */
export function SectionHeading({
  title,
  eyebrow,
  intro,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-dark">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="bg-[linear-gradient(transparent_55%,var(--color-blush)_55%)] px-1">{title}</span>
      </h2>
      {intro && <p className="mt-4 text-lg text-ink/70">{intro}</p>}
    </div>
  );
}

/** Top banner for inner pages. */
export function PageHero({ title, intro, eyebrow }: { title: string; intro?: string; eyebrow?: string }) {
  return (
    <section className="bg-blush/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-dark">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-ink/70">{intro}</p>}
      </div>
    </section>
  );
}
