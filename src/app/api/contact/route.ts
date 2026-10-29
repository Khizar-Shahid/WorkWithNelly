import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* ── recipients & external endpoints ─────────────────────────── */

const NOTIFY_EMAILS = [
  'abdurrehman.swe@gmail.com',
  'khizar@aplusactive.com',
  'tassadiqhussain35@gmail.com',
];

const GOOGLE_SHEET_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxNFAijFT1cJXW8-hprEMOKNRIyEdloLviqe5Y2g3njQJBoi_mit_w0jAXuI699cwKvHQ/exec';

/* ── POST handler ────────────────────────────────────────────── */

export async function POST(request: Request) {
  /* 1. Parse & validate */
  let body: { name?: string; email?: string; phone?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { name, email, phone, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    );
  }

  /* 2. Build the email HTML */
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#1a1a1a">New Lead from WorkWithNelly.com</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666">Name</td><td style="padding:8px 0;font-weight:600">${esc(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0">${esc(phone || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f5f5f5;border-radius:8px">
        <strong>Message:</strong>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      </div>
      <p style="margin-top:24px;font-size:12px;color:#999">Sent via the contact form on workwithnelly.com</p>
    </div>
  `;

  /* 3. Dispatch both in parallel (Promise.allSettled) */

  // Resend email
  const resendPromise = (async () => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL || 'Work With Nelly <onboarding@resend.dev>';
    const { error } = await resend.emails.send({
      from,
      to: NOTIFY_EMAILS,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html,
    });
    if (error) throw new Error(error.message);
  })();

  // Google Sheet relay (same payload shape the Apps Script expects)
  const sheetPromise = (async () => {
    const params = new URLSearchParams();
    params.set('name', name);
    params.set('email', email);
    if (phone) params.set('phone', phone);
    params.set('message', message);
    // Google Apps Script processes the POST then returns a 302 redirect.
    // Using redirect:'manual' prevents fetch from following it (and
    // converting POST→GET), since the data is already saved by that point.
    const res = await fetch(GOOGLE_SHEET_ENDPOINT, {
      method: 'POST',
      body: params,
      redirect: 'manual',
    });
    // 302 means Apps Script received and processed the data successfully
    if (res.status >= 400) {
      throw new Error(`Google Sheet returned ${res.status}`);
    }
  })();

  const [resendResult, sheetResult] = await Promise.allSettled([
    resendPromise,
    sheetPromise,
  ]);

  /* 4. Evaluate results (Option C — succeed if at least one worked) */
  const resendOk = resendResult.status === 'fulfilled';
  const sheetOk = sheetResult.status === 'fulfilled';

  if (!resendOk) {
    console.error('[contact] Resend failed:', (resendResult as PromiseRejectedResult).reason);
  }
  if (!sheetOk) {
    console.error('[contact] Google Sheet failed:', (sheetResult as PromiseRejectedResult).reason);
  }

  if (!resendOk && !sheetOk) {
    return NextResponse.json(
      { error: 'Unable to deliver your message right now. Please call Nelly directly at (786) 286-5906.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, resend: resendOk, sheet: sheetOk });
}

/* ── helpers ──────────────────────────────────────────────────── */

function esc(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
