import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natalie Colbert | Brand Marketing Strategist",
  description:
    "Brand Marketing executive with 14+ years of agency-side experience. Head of Strategy at Rosewood Creative, building world-class brands through culturally sharp insights.",
  metadataBase: new URL("https://nataliecolbert.com"),
  openGraph: {
    title: "Natalie Colbert | Brand Marketing Strategist",
    description:
      "Brand Marketing executive with 14+ years of agency-side experience. Head of Strategy at Rosewood Creative, building world-class brands through culturally sharp insights.",
    type: "website",
    url: "https://nataliecolbert.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natalie Colbert | Brand Marketing Strategist",
    description:
      "Brand Marketing executive with 14+ years of agency-side experience. Head of Strategy at Rosewood Creative, building world-class brands through culturally sharp insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
