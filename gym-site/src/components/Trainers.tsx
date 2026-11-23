"use client";

import { Instagram } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

export function Trainers() {
  return (
    <section id="trainers" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 font-display text-xs tracking-wideish text-lime">
            TRAINERS
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighterest text-white">
            COACHED BY THE{" "}
            <span className="text-lime">BEST.</span>
          </h2>
          <p className="mt-4 text-white/60">
            Elite coaches who live the grind and demand your best.
          </p>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gymConfig.trainers.map((trainer) => (
            <StaggerItem key={trainer.name}>
              <article className="group overflow-hidden border border-white/10 bg-[#0c0c0c]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  <a
                    href={trainer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-ink/60 text-white backdrop-blur-sm transition-colors hover:border-lime hover:text-lime"
                    aria-label={`${trainer.name} on Instagram`}
                  >
                    <Instagram size={18} />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wideish text-white">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-sm text-lime">{trainer.speciality}</p>
                  <p className="mt-2 font-display text-xs tracking-wideish text-white/60">
                    {trainer.experience} Experience
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
