import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricky Hidayat | AI-Assisted Developer & Creative",
  description:
    "Portfolio of Ricky Hidayat — AI-Assisted Developer, Security Officer, Videographer & Photographer. Available for B2B projects and creative collaborations.",
  openGraph: {
    title: "Ricky Hidayat | AI-Assisted Developer & Creative",
    description: "B2B Portfolio — Development, Security, Creative Media.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#08080e" />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased min-h-screen bg-[#08080e] text-gray-200 scanlines`}
      >
        {children}
      </body>
    </html>
  );
}
