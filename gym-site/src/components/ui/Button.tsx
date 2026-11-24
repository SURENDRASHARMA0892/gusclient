"use client";

import { motion } from "framer-motion";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-lime-soft hover:text-ink shadow-none hover:shadow-lime-glow",
  outline:
    "border border-line-strong text-fog hover:border-lime hover:text-lime bg-transparent",
  ghost: "text-fog hover:text-lime bg-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-sm tracking-wideish uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
