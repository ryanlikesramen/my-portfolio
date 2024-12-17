// this is the main file that will be used to wrap all the pages in the app

import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import localFont from "next/font/local"; // localFont package comes from next.js plugin

const league = localFont({
  src: "./fonts/league.woff2",
  variable: "--font-league",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ryan Soriano",
  description: "hi, I'm Ryan!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${league.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
