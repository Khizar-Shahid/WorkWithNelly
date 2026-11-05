"use client";
import { useMemo, useState } from "react";

type Scenario = {
  price: number;
  downPct: number;
  rate: number;
  term: 30 | 15;
  taxRate: number; // annual % of price
  insurance: number; // annual $
  hoa: number; // monthly $
  miRate: number; // annual % of loan, only applies under 20% down
};

const DEFAULT_A: Scenario = {
  price: 450000,
  downPct: 10,
  rate: 6.5,
  term: 30,
  taxRate: 1.8,
  insurance: 3600,
  hoa: 0,
  miRate: 0.5,
};

const PARTS = [
  { key: "pi", label: "Principal & interest", color: "#1E2F5A" },
  { key: "tax", label: "Property taxes", color: "#C9A227" },
  { key: "ins", label: "Homeowners insurance", color: "#3E8E9E" },
  { key: "hoa", label: "HOA fees", color: "#7A5BA6" },
  { key: "mi", label: "Mortgage insurance", color: "#D9774B" },
] as const;

type PartKey = (typeof PARTS)[number]["key"];

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function compute(s: Scenario) {
  const down = s.price * (s.downPct / 100);
  const loan = Math.max(s.price - down, 0);
  const r = s.rate / 100 / 12;
  const n = s.term * 12;
  const pi = loan === 0 ? 0 : r === 0 ? loan / n : (loan * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  const tax = (s.price * (s.taxRate / 100)) / 12;
  const ins = s.insurance / 12;
  const hoa = s.hoa;
  const mi = s.downPct < 20 ? (loan * (s.miRate / 100)) / 12 : 0;
  const parts: Record<PartKey, number> = { pi, tax, ins, hoa, mi };
  const total = pi + tax + ins + hoa + mi;
  return { down, loan, parts, total };
}

function Donut({ parts, total }: { parts: Record<PartKey, number>; total: number }) {
  const R = 70;
  const C = 2 * Math.PI * R;
  const lens = PARTS.map((p) => (total ? (parts[p.key] / total) * C : 0));
  const starts = lens.map((_, i) => lens.slice(0, i).reduce((a, b) => a + b, 0));
  return (
    <svg viewBox="0 0 180 180" className="pc-donut" role="img" aria-label={"Estimated monthly payment " + money(total)}>
      <circle cx="90" cy="90" r={R} fill="none" stroke="#EFE6D3" strokeWidth="22" />
      {PARTS.map((p, i) => {
        const v = parts[p.key];
        if (!total || v <= 0) return null;
        const len = lens[i];
        const offset = starts[i];
        return (
          <circle
            key={p.key}
            cx="90"
            cy="90"
            r={R}
            fill="none"
            stroke={p.color}
            strokeWidth="22"
            strokeDasharray={`${Math.max(len - 2, 0.5)} ${C}`}
            strokeDashoffset={-offset}
            transform="rotate(-90 90 90)"
            style={{ transition: "stroke-dasharray .35s ease, stroke-dashoffset .35s ease" }}
          />
        );
      })}
      <text x="90" y="84" textAnchor="middle" className="pc-donut-amt">{money(total)}</text>
      <text x="90" y="106" textAnchor="middle" className="pc-donut-lbl">per month</text>
    </svg>
  );
}

function Field({
  label, value, display, min, max, step, onChange, prefix, suffix,
}: {
  label: string; value: number; display: string; min: number; max: number; step: number;
  onChange: (v: number) => void; prefix?: string; suffix?: string;
}) {
  return (
    <div className="pc-field">
      <div className="pc-field-top">
        <label>{label}</label>
        <div className="pc-num">
          {prefix && <span>{prefix}</span>}
          <input
            type="number"
            inputMode="decimal"
            value={Number.isFinite(value) ? value : 0}
            min={min}
            step={step}
            aria-label={label}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          />
          {suffix && <span>{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(Math.max(value, min), max)}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        aria-label={label + " slider"}
      />
      <div className="pc-hint">{display}</div>
    </div>
  );
}

function ScenarioCard({
  name, s, set, accent, onRemove,
}: {
  name: string; s: Scenario; set: (s: Scenario) => void; accent: string; onRemove?: () => void;
}) {
  const res = useMemo(() => compute(s), [s]);
  const upd = (k: keyof Scenario) => (v: number) => set({ ...s, [k]: v });
  return (
    <div className="pc-card" style={{ ["--pc-accent" as string]: accent }}>
      <div className="pc-card-head">
        <span className="pc-badge">{name}</span>
        {onRemove && (
          <button type="button" className="pc-remove" onClick={onRemove}>Remove</button>
        )}
      </div>

      <div className="pc-result">
        <Donut parts={res.parts} total={res.total} />
        <ul className="pc-legend">
          {PARTS.map((p) => (
            <li key={p.key} className={res.parts[p.key] > 0 ? "" : "is-zero"}>
              <i style={{ background: p.color }} />
              <span>{p.label}</span>
              <b>{money(res.parts[p.key])}</b>
            </li>
          ))}
          <li className="pc-total"><span>Estimated total</span><b>{money(res.total)}/mo</b></li>
        </ul>
      </div>

      <div className="pc-fields">
        <Field label="Home price" value={s.price} display={"Loan amount " + money(res.loan)} min={100000} max={2000000} step={5000} onChange={upd("price")} prefix="$" />
        <Field label="Down payment" value={s.downPct} display={money(res.down) + " down"} min={0} max={60} step={0.5} onChange={upd("downPct")} suffix="%" />
        <Field label="Interest rate" value={s.rate} display="Estimated annual rate" min={3} max={10} step={0.125} onChange={upd("rate")} suffix="%" />
        <div className="pc-field">
          <div className="pc-field-top"><label>Loan term</label></div>
          <div className="pc-term">
            {[30, 15].map((t) => (
              <button key={t} type="button" className={s.term === t ? "active" : ""} onClick={() => set({ ...s, term: t as 30 | 15 })}>{t} years</button>
            ))}
          </div>
        </div>
        <details className="pc-more" open>
          <summary>Taxes, insurance, HOA &amp; mortgage insurance</summary>
          <Field label="Property tax rate" value={s.taxRate} display={money((s.price * s.taxRate) / 100) + " per year"} min={0} max={3} step={0.05} onChange={upd("taxRate")} suffix="%" />
          <Field label="Homeowners insurance" value={s.insurance} display={money(s.insurance / 12) + " per month"} min={0} max={15000} step={100} onChange={upd("insurance")} prefix="$" suffix="/yr" />
          <Field label="HOA fees" value={s.hoa} display="Monthly, if the home has an association" min={0} max={1500} step={10} onChange={upd("hoa")} prefix="$" suffix="/mo" />
          <Field label="Mortgage insurance rate" value={s.miRate} display={s.downPct < 20 ? "Applies because down payment is under 20%" : "Not applied at 20% down or more"} min={0} max={1.5} step={0.05} onChange={upd("miRate")} suffix="%" />
        </details>
      </div>
    </div>
  );
}

export default function PaymentCalculator() {
  const [a, setA] = useState<Scenario>(DEFAULT_A);
  const [b, setB] = useState<Scenario | null>(null);

  const ra = compute(a);
  const rb = b ? compute(b) : null;
  const diff = rb ? rb.total - ra.total : 0;

  function reviewWithNelly(e: React.MouseEvent) {
    e.preventDefault();
    const line = (n: string, s: Scenario, r: ReturnType<typeof compute>) =>
      `${n}: ${money(s.price)} home, ${s.downPct}% down, ${s.rate}% rate, ${s.term} years, about ${money(r.total)}/mo.`;
    let msg = "Hi Nelly, I tried your payment calculator and would like to review these numbers with you. " + line("Scenario A", a, ra);
    if (b && rb) msg += " " + line("Scenario B", b, rb);
    const box = document.getElementById("cf-message") as HTMLTextAreaElement | null;
    if (box) box.value = msg;
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => (document.getElementById("cf-name") as HTMLInputElement | null)?.focus({ preventScroll: true }), 700);
    }
  }

  return (
    <div className="pc">
      <div className={"pc-grid" + (b ? " is-compare" : "")}>
        <ScenarioCard name={b ? "Scenario A" : "Your estimate"} s={a} set={setA} accent="#1E2F5A" />
        {b ? (
          <ScenarioCard name="Scenario B" s={b} set={setB} accent="#C9A227" onRemove={() => setB(null)} />
        ) : (
          <button type="button" className="pc-add" onClick={() => setB({ ...a, downPct: 20 })}>
            <span className="pc-add-plus">+</span>
            <span className="pc-add-t">Compare a second scenario</span>
            <span className="pc-add-s">Try a different home price or down payment side by side.</span>
          </button>
        )}
      </div>

      {rb && (
        <div className="pc-diff" aria-live="polite">
          {Math.abs(diff) < 1
            ? "Both scenarios come out about the same each month."
            : `Scenario B is ${money(Math.abs(diff))} per month ${diff < 0 ? "less" : "more"} than Scenario A.`}
        </div>
      )}

      <div className="pc-cta">
        <a className="btn btn-primary pc-cta-btn" href="#contact-form" onClick={reviewWithNelly}>Review These Numbers With Nelly</a>
        <p>No sign up needed to use the calculator. When you are ready, Nelly will walk through your real numbers with you.</p>
      </div>

      <p className="pc-legal">
        Estimates are for informational purposes only and are not a loan quote or commitment to lend. Property tax, insurance, HOA and mortgage insurance figures are editable assumptions; actual amounts vary by property, county, credit, loan program and lender. Loan approval and terms are subject to credit, income, assets, property and program requirements.
      </p>
    </div>
  );
}
