"use client";

import { Check } from "lucide-react";
import { formatPrice, gymConfig, getWhatsAppUrl } from "@/config/gym";
import { Button } from "./ui/Button";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

export function Membership() {
  return (
    <section id="membership" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 font-display text-xs tracking-wideish text-lime">
            MEMBERSHIP
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighterest text-white">
            INVEST IN{" "}
            <span className="text-lime">YOURSELF.</span>
          </h2>
          <p className="mt-4 text-white/60">
            Transparent pricing. No lock-in games. Cancel anytime.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 lg:grid-cols-3">
          {gymConfig.memberships.map((plan) => (
            <StaggerItem key={plan.id}>
              <article
                className={`relative flex h-full flex-col border p-7 sm:p-8 ${
                  plan.highlighted
                    ? "border-lime bg-lime/5"
                    : "border-white/10 bg-[#0c0c0c]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-7 bg-lime px-3 py-1 font-display text-[10px] tracking-wideish text-ink">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-display text-xl tracking-wideish text-white">
                  {plan.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl tracking-tighterest text-white">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-sm text-white/45">{plan.duration}</span>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-lime" : "text-white/40"
                        }`}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={getWhatsAppUrl(
                      `Hi! I'm interested in the ${plan.name} membership at ${gymConfig.name}.`
                    )}
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    Join Now
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
