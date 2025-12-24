import { Metadata } from "next";

import { DM_Sans } from "next/font/google";

import "../styles/globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-dark">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
