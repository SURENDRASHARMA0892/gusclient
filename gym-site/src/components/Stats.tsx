"use client";

import { gymConfig } from "@/config/gym";
import { Stagger, StaggerItem } from "./ui/Reveal";

export function Stats() {
  return (
    <section
      id="stats"
      className="section-pad border-y border-white/10 bg-ink py-16 sm:py-20"
    >
      <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
        {gymConfig.stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <p className="font-display text-4xl tracking-tighterest text-lime sm:text-5xl lg:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 font-display text-xs tracking-wideish text-white/60">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
