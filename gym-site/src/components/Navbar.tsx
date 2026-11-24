"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gymConfig } from "@/config/gym";
import { Button } from "./ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad flex h-16 items-center justify-between lg:h-20">
        <a
          href="#home"
          className="font-display text-xl tracking-wideish text-white sm:text-2xl"
          onClick={close}
        >
          {gymConfig.brand.primary}
          <span className="text-lime">{gymConfig.brand.accent}</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {gymConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-display text-xs tracking-wideish text-white/70 transition-colors hover:text-lime"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#membership" className="!px-5 !py-2.5 text-xs">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-16 border-t border-white/10 bg-ink lg:hidden"
          >
            <ul className="section-pad flex flex-col gap-1 py-6">
              {gymConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={close}
                    className="block py-3.5 font-display text-lg tracking-wideish text-white hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#membership" onClick={close} className="w-full">
                  Join Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
