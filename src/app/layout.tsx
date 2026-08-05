import type { Metadata } from "next";
import { VT323, Nunito } from "next/font/google";
import "./globals.css";

const display = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ritika — Playable Portfolio",
  description: "A cozy, walkable portfolio. Use arrow keys or WASD to explore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} no-select`}>
        {children}
      </body>
    </html>
  );
}
