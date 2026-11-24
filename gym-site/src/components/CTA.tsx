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
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />

      <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tighterest text-fog">
          READY TO CHANGE{" "}
          <span className="text-lime">YOUR LIFE?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-fog-soft/90">
          Stop waiting for Monday. Join the movement and train with people who
          refuse to quit.
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href="#membership" className="w-full sm:w-auto">
            Join The Movement
          </Button>
          <Button
            href={getWhatsAppUrl()}
            variant="outline"
            className="w-full gap-2 sm:w-auto"
          >
            <MessageCircle size={16} />
            WhatsApp Enquiry
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
