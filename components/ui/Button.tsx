import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (BaseProps & { href: string; type?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">)
  | (BaseProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

const baseStyles =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mamba-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-mamba-charcoal";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-mamba-gold/70 bg-[linear-gradient(160deg,rgba(198,154,50,0.14),rgba(20,17,27,0.95))] text-mamba-cream shadow-[0_8px_24px_rgb(0_0_0_/0.35)] hover:-translate-y-0.5 hover:border-mamba-gold-soft hover:shadow-[0_14px_38px_rgb(198_154_50_/0.26)]",
  secondary:
    "border border-mamba-purple-soft/70 bg-mamba-purple/30 text-mamba-cream hover:-translate-y-0.5 hover:border-mamba-gold/55 hover:bg-mamba-purple/45",
};

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({ variant = "primary", className, children, href, ...props }: ButtonProps) {
  const styles = mergeClasses(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
