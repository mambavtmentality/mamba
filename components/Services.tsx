"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Car,
  Dumbbell,
  HeartPulse,
  Paintbrush,
  PersonStanding,
  Sparkles,
  Waves,
} from "lucide-react";

const divisions = [
  {
    title: "Sports Training",
    description: "Performance-focused coaching for athletes and active clients building skill, confidence, and discipline.",
    icon: Dumbbell,
  },
  {
    title: "Health & Fitness Coaching",
    description: "Structured coaching for strength, conditioning, wellness habits, and long-term personal progress.",
    icon: HeartPulse,
  },
  {
    title: "Life Coaching & Development",
    description: "Personal development support rooted in mindset, accountability, purpose, and forward motion.",
    icon: PersonStanding,
  },
  {
    title: "Painting Services",
    description: "Residential and commercial painting delivered with clean presentation and premium service standards.",
    icon: Paintbrush,
  },
  {
    title: "Power Washing",
    description: "Exterior cleaning services built to restore curb appeal and protect property presentation.",
    icon: Waves,
  },
  {
    title: "Car Detailing",
    description: "Interior and exterior detailing for clients who value precision, care, and a finished look.",
    icon: Car,
  },
  {
    title: "General Business Services",
    description: "Flexible professional support services that create additional revenue streams under the Mamba VT brand.",
    icon: Briefcase,
  },
  {
    title: "Recovery & Performance Center",
    description: "A technology-driven wellness division combining ARX, LiveO2, sauna, cold plunge, and vibration plate systems.",
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Business Divisions</p>
          <h2 className="font-display text-3xl text-mamba-cream md:text-4xl">
            Multiple Revenue Streams, One Recognizable Brand
          </h2>
          <p className="max-w-2xl text-muted">
            The new business narrative positions Mamba VT Mentality LLC as a scalable umbrella
            company serving personal development, performance, wellness, and professional-service markets.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.article
                key={division.title}
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
                <h3 className="mb-2 text-lg font-semibold text-mamba-cream">{division.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{division.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
