import type { Metadata } from "next";
import { Geist, Caveat } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seven Agency — We design brands that move people",
  description:
    "We combine strategy, design, and technology to help ambitious brands stand out & create meaningful digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${caveat.variable} antialiased`}>{children}</body>
    </html>
  );
}
