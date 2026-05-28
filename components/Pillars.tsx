import { Flag, Repeat, Target } from "lucide-react";

const pillars = [
  {
    title: "Mindset",
    description: "Built around focus, resilience, and personal growth in every environment.",
    icon: Target,
  },
  {
    title: "Discipline",
    description: "Consistent effort and reliable execution produce strong, repeatable outcomes.",
    icon: Repeat,
  },
  {
    title: "Purpose",
    description: "Every service is aligned to clear objectives and meaningful results.",
    icon: Flag,
  },
];

export function Pillars() {
  return (
    <section id="why-us" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Why Choose Us</p>
          <h2 className="font-display text-3xl text-mamba-cream md:text-4xl">Principles That Drive Every Result</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-mamba-gold/25 bg-[linear-gradient(148deg,rgba(82,33,127,0.32),rgba(20,17,27,0.94),rgba(198,154,50,0.06))] p-6 card-glow"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mamba-gold/50 bg-mamba-purple/35 text-sm font-semibold text-mamba-gold">
                    {idx + 1}
                  </span>
                  <div className="inline-flex rounded-full border border-mamba-gold/35 bg-mamba-charcoal/70 p-2 text-mamba-gold">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-mamba-cream">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
