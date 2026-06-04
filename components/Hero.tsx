"use client";

import { motion } from "framer-motion";
import { LogoEmblem } from "@/components/LogoEmblem";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="section-padding relative overflow-hidden pt-14 md:pt-20">
      <div className="mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <LogoEmblem priority className="mx-auto w-full max-w-[300px] md:max-w-[420px] lg:max-w-[520px]" />
          <p className="text-xs uppercase tracking-[0.35em] text-mamba-gold-soft/80 md:text-sm">
            A Division of Mamba VT Mentality LLC
          </p>
          <h1 className="font-display text-4xl leading-tight text-mamba-cream md:text-6xl lg:text-7xl">
            Mamba VT Recovery & Performance Center
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            A technology-driven wellness facility combining adaptive strength training, oxygen
            conditioning, infrared sauna, cold plunge, and recovery systems in one complete visit.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Button href="#services">Explore the Experience</Button>
            <Button href="#contact" variant="secondary">
              Request Information
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-6 h-36 w-36 -translate-x-1/2 rounded-full bg-mamba-purple/35 blur-3xl md:h-52 md:w-52" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-mamba-gold/50 to-transparent" />
    </section>
  );
}
