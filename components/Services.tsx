"use client";

import { motion } from "framer-motion";
import { Briefcase, Car, Compass, Droplets, Dumbbell, HeartPulse, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Sports Training",
    description: "Performance-focused coaching to improve technique, confidence, and execution.",
    icon: Dumbbell,
  },
  {
    title: "Health & Fitness",
    description: "Structured routines for long-term strength, conditioning, and overall wellness.",
    icon: HeartPulse,
  },
  {
    title: "Life Coaching",
    description: "Goal-centered guidance built around accountability, clarity, and personal momentum.",
    icon: Compass,
  },
  {
    title: "Painting",
    description: "Professional paint services with clean finishes and dependable project delivery.",
    icon: Paintbrush,
  },
  {
    title: "Power Washing",
    description: "Thorough surface cleaning that restores curb appeal and professional presentation.",
    icon: Droplets,
  },
  {
    title: "Car Detailing",
    description: "Precision interior and exterior detailing that elevates your vehicle's appearance.",
    icon: Car,
  },
  {
    title: "Business Services",
    description: "Scalable support services designed to help operations run efficiently and reliably.",
    icon: Briefcase,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Services</p>
          <h2 className="font-display text-3xl text-mamba-cream md:text-4xl">Built to Serve with Excellence</h2>
          <p className="max-w-2xl text-muted">
            From mindset-driven training and life coaching to high-quality field services, each
            division is designed to produce clear, measurable results.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group relative rounded-2xl border border-mamba-gold/25 bg-[linear-gradient(150deg,rgba(82,33,127,0.12),rgba(25,19,38,0.95))] p-6 card-glow transition-all duration-300 hover:-translate-y-1 hover:border-mamba-gold/65"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-mamba-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-flex rounded-full border border-mamba-gold/50 bg-mamba-purple/45 p-2.5 text-mamba-gold-soft">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-mamba-cream">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
