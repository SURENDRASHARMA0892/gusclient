import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Premium athletic chocolate — warm dark, not pitch black */
        ink: {
          DEFAULT: "#171210",
          soft: "#221A15",
          muted: "#2F261F",
          deep: "#120E0C",
        },
        /* Warm off-whites for strong readable type on cocoa */
        fog: {
          DEFAULT: "#F7F3EC",
          soft: "#E4DCD0",
          muted: "#B8AFA3",
          dim: "#8F867C",
        },
        /* Warm hairlines */
        line: {
          DEFAULT: "rgba(247, 243, 236, 0.12)",
          strong: "rgba(247, 243, 236, 0.22)",
        },
        /* Electric gym accent */
        lime: {
          DEFAULT: "#C6FF00",
          soft: "#D4FF3D",
          dim: "#9ECC00",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tighterest: "-0.04em",
        wideish: "0.18em",
      },
      boxShadow: {
        "lime-glow": "0 0 28px rgba(198, 255, 0, 0.32)",
        "lime-glow-sm": "0 0 16px rgba(198, 255, 0, 0.22)",
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} satisfies Config;
