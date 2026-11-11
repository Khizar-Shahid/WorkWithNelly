import type { Metadata } from "next";
import { dscrLoansJsonLd } from "@/lib/jsonld";

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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dscrLoansJsonLd) }} />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="DSCR Loans Miami" className="hero-photo" />
        </div>
        <div className="hero-overlay" />
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Investor Financing</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            DSCR Loans in Miami, FL – Financing for Real Estate Investors
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Explore DSCR loans in Miami, FL, and finance your investment property based on rental income. Find flexible financing options for real estate investors.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Online</a>
            <a className="btn btn-ghost-light" href="/contact">Contact Nelly Today</a>
          </div>
        </div>
      </section>

      {/* INTRO PARAGRAPH */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            Looking to invest in rental property in Miami? DSCR loans can help you finance an investment property based on its rental income rather than relying only on your personal income. Whether you are buying your first rental property or expanding your portfolio, we can help you explore financing options that match your investment goals.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Get started today and explore your DSCR loan options in Miami.
          </p>
        </div>
      </section>

      {/* DSCR LOAN OPTIONS */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            DSCR Loan Options for Miami Real Estate Investors
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '20px' }}>
            DSCR loans are designed for real estate investors who want a simple way to finance rental properties. These loans focus on the property&apos;s income and its ability to cover monthly debt payments.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '14px' }}>
            Our DSCR loan options can help investors with:
          </p>
          <ul style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            <li>Purchasing rental properties</li>
            <li>Refinancing existing investment properties</li>
            <li>Expanding rental property portfolios</li>
            <li>Financing eligible short-term and long-term rentals</li>
            <li>Buying investment properties through eligible LLCs</li>
          </ul>
        </div>
      </section>

      {/* HOW DSCR LOANS WORK */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--navy-950)' }}>
            How DSCR Loans Work
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            A DSCR loan uses the property&apos;s rental income to evaluate its ability to cover mortgage payments.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            For example, if your property generates $3,000 in monthly rental income and your monthly debt payment is $2,500, the DSCR ratio is 1.20.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            This allows lenders to evaluate the property&apos;s income potential when reviewing your loan application.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Benefits of DSCR Loans in Miami
          </h2>
          <ul style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            <li><strong>Rental Income-Based Financing:</strong> Qualify based mainly on your property&apos;s rental income.</li>
            <li><strong>Flexible Income Requirements:</strong> Many programs do not require traditional personal income verification.</li>
            <li><strong>Investment Opportunities:</strong> Finance eligible rental properties in Miami.</li>
            <li><strong>Portfolio Growth:</strong> Explore financing for additional investment properties.</li>
            <li><strong>Purchase and Refinance Options:</strong> Find financing for new purchases or eligible existing properties.</li>
          </ul>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Who Can Apply for a DSCR Loan?
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '14px' }}>
            DSCR loans may be suitable for:
          </p>
          <ul style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
            <li>First-time real estate investors</li>
            <li>Experienced property investors</li>
            <li>Self-employed individuals</li>
            <li>Rental property owners</li>
            <li>Investors purchasing through an LLC</li>
          </ul>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Eligibility depends on the lender&apos;s requirements, credit profile, property details, and rental income.
          </p>
        </div>
      </section>

      {/* FIND THE RIGHT DSCR LOAN */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Find the Right DSCR Loan for Your Investment
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Every real estate investment is different. Our team can help you explore available DSCR loan options based on your property, rental income, and financing goals.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>
            Ready to finance your investment property in Miami?
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '14px' }}>
            Contact us today to discuss your DSCR loan options and take the next step toward growing your real estate portfolio.
          </p>
          <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
        </div>
      </section>
    </>
  );
}
