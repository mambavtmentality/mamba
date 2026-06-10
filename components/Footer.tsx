import { AionLogo } from "@/components/AionLogo";

export function Footer() {
  return (
    <footer className="section-padding border-t border-white/8 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <AionLogo variant="full" className="h-28 w-auto max-w-[200px]" />
            <p className="text-sm text-aion-muted">Train smarter. Recover deeper. Evolve daily.</p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-aion-muted">Contact</p>
            <p className="text-sm text-aion-muted">mambavtmentality@gmail.com</p>
            <p className="text-sm text-aion-muted">8022871788</p>
            <p className="text-sm text-aion-muted">Local studio - location coming soon</p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-aion-muted">Follow</p>
            <p className="text-sm text-aion-muted">Instagram - coming soon</p>
            <p className="text-sm text-aion-muted">Facebook - coming soon</p>
          </div>
        </div>
        <p className="mt-10 border-t border-white/8 pt-6 text-center text-xs leading-relaxed text-aion-muted">
          Aion Performance & Recovery provides general wellness, fitness, and recovery services. It
          does not provide medical diagnosis or treatment.
        </p>
        <p className="mt-3 text-center text-xs text-aion-muted/70">
          (c) {new Date().getFullYear()} Aion Performance & Recovery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
