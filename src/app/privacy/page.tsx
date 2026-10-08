import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nelly Santiesteban",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Privacy() {
  return (
    <>
      <section style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--navy-950)', color: 'white', textAlign: 'center', paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="wrap">
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ fontSize: 'clamp(36px, 5vw, 48px)', marginBottom: '16px', color: 'white' }}>Privacy Policy</h1>
          <p style={{ opacity: 0.8, fontSize: '16px', fontFamily: "'Inter', sans-serif" }}>Last updated September 2026</p>
        </div>
      </section>

      <section className="legal-content" style={{ padding: '80px 24px', backgroundColor: 'var(--white)' }}>
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          <style>{`
             .legal-content h2 { font-size: 24px; color: var(--navy-900); margin-top: 48px; margin-bottom: 16px; font-family: 'Sora', sans-serif; letter-spacing: -0.01em; }
             .legal-content p { margin-bottom: 24px; }
             .legal-content ul { padding-left: 24px; margin-bottom: 24px; }
             .legal-content li { margin-bottom: 12px; }
             .legal-content a { color: var(--gold-dark); text-decoration: underline; font-weight: 500; transition: color 0.2s ease; }
             .legal-content a:hover { color: var(--gold); }
             .legal-block { margin-top: 64px; padding-top: 32px; border-top: 1px solid var(--line); font-size: 13px; color: var(--ink-soft); line-height: 1.7; }
          `}</style>
          
          <p>This Privacy Policy explains how information is collected and used on this website, operated by Nelly Santiesteban, Mortgage Loan Officer (NMLS #1808120), affiliated with ACE Florida Mortgage (Company NMLS #2384013).</p>

          <h2>Information We Collect</h2>
          <p>When you use the contact form or payment estimator on this site, you may provide your name, phone number, email address, and any message you choose to include. This site does not use a backend database — form submissions are sent directly to Nelly's email inbox.</p>

          <h2>How Information Is Used</h2>
          <ul>
            <li>To respond to your inquiry about mortgage financing options.</li>
            <li>To follow up regarding an application you have started through our lending partner's application portal.</li>
            <li>We do not sell your personal information to third parties.</li>
          </ul>

          <h2>Mortgage Application</h2>
          <p>The "Apply Now" links on this site direct you to a secure third-party application portal (my1003app.com). That portal has its own privacy policy governing the information you submit there.</p>

          <h2>Cookies &amp; Analytics</h2>
          <p>This site may use standard web analytics to understand general traffic patterns (such as which pages are visited). This data is aggregated and is not used to personally identify visitors.</p>

          <h2>Your Choices</h2>
          <p>You may contact us at any time at <a href="mailto:workwithnelly1@gmail.com">workwithnelly1@gmail.com</a> to ask what information we have about you or to request it be deleted from our records.</p>

          <h2>Contact</h2>
          <p>
            Nelly Santiesteban, Mortgage Loan Officer<br />
            NMLS #1808120<br />
            Phone: <a href="tel:+17862865906">786.286.5906</a><br />
            Email: <a href="mailto:workwithnelly1@gmail.com">workwithnelly1@gmail.com</a>
          </p>

          <div className="legal-block">
            Nelly C. Santiesteban, Mortgage Loan Officer, NMLS #1808120. ACE Florida Mortgage, Company NMLS #2384013. Equal Housing Opportunity. This site is for informational purposes only and is not a commitment to lend. Rates, terms, and loan programs are subject to change and individual qualification. Licensed in Florida.
          </div>
        </div>
      </section>
    </>
  );
}