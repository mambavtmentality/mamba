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
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aion-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,rgba(124,58,237,0.9),rgba(245,185,66,0.85))] text-black shadow-[0_8px_24px_rgb(124_58_237_/0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgb(245_185_66_/0.2)]",
  secondary:
    "border border-white/15 bg-white/5 text-foreground hover:-translate-y-0.5 hover:border-aion-purple-soft/50 hover:bg-white/8",
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
