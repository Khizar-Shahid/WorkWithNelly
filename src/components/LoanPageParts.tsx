/* Shared styles and small building blocks for the loan pages */

export function LoanPageStyles() {
    return (
        <style>{`
.lp-sec{padding:80px 24px;background:#fff}
.lp-sec.lp-cream{background:var(--cream)}
.lp-wrap{max-width:900px;margin:0 auto}
.lp-wrap h2.lp-h2{font-size:32px;color:var(--navy-950);margin:0 0 20px}
.lp-p{font-size:17px;line-height:1.8;color:var(--ink-soft);margin:0 0 20px}
.lp-p:last-child{margin-bottom:0}
.lp-lead{font-size:21px;line-height:1.7;color:var(--navy-900);margin:0 0 24px}
.lp-callout{border-left:3px solid var(--gold);padding-left:18px;font-size:17px;line-height:1.7;font-weight:600;color:var(--navy-950);margin:0}
.lp-note{font-size:14px;color:var(--ink-soft);opacity:.85;font-style:italic;margin:28px 0 0}
.lp-aside{margin:28px 0 0;padding:18px 20px;background:rgba(201,162,75,.12);border-radius:12px;font-size:15px;line-height:1.6;color:var(--navy-900)}

/* Split layout: text on the left, content on the right */
.lp-split{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:56px;align-items:start}
.lp-split-text{position:sticky;top:120px}
.lp-split .lp-feat{margin-top:0}

/* Checklist: one card, one vertical list */
.lp-checklist{list-style:none;margin:0;padding:6px 28px;background:#fff;border-radius:14px;box-shadow:0 4px 16px rgba(19,29,56,.05);border:1px solid rgba(19,29,56,.06)}
.lp-checklist li{display:flex;align-items:center;gap:14px;padding:18px 0;border-bottom:1px solid rgba(19,29,56,.08);font-size:17px;font-weight:600;line-height:1.5;color:var(--navy-900)}
.lp-checklist li:last-child{border-bottom:none}
.lp-check{flex:0 0 26px;height:26px;border-radius:50%;background:rgba(201,162,75,.18);color:var(--gold);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700}

/* Feature list: title + description, one card */
.lp-feat{margin-top:32px;background:#fff;border-radius:14px;box-shadow:0 4px 16px rgba(19,29,56,.05);border:1px solid rgba(19,29,56,.06);padding:6px 28px}
.lp-sec:not(.lp-cream) .lp-feat{background:var(--cream);box-shadow:none}
.lp-feat-row{display:flex;gap:18px;align-items:flex-start;padding:24px 0;border-bottom:1px solid rgba(19,29,56,.08)}
.lp-feat-row:last-child{border-bottom:none}
.lp-feat-row .lp-check{margin-top:2px}
.lp-feat-row h3{font-size:19px;font-weight:700;color:var(--navy-900);margin:0 0 6px}
.lp-feat-row p{margin:0;font-size:17px;line-height:1.65;color:var(--ink-soft)}

/* Definition list: title + description with a gold rule */
.lp-defs{list-style:none;margin:32px 0 0;padding:0 0 0 28px;border-left:3px solid var(--gold)}
.lp-defs li{padding:14px 0}
.lp-defs li+li{margin-top:10px}
.lp-defs h3{font-size:19px;font-weight:700;color:var(--navy-900);margin:0 0 4px}
.lp-defs p{margin:0;font-size:17px;line-height:1.65;color:var(--ink-soft)}

/* Plain list with a gold rule */
.lp-people{list-style:none;margin:32px 0 0;padding:4px 0 4px 28px;border-left:3px solid var(--gold)}
.lp-people li{font-size:19px;font-weight:600;line-height:1.5;color:var(--navy-900);padding:11px 0}

/* DSCR equation */
.lp-eq{display:flex;align-items:stretch;gap:16px;margin:32px 0}
.lp-eq-box{flex:1;display:flex;flex-direction:column;justify-content:center;gap:6px;text-align:center;padding:24px 20px;background:var(--cream);border-radius:14px;border:1px solid rgba(19,29,56,.06)}
.lp-eq-box strong{font-family:Sora,sans-serif;font-size:34px;line-height:1.1;color:var(--navy-950)}
.lp-eq-box span{font-size:14px;color:var(--ink-soft)}
.lp-eq-op{align-self:center;font-size:28px;font-weight:700;color:var(--gold)}
.lp-eq-result{background:var(--navy-950);border-color:var(--navy-950)}
.lp-eq-result strong{color:var(--gold)}
.lp-eq-result span{color:rgba(255,255,255,.85)}

/* Centered statement */
.lp-center{max-width:720px;margin:0 auto;text-align:center}
.lp-rule{width:56px;height:3px;border-radius:2px;background:var(--gold);margin:0 auto 28px}

/* Feature panel: big statement on navy, details on white */
.lp-feature{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(19,29,56,.12)}
.lp-feature-lead{background:var(--navy-950);padding:48px 40px;display:flex;align-items:center}
.lp-feature-lead p{font-family:Sora,sans-serif;font-size:26px;line-height:1.35;font-weight:600;color:#fff;margin:0}
.lp-feature-body{background:#fff;padding:44px 40px;display:flex;flex-direction:column;justify-content:center;gap:24px}
.lp-feature-body .lp-p{margin:0}
.lp-feature-body .lp-tint{padding:20px 22px;background:rgba(201,162,75,.14);border-radius:12px;color:var(--navy-900);font-weight:500}

/* FAQ accordion */
.lp-faq{display:grid;gap:14px}
.lp-faq details{background:#fff;border-radius:14px;box-shadow:0 4px 16px rgba(19,29,56,.05);border:1px solid rgba(19,29,56,.06)}
.lp-faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 28px;font-size:18px;font-weight:700;color:var(--navy-950)}
.lp-faq summary::-webkit-details-marker{display:none}
.lp-faq summary::after{content:"+";flex:none;font-size:26px;line-height:1;color:var(--gold)}
.lp-faq details[open] summary::after{content:"\\2013"}
.lp-faq summary:focus-visible{outline:2px solid var(--gold);outline-offset:2px;border-radius:14px}
.lp-faq details p{margin:0;padding:0 28px 24px;font-size:16px;line-height:1.7;color:var(--ink-soft)}

@media (max-width:820px){
  .lp-sec{padding:60px 20px}
  .lp-wrap h2.lp-h2{font-size:28px}
  .lp-split{grid-template-columns:1fr;gap:28px}
  .lp-split-text{position:static}
  .lp-feat,.lp-checklist{padding:4px 20px}
  .lp-defs{padding-left:20px}
  .lp-feature{grid-template-columns:1fr}
  .lp-feature-lead,.lp-feature-body{padding:32px 24px}
  .lp-feature-lead p{font-size:22px}
  .lp-eq{flex-direction:column}
  .lp-faq summary{padding:18px 20px;font-size:17px}
  .lp-faq details p{padding:0 20px 20px}
}
    `}</style>
    );
}

export function Checklist({ items }: { items: string[] }) {
    return (
        <ul className="lp-checklist reveal-up">
            {items.map((item, index) => (
                <li key={index}>
                    <span className="lp-check" aria-hidden="true">✓</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export function Rows({ items }: { items: { title: string; text: string }[] }) {
    return (
        <div className="lp-feat reveal-up">
            {items.map((item, index) => (
                <div key={index} className="lp-feat-row">
                    <span className="lp-check" aria-hidden="true">✓</span>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function Defs({ items }: { items: { title: string; text: string }[] }) {
    return (
        <ul className="lp-defs reveal-up">
            {items.map((item, index) => (
                <li key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
    );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
    return (
        <div className="lp-faq reveal-up">
            {items.map((faq, index) => (
                <details key={index} open={index === 0}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                </details>
            ))}
        </div>
    );
}