"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname?.startsWith('/blog/');

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

  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth > 960) {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
      setServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 960) {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 150);
    }
  };

  const closeAllNav = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header id="siteHeader" ref={headerRef} className={isLightPage ? 'scrolled' : ''}>
      <nav className="nav">
        <a href="/#home" className="logo" onClick={closeAllNav}>
          <img className="mark mark-white" src="/assets/nelly_mark_white.png" alt="" />
          <img className="mark mark-color" src="/assets/nelly_mark.png" alt="Nelly Santiesteban logo" />
          <span className="wordmark"><span className="lw-name">Nelly Santiesteban</span><span className="lw-title">Mortgage Loan Officer</span></span>
        </a>
        <div className={`navlinks ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/#home" onClick={closeAllNav}>Home</Link>
          <Link href="/#about" onClick={closeAllNav}>About</Link>
          <Link href="/#help" onClick={closeAllNav}>Who I Help</Link>
          <Link href="/#process" onClick={closeAllNav}>How It Works</Link>
          <Link href="/#loans" onClick={closeAllNav}>Loan Options</Link>
          
          {/* Services Dropdown */}
          <div 
            className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.preventDefault();
                setServicesOpen((prev) => !prev);
              }}
            >
              <span>Services</span>
              <svg className={`chevron-icon ${servicesOpen ? 'rotated' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              <Link href="/fha-loans-miami" onClick={closeAllNav}>FHA loans</Link>
              <Link href="/home-loans-miami" onClick={closeAllNav}>Home loans</Link>
              <Link href="/mortgage-loan-officer-miami" onClick={closeAllNav}>Mortgage Loan</Link>
            </div>
          </div>

          <Link href="/#reviews" onClick={closeAllNav}>Reviews</Link>
          <Link href="/blog" onClick={closeAllNav}>Blog</Link>
          <Link href="/contact" onClick={closeAllNav}>Contact</Link>
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
