"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-28 sm:items-center sm:pb-0 sm:pt-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gymConfig.heroImage})` }}
        role="img"
        aria-label="Athlete training at Iron Cult Fitness"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />

      <div className="section-pad relative z-10 w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 font-display text-xs tracking-wideish text-lime sm:text-sm"
        >
          {gymConfig.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-tighterest text-white"
        >
          BUILT DIFFERENT.
          <br />
          <span className="text-lime">TRAIN DIFFERENT.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="mt-6 max-w-lg text-base text-white/70 sm:text-lg"
        >
          {gymConfig.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#membership">Start Your Journey</Button>
          <Button href="#programs" variant="outline">
            Explore Programs
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-lime"
        aria-label="Scroll to content"
      >
        <span className="font-display text-[10px] tracking-wideish">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
