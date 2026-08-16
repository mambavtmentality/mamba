export function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-aion-gray/30">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="aion-card relative overflow-hidden p-4">
          <div className="relative flex aspect-[4/5] min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(145deg,rgba(124,58,237,0.28),rgba(20,20,23,0.95),rgba(245,185,66,0.16))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(167,139,250,0.28),transparent_34%),radial-gradient(circle_at_76%_78%,rgba(245,185,66,0.18),transparent_32%)]" />
            <div className="relative text-center">
              <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-black/25 text-5xl font-bold tracking-tight aion-gradient-text">
                CM
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-aion-yellow-soft">
                Founder Photo
              </p>
              <p className="mt-2 text-sm text-aion-muted">Professional image placeholder</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-aion-purple-soft">
              Meet the Founder
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Clinton Messiter
            </h2>
            <p className="mt-3 text-lg font-semibold text-aion-yellow-soft">
              Trainer. Coach. Entrepreneur. Speaker.
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-aion-muted md:text-base">
            <p>
              Clinton Messiter is the founder of Mamba VT Mentality LLC, a Vermont-based company
              built around three principles: Mindset. Discipline. Purpose.
            </p>
            <p>
              With a background in personal training, athletic performance, coaching, business, and
              hands-on entrepreneurship, Clinton&apos;s approach is centered on helping people
              become stronger - not only physically, but mentally.
            </p>
            <p>
              His philosophy was shaped by competition, adversity, rebuilding, and the
              understanding that lasting change does not happen overnight. It comes from
              consistently doing the work when nobody is watching.
            </p>
            <p>That philosophy became Mamba VT Mentality.</p>
            <p>
              Today, Clinton works with athletes and individuals through performance training,
              fitness, coaching, and personal development while continuing to build Mamba VT into a
              broader performance and wellness company.
            </p>
          </div>

          <blockquote className="rounded-2xl border border-aion-yellow/25 bg-aion-yellow/8 p-5 text-lg font-semibold leading-relaxed text-foreground md:text-xl">
            &quot;You don&apos;t have to be defined by where you&apos;ve been. Your decisions determine
            where you go next.&quot;
          </blockquote>

          <div className="space-y-4">
            <p className="font-semibold text-foreground">Win or learn. Stay ready. Keep moving forward.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
