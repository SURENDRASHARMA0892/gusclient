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

function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: `${gymConfig.name} | Premium Gym & Fitness`,
  description: `Push your limits. Build strength. Become unstoppable. ${gymConfig.name} — premium athletic training, elite coaches, and a community built different.`,
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "strength training",
    gymConfig.name,
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
      <body className="bg-ink text-fog antialiased">{children}</body>
    </html>
  );
}
