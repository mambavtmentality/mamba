import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-mamba-gold/35 bg-[linear-gradient(138deg,rgba(82,33,127,0.65),rgba(20,17,27,0.96),rgba(198,154,50,0.22))] p-8 card-glow lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Contact</p>
          <h2 className="font-display text-3xl leading-tight text-mamba-cream md:text-5xl">
            Connect with Mamba VT Mentality LLC.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Reach out about training, coaching, professional services, recovery center memberships,
            partnerships, or the investment opportunity behind the next stage of growth.
          </p>
        </div>

        <form
          action="https://formsubmit.co/mambavtmentality@gmail.com"
          method="POST"
          className="grid gap-4"
        >
          <h3 className="font-display text-2xl text-mamba-cream">Contact Us</h3>
          <input type="hidden" name="_subject" value="Mamba VT Website Inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="_honey"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-mamba-cream">
              Name
              <input
                className="min-h-12 rounded-lg border border-mamba-gold/25 bg-mamba-charcoal/70 px-4 text-mamba-cream outline-none transition-colors placeholder:text-muted/70 focus:border-mamba-gold"
                type="text"
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm text-mamba-cream">
              Email
              <input
                className="min-h-12 rounded-lg border border-mamba-gold/25 bg-mamba-charcoal/70 px-4 text-mamba-cream outline-none transition-colors placeholder:text-muted/70 focus:border-mamba-gold"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm text-mamba-cream">
            Phone
            <input
              className="min-h-12 rounded-lg border border-mamba-gold/25 bg-mamba-charcoal/70 px-4 text-mamba-cream outline-none transition-colors placeholder:text-muted/70 focus:border-mamba-gold"
              type="tel"
              name="phone"
              autoComplete="tel"
            />
          </label>

          <label className="grid gap-2 text-sm text-mamba-cream">
            Preferred Contact Method
            <select
              className="min-h-12 rounded-lg border border-mamba-gold/25 bg-mamba-charcoal/70 px-4 text-mamba-cream outline-none transition-colors focus:border-mamba-gold"
              name="preferred_contact_method"
              defaultValue="Email"
              required
            >
              <option value="Email">Email</option>
              <option value="Text">Text</option>
              <option value="Call">Call</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm text-mamba-cream">
            Message
            <textarea
              className="min-h-36 resize-y rounded-lg border border-mamba-gold/25 bg-mamba-charcoal/70 px-4 py-3 text-mamba-cream outline-none transition-colors placeholder:text-muted/70 focus:border-mamba-gold"
              name="message"
              placeholder="Tell us what you are interested in."
              required
            />
          </label>

          <Button type="submit" className="mt-2 w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
