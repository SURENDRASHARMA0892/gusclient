"use client";

import { gymConfig } from "@/config/gym";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

export function About() {
  const { about, aboutImage } = gymConfig;

  return (
    <section id="about" className="section-pad relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={aboutImage}
              alt="Iron Cult Fitness training floor"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 border border-lime/40 lg:block" />
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal>
            <p className="mb-4 font-display text-xs tracking-wideish text-lime">
              ABOUT US
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tighterest text-white">
              {about.heading.split("IT'S A MINDSET.")[0]}
              <span className="text-lime">IT&apos;S A MINDSET.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {about.philosophy}
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-8 sm:grid-cols-3">
            {about.pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="border-t border-lime/50 pt-4">
                  <h3 className="font-display text-lg tracking-wideish text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
