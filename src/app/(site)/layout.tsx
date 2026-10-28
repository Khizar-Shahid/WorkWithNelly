import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MusicPlayer from '@/components/MusicPlayer';
import GlobalScripts from '@/components/GlobalScripts';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workwithnelly.com"),
  title: "Mortgage Loans Miami | Nelly Santiesteban",
  description: "Looking for mortgage loans in Miami? Nelly Santiesteban offers mortgage financing solutions to help Florida homebuyers find the right loan for their home.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "xVqP_jxmaqmZ-jng2pq1FNcJt7pzwnSB04yBAzkgg-Y"
  },
  icons: {
    icon: "/assets/nelly_mark.png"
  }
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
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
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_3340882233e04bbda51c95468e50c67a"
        >
        </script>
      </body>
      <GoogleAnalytics gaId="G-XDDS4T5GZM" />
      {/* second GA4 property (A+ Active) feeding the lead tracker dashboard */}
      <Script id="ga-aplus" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('config', 'G-SG6QB1MS09');`}
      </Script>
    </html>
  );
}
