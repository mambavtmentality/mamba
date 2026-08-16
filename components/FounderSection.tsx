import Image from "next/image";

export function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-aion-gray/30">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="aion-card relative overflow-hidden p-4">
          <div className="relative flex aspect-[4/5] min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(145deg,rgba(124,58,237,0.28),rgba(20,20,23,0.95),rgba(245,185,66,0.16))]">
            <Image
              src="/founder/clinton-messiter.png"
              alt="Clinton Messiter, founder of Mamba VT Mentality LLC"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
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
