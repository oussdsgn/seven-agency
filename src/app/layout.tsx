import type { Metadata } from "next";
import { Geist, Caveat } from "next/font/google";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import Nav from "@/components/Nav";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Seven Agency — We design brands that move people", template: "%s — Seven Agency" },
  description:
    "We combine strategy, design, and technology to help ambitious brands stand out & create meaningful digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${caveat.variable} antialiased`}>
        <MotionProvider>
          <Nav />
          <main className="overflow-x-clip">{children}</main>
          <Cta />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
