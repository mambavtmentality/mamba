import { LogoEmblem } from "@/components/LogoEmblem";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border border-mamba-gold/30 bg-[linear-gradient(130deg,rgba(82,33,127,0.26),rgba(20,17,27,0.86))] px-4 py-3 surface-blur md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <LogoEmblem className="h-9 w-9 shrink-0" />
          <span className="hidden text-sm font-medium tracking-wide text-mamba-cream sm:inline">
            Mamba VT Mentality LLC
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-mamba-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" className="px-4 py-2 text-xs sm:text-sm">
          Get Started
        </Button>
      </div>
    </header>
  );
}
