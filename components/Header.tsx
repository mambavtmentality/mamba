import { AionLogo } from "@/components/AionLogo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#concept", label: "The Concept" },
  { href: "#equipment", label: "Equipment" },
  { href: "#founder-offer", label: "Founder Offer" },
  { href: "#memberships", label: "Memberships" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-aion-charcoal/80 px-4 py-3 surface-blur md:px-6">
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3">
          <AionLogo variant="icon" className="h-9 w-9 shrink-0" />
          <AionLogo variant="text" className="hidden h-7 w-auto max-w-[160px] sm:block md:h-8 md:max-w-[200px]" />
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-aion-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#founder-offer" className="px-4 py-2 text-xs sm:text-sm">
          Join Founding List
        </Button>
      </div>
    </header>
  );
}
