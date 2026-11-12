import type { Metadata } from "next";
import Image from "next/image";
import { itinLoansJsonLd } from "@/lib/jsonld";
import { LoanPageStyles, Checklist, Rows } from "@/components/LoanPageParts";

export const metadata: Metadata = {
  title: "ITIN Home Loans in Miami, FL | Mortgage Options",
  description: "Looking for ITIN home loans in Miami, FL? Explore mortgage options for ITIN holders and learn how to finance your dream home without a Social Security Number.",
  keywords: [
    "ITIN Home Loans Miami",
    "Miami ITIN mortgage",
    "Home financing without SSN Florida",
    "ITIN home loans Miami FL",
    "Nelly Santiesteban"
  ],
  alternates: {
    canonical: "https://workwithnelly.com/itin-home-loans-miami",
  },
  openGraph: {
    title: "ITIN Home Loans in Miami, FL | Mortgage Options",
    description: "Looking for ITIN home loans in Miami, FL? Explore mortgage options for ITIN holders and learn how to finance your dream home without a Social Security Number.",
    url: "https://workwithnelly.com/itin-home-loans-miami",
    siteName: "WorkWithNelly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIN Home Loans in Miami, FL | Mortgage Options",
    description: "Looking for ITIN home loans in Miami, FL? Explore mortgage options for ITIN holders and learn how to finance your dream home without a Social Security Number.",
  },
};

export default function ITINHomeLoansMiami() {
  const reasons = [
    { title: "No SSN Required", text: "Explore mortgage programs designed for eligible ITIN holders." },
    { title: "Flexible Documentation", text: "Some lenders accept alternative income and financial documents." },
    { title: "Self-Employed Applicants", text: "Explore options based on qualifying income documentation." },
    { title: "Personalized Guidance", text: "Get help understanding available loan programs." },
    { title: "Homeownership Opportunities", text: "Take steps toward purchasing your home in Miami." },
  ];

  const requirements = [
    "Valid ITIN documentation.",
    "Proof of income.",
    "Recent bank statements.",
    "Tax returns, if required.",
    "Identification documents.",
    "Employment or self-employment information.",
    "Down payment funds.",
  ];

  const faqList = [
    { q: "Can I buy a home in Miami with an ITIN?", a: "Yes. Certain lenders offer mortgage programs for eligible borrowers who use an ITIN instead of a Social Security Number." },
    { q: "Can self-employed individuals apply for ITIN home loans?", a: "Yes. Some lenders accept self-employed applicants and review tax returns, bank statements, and other income documents." },
    { q: "Do ITIN home loans require a down payment?", a: "Yes. Down payment requirements depend on the lender and loan program." },
    { q: "Can I apply without a Social Security Number?", a: "Yes. ITIN mortgage programs are designed for eligible applicants who do not have an SSN." },
  ];

  return (
    <>
      <LoanPageStyles />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itinLoansJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <Image src="/assets/nelly_hero_house.jpg" alt="ITIN Home Loans Miami" fill priority sizes="100vw" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Home Financing</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            ITIN Home Loans in Miami, FL – Home Financing Options
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Looking for ITIN home loans in Miami, FL? Explore mortgage options for ITIN holders and learn how to finance your dream home without a Social Security Number.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
            <a className="btn btn-ghost-light" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Online</a>
          </div>
        </div>
      </section>

      {/* INTRO: large lead paragraph + supporting paragraph */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <p className="lp-lead">
            Looking to buy a home in Miami without a Social Security Number? ITIN Home Loans in Miami can help eligible individuals explore home financing options using an Individual Taxpayer Identification Number (ITIN).
          </p>
          <p className="lp-p">
            Nelly Santiesteban helps homebuyers understand available mortgage solutions, review their financing options, and navigate the home-buying process. Whether you are self-employed, a first-time buyer, or an individual with an ITIN, get personalized guidance to take the next step toward homeownership.
          </p>
        </div>
      </section>

      {/* HOME FINANCING OPTIONS: statement panel + details */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll" style={{ marginBottom: '32px' }}>
            Home Financing Options for ITIN Holders
          </h2>
          <div className="lp-feature reveal-up">
            <div className="lp-feature-lead">
              <p>Not having a Social Security Number does not necessarily mean you cannot purchase a home.</p>
            </div>
            <div className="lp-feature-body">
              <p className="lp-p">
                Certain mortgage lenders offer ITIN loan programs for eligible borrowers who meet their financial and documentation requirements.
              </p>
              <p className="lp-p lp-tint">
                With the right mortgage guidance, you can explore financing options based on your income, financial history, and homeownership goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ITIN: title / description rows */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
            Why Choose ITIN Home Loans?
          </h2>
          <Rows items={reasons} />
        </div>
      </section>

      {/* MORTGAGE REQUIREMENTS: text and note left, checklist right */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap lp-split">
          <div className="lp-split-text">
            <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
              ITIN Mortgage Requirements
            </h2>
            <p className="lp-p">
              To explore ITIN home loan options in Miami, you may need:
            </p>
            <p className="lp-aside">
              Requirements vary depending on the lender and mortgage program.
            </p>
          </div>
          <Checklist items={requirements} />
        </div>
      </section>

      {/* GET HELP: centered statement */}
      <section className="lp-sec">
        <div className="lp-wrap">
          <div className="lp-center">
            <div className="lp-rule" />
            <h2 className="kinetic lp-h2" data-kinetic-mode="scroll">
              Get Help With Your ITIN Home Loan in Miami
            </h2>
            <p className="lp-p">
              Choosing the right mortgage can make your home-buying journey easier. Nelly Santiesteban provides personalized mortgage guidance to help you understand your options and move forward with confidence.
            </p>
            <p className="lp-p">
              Whether you are purchasing your first home or exploring alternative financing, get support throughout the mortgage process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ: accordion */}
      <section className="lp-sec lp-cream">
        <div className="lp-wrap">
          <h2 className="kinetic lp-h2" data-kinetic-mode="scroll" style={{ marginBottom: '32px' }}>
            Frequently Asked Questions
          </h2>
          <div className="lp-faq reveal-up">
            {faqList.map((faq, index) => (
              <details key={index} open={index === 0}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-950)', color: 'white', textAlign: 'center' }}>
        <div className="wrap reveal-up" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'Sora, sans-serif', marginBottom: '20px' }}>
            Start Your ITIN Home Loan Process Today
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '14px' }}>
            Ready to explore home financing options? Contact Nelly Santiesteban today to discuss your goals and learn more about ITIN home loans in Miami, FL.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--gold)', fontWeight: 600, marginBottom: '32px' }}>
            Let&apos;s take the next step toward your new home!
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Nelly Today
          </a>
        </div>
      </section>
    </>
  );
}