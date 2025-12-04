import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aaron Beschorner | Portfolio & Blog",
  description:
    "Data analytics, data science, and creative engineering projects by Aaron Beschorner, plus writing on tech, fashion, and life.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-zinc-900/80">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
              <Nav />
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
              {children}
            </div>
          </main>

          <footer className="border-t border-zinc-900/80">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

