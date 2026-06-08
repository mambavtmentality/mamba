"use client";

import { motion } from "framer-motion";
import { AionLogo } from "@/components/AionLogo";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="section-padding relative overflow-hidden pt-14 md:pt-20">
      <div className="mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <AionLogo variant="full" priority className="mx-auto w-full max-w-[240px] md:max-w-[320px]" />
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Train Smarter. Recover Deeper.{" "}
            <span className="aion-gradient-text">Evolve Daily.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-aion-muted md:text-lg">
            Aion Performance & Recovery is a local boutique studio built around guided strength,
            recovery, oxygen conditioning, heat, cold, vibration, and disciplined wellness routines.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Button href="#founder-offer">Become a Founding Member</Button>
            <Button href="#equipment" variant="secondary">
              See the Recovery System
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-aion-purple/25 blur-3xl md:h-64 md:w-64" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-aion-yellow/10 blur-3xl" />
    </section>
  );
}
