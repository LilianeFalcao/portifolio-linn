import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  DM_Serif_Display,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Linn de Oliveira Falcão",
  description: "Portfólio Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${dmSerif.variable}
          ${cormorant.variable}
          
          min-h-screen
          bg-black
          text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}