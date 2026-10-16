import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FHA Loans Miami | Low Down Payment Home Loans | Nelly Santiesteban",
  description: "Get approved for FHA Loans in Miami with low down payments and flexible credit guidelines. Contact Nelly Santiesteban for expert FHA mortgage assistance.",
  keywords: [
    "FHA Loans Miami",
    "Miami FHA loans",
    "FHA mortgage Miami FL",
    "First time home buyer Miami FHA",
    "Nelly Santiesteban"
  ],
  alternates: {
    canonical: "https://workwithnelly.com/fha-loans-miami",
  },
};

export default function FHALoansMiami() {
  const faqList = [
    {
      q: "What is an FHA loan?",
      a: "An FHA loan is a mortgage insured by the Federal Housing Administration that is offered through participating lenders. It may provide financing options for eligible homebuyers who meet the applicable requirements."
    },
    {
      q: "How much down payment is required for an FHA loan?",
      a: "Eligible borrowers may qualify for a down payment as low as 3.5%, depending on their credit score and other FHA requirements. Additional costs and eligibility conditions apply."
    },
    {
      q: "Can first-time homebuyers apply for FHA loans in Miami?",
      a: "Yes. Eligible first-time homebuyers can apply for FHA loans. Approval depends on factors such as credit, income, debts, property eligibility, and lender requirements."
    },
    {
      q: "How can I get started with an FHA loan?",
      a: "Contact Nelly Santiesteban to discuss your homebuying goals, understand FHA loan requirements, and learn about the mortgage pre-approval process."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="FHA loans Miami" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Mortgage Guidance</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            Looking for FHA loans in Miami, Florida?
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Nelly Santiesteban helps homebuyers understand FHA loan options and navigate the mortgage process. Explore financing options, learn about eligibility requirements, and take the next step toward purchasing your home.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
            <a className="btn btn-ghost-light" href="/contact">Apply Online</a>
          </div>
        </div>
      </section>

      {/* EXPLORE FHA HOME LOANS SECTION */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--navy-950)' }}>
            Explore FHA Home Loans in Miami
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            FHA loans are mortgages insured by the Federal Housing Administration. They may offer eligible homebuyers flexible qualification requirements and down payment options, depending on the loan program and individual circumstances.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Whether you&apos;re buying your first home or exploring mortgage options in Miami, understanding FHA loan requirements can help you prepare for your home purchase.
          </p>
        </div>
      </section>

      {/* FHA LOAN GUIDANCE FOR HOMEBUYERS */}
      <section className="service-content" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            FHA Loan Guidance for Homebuyers
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '32px' }}>
            Understanding the requirements is an important part of choosing an FHA loan. Get guidance on key considerations, including:
          </p>
          
          <div style={{ display: 'grid', gap: '18px', marginTop: '24px' }}>
            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Down Payment Requirements</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Understand the down payment options available based on your eligibility.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Credit Requirements</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Learn how your credit profile may affect qualification.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Income and Documentation</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Understand the financial information lenders may require.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Mortgage Insurance</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Learn about FHA mortgage insurance requirements and associated costs.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Pre-Approval</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Understand the steps involved in reviewing your financing options before buying a home.</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', opacity: 0.85, fontStyle: 'italic', marginTop: '28px' }}>
            Actual requirements depend on FHA guidelines, lender criteria, and your financial circumstances.
          </p>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
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

      {/* GET STARTED WITH FHA LOANS / FINAL CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>
            Get Started With FHA Loans in Miami
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '14px' }}>
            Planning to buy a home in Miami, Florida? Nelly Santiesteban can help you understand FHA financing, review the application process, and learn what steps to take next.
          </p>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '14px' }}>
            Connect with Nelly to discuss your homeownership goals and explore available mortgage options.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--gold)', fontWeight: 600, marginBottom: '32px' }}>
            Take the next step toward your home purchase.
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Nelly Today
          </a>
        </div>
      </section>
    </>
  );
}
