const audiences = [
  "Busy adults who want efficient training and recovery",
  "Athletes looking for structured recovery support",
  "Active adults focused on longevity and consistency",
  "People who already invest in fitness, wellness, recovery, or performance",
  "Local professionals who want a premium appointment-based system",
];

export function AudienceSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-aion-purple-soft">Who It&apos;s For</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for People Who Value Discipline and Efficiency
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <li
              key={item}
              className="aion-card flex items-start gap-3 p-5 text-sm leading-relaxed text-foreground/90"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aion-purple-soft" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
