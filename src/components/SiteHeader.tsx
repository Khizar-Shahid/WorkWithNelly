"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname?.startsWith('/blog/');

  const closeAllNav = () => setMobileMenuOpen(false);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      if (isLightPage || window.scrollY > 40) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLightPage]);

  // Escape closes the mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAllNav();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Menu order requested by Nelly (11/13): flat links, no dropdowns
  const links = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About Nelly' },
    { href: '/#help', label: 'Who I Help' },
    { href: '/#loans', label: 'Loan Programs' },
    { href: '/#process', label: 'How It Works' },
    { href: '/#reviews', label: 'Reviews' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header id="siteHeader" ref={headerRef} className={isLightPage ? 'scrolled' : ''}>
      <nav className="nav">
        <Link href="/#home" className="logo" onClick={closeAllNav}>
          <Image className="mark mark-white" src="/assets/nelly_mark_white.png" alt="" width={38} height={31} priority />
          <Image className="mark mark-color" src="/assets/nelly_mark.png" alt="Nelly Santiesteban logo" width={38} height={31} priority />
          <span className="wordmark">
            <span className="lw-name">Nelly Santiesteban</span>
            <span className="lw-title">Mortgage Loan Officer</span>
          </span>
        </Link>

        <div className={`navlinks ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={closeAllNav}>{l.label}</Link>
          ))}
        </div>

        <div className="nav-cta">
          <a className="nav-phone" href="tel:7862865906">(786) 286-5906</a>
          <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <button
          className="navtoggle"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
