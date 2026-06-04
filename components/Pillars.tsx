import { Activity, BarChart3, Flame, Repeat, Target, Zap } from "lucide-react";

const recoveryStack = [
  {
    title: "ARX + LiveO2",
    description: "Adaptive strength training and oxygen conditioning for efficient performance work.",
    icon: Activity,
  },
  {
    title: "Sauna + Cold Plunge",
    description: "Infrared heat and optional cold exposure to support recovery, resilience, and reset.",
    icon: Flame,
  },
  {
    title: "Vibration Recovery",
    description: "Vibration plate systems for circulation, activation, balance, warm-up, and recovery.",
    icon: Zap,
  },
];

const modelHighlights = [
  {
    title: "Target Market",
    description: "Athletes, active adults, busy professionals, wellness-focused individuals, and clients seeking measurable improvements.",
    icon: Target,
  },
  {
    title: "Membership Options",
    description: "Recovery, Performance, and Elite Athlete memberships support recurring access and scalable revenue.",
    icon: Repeat,
  },
  {
    title: "Growth Plan",
    description: "Launch a flagship location, build memberships, expand services and partnerships, then grow across Vermont and beyond.",
    icon: BarChart3,
  },
];

const memberships = ["Recovery $99-$149", "Performance $199-$299", "Elite Athlete $399-$599"];

export function Pillars() {
  return (
    <section id="why-us" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">
            Recovery & Performance Center
          </p>
          <h2 className="font-display text-3xl text-mamba-cream md:text-4xl">
            A Technology-Driven Wellness Division
          </h2>
          <p className="max-w-2xl text-muted">
            The Recovery & Performance Center solves the time and access problem by combining
            training, cardiovascular conditioning, recovery, and performance enhancement into one streamlined experience.
          </p>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {recoveryStack.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-mamba-gold/25 bg-[linear-gradient(148deg,rgba(82,33,127,0.32),rgba(20,17,27,0.94),rgba(198,154,50,0.06))] p-6 card-glow"
              >
                <div className="mb-5 inline-flex rounded-full border border-mamba-gold/35 bg-mamba-charcoal/70 p-2 text-mamba-gold">
                  <Icon size={18} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-mamba-cream">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mb-5 flex flex-wrap gap-3">
          {memberships.map((membership) => (
            <span
              key={membership}
              className="rounded-full border border-mamba-gold/35 bg-mamba-purple/25 px-4 py-2 text-sm text-mamba-cream"
            >
              {membership}/month
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
