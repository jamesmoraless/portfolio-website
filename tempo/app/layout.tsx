import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
