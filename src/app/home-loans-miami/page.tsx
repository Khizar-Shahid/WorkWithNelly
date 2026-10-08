import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loans Miami | Find the Right Mortgage Loan",
  description: "Looking for home loans in Miami? Explore flexible mortgage options and find the right home loan to fit your needs and budget.",
};

export default function HomeLoansMiami() {
  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="Home loans in Miami" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Flexible Financing Options</span>
          <h1 className="serif kinetic" data-kinetic-mode="load">Home Loans Miami: Find the Right Mortgage for You</h1>
          <p className="sub">Discover flexible Miami home loans tailored to your budget. As an experienced home loan lender in Miami, I make the mortgage process clear and manageable.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
            <a className="btn btn-ghost-light" href="/#contact">Let's Talk</a>
          </div>
        </div>
      </section>

      <section className="service-content" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--navy-950)' }}>Your Path to a Home Mortgage in Miami</h2>
          <p style={{ fontSize: '18px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '24px' }}>
            Securing <strong>mortgage loans in Miami</strong> doesn't have to be overwhelming. From first-time homebuyers to real estate investors, I provide customized financing strategies that fit your financial profile perfectly.
          </p>
          
          <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
            <div className="reveal-up" style={{ padding: '32px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', marginBottom: '12px' }}>A Variety of Mortgage Programs</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>We offer conventional, FHA, VA, Jumbo, and alternative income programs to ensure you get the most competitive rates and terms available for <strong>Miami home loans</strong>.</p>
            </div>
            <div className="reveal-up" style={{ padding: '32px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', marginBottom: '12px' }}>Fast and Responsive Pre-Approvals</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>In a competitive real estate market, speed matters. Get a fast, accurate pre-approval so you can shop for your next home with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up">
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>Ready to find your perfect home loan?</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Take the first step toward homeownership with a trusted home loan lender in Miami.</p>
          <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Get Started Today</a>
        </div>
      </section>
    </>
  );
}
