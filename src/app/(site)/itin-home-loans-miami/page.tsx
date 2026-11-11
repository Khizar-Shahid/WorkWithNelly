import type { Metadata } from "next";
import { itinLoansJsonLd } from "@/lib/jsonld";

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
  const faqList = [
    { q: "Can I buy a home in Miami with an ITIN?", a: "Yes. Certain lenders offer mortgage programs for eligible borrowers who use an ITIN instead of a Social Security Number." },
    { q: "Can self-employed individuals apply for ITIN home loans?", a: "Yes. Some lenders accept self-employed applicants and review tax returns, bank statements, and other income documents." },
    { q: "Do ITIN home loans require a down payment?", a: "Yes. Down payment requirements depend on the lender and loan program." },
    { q: "Can I apply without a Social Security Number?", a: "Yes. ITIN mortgage programs are designed for eligible applicants who do not have an SSN." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itinLoansJsonLd) }} />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="ITIN Home Loans Miami" className="hero-photo" />
        </div>
        <div className="hero-overlay" />
        <div className="wrap hero-content">
          <span className="eyebrow">Miami, Florida Home Financing</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '820px' }}>
            ITIN Home Loans in Miami, FL – Home Financing Options
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Looking for ITIN home loans in Miami, FL? Explore mortgage options for ITIN holders and learn how to finance your dream home without a Social Security Number.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener noreferrer">Apply Online</a>
            <a className="btn btn-ghost-light" href="/contact">Contact Nelly Today</a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            Looking to buy a home in Miami without a Social Security Number? ITIN Home Loans in Miami can help eligible individuals explore home financing options using an Individual Taxpayer Identification Number (ITIN).
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Nelly Santiesteban helps homebuyers understand available mortgage solutions, review their financing options, and navigate the home-buying process. Whether you are self-employed, a first-time buyer, or an individual with an ITIN, get personalized guidance to take the next step toward homeownership.
          </p>
        </div>
      </section>

      {/* HOME FINANCING OPTIONS */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Home Financing Options for ITIN Holders
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '20px' }}>
            Not having a Social Security Number does not necessarily mean you cannot purchase a home. Certain mortgage lenders offer ITIN loan programs for eligible borrowers who meet their financial and documentation requirements.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75 }}>
            With the right mortgage guidance, you can explore financing options based on your income, financial history, and homeownership goals.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE ITIN */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Why Choose ITIN Home Loans?
          </h2>
          <ul style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            <li><strong>No SSN Required:</strong> Explore mortgage programs designed for eligible ITIN holders.</li>
            <li><strong>Flexible Documentation:</strong> Some lenders accept alternative income and financial documents.</li>
            <li><strong>Self-Employed Applicants:</strong> Explore options based on qualifying income documentation.</li>
            <li><strong>Personalized Guidance:</strong> Get help understanding available loan programs.</li>
            <li><strong>Homeownership Opportunities:</strong> Take steps toward purchasing your home in Miami.</li>
          </ul>
        </div>
      </section>

      {/* MORTGAGE REQUIREMENTS */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            ITIN Mortgage Requirements
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '14px' }}>
            To explore ITIN home loan options in Miami, you may need:
          </p>
          <ul style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
            <li>Valid ITIN documentation.</li>
            <li>Proof of income.</li>
            <li>Recent bank statements.</li>
            <li>Tax returns, if required.</li>
            <li>Identification documents.</li>
            <li>Employment or self-employment information.</li>
            <li>Down payment funds.</li>
          </ul>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.75 }}>
            Requirements vary depending on the lender and mortgage program.
          </p>
        </div>
      </section>

      {/* GET HELP SECTION */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--navy-950)' }}>
            Get Help With Your ITIN Home Loan in Miami
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '20px' }}>
            Choosing the right mortgage can make your home-buying journey easier. Nelly Santiesteban provides personalized mortgage guidance to help you understand your options and move forward with confidence.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
            Whether you are purchasing your first home or exploring alternative financing, get support throughout the mortgage process.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="kinetic" data-kinetic-mode="scroll" style={{ fontSize: '32px', marginBottom: '32px', color: 'var(--navy-950)' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {faqList.map((faq, index) => (
              <div key={index} className="reveal-up" style={{ padding: '26px 30px', background: 'white', borderRadius: '14px', boxShadow: '0 4px 16px rgba(19,29,56,0.05)', border: '1px solid rgba(19,29,56,0.06)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--navy-950)', marginBottom: '10px', fontWeight: 700 }}>{faq.q}</h3>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0, fontSize: '16px' }}>{faq.a}</p>
              </div>
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
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '10px' }}>
            Ready to explore home financing options? Contact Nelly Santiesteban today to discuss your goals and learn more about ITIN home loans in Miami, FL.
          </p>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '24px' }}>
            Let&apos;s take the next step toward your new home!
          </p>
          <a className="btn btn-primary" href="/contact">Contact Nelly Today</a>
        </div>
      </section>
    </>
  );
}
