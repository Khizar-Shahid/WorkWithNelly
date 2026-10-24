import type { Metadata } from "next";
import { homeLoansJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Home Loans Miami | Low Rates & Fast Pre-Approval | Nelly Santiesteban",
  description: "Explore the best Home Loans in Miami with loan officer Nelly Santiesteban. Compare conventional, FHA, VA, and investor loans with competitive rates.",
  keywords: [
    "Home Loans Miami",
    "Miami home loans",
    "Home financing Miami",
    "Buy a home in Miami",
    "Nelly Santiesteban"
  ],
  alternates: {
    canonical: "https://workwithnelly.com/home-loans-miami",
  },
};

export default function HomeLoansMiami() {
  const faqList = [
    {
      q: "What home loan options are available in Miami?",
      a: "Eligible borrowers may be able to explore conventional, FHA, VA, jumbo, and other mortgage programs depending on their circumstances and lender requirements."
    },
    {
      q: "Can first-time home buyers get a home loan in Miami?",
      a: "Yes. Eligible first-time buyers may qualify for different mortgage programs. Qualification depends on factors such as income, credit profile, down payment, and program requirements."
    },
    {
      q: "How can I get started with a home loan?",
      a: "Contact Nelly Santiesteban to discuss your homeownership goals, review potential mortgage options, and understand the pre-approval process."
    },
    {
      q: "Do I need mortgage pre-approval before buying a home?",
      a: "Pre-approval can help you understand your estimated borrowing capacity before making an offer. Final approval depends on the lender's review of your application and property."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLoansJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="Home loans in Miami" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Mortgage Guidance</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            Home Loans in Miami, Florida
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Looking for home loans in Miami, Florida? Nelly Santiesteban helps homebuyers explore mortgage options based on their financial goals and homeownership needs. Whether you&apos;re buying your first home or looking for financing for your next property, get guidance to understand your options and take the next step toward homeownership.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
            <a className="btn btn-ghost-light" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Online</a>
          </div>
        </div>
      </section>

      {/* FIND THE RIGHT LOAN SECTION */}
      <section className="service-content" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '18px', color: 'var(--navy-950)' }}>
            Find the Right Home Loan for Your Needs
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '14px' }}>
            Every homebuyer has different financial needs. Choosing the right mortgage starts with understanding your budget, available down payment, and eligibility.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '32px' }}>
            Explore home mortgage loans in Miami and get guidance on available financing options that may fit your situation.
          </p>

          <div style={{ display: 'grid', gap: '18px', marginTop: '28px' }}>
            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>First-Time Home Buyers</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Understand mortgage options available for eligible first-time buyers.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Conventional Loans</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Explore financing options based on your financial profile.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>FHA Loans</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Learn about FHA-insured mortgages and their eligibility requirements.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>VA Loans</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Explore VA-backed financing if you meet the eligibility requirements.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Jumbo Loans</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Consider financing options for properties requiring larger loan amounts.</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', opacity: 0.85, fontStyle: 'italic', marginTop: '28px' }}>
            Loan availability, terms, and qualification requirements vary.
          </p>
        </div>
      </section>

      {/* YOUR MIAMI MORTGAGE LOAN OFFICER */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--navy-950)' }}>
            Your Miami Mortgage Loan Officer
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            Choosing a mortgage can feel overwhelming, especially when you&apos;re comparing different loan programs. Nelly Santiesteban helps homebuyers understand the mortgage process, explore available options, and prepare for the next steps.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Whether you&apos;re purchasing your first property or planning your next home purchase, get personalized guidance based on your homeownership goals.
          </p>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '32px', color: 'var(--navy-950)' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {faqList.map((faq, index) => (
              <div key={index} className="reveal-up" style={{ padding: '26px 30px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--navy-950)', marginBottom: '10px', fontWeight: 700 }}>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0, fontSize: '16px' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>
            Get Started With Home Loans in Miami
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '16px' }}>
            Ready to explore your mortgage options? Connect with Nelly Santiesteban to discuss your home purchase, understand the available financing options, and learn how to prepare for mortgage pre-approval.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--gold)', fontWeight: 600, marginBottom: '32px' }}>
            Take the next step toward your new home in Miami, Florida.
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Nelly Today
          </a>
        </div>
      </section>
    </>
  );
}
