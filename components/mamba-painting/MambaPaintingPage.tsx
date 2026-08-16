import Link from "next/link";
import {
  Brush,
  Hammer,
  Home,
  Mail,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";

const services = [
  {
    title: "Interior & Exterior Painting",
    description: "Clean prep, sharp lines, durable coatings, and a finished look that fits the property.",
    icon: Paintbrush,
  },
  {
    title: "Staining & Finishing",
    description: "Wood-focused staining and finish work for decks, porches, trim, and detail surfaces.",
    icon: Brush,
  },
  {
    title: "Carpentry & Repairs",
    description: "Practical repairs and small carpentry work that help projects move forward the right way.",
    icon: Hammer,
  },
  {
    title: "Deck & Porch Work",
    description: "Maintenance, repair, staining, and refresh work for Vermont outdoor living spaces.",
    icon: Trees,
  },
  {
    title: "Trim & Fascia Work",
    description: "Exterior and interior detail work that protects the property and improves presentation.",
    icon: Home,
  },
  {
    title: "Power Washing",
    description: "Surface cleaning for siding, decks, walkways, and property exteriors before or after projects.",
    icon: Waves,
  },
  {
    title: "Property Maintenance",
    description: "Reliable help with punch-list items, seasonal upkeep, and ongoing property service needs.",
    icon: ShieldCheck,
  },
  {
    title: "Other Property Services",
    description: "Flexible support for homes, rentals, small businesses, and property owners across Vermont.",
    icon: Sparkles,
  },
];

const processSteps = [
  "Walk the property and understand the scope",
  "Identify prep, repair, and finish needs",
  "Provide a clear estimate and schedule",
  "Complete the work with clean communication",
];

const projectPlaceholders = [
  "Interior repaint",
  "Exterior refresh",
  "Deck staining",
  "Trim and fascia repair",
];

export function MambaPaintingPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#18221b]">
      <header className="border-b border-[#23351f]/10 bg-[#f6f1e8]/95 px-6 py-5 backdrop-blur md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/mamba-painting" className="leading-tight">
            <span className="block text-sm font-bold uppercase tracking-[0.22em] text-[#31512a]">
              Mamba VT LLC
            </span>
            <span className="block text-lg font-black tracking-tight text-[#18221b] md:text-xl">
              Mamba Painting & Property Services
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[#4c5a45] md:flex">
            <a href="#services" className="transition-colors hover:text-[#31512a]">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-[#31512a]">
              Work
            </a>
            <a href="#estimate" className="transition-colors hover:text-[#31512a]">
              Estimate
            </a>
          </div>
          <a
            href="tel:8022871788"
            className="rounded-full bg-[#31512a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#243d20]"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#8a5f24]">
              Painting & Property Services in Vermont
            </p>
            <h1 className="text-4xl font-black tracking-tight text-[#18221b] md:text-6xl">
              Professional painting, repairs, and property care.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4c5a45]">
              Mamba Painting & Property Services helps homeowners, property owners, and small
              businesses keep their spaces clean, protected, and ready for what comes next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#31512a] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#243d20]"
              >
                Request an Estimate
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#31512a]/25 bg-white/70 px-6 text-sm font-bold text-[#31512a] transition hover:-translate-y-0.5 hover:border-[#31512a]/45"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#31512a]/15 bg-[#20301d] p-5 shadow-[0_22px_70px_rgb(24_34_27_/0.22)]">
            <div className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#31512a,#18221b)] p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e8c77a]">
                Built for Vermont properties
              </p>
              <div className="mt-16 space-y-5">
                <p className="text-3xl font-black tracking-tight md:text-4xl">
                  Prep well. Finish clean. Leave it better.
                </p>
                <p className="leading-relaxed text-white/75">
                  From paint and stain to repair and maintenance, the work is grounded in clear
                  communication, practical craftsmanship, and respect for the property.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/8 p-4">
                  <span className="block text-2xl font-black text-[#e8c77a]">VT</span>
                  Local service
                </div>
                <div className="rounded-xl bg-white/8 p-4">
                  <span className="block text-2xl font-black text-[#e8c77a]">8+</span>
                  Service areas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[#23351f]/10 bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#8a5f24]">
              Core Services
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Painting and property services with practical range.
            </h2>
            <p className="mt-4 leading-relaxed text-[#4c5a45]">
              Mamba Painting & Property Services is built for the real needs that come with
              maintaining, improving, and preparing Vermont homes and properties.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#23351f]/10 bg-[#f6f1e8] p-5 transition hover:-translate-y-1 hover:border-[#31512a]/30"
                >
                  <div className="mb-5 inline-flex rounded-full bg-[#31512a] p-3 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 font-black tracking-tight">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4c5a45]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#8a5f24]">
              About Mamba
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              A dependable property-services partner for Vermont.
            </h2>
          </div>
          <div className="space-y-4 leading-relaxed text-[#4c5a45]">
            <p>
              Mamba Painting & Property Services is the customer-facing home-services brand of
              Mamba VT LLC. The business focuses on professional painting, finishing, repairs, and
              property care for clients who want work done with discipline and attention to detail.
            </p>
            <p>
              The goal is straightforward: show up prepared, communicate clearly, respect the
              property, and deliver a clean finished result.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#18221b] px-6 py-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e8c77a]">
              Project Gallery
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Before-and-after work can live here next.
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              This section is ready for real project photos, transformations, and seasonal examples
              as the Mamba portfolio grows.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectPlaceholders.map((project) => (
              <div
                key={project}
                className="flex aspect-[4/3] items-end rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8c77a]">
                    Coming Soon
                  </p>
                  <p className="mt-2 font-black">{project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#31512a]/15 bg-white p-8 shadow-[0_18px_60px_rgb(24_34_27_/0.12)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#8a5f24]">
                Process
              </p>
              <h2 className="text-3xl font-black tracking-tight">Clear steps. Cleaner results.</h2>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <li key={step} className="rounded-2xl bg-[#f6f1e8] p-5">
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#31512a] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-[#263226]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="estimate" className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#31512a] p-8 text-center text-white md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e8c77a]">
            Request an Estimate
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Have a painting, repair, or property project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">
            Send a few details about the property and the work you need done. Mamba Painting &
            Property Services will follow up to talk through the scope and next steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:mambavtmentality@gmail.com?subject=Mamba%20Painting%20Estimate%20Request"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e8c77a] px-6 text-sm font-black text-[#18221b] transition hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Email for Estimate
            </a>
            <a
              href="tel:8022871788"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone size={18} />
              (802) 287 1788
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
