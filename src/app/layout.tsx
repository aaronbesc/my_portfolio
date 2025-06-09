// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope, Bellefair } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Aaron Beschorner",
  description: "Full-Stack Engineer | Open-Source Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${manrope.variable} ${bellefair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
