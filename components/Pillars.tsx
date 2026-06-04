import { BarChart3, Repeat, Target } from "lucide-react";

const modelHighlights = [
  {
    title: "Target Clients",
    description: "Athletes, busy professionals, active adults, wellness-focused individuals, and clients seeking measurable results.",
    icon: Target,
  },
  {
    title: "Membership Model",
    description: "Recovery, Performance, and Elite Athlete memberships create recurring access and predictable growth.",
    icon: Repeat,
  },
  {
    title: "Growth Plan",
    description: "Launch the flagship location, build memberships, expand services, and evaluate a second location.",
    icon: BarChart3,
  },
];

const memberships = ["Recovery", "Performance", "Elite Athlete"];

export function Pillars() {
  return (
    <section id="why-us" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Business Model</p>
          <h2 className="font-display text-3xl text-mamba-cream md:text-4xl">
            Built for Access, Results, and Recurring Relationships
          </h2>
          <p className="max-w-2xl text-muted">
            The plan is designed around efficient sessions, high-value equipment, and membership
            options that support recovery, performance, and athlete-level training needs.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap gap-3">
          {memberships.map((membership) => (
            <span
              key={membership}
              className="rounded-full border border-mamba-gold/35 bg-mamba-purple/25 px-4 py-2 text-sm text-mamba-cream"
            >
              {membership} Membership
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {modelHighlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <article
                key={highlight.title}
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
                <h3 className="mb-2 text-xl font-semibold text-mamba-cream">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
