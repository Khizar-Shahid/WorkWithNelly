import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MusicPlayer from '@/components/MusicPlayer';
import GlobalScripts from '@/components/GlobalScripts';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalScripts />
      <SiteHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <SiteFooter />
      <MusicPlayer />
    </>
  );
}
