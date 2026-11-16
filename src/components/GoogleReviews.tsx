"use client";
import { useEffect, useState } from 'react';

type Review = { name: string; text: string; where: string };

// Hand-picked 5 star Google reviews. Always shown, and mixed in with any
// live reviews the /api/reviews route brings back from Google.
const PINNED: Review[] = [
  { name: 'Vanessa S.', where: 'First time homebuyer', text: 'As a first time home buyer Mrs. Santiesteban absolutely created a safe and secure sense of understanding the complexities of buying.' },
  { name: 'Shiqui M.', where: 'Translated from Spanish', text: 'Highly recommended! She helped me from beginning to end. Thanks to her, my family and I bought our first home.' },
  { name: 'Claire S.', where: 'Google review', text: 'Excellent customer service and trustworthy company. It was a pleasure working with them and getting the best outcome for my financial needs. Ms. Santiesteban was truly a pleasure to work with.' },
];

const PER_PAGE = 3;
const ROTATE_MS = 9000;

const Star = () => (
  <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z" /></svg>
);

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>(PINNED);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => {
        const live: Review[] = d?.reviews || [];
        if (!live.length) return;
        const seen = new Set(PINNED.map((r) => r.name.toLowerCase()));
        const fresh = live.filter((r) => !seen.has(r.name.toLowerCase()));
        setReviews([...fresh, ...PINNED]);
      })
      .catch(() => {});
  }, []);

  const pages = Math.max(1, Math.ceil(reviews.length / PER_PAGE));

  useEffect(() => {
    if (pages < 2 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pages), ROTATE_MS);
    return () => clearInterval(t);
  }, [pages, paused]);

  const start = (page % pages) * PER_PAGE;
  let shown = reviews.slice(start, start + PER_PAGE);
  if (shown.length < PER_PAGE && reviews.length >= PER_PAGE) {
    shown = shown.concat(reviews.slice(0, PER_PAGE - shown.length));
  }

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={`quote-grid ${pages > 1 ? 'rotating' : ''}`} key={page}>
        {shown.map((r) => (
          <div className="quote-card" key={r.name + r.text.slice(0, 12)}>
            <div className="stars" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
            <p>{r.text}</p>
            <div className="quote-attr">
              <div className="quote-who">
                <div className="quote-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div className="who">{r.name}</div>
                  <div className="where">{r.where}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pages > 1 && (
        <div className="review-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} type="button" className={i === page % pages ? 'on' : ''} aria-label={`Show reviews set ${i + 1}`} onClick={() => setPage(i)} />
          ))}
        </div>
      )}
    </div>
  );
}
