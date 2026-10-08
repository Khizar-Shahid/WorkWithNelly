import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FHA Loans Miami | Affordable Home Loan Options",
  description: "Explore VA home loans in Miami with flexible financing options for eligible veterans, active-duty service members and qualifying borrowers.",
};

export default function FHALoansMiami() {
  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="FHA and VA loans Miami" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Accessible Homeownership</span>
          <h1 className="serif kinetic" data-kinetic-mode="load">FHA Loans Miami: Affordable Financing Solutions</h1>
          <p className="sub">Whether you are exploring FHA loans with low down payment options or VA home loans for eligible veterans, I can help you secure the right financing to buy your Miami home.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
            <a className="btn btn-ghost-light" href="/#contact">Let's Talk</a>
          </div>
        </div>
      </section>

      <section className="service-content" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--navy-950)' }}>Unlock the Door with FHA &amp; VA Loans</h2>
          <p style={{ fontSize: '18px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '24px' }}>
            Government-backed loans are an excellent path to homeownership for many buyers. <strong>FHA loans in Miami</strong> offer flexibility with credit scores and down payments, while <strong>VA home loans</strong> provide incredible benefits for those who have served our country.
          </p>
          
          <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
            <div className="reveal-up" style={{ padding: '32px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', marginBottom: '12px' }}>Benefits of FHA Loans</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>With down payments as low as 3.5% and more forgiving credit requirements, FHA loans are a popular choice for first-time homebuyers looking to enter the Miami real estate market.</p>
            </div>
            <div className="reveal-up" style={{ padding: '32px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', marginBottom: '12px' }}>Explore VA Home Loans</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>For eligible veterans, active-duty service members, and qualifying spouses, VA loans offer the incredible benefit of 0% down payment and no private mortgage insurance (PMI).</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up">
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>Let's talk about your loan options.</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Find out if you qualify for an FHA or VA loan and get one step closer to your new home.</p>
          <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Get Pre-Approved</a>
        </div>
      </section>
    </>
  );
}
