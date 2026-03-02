import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll    from "@/components/SmoothScroll";
import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import Cursor          from "@/components/ui/Cursor";
import ScrollProgress  from "@/components/ui/ScrollProgress";
import { brand }       from "@/content/site";

const inter = Inter({
  subsets:  ["latin"],
  display:  "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:  brand.name,
    template: `%s · ${brand.name}`,
  },
  description: brand.oneLiner,
  robots:      { index: true, follow: true },
  openGraph: {
    title:       brand.name,
    description: brand.oneLiner,
    type:        "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-black font-sans text-white antialiased">

        {/* Fixed overlays — rendered outside scroll context */}
        <ScrollProgress />
        <Cursor />

        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>

      </body>
    </html>
  );
}
