import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/layout/MotionProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Icons come from the App Router file conventions in this folder — favicon.ico
// (16/32/48), icon.png (512) and apple-icon.png (180). No `icons` key here on
// purpose: an explicit one overrides those files, and the convention gives the
// PNGs a content hash, which is what actually evicts the old purple favicon
// from browsers that have been caching it.
export const metadata: Metadata = {
  title: "James Morales | Portfolio",
  description: "Technical Product Manager and Full Stack Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="bg-ink-bg text-ink font-sans antialiased">
        <MotionProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </MotionProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
