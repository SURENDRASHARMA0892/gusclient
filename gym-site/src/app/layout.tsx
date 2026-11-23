import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { gymConfig } from "@/config/gym";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${gymConfig.name} | Premium Gym & Fitness`,
  description:
    "Push your limits. Build strength. Become unstoppable. IRON CULT FITNESS — premium athletic training, elite coaches, and a community built different.",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "strength training",
    "Iron Cult Fitness",
    "HIIT",
    "membership",
  ],
  openGraph: {
    title: `${gymConfig.name} | Built Different.`,
    description: gymConfig.subtitle,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: gymConfig.name,
    description: gymConfig.subtitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  );
}
