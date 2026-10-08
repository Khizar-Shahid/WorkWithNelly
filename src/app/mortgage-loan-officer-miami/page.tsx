import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami Mortgage Loan Officer | Nelly Santiesteban",
  description: "Looking for a Miami mortgage loan officer? Nelly Santiesteban helps Florida homebuyers explore mortgage options and financing solutions. Get started today.",
  alternates: {
    canonical: "https://workwithnelly.com/mortgage-loan-officer-miami",
  },
};

export default function MortgageLoanOfficerMiami() {
  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="Miami mortgage loan officer" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Expert Guidance</span>
          <h1 className="serif kinetic" data-kinetic-mode="load">Your Trusted Mortgage Loan Officer in Miami</h1>
          <p className="sub">Navigating Miami home financing can be complex. Working with an experienced mortgage lender in Miami ensures you find the best home loans tailored to your needs.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
            <a className="btn btn-ghost-light" href="/#contact">Let's Talk</a>
          </div>
        </div>
      </section>

      <section className="service-content" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--navy-950)' }}>Why Choose a Local Miami Mortgage Broker?</h2>
          <p style={{ fontSize: '18px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '24px' }}>
            As a dedicated <strong>mortgage loan officer in Miami, FL</strong>, I provide personalized home loan solutions to fit your unique financial goals. Whether you are a first-time homebuyer or looking to refinance, having a local expert makes a significant difference.
          </p>
          
          <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
            <div className="reveal-up" style={{ padding: '32px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', marginBottom: '12px' }}>Personalized Miami Home Financing</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>From conventional loans to specialized investor programs, I work with you to find the ideal <strong>home loans in Miami</strong> that align with your long-term goals.</p>
            </div>
            <div className="reveal-up" style={{ padding: '32px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', marginBottom: '12px' }}>Clear Communication Every Step</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>The mortgage process shouldn't be confusing. I guide my clients from pre-approval to the closing table with transparency and fast response times.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up">
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>Ready to explore your options?</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Contact your local mortgage lender in Miami today to get a personalized quote and discuss your homeownership goals.</p>
          <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Get Pre-Approved</a>
        </div>
      </section>
    </>
  );
}
