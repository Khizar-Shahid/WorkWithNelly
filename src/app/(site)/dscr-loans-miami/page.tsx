import type { Metadata } from "next";
import Image from "next/image";
import { dscrLoansJsonLd } from "@/lib/jsonld";
import { LoanPageStyles, Checklist, Rows } from "@/components/LoanPageParts";

export const metadata: Metadata = {
  title: "DSCR Loans in Miami, FL | Investment Property Financing",
  description: "Explore DSCR loans in Miami, FL, and finance your investment property based on rental income. Find flexible financing options for real estate investors.",
  keywords: [
    "DSCR Loans Miami",
    "Miami DSCR mortgage",
    "Investment property financing Miami",
    "Florida DSCR loans",
    "Nelly Santiesteban"
  ],
  alternates: {
    canonical: "https://workwithnelly.com/dscr-loans-miami",
  },
  openGraph: {
    title: "DSCR Loans in Miami, FL | Investment Property Financing",
    description: "Explore DSCR loans in Miami, FL, and finance your investment property based on rental income. Find flexible financing options for real estate investors.",
    url: "https://workwithnelly.com/dscr-loans-miami",
    siteName: "WorkWithNelly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSCR Loans in Miami, FL | Investment Property Financing",
    description: "Explore DSCR loans in Miami, FL, and finance your investment property based on rental income. Find flexible financing options for real estate investors.",
  },
};

export default function DSCRLoansMiami() {
  const loanOptions = [
    "Purchasing rental properties",
    "Refinancing existing investment properties",
    "Expanding rental property portfolios",
    "Financing eligible short-term and long-term rentals",
    "Buying investment properties through eligible LLCs",
  ];

  const benefits = [
    { title: "Rental Income-Based Financing", text: "Qualify based mainly on your property's rental income." },
    { title: "Flexible Income Requirements", text: "Many programs do not require traditional personal income verification." },
    { title: "Investment Opportunities", text: "Finance eligible rental properties in Miami." },
    { title: "Portfolio Growth", text: "Explore financing for additional investment properties." },
    { title: "Purchase and Refinance Options", text: "Find financing for new purchases or eligible existing properties." },
  ];

  const applicants = [
    "First-time real estate investors",
    "Experienced property investors",
    "Self-employed individuals",
    "Rental property owners",
    "Investors purchasing through an LLC",
  ];

  return (
    <>
      <LoanPageStyles />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dscrLoansJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <Image src="/assets/nelly_hero_house.jpg" alt="DSCR Loans Miami" fill priority sizes="100vw" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Investor Financing</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            DSCR Loans in Miami, FL – Financing for Real Estate Investors
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Explore DSCR loans in Miami, FL, and finance your investment property based on rental income. Find flexible financing options for real estate investors.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
            <a className="btn btn-ghost-light" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Online</a>
          </div>
        </div>
      </section>

      {/* INTRO: large lead paragraph + gold call-out line */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <p className="lp-lead">
            Looking to invest in rental property in Miami? DSCR loans can help you finance an investment property based on its rental income rather than relying only on your personal income. Whether you are buying your first rental property or expanding your portfolio, we can help you explore financing options that match your investment goals.
          </p>
          <p className="lp-callout">
            Get started today and explore your DSCR loan options in Miami.
          </p>
        </div>
      </section>

      {/* DSCR LOAN OPTIONS: split layout, text left, checklist right */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap lp-split">
          <div className="lp-split-text">
            <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
              DSCR Loan Options for Miami Real Estate Investors
            </h2>
            <p className="lp-p">
              DSCR loans are designed for real estate investors who want a simple way to finance rental properties. These loans focus on the property&apos;s income and its ability to cover monthly debt payments.
            </p>
            <p className="lp-p">
              Our DSCR loan options can help investors with:
            </p>
          </div>
          <Checklist items={loanOptions} />
        </div>
      </section>

      {/* HOW DSCR LOANS WORK: the example shown as an equation */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
            How DSCR Loans Work
          </h2>
          <p className="lp-p">
            A DSCR loan uses the property&apos;s rental income to evaluate its ability to cover mortgage payments.
          </p>
          <p className="lp-p">
            For example, if your property generates $3,000 in monthly rental income and your monthly debt payment is $2,500, the DSCR ratio is 1.20.
          </p>

          <div className="lp-eq reveal-up" aria-hidden="true">
            <div className="lp-eq-box"><strong>$3,000</strong><span>Monthly rental income</span></div>
            <span className="lp-eq-op">÷</span>
            <div className="lp-eq-box"><strong>$2,500</strong><span>Monthly debt payment</span></div>
            <span className="lp-eq-op">=</span>
            <div className="lp-eq-box lp-eq-result"><strong>1.20</strong><span>DSCR ratio</span></div>
          </div>

          <p className="lp-p">
            This allows lenders to evaluate the property&apos;s income potential when reviewing your loan application.
          </p>
        </div>
      </section>

      {/* BENEFITS: title / description rows */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
            Benefits of DSCR Loans in Miami
          </h2>
          <Rows items={benefits} />
        </div>
      </section>

      {/* WHO CAN APPLY: plain list with a gold rule */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
            Who Can Apply for a DSCR Loan?
          </h2>
          <p className="lp-p">
            DSCR loans may be suitable for:
          </p>
          <ul className="lp-people reveal-up">
            {applicants.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="lp-note">
            Eligibility depends on the lender&apos;s requirements, credit profile, property details, and rental income.
          </p>
        </div>
      </section>

      {/* FIND THE RIGHT DSCR LOAN: centered statement */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap">
          <div className="lp-center">
            <div className="lp-rule" />
            <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
              Find the Right DSCR Loan for Your Investment
            </h2>
            <p className="lp-p">
              Every real estate investment is different. Our team can help you explore available DSCR loan options based on your property, rental income, and financing goals.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>
            Ready to finance your investment property in Miami?
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '32px' }}>
            Contact us today to discuss your DSCR loan options and take the next step toward growing your real estate portfolio.
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Nelly Today
          </a>
        </div>
      </section>
    </>
  );
}