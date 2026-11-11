"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname?.startsWith('/blog/');

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loansTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeAllNav = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (loansTimeoutRef.current) clearTimeout(loansTimeoutRef.current);
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setLoansOpen(false);
  };

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

  // Handle escape key to close open menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllNav();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Desktop hover handlers for About dropdown
  const handleMouseEnterAbout = () => {
    if (window.innerWidth > 980) {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      setAboutOpen(true);
    }
  };

  const handleMouseLeaveAbout = () => {
    if (window.innerWidth > 980) {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = setTimeout(() => {
        setAboutOpen(false);
      }, 150);
    }
  };

  // Desktop hover handlers for Loans dropdown
  const handleMouseEnterLoans = () => {
    if (window.innerWidth > 980) {
      if (loansTimeoutRef.current) clearTimeout(loansTimeoutRef.current);
      setLoansOpen(true);
    }
  };

  const handleMouseLeaveLoans = () => {
    if (window.innerWidth > 980) {
      if (loansTimeoutRef.current) clearTimeout(loansTimeoutRef.current);
      loansTimeoutRef.current = setTimeout(() => {
        setLoansOpen(false);
      }, 150);
    }
  };

  return (
    <header id="siteHeader" ref={headerRef} className={isLightPage ? 'scrolled' : ''}>
      <nav className="nav">
        <Link href="/#home" className="logo" onClick={closeAllNav}>
          <img className="mark mark-white" src="/assets/nelly_mark_white.png" alt="" />
          <img className="mark mark-color" src="/assets/nelly_mark.png" alt="Nelly Santiesteban logo" />
          <span className="wordmark">
            <span className="lw-name">Nelly Santiesteban</span>
            <span className="lw-title">Mortgage Loan Officer</span>
          </span>
        </Link>

        <div className={`navlinks ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/#home" onClick={closeAllNav}>Home</Link>

          {/* About Grouped Dropdown */}
          <div 
            className={`nav-dropdown ${aboutOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.preventDefault();
                setAboutOpen((prev) => !prev);
              }}
            >
              <span>About</span>
              <svg className={`chevron-icon ${aboutOpen ? 'rotated' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              <Link href="/#about" onClick={closeAllNav}>About Nelly</Link>
              <Link href="/#help" onClick={closeAllNav}>Who I Help</Link>
              <Link href="/#process" onClick={closeAllNav}>How It Works</Link>
              <Link href="/#reviews" onClick={closeAllNav}>Reviews</Link>
            </div>
          </div>

          {/* Loan Programs Grouped Dropdown */}
          <div 
            className={`nav-dropdown ${loansOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnterLoans}
            onMouseLeave={handleMouseLeaveLoans}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={loansOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.preventDefault();
                setLoansOpen((prev) => !prev);
              }}
            >
              <span>Loan Programs</span>
              <svg className={`chevron-icon ${loansOpen ? 'rotated' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              <Link href="/#loans" onClick={closeAllNav}>All Loan Options</Link>
              <Link href="/fha-loans-miami" onClick={closeAllNav}>FHA loans</Link>
              <Link href="/home-loans-miami" onClick={closeAllNav}>Home loans</Link>
              <Link href="/dscr-loans-miami" onClick={closeAllNav}>DSCR loans</Link>
              <Link href="/itin-home-loans-miami" onClick={closeAllNav}>ITIN loans</Link>
              <Link href="/mortgage-loan-officer-miami" onClick={closeAllNav}>Mortgage Loan</Link>
            </div>
          </div>

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
