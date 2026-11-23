"use client";

import { Facebook, Instagram } from "lucide-react";
import { gymConfig } from "@/config/gym";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-white/10 bg-ink py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <a
            href="#home"
            className="font-display text-2xl tracking-wideish text-white"
          >
            IRON<span className="text-lime"> CULT</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Premium training. Relentless standards. Built different.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {gymConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center font-display text-xs tracking-wideish text-white/70 transition-colors hover:text-lime"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href={gymConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
          >
            <Instagram size={18} />
          </a>
          <a
            href={gymConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6">
        <p className="font-display text-xs tracking-wideish text-white/50">
          © {year} {gymConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
