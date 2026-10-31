import Link from "next/link";
import { cn } from "@/lib/format";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  size?: "sm" | "md";
  className?: string;
};

const variants = {
  primary: "bg-pink text-white hover:bg-pink-dark",
  outline: "border border-ink/20 text-ink hover:border-pink hover:text-pink-dark",
  dark: "bg-ink text-white hover:bg-ink/85",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
};

export default function Button({ href, children, variant = "primary", size = "md", className }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition",
    variants[variant],
    sizes[size],
    className,
  );

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
