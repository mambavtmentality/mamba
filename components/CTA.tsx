import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-5xl rounded-3xl border border-mamba-gold/35 bg-[linear-gradient(138deg,rgba(82,33,127,0.65),rgba(20,17,27,0.96),rgba(198,154,50,0.22))] p-8 text-center card-glow md:p-14">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Start Today</p>
        <h2 className="font-display text-3xl leading-tight text-mamba-cream md:text-5xl">
          Build with purpose. Move with discipline.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Partner with Mamba VT Mentality LLC to bring disciplined execution and premium service
          quality into your goals, projects, and business.
        </p>
        <div className="mt-8">
          <Button href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=cm&to=mambavtmentality@gmail.com">
            Contact Mamba VT Mentality
          </Button>
        </div>
      </div>
    </section>
  );
}
