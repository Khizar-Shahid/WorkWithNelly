import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Loan Officer Miami | Nelly Santiesteban",
  description: "Looking for a trusted Mortgage Loan Officer in Miami? Nelly Santiesteban provides personalized mortgage solutions, FHA loans, and refinancing across Florida.",
  keywords: [
    "Mortgage loan officer Miami",
    "Mortgage loan officer in Miami",
    "Miami mortgage broker",
    "Florida home financing",
    "Nelly Santiesteban"
  ],
  alternates: {
    canonical: "https://workwithnelly.com/mortgage-loan-officer-miami",
  },
};

export default function MortgageLoanOfficerMiami() {
  const faqList = [
    {
      q: "How can a mortgage loan officer help me?",
      a: "A mortgage loan officer can explain financing options, mortgage requirements, and the application process based on your circumstances."
    },
    {
      q: "Can I get help with mortgage pre-approval?",
      a: "You can discuss the pre-approval process and learn which financial documents your lender may require."
    },
    {
      q: "How do I contact Nelly Santiesteban?",
      a: "Use the contact section on the website to discuss your mortgage needs and learn about the next steps."
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
          <img src="/assets/nelly_hero_house.jpg" alt="Miami mortgage loan officer" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Mortgage Guidance</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            Mortgage Loan Officer in Miami, Florida
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Looking for a mortgage loan officer in Miami, Florida? Nelly Santiesteban helps homebuyers understand their mortgage options and navigate the home financing process. Get personalized guidance based on your financial situation and homeownership goals.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
            <a className="btn btn-ghost-light" href="/contact">Apply Online</a>
          </div>
        </div>
      </section>

      {/* YOUR TRUSTED MORTGAGE LOAN OFFICER */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--navy-950)' }}>
            Your Trusted Mortgage Loan Officer in Miami
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            Choosing the right mortgage can be easier with professional guidance. Nelly Santiesteban helps you understand mortgage requirements, explore financing options, and prepare for the next steps toward purchasing your home.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Whether you&apos;re a first-time homebuyer or planning your next property purchase, get support in understanding the mortgage process.
          </p>
        </div>
      </section>

      {/* PERSONALIZED MORTGAGE SERVICES */}
      <section className="service-content" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Personalized Mortgage Services
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '32px' }}>
            Find guidance for your home financing needs in Miami, Florida.
          </p>
          
          <div style={{ display: 'grid', gap: '18px', marginTop: '24px' }}>
            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Mortgage Consultation</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Discuss your homeownership goals and financing needs.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Mortgage Pre-Approval</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Understand the information required to evaluate your potential borrowing capacity.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Home Purchase Financing</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Explore available mortgage options for purchasing a property.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>First-Time Homebuyer Support</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Understand the mortgage process and requirements for eligible first-time buyers.</p>
            </div>

            <div className="reveal-up" style={{ padding: '24px 28px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
              <h3 style={{ fontSize: '19px', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: 700 }}>Mortgage Application Guidance</h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>Learn about the documentation and steps involved in applying for a mortgage.</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', opacity: 0.85, fontStyle: 'italic', marginTop: '28px' }}>
            Available options and services depend on your eligibility and lender requirements.
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

      {/* GET STARTED / FINAL CTA SECTION */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>
            Get Started With Nelly Santiesteban
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '14px' }}>
            Planning to buy a home in Miami? Connect with Nelly Santiesteban to discuss your mortgage needs, understand your options, and take the next step toward homeownership.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--gold)', fontWeight: 600, marginBottom: '32px' }}>
            Ready to explore your mortgage options?
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Nelly Today
          </a>
        </div>
      </section>
    </>
  );
}
