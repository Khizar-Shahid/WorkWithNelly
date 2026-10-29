"use client";
import React, { useState } from "react";
import { contactJsonLd } from "@/lib/jsonld";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err" | "idle"; message: string }>({
    type: "idle",
    message: "Your message goes straight to Nelly.",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setStatus({ type: "idle", message: "Sending..." });

    try {
      const fd = new FormData(form);
      const payload = {
        name: fd.get("name") as string,
        phone: fd.get("phone") as string,
        email: fd.get("email") as string,
        message: fd.get("message") as string,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitting(false);
        setStatus({
          type: "err",
          message: data.error || "Something went wrong. Please call Nelly directly at (786) 286-5906.",
        });
        return;
      }

      form.reset();
      setSubmitting(false);
      setStatus({
        type: "ok",
        message: "Thank you! Nelly received your message and will reach out soon.",
      });
    } catch (err) {
      setSubmitting(false);
      setStatus({
        type: "err",
        message: "Something went wrong. Please call Nelly directly at (786) 286-5906.",
      });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <section className="hero" style={{ minHeight: "55vh", display: "flex", alignItems: "center" }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="Contact Nelly Santiesteban" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Direct Contact &amp; Mortgage Application</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: "800px" }}>
            Contact Nelly Santiesteban
          </h1>
          <p className="sub" style={{ maxWidth: "680px" }}>
            Have a question, exploring home loan options, or ready to apply? Send a message below or start your application directly.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div className="wrap">
          <div className="final-cta" style={{ margin: "0 auto" }}>
            <div className="cta-grid">
              <div>
                <h2 className="kinetic" data-kinetic-mode="scroll">
                  READY TO TAKE THE NEXT STEP?
                </h2>
                <p className="lede">
                  Whether you&apos;re ready to apply or just have a few questions, I&apos;m here to help you understand your options and decide what makes sense for you.
                </p>

                <div className="hero-ctas" style={{ marginBottom: "36px" }}>
                  <a
                    className="btn btn-primary"
                    href="#contact-form"
                  >
                    Send Direct Message Below
                  </a>
                </div>

                <div className="contact-info">
                  <div className="name">Nelly Santiesteban</div>
                  <div className="role">Mortgage Loan Officer</div>
                  <div className="role">NMLS #1808120</div>
                  <a href="tel:7862865906">Phone: (786) 286-5906</a>
                  <a href="mailto:workwithnelly1@gmail.com">Email: workwithnelly1@gmail.com</a>
                  <div className="social-label">Connect Online</div>
                  <div className="foot-social">
                    <a
                      href="https://www.instagram.com/workwithnelly/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/workwithnelly/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.zillow.com/lender-profile/workwithnelly/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Zillow"
                    >
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M3 11l9-7 9 7M5 10v10h14V10" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nelly-santiesteban-17613832/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" />
                      </svg>
                    </a>
                    <a
                      href="https://www.google.com/search?q=Nelly+Santiesteban+Mortgage+Loan+Officer&kgmid=%2Fg%2F11yr03xkym"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Business Profile"
                    >
                      <span className="g-mark">G</span>
                    </a>
                  </div>
                </div>
              </div>

              <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="frow">
                  <label htmlFor="cf-name">Name</label>
                  <input type="text" id="cf-name" name="name" placeholder="Your name" required />
                </div>
                <div className="frow">
                  <label htmlFor="cf-phone">Phone</label>
                  <input type="tel" id="cf-phone" name="phone" placeholder="(786) 000-0000" required />
                </div>
                <div className="frow">
                  <label htmlFor="cf-email">Email</label>
                  <input type="email" id="cf-email" name="email" placeholder="you@email.com" required />
                </div>
                <div className="frow">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    placeholder="Tell me a little about what you're looking to do (e.g. buying a home, refinancing, pre-approval)"
                  ></textarea>
                </div>
                <div className="hp-field" aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="cf-website">Website</label>
                  <input type="text" id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-primary" id="cf-submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <div
                  className={`form-note ${status.type === "ok" ? "ok" : status.type === "err" ? "err" : ""}`}
                  id="cf-status"
                  role="status"
                >
                  {status.message}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
