const tiers = [
  {
    name: "Recovery Founder",
    description: "For sauna, cold plunge, vibration, mobility, and recovery sessions",
    range: "$129–$179/mo",
  },
  {
    name: "Performance Founder",
    description: "For guided strength plus recovery access",
    range: "$249–$299/mo",
  },
  {
    name: "Elite Founder",
    description: "For higher-touch access, priority booking, and advanced protocols",
    range: "$399+/mo",
  },
];

export function MembershipPreview() {
  return (
    <section id="memberships" className="section-padding bg-aion-gray/40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 text-center md:mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-aion-purple-soft">Memberships</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Founding Tier Preview</h2>
          <p className="mx-auto max-w-2xl text-aion-muted">
            Preliminary tiers for early validation. Final details confirmed before opening.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="aion-card flex flex-col p-6 md:p-8">
              <h3 className="mb-2 text-xl font-semibold">{tier.name}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-aion-muted">{tier.description}</p>
              <p className="text-sm text-aion-muted">Estimated launch range:</p>
              <p className="text-2xl font-bold aion-gradient-text">{tier.range}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-aion-muted">
          Final pricing, session limits, and equipment access will be confirmed before opening.
        </p>
      </div>
    </section>
  );
}
