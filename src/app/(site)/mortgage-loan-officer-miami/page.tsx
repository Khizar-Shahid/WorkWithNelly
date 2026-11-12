import type { Metadata } from "next";
import Image from "next/image";
import { mortgageOfficerJsonLd } from "@/lib/jsonld";
import { LoanPageStyles, Rows, Faq } from "@/components/LoanPageParts";

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
  const services = [
    { title: "Mortgage Consultation", text: "Discuss your homeownership goals and financing needs." },
    { title: "Mortgage Pre-Approval", text: "Understand the information required to evaluate your potential borrowing capacity." },
    { title: "Home Purchase Financing", text: "Explore available mortgage options for purchasing a property." },
    { title: "First-Time Homebuyer Support", text: "Understand the mortgage process and requirements for eligible first-time buyers." },
    { title: "Mortgage Application Guidance", text: "Learn about the documentation and steps involved in applying for a mortgage." },
  ];

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

  return (
    <>
      <LoanPageStyles />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mortgageOfficerJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <Image src="/assets/nelly_hero_house.jpg" alt="Miami mortgage loan officer" fill priority sizes="100vw" className="hero-photo" />
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
            <a className="btn btn-ghost-light" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Online</a>
          </div>
        </div>
      </section>

      {/* YOUR TRUSTED MORTGAGE LOAN OFFICER: lead paragraph + gold call-out line */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
            Your Trusted Mortgage Loan Officer in Miami
          </h2>
          <p className="lp-lead">
            Choosing the right mortgage can be easier with professional guidance. Nelly Santiesteban helps you understand mortgage requirements, explore financing options, and prepare for the next steps toward purchasing your home.
          </p>
          <p className="lp-callout">
            Whether you&apos;re a first-time homebuyer or planning your next property purchase, get support in understanding the mortgage process.
          </p>
        </div>
      </section>

      {/* PERSONALIZED MORTGAGE SERVICES: split layout, text and note left, rows right */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap lp-split">
          <div className="lp-split-text">
            <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
              Personalized Mortgage Services
            </h2>
            <p className="lp-p">
              Find guidance for your home financing needs in Miami, Florida.
            </p>
            <p className="lp-aside">
              Available options and services depend on your eligibility and lender requirements.
            </p>
          </div>
          <Rows items={services} />
        </div>
      </section>

      {/* FAQS: accordion */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll" style={{ marginBottom: '32px' }}>
            Frequently Asked Questions
          </h2>
          <Faq items={faqList} />
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