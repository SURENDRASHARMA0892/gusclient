"use client";

import { gymConfig } from "@/config/gym";
import { Reveal } from "./ui/Reveal";

export function Transform() {
  const { transform } = gymConfig;

  return (
    <section id="transform" className="section-pad relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 font-display text-xs tracking-wideish text-lime">
            TRANSFORMATIONS
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tighterest text-fog">
            {transform.heading.split("IS YOU.")[0]}
            <span className="text-lime">IS YOU.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-fog-muted">{transform.copy}</p>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <figure className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={transform.beforeImage}
              alt="Training journey — before placeholder"
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
            />
            <figcaption className="absolute left-0 top-0 bg-ink/80 px-4 py-2 font-display text-xs tracking-wideish text-fog backdrop-blur-sm">
              BEFORE
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={transform.afterImage}
              alt="Training journey — after placeholder"
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
            />
            <figcaption className="absolute left-0 top-0 bg-lime px-4 py-2 font-display text-xs tracking-wideish text-ink">
              AFTER
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
