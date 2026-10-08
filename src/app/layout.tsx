import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
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
  title: "Mortgage Loans Miami | Nelly Santiesteban",
  description: "Looking for mortgage loans in Miami? Nelly Santiesteban offers mortgage financing solutions to help Florida homebuyers find the right loan for their home.",
  verification: {
    google: "xVqP_jxmaqmZ-jng2pq1FNcJt7pzwnSB04yBAzkgg-Y"
  },
  icons: {
    icon: "/assets/nelly_mark.png"
  }
};

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MusicPlayer from '@/components/MusicPlayer';
import GlobalScripts from '@/components/GlobalScripts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalScripts />
        <SiteHeader />
        <main style={{ flex: 1 }}>{children}</main>
        <SiteFooter />
        <MusicPlayer />
      </body>
      <GoogleAnalytics gaId="G-XDDS4T5GZM" />
    </html>
  );
}
