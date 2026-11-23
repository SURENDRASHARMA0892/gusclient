"use client";

import { ArrowUpRight } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

export function Programs() {
  return (
    <section id="programs" className="section-pad bg-[#0c0c0c] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 font-display text-xs tracking-wideish text-lime">
            PROGRAMS
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighterest text-white">
            TRAIN WITH{" "}
            <span className="text-lime">PURPOSE.</span>
          </h2>
          <p className="mt-4 text-white/60">
            Six focused paths. One standard — excellence under the bar.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gymConfig.programs.map((program) => (
            <StaggerItem key={program.id}>
              <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-ink transition-colors duration-300 hover:border-lime/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl tracking-wideish text-white">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {program.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex min-h-11 items-center gap-1 font-display text-xs tracking-wideish text-lime transition-all group-hover:gap-2"
                  >
                    Learn More
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
