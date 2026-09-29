import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/layout/MotionProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "James Morales | Portfolio",
  description: "Technical Product Manager and Full Stack Engineer",
  icons: {
    icon: "/favicon.ico",
  },
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
