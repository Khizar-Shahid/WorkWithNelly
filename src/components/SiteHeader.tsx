"use client";
import { useEffect, useRef } from 'react';

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const navlinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 40) headerRef.current.classList.add('scrolled');
      else headerRef.current.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleNav = () => {
    if (!navlinksRef.current) return;
    const open = navlinksRef.current.style.display === 'flex';
    navlinksRef.current.style.display = open ? 'none' : 'flex';
    navlinksRef.current.style.cssText += open ? '' : 'position:absolute;top:100%;left:0;right:0;background:#F7F3EB;flex-direction:column;padding:20px 32px;gap:18px;border-bottom:1px solid rgba(19,29,56,0.08);';
    navlinksRef.current.querySelectorAll('a').forEach(a => (a as HTMLElement).style.color = '#1E2F5A');
  };

  return (
    <header id="siteHeader" ref={headerRef}>
      <nav className="nav">
        <a href="/#home" className="logo">
          <img className="mark mark-white" src="/assets/nelly_mark_white.png" alt="" />
          <img className="mark mark-color" src="/assets/nelly_mark.png" alt="Nelly Santiesteban logo" />
          <span className="wordmark"><span className="lw-name">Nelly Santiesteban</span><span className="lw-title">Mortgage Loan Officer</span></span>
        </a>
        <div className="navlinks" ref={navlinksRef}>
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#help">Who I Help</a>
          <a href="/#process">How It Works</a>
          <a href="/#loans">Loan Options</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="nav-cta">
          <a className="nav-phone" href="tel:+17862865906">786.286.5906</a>
          <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
        </div>
        <button className="navtoggle" aria-label="Menu" onClick={toggleNav}><span></span><span></span><span></span></button>
      </nav>
    </header>
  );
}
