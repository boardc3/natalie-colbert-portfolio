import type { Metadata } from "next";
import "./globals.css";
import FontCycler from "@/components/FontCycler";

export const metadata: Metadata = {
  title: "Natalie Colbert - Creative Strategist",
  description: "Creative strategist and marketing professional portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <FontCycler />
      </body>
    </html>
  );
}
