export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="logo">
                <img className="mark mark-white" src="/assets/nelly_mark_white.png" alt="Nelly Santiesteban logo" />
                <span className="wordmark"><span className="lw-name">Nelly Santiesteban</span><span className="lw-title">Mortgage Loan Officer</span></span>
              </div>
              <p style={{ maxWidth: '260px' }}>Miami based mortgage loan officer helping buyers across Florida get the financing to live where they have always pictured themselves.</p>
            </div>
            <div className="foot-col">
              <h4>Explore</h4>
              <a href="/#about">About</a>
              <a href="/#help">Who I Help</a>
              <a href="/#process">How It Works</a>
              <a href="/#loans">Loan Options</a>
              <a href="/#reviews">Reviews</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="foot-col">
              <h4>Get Started</h4>
              <a href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
              <a href="/#contact">Let's Talk</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="foot-card">
              <div className="cn">Nelly Santiesteban</div>
              <div className="ct">Mortgage Loan Officer &middot; NMLS #1808120</div>
              <a href="tel:+17862865906">786.286.5906</a>
              <a href="mailto:workwithnelly1@gmail.com">workwithnelly1@gmail.com</a>
              <div className="foot-social">
                <a href="https://www.instagram.com/workwithnelly/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
                <a href="https://www.facebook.com/workwithnelly/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z"/></svg></a>
                <a href="https://www.zillow.com/lender-profile/workwithnelly/" target="_blank" rel="noopener noreferrer" aria-label="Zillow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/></svg></a>
                <a href="https://www.linkedin.com/in/nelly-santiesteban-17613832/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"/></svg></a>
                <a href="https://www.google.com/search?q=Nelly+Santiesteban+Mortgage+Loan+Officer&amp;kgmid=%2Fg%2F11yr03xkym" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile"><span className="g-mark">G</span></a>
              </div>
              <div className="fc-note">ACE Florida Mortgage &middot; NMLS #2384013</div>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="eho">
              <img src="/assets/eho_logo_white.png" alt="Equal Housing Opportunity" width="30" height="32" />
              <span>Equal Housing Opportunity</span>
            </div>
            <div className="foot-legal">
              Nelly Santiesteban, Mortgage Loan Officer, NMLS #1808120. ACE Florida Mortgage, Company NMLS #2384013. Equal Housing Opportunity. This site is for informational purposes only and is not a commitment to lend. Rates, terms, and loan programs are subject to change and individual qualification. Licensed in Florida. <a href="/privacy" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}>Privacy Policy</a> &middot; <a href="/terms" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}>Terms</a>
            </div>
            <div className="foot-copy">&copy; {new Date().getFullYear()} WorkWithNelly</div>
          </div>
        </div>
      </footer>
      <div className="mobile-bar">
        <div className="mb-row">
          <a className="mb-call" href="tel:+17862865906"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Call</a>
          <a className="mb-apply" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    </>
  );
}
