"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, Flame, Snowflake, Waves, Zap } from "lucide-react";

const technologies = [
  {
    title: "ARX Adaptive Resistance",
    description: "Computerized strength training designed to create efficient, measurable effort in minutes.",
    icon: Dumbbell,
  },
  {
    title: "LiveO2 Conditioning",
    description: "Altitude-inspired oxygen conditioning that supports cardio capacity and performance work.",
    icon: Activity,
  },
  {
    title: "Infrared Sauna",
    description: "A recovery-focused heat experience for relaxation, restoration, and post-session reset.",
    icon: Flame,
  },
  {
    title: "Cold Plunge",
    description: "Cold exposure for resilience, recovery, and a sharper finish to the performance circuit.",
    icon: Snowflake,
  },
  {
    title: "Vibration Plate",
    description: "Movement support for circulation, activation, balance, warm-up, and recovery.",
    icon: Zap,
  },
  {
    title: "Signature Session",
    description: "Vibration plate, dynamic warm-up, ARX, LiveO2, infrared sauna, and optional cold plunge.",
    icon: Waves,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-mamba-gold-soft/80">Technology</p>
          <h2 className="font-display text-3xl text-mamba-cream md:text-4xl">
            Performance and Recovery in One Visit
          </h2>
          <p className="max-w-2xl text-muted">
            The business plan centers Mamba VT around a complete client experience that combines
            strength, conditioning, recovery, and wellness technology under one roof.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.article
                key={technology.title}
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
                <h3 className="mb-2 text-lg font-semibold text-mamba-cream">{technology.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{technology.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
