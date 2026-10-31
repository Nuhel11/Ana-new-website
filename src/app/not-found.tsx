import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="font-display text-6xl font-bold text-pink">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">We couldn&apos;t find that page</h1>
      <p className="mt-2 text-ink/70">It may have moved — or it&apos;s still on our to-do list.</p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </div>
  );
}
