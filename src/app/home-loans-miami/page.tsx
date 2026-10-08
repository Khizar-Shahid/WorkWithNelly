import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loans Miami | Find the Right Mortgage Loan",
  description: "Looking for home loans in Miami? Explore flexible mortgage options and find the right home loan to fit your needs and budget.",
};

export default function HomeLoansMiami() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 100px' }}>
      <a style={{ display: 'inline-block', marginBottom: 28, fontWeight: 600, fontSize: 14, textDecoration: 'none' }} href="/">&larr; Back to Home</a>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Home Loans Miami</h1>
      <p>Content coming soon.</p>
    </div>
  );
}
