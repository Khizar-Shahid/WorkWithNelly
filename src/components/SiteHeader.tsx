"use client";
import { useEffect, useRef, useState } from 'react';

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
    <header id="siteHeader" ref={headerRef}>
      <nav className="nav">
        <a href="/#home" className="logo" onClick={closeAllNav}>
          <img className="mark mark-white" src="/assets/nelly_mark_white.png" alt="" />
          <img className="mark mark-color" src="/assets/nelly_mark.png" alt="Nelly Santiesteban logo" />
          <span className="wordmark"><span className="lw-name">Nelly Santiesteban</span><span className="lw-title">Mortgage Loan Officer</span></span>
        </a>
        <div className={`navlinks ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/#home" onClick={closeAllNav}>Home</a>
          <a href="/#about" onClick={closeAllNav}>About</a>
          <a href="/#help" onClick={closeAllNav}>Who I Help</a>
          <a href="/#process" onClick={closeAllNav}>How It Works</a>
          <a href="/#loans" onClick={closeAllNav}>Loan Options</a>
          
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
              <a href="/fha-loans-miami" onClick={closeAllNav}>FHA loans</a>
              <a href="/home-loans-miami" onClick={closeAllNav}>Home loans</a>
              <a href="/mortgage-loan-officer-miami" onClick={closeAllNav}>Mortgage Loan</a>
            </div>
          </div>

          <a href="/#reviews" onClick={closeAllNav}>Reviews</a>
          <a href="/#contact" onClick={closeAllNav}>Contact</a>
        </div>
        <div className="nav-cta">
          <a className="nav-phone" href="tel:7862865906">(786) 286-5906</a>
          <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
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
