import { LogoEmblem } from "@/components/LogoEmblem";

export function Footer() {
  return (
    <footer className="section-padding pt-10">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-mamba-gold/30 bg-[linear-gradient(130deg,rgba(82,33,127,0.18),rgba(20,17,27,0.86))] p-8 surface-blur md:grid-cols-3">
        <div className="space-y-3">
          <LogoEmblem className="w-full max-w-[168px]" />
          <p className="font-display text-xl text-mamba-cream">Mamba VT Mentality LLC</p>
          <p className="text-sm text-muted">Mindset. Discipline. Purpose.</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-mamba-gold-soft/90">Navigate</p>
          <nav className="flex flex-col gap-2 text-sm text-muted">
            <a className="transition-colors hover:text-mamba-cream" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-mamba-cream" href="#why-us">
              Why Choose Us
            </a>
            <a className="transition-colors hover:text-mamba-cream" href="#contact">
              Contact
            </a>
          </nav>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-mamba-gold-soft/90">Contact</p>
          <div className="space-y-2 text-sm text-muted">
            <p>info@mambavtmentality.com</p>
            <p>(555) 000-0000</p>
            <p>Vermont, USA</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-muted/85">
        © {new Date().getFullYear()} Mamba VT Mentality LLC. All rights reserved.
      </p>
    </footer>
  );
}
