import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://forge-os-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Forge OS — Documenting the autonomous build.",
  description:
    "The media layer of Forge. YouTube, the Skool community, and the Dad Strength App. Building a $1M/year autonomous business in public.",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Forge OS",
    title: "Forge OS — Documenting the autonomous build.",
    description:
      "The media layer of Forge. YouTube, the Skool community, and the Dad Strength App. Building a $1M/year autonomous business in public.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge OS — Documenting the autonomous build.",
    description:
      "The media layer of Forge. YouTube, the Skool community, and the Dad Strength App. Building a $1M/year autonomous business in public.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#F8F8F6] text-zinc-900">
        {children}
      </body>
    </html>
  );
}
