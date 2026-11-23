"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/gym";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="section-pad relative overflow-hidden py-28 sm:py-36"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />

      <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tighterest text-white">
          READY TO CHANGE{" "}
          <span className="text-lime">YOUR LIFE?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-white/65">
          Stop waiting for Monday. Join the movement and train with people who
          refuse to quit.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#membership">Join The Movement</Button>
          <Button
            href={getWhatsAppUrl()}
            variant="outline"
            className="gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp Enquiry
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
