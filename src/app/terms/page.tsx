import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Nelly Santiesteban",
  alternates: {
    canonical: "/terms",
  },
};

export default function Terms() {
  return (
    <>
      <section style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--navy-950)', color: 'white', textAlign: 'center', paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="wrap">
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ fontSize: 'clamp(36px, 5vw, 48px)', marginBottom: '16px', color: 'white' }}>Terms of Use</h1>
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
          
          <p>By using this website, operated by Nelly Santiesteban, Mortgage Loan Officer (NMLS #1808120), affiliated with ACE Florida Mortgage (Company NMLS #2384013), you agree to the following terms.</p>

          <h2>Informational Purposes Only</h2>
          <p>The content on this site, including the payment estimator, loan program descriptions, and process overview, is provided for general informational purposes only. It is not a loan quote, pre-approval, or commitment to lend, and does not constitute financial, legal, or tax advice.</p>

          <h2>Payment Estimator</h2>
          <p>The payment estimator calculates an approximate principal-and-interest payment only. It does not include property taxes, homeowners insurance, mortgage insurance, HOA fees, or other applicable costs, and actual payments, rates, and terms will vary based on individual qualification.</p>

          <h2>Third-Party Links</h2>
          <p>This site links to third-party services, including a secure loan application portal (my1003app.com) and social media platforms. We are not responsible for the content, accuracy, or privacy practices of those third-party sites.</p>

          <h2>Licensing</h2>
          <p>Nelly Santiesteban is a licensed Mortgage Loan Officer in the state of Florida, NMLS #1808120, operating through ACE Florida Mortgage, Company NMLS #2384013. Equal Housing Opportunity.</p>

          <h2>Changes to These Terms</h2>
          <p>These terms may be updated from time to time. Continued use of this site after changes are posted constitutes acceptance of the updated terms.</p>

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