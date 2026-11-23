"use client";

import { Star } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-[#0c0c0c] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 font-display text-xs tracking-wideish text-lime">
            TESTIMONIALS
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighterest text-white">
            REAL PEOPLE.{" "}
            <span className="text-lime">REAL RESULTS.</span>
          </h2>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {gymConfig.testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <blockquote className="flex h-full flex-col border border-white/10 bg-ink p-7">
                <div className="mb-4 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-lime text-lime"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-white/70">
                  &ldquo;{item.text}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/10 pt-4 font-display text-sm tracking-wideish text-white">
                  {item.name}
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
