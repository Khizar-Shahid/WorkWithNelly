// @ts-nocheck
"use client";
import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Original JS logic
    // sticky header state
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // mobile nav toggle
  const toggle = containerRef.current.querySelector('.navtoggle');
  const navlinks = containerRef.current.querySelector('.navlinks');
  toggle.addEventListener('click', () => {
    const open = navlinks.style.display === 'flex';
    navlinks.style.display = open ? 'none' : 'flex';
    navlinks.style.cssText += open ? '' : 'position:absolute;top:100%;left:0;right:0;background:#F7F3EB;flex-direction:column;padding:20px 32px;gap:18px;border-bottom:1px solid rgba(19,29,56,0.08);';
    navlinks.querySelectorAll('a').forEach(a => a.style.color = '#1E2F5A');
  });

  // background music: always on by default. Browsers refuse audio with sound until the
  // visitor has interacted with the page, so try right away and keep retrying on every
  // real interaction (tap, click, key) until it starts. Scrolling alone does not count
  // as permission in any browser, which is why we listen for pointer/touch/key events.
  // A pause only lasts for the current visit (sessionStorage), so every new visit starts with music.
  (function musicInit(){
    const btn = document.getElementById('musicToggle');
    const audio = document.getElementById('bgMusic');
    if (!btn || !audio) return;
    audio.volume = 0.35;
    let userPaused = false;
    try { userPaused = sessionStorage.getItem('nellyMusicPaused') === '1'; } catch(e){}

    function setState(playing){
      btn.classList.toggle('playing', playing);
      btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      btn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
      btn.title = playing ? 'Pause background music' : 'Play background music';
    }
    function rememberPause(paused){
      userPaused = paused;
      try { paused ? sessionStorage.setItem('nellyMusicPaused','1') : sessionStorage.removeItem('nellyMusicPaused'); } catch(e){}
    }
    function playWithTimeout(){
      return Promise.race([
        audio.play(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000))
      ]);
    }

    audio.addEventListener('playing', () => { setState(true); stopListening(); });
    audio.addEventListener('pause', () => setState(false));

    btn.onclick = () => {
      if (audio.paused) {
        rememberPause(false);
        playWithTimeout().catch(() => setState(false));
      } else {
        rememberPause(true);
        audio.pause();
      }
    };

    const events = ['pointerdown','touchend','click','keydown'];
    function onInteract(e){
      if (userPaused || !audio.paused) return stopListening();
      if (e && btn.contains(e.target)) return; // the button handles its own click
      playWithTimeout().catch(() => {});
    }
    function stopListening(){
      events.forEach(ev => document.removeEventListener(ev, onInteract, true));
    }

    if (!userPaused) {
      audio.preload = 'auto';
      playWithTimeout().catch(() => {});
      events.forEach(ev => document.addEventListener(ev, onInteract, true));
    }
  })();

  // payment estimator widget
  const price = document.getElementById('price');
  const down = document.getElementById('down');
  const rate = document.getElementById('rate');
  const priceOut = document.getElementById('priceOut');
  const downOut = document.getElementById('downOut');
  const rateOut = document.getElementById('rateOut');
  const paymentOut = document.getElementById('paymentOut');
  const termBtns = containerRef.current.querySelectorAll('.toggle-row button');
  let term = 30;

  function fmt(n){ return Math.round(n).toLocaleString('en-US'); }

  function calc(){
    const p = parseFloat(price.value);
    const d = parseFloat(down.value)/100;
    const r = parseFloat(rate.value)/100/12;
    const n = term*12;
    const loan = p*(1-d);
    const payment = r === 0 ? loan/n : loan * (r*Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    priceOut.textContent = '$' + fmt(p);
    downOut.textContent = down.value + '%';
    rateOut.textContent = parseFloat(rate.value).toFixed(3).replace(/0+$/,'').replace(/\.$/,'') + '%';
    paymentOut.textContent = fmt(payment);
  }

  [price,down,rate].forEach(el => el.addEventListener('input', calc));
  termBtns.forEach(btn => btn.addEventListener('click', () => {
    termBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    term = parseInt(btn.dataset.term);
    calc();
  }));
  calc();

  // contact form -> posts to a Google Apps Script web app that appends a row to the CRM tracker sheet
  const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxNFAijFT1cJXW8-hprEMOKNRIyEdloLviqe5Y2g3njQJBoi_mit_w0jAXuI699cwKvHQ/exec';
  async function sendContactForm(e){
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('cf-submit');
    const status = document.getElementById('cf-status');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.className = 'form-note';
    try {
      // no-cors: Apps Script redirects its response, so the browser can't read it; a network failure still throws
      await fetch(LEADS_ENDPOINT, { method:'POST', mode:'no-cors', body:new URLSearchParams(new FormData(form)) });
      form.reset();
      btn.textContent = 'Message Sent';
      status.className = 'form-note ok';
      status.textContent = 'Thank you! Nelly received your message and will reach out soon.';
    } catch (err) {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      status.className = 'form-note err';
      status.textContent = 'Something went wrong. Please call Nelly at 786-286-5906.';
    }
    return false;
  }
  const contactFormEl = containerRef.current.querySelector('#contact-form');
  if (contactFormEl) {
    contactFormEl.addEventListener('submit', sendContactForm);
  }

  // featured loan program explorer + clickable program chips that prefill the contact form
  (function programInit(){
    const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2"><circle cx="12" cy="12" r="10" stroke-width="1.6"/><path d="M8 12.5l2.6 2.6L16 9.6"/></svg>';
    const GOALS = ['Purchase','Refinance','Invest','Build Wealth'];
    const programs = [
      { tag:'FHA', title:'FHA W/VOE', sub:'Homeownership made possible.', stat:'As low as 3.5% down', quote:'Your home. Our priority.',
        points:['As low as 3.5% down','Use your employment income (VOE)','Competitive rates','Flexible credit guidelines','Great option for first-time homebuyers'] },
      { tag:'Conventional', title:'Conventional W/VOE', sub:'More opportunities. A brighter tomorrow.', stat:'As low as 3% down', quote:'More opportunities. A brighter tomorrow.',
        points:['As low as 3% down','Use your employment income (VOE)','Competitive rates','No mortgage insurance with 20% down','Ideal for long-term wealth building'] },
      { tag:'FHA &middot; Self-Employed', title:'FHA Self-Employed P&amp;L Program', sub:'Turn your business into a home.', stat:'No tax returns required', quote:'Small business. Big dreams.',
        points:['24 months Profit &amp; Loss','3 months bank statements required','No tax returns required','Flexible guidelines','Great for self-employed borrowers'] },
      { tag:'Conventional &middot; Self-Employed', title:'Conventional Self-Employed P&amp;L Program', sub:'Flexible solutions for entrepreneurs.', stat:'No tax returns required', quote:'Your business builds opportunity.',
        points:['24 months Profit &amp; Loss','3 months bank statements required','No tax returns required','Flexible guidelines','Designed for business owners and self-employed borrowers'] },
      { tag:'EEP / ITIN', title:'EEP / ITIN', sub:'Expanded opportunities for more families.', stat:'ITIN borrowers welcome', quote:'More families. Brighter futures.',
        points:['ITIN borrowers welcome','Flexible documentation options','Purchase or refinance','Competitive rates','A path to homeownership'] }
    ];
    const tabs = containerRef.current.querySelectorAll('.prog-tab');
    const body = document.getElementById('progBody');
    const quote = containerRef.current.querySelector('.pp-quote');
    if (!tabs.length || !body) return;

    function askAbout(name){
      const msg = document.getElementById('cf-message');
      if (msg) msg.value = "Hi Nelly, I'd like to learn more about the " + name + " option.";
      document.getElementById('contact-form').scrollIntoView({ behavior:'smooth', block:'center' });
      setTimeout(() => document.getElementById('cf-name').focus({ preventScroll:true }), 700);
    }

    function render(i){
      const p = programs[i];
      body.innerHTML =
        '<div class="pp-anim">' +
          '<div class="pp-tag">' + p.tag + '</div>' +
          '<h3 class="pp-title">' + p.title + '</h3>' +
          '<p class="pp-sub">' + p.sub + '</p>' +
          '<div class="pp-stat">' + p.stat + '</div>' +
          '<ul class="pp-list">' + p.points.map(t => '<li>' + CHECK + '<span>' + t + '</span></li>').join('') + '</ul>' +
        '</div>' +
        '<div class="pp-foot">' +
          '<div class="pp-goals">' + GOALS.map(g => '<span>' + g + '</span>').join('') + '</div>' +
          '<a class="btn btn-primary" href="#contact-form" data-ask>Ask About This Program</a>' +
        '</div>';
      quote.textContent = p.quote;
      body.querySelector('[data-ask]').addEventListener('click', e => {
        e.preventDefault();
        const tmp = document.createElement('div'); tmp.innerHTML = p.title;
        askAbout(tmp.textContent);
      });
    }

    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected','false'); });
      t.classList.add('active'); t.setAttribute('aria-selected','true');
      render(+t.dataset.prog);
    }));
    render(0);

    containerRef.current.querySelectorAll('.loan-item').forEach(item => {
      item.setAttribute('role','button'); item.setAttribute('tabindex','0');
      const go = () => askAbout(item.querySelector('span').textContent.trim());
      item.addEventListener('click', go);
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  })();

  // kinetic text reveal — splits headings into masked, staggered words.
  // Hero heading reveals on page load; section headings reveal once as they scroll into view.
  (function kineticInit(){
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    function splitWords(el){
      const walk = (parent) => {
        Array.from(parent.childNodes).forEach(n => {
          if (n.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(part => {
              if (part === '') return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
              const mask = document.createElement('span');
              mask.className = 'kinetic-mask';
              const word = document.createElement('span');
              word.className = 'kinetic-word';
              word.textContent = part;
              mask.appendChild(word);
              frag.appendChild(mask);
            });
            parent.replaceChild(frag, n);
          } else if (n.nodeType === Node.ELEMENT_NODE && n.tagName !== 'BR') {
            walk(n);
          }
        });
      };
      walk(el);
      el.querySelectorAll('.kinetic-word').forEach((w, i) => {
        w.style.animationDelay = (i * 0.055) + 's';
      });
    }

    const kinetics = containerRef.current.querySelectorAll('.kinetic');
    kinetics.forEach(el => {
      splitWords(el);
      if (el.dataset.kineticMode === 'load') {
        requestAnimationFrame(() => setTimeout(() => el.classList.add('kinetic-ready'), 200));
      } else {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('kinetic-ready');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4, rootMargin: '0px 0px -8% 0px' });
        io.observe(el);
      }
    });
  })();

  // scroll reveal for cards/rows — staggered per group
  (function revealInit(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const groups = [
      '.who-grid > .who-card', '.loan-cats > .loan-cat', '.timeline > .tl-item',
      '.quote-grid > .quote-card', '.widget-wrap > *', '.about-grid > *', '.photo-strip > *', '.prog > *', '.num-grid > *'
    ];
    groups.forEach(sel => {
      containerRef.current.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal-up');
        el.style.transitionDelay = (Math.min(i, 5) * 0.08) + 's';
      });
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    containerRef.current.querySelectorAll('.reveal-up').forEach(el => io.observe(el));
  })();
  }, []);

  return (
    <div ref={containerRef}>
      <header id="siteHeader">
  <nav className="nav">
    <a href="#home" className="logo">
      <img className="mark mark-white" src="assets/nelly_mark_white.png" alt="" />
      <img className="mark mark-color" src="assets/nelly_mark.png" alt="Nelly Santiesteban logo" />
      <span className="wordmark"><span className="lw-name">Nelly Santiesteban</span><span className="lw-title">Mortgage Loan Officer</span></span>
    </a>
    <div className="navlinks">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#help">Who I Help</a>
      <a href="#process">How It Works</a>
      <a href="#loans">Loan Options</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="nav-cta">
      <a className="nav-phone" href="tel:+17862865906">786.286.5906</a>
      <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
    </div>
    <button className="navtoggle" aria-label="Menu"><span></span><span></span><span></span></button>
  </nav>
</header>

<main>

  
  <section id="home" className="hero">
    <div className="hero-bg">
      <img src="assets/nelly_hero_house.jpg" alt="" className="hero-photo" />
    </div>
    <div className="hero-overlay"></div>

    <div className="wrap hero-content">
      <span className="eyebrow">Mortgage Loan Officer</span>
      <h1 className="serif kinetic" data-kinetic-mode="load">Mortgage Loans in Miami, FL</h1>
      <p className="sub">I help homebuyers across Florida find the right financing for their goals and guide them from the first conversation to the closing table with confidence. Speak English and Spanish.</p>
      <div className="hero-ctas">
        <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
      </div>
      <div className="stat-row">
        <div className="stat-chip"><span className="num">20+</span><span className="lbl">LOAN OPTIONS</span></div>
        <div className="stat-chip"><span className="lbl lbl-solo">PERSONALIZED LOAN OPTIONS</span></div>
        <div className="stat-chip"><span className="num">FAST</span><span className="lbl">RESPONSIVE PRE-APPROVALS</span></div>
      </div>
    </div>
  </section>

  
  <section id="about">
    <div className="wrap about-grid">
      <div className="about-photo">
        <img src="assets/nelly_headshot_new.jpg" alt="Nelly Santiesteban, Miami mortgage loan officer" />
        <div className="about-tag">
          <div className="n">Nelly Santiesteban</div>
          <div className="l">MORTGAGE LOAN OFFICER</div>
        </div>
      </div>
      <div className="about-copy">
        <span className="eyebrow">About Nelly</span>
        <p className="lead">Mortgage financing should feel clear, personal, and manageable.</p>
        <p>I've been helping clients navigate the mortgage process since 2005, and I believe great service starts with communication. I take the time to understand each client's goals, explain their options clearly, and stay involved from the first conversation through closing.</p>
        <p>Whether you're buying your first home, investing, refinancing, or need a more specialized loan program, my goal is to make the process feel less overwhelming and help you move forward with confidence.</p>
        <div className="sig">
          <div className="name">Nelly Santiesteban</div>
          <div className="role">Mortgage Loan Officer &middot; NMLS #1808120</div>
        </div>
      </div>
    </div>
    <div className="wrap">
      <div className="photo-strip">
        <figure className="ps-item ps-tall"><img src="assets/nelly_gallery_lobby.jpg" alt="Nelly Santiesteban meeting a client" /></figure>
        <figure className="ps-item"><img src="assets/nelly_gallery_alt.jpg" alt="Nelly Santiesteban, mortgage loan officer" /></figure>
        <figure className="ps-item ps-mono"><img src="assets/nelly_gallery_work_color.jpg" alt="Nelly Santiesteban working through loan options" /></figure>
      </div>
    </div>
  </section>

  
  <section id="help">
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Who I Help</span>
        <h2 className="kinetic" data-kinetic-mode="scroll">Homebuyers who want a guide, not just a lender.</h2>
        <p>Every client is different. The plan should be too.</p>
      </div>
      <div className="who-grid">
        <div className="who-card">
          <div className="who-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87M15 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg></div>
          <h3>First-Time Homebuyers</h3>
          <p>Guidance from pre-approval through closing, with clear explanations every step of the way.</p>
        </div>
        <div className="who-card">
          <div className="who-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"/></svg></div>
          <h3>Move-Up &amp; Repeat Buyers</h3>
          <p>Financing strategies for buyers purchasing their next home, upgrading, downsizing, or relocating.</p>
        </div>
        <div className="who-card">
          <div className="who-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg></div>
          <h3>Real Estate Investors</h3>
          <p>Loan options for investment properties, DSCR financing, rental properties, and other real estate opportunities.</p>
        </div>
        <div className="who-card">
          <div className="who-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16v16H4zM4 9h16M9 21V9"/></svg></div>
          <h3>Self-Employed Borrowers</h3>
          <p>Flexible financing options for business owners, 1099 earners, and borrowers with non-traditional income.</p>
        </div>
        <div className="who-card">
          <div className="who-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z"/></svg></div>
          <h3>Foreign National &amp; ITIN Buyers</h3>
          <p>Mortgage solutions for qualified buyers who may not have traditional U.S. income or residency documentation.</p>
        </div>
        <div className="who-card">
          <div className="who-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/><path d="M9 21v-6h6v6"/></svg></div>
          <h3>Homeowners Looking To Refinance</h3>
          <p>Options for homeowners looking to improve their loan structure, access equity, or refinance when it makes financial sense.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="process" style={{ background: 'var(--cream-2)' }}>
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">How It Works</span>
        <h2 className="kinetic" data-kinetic-mode="scroll">From first hello to closing day.</h2>
      </div>
      <div className="timeline">
        <div className="tl-item">
          <div className="tl-num">1</div>
          <h3>Let's Talk</h3>
          <p>We'll start with a quick conversation about your goals, timeline, income, and what you're looking to accomplish.</p>
        </div>
        <div className="tl-item">
          <div className="tl-num">2</div>
          <h3>Get Pre-Approved</h3>
          <p>I'll review your information, explain your financing options, and help you understand what you may qualify for.</p>
        </div>
        <div className="tl-item">
          <div className="tl-num">3</div>
          <h3>Find The Right Home</h3>
          <p>Once you're ready to shop, I'll stay connected with you and your real estate agent throughout the process.</p>
        </div>
        <div className="tl-item">
          <div className="tl-num">4</div>
          <h3>Close With Confidence</h3>
          <p>From contract to closing, I'll keep you updated, help manage the financing process, and make sure you know what to expect along the way.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="loans">
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Loan Options</span>
        <h2 className="kinetic" data-kinetic-mode="scroll">FINANCING FOR MORE THAN ONE KIND OF BUYER.</h2>
      </div>
      <p className="loan-intro">Every borrower &mdash; every story is different. Through ACE Florida Mortgage, I have access to a variety of loan programs and lenders, allowing me to help identify financing options that may fit your goals and financial situation.</p>

      <div className="prog" id="programExplorer">
        <div className="prog-tabs" role="tablist" aria-label="Featured loan programs">
          <button className="prog-tab active" role="tab" aria-selected="true" data-prog="0"><span className="pt-num">01</span><span className="pt-txt"><span className="pt-tag">FHA</span><span className="pt-name">FHA W/VOE</span><span className="pt-stat">As low as 3.5% down</span></span><span className="pt-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>
          <button className="prog-tab" role="tab" aria-selected="false" data-prog="1"><span className="pt-num">02</span><span className="pt-txt"><span className="pt-tag">Conventional</span><span className="pt-name">Conventional W/VOE</span><span className="pt-stat">As low as 3% down</span></span><span className="pt-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>
          <button className="prog-tab" role="tab" aria-selected="false" data-prog="2"><span className="pt-num">03</span><span className="pt-txt"><span className="pt-tag">FHA &middot; Self-Employed</span><span className="pt-name">FHA P&amp;L Program</span><span className="pt-stat">No tax returns required</span></span><span className="pt-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>
          <button className="prog-tab" role="tab" aria-selected="false" data-prog="3"><span className="pt-num">04</span><span className="pt-txt"><span className="pt-tag">Conventional &middot; Self-Employed</span><span className="pt-name">Conventional P&amp;L Program</span><span className="pt-stat">Flexible solutions for entrepreneurs</span></span><span className="pt-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>
          <button className="prog-tab" role="tab" aria-selected="false" data-prog="4"><span className="pt-num">05</span><span className="pt-txt"><span className="pt-tag">EEP / ITIN</span><span className="pt-name">EEP / ITIN</span><span className="pt-stat">ITIN borrowers welcome</span></span><span className="pt-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>
        </div>
        <div className="prog-panel" role="tabpanel" aria-live="polite">
          <div className="pp-media">
            <img src="assets/nelly_closing_family.jpg" alt="Nelly Santiesteban helping a family sign their home loan documents" loading="lazy" />
            <div className="pp-quote">We guide you from A to Z.</div>
          </div>
          <div className="pp-body" id="progBody"></div>
        </div>
      </div>

      <div className="menu-head">
        <h3>Every program I offer</h3>
        <p>Tap any program to ask me about it.</p>
      </div>
      <div className="loan-cats">
        <div className="loan-cat">
          <h3>Home Purchase</h3>
          <div className="loan-cat-list">
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/></svg></div><span>Conventional Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div><span>FHA Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16v4H4zM4 12h16M4 20h10"/></svg></div><span>VA Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg></div><span>USDA Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><span>Jumbo Loans</span></div>
          </div>
        </div>
        <div className="loan-cat">
          <h3>Self-Employed &amp; Alternative Income</h3>
          <div className="loan-cat-list">
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16v16H4zM4 9h16M9 21V9"/></svg></div><span>Bank Statement Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M9 17V7h4a3 3 0 1 1 0 6H9m0 4h6"/></svg></div><span>1099 / P&amp;L Programs</span></div>
          </div>
        </div>
        <div className="loan-cat">
          <h3>Investors</h3>
          <div className="loan-cat-list">
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg></div><span>DSCR Investment Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 21h7V10H3zM14 21h7V3h-7z"/></svg></div><span>Fix &amp; Flip</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 12h16M4 6h16M4 18h10"/></svg></div><span>Bridge Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg></div><span>Non-Warrantable Condos</span></div>
          </div>
        </div>
        <div className="loan-cat">
          <h3>Specialty Loans</h3>
          <div className="loan-cat-list">
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16v16H4z"/><circle cx="9" cy="9" r="2"/><path d="M4 16l4-4 4 4 6-6"/></svg></div><span>ITIN Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z"/></svg></div><span>Foreign National Loans</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5"/></svg></div><span>Construction / One-Time Close</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/><path d="M9 21v-6h6v6"/></svg></div><span>Reverse Mortgage</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"/></svg></div><span>Commercial</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 20h18M5 20V10l4-2v12M13 20V6l4-2v16"/></svg></div><span>Vacant Land</span></div>
            <div className="loan-item"><div className="li-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4"/></svg></div><span>SBA Loans</span></div>
          </div>
        </div>
      </div>

      <div className="loan-foot">
        <p>Not sure which option fits your situation? Let's talk.</p>
        <a className="btn btn-dark" href="#contact">Explore My Options</a>
      </div>
    </div>
  </section>

  
  <section id="numbers">
    <div className="wrap num-grid">
      <div className="num-photo">
        <img src="assets/nelly_closing_signing.jpg" alt="Nelly Santiesteban reviewing loan documents with a couple" loading="lazy" />
        <div className="np-badge">Guiding you home.</div>
      </div>
      <div className="num-copy">
        <span className="eyebrow">Before You Tour Homes</span>
        <h2 className="kinetic" data-kinetic-mode="scroll">KNOW YOUR THREE NUMBERS.</h2>
        <p className="num-lead">Before you begin touring homes, make sure you understand these three important numbers:</p>
        <div className="num-cards">
          <div className="num-card"><span className="nc-n">01</span><div className="nc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg></div><span className="nc-t">Your comfortable monthly payment</span></div>
          <div className="num-card"><span className="nc-n">02</span><div className="nc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg></div><span className="nc-t">Your estimated cash to close</span></div>
          <div className="num-card"><span className="nc-n">03</span><div className="nc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3M16 7l3 3M18 5l2 2"/></svg></div><span className="nc-t">Your realistic purchase-price range</span></div>
        </div>
        <p className="np">The amount you qualify to borrow is not always the same as the payment you will feel comfortable making every month.</p>
        <p className="np">Your total housing payment may include principal, interest, property taxes, homeowners insurance, mortgage insurance and HOA fees. Your cash to close may also include more than just the down payment.</p>
        <p className="np">A mortgage review can help you understand the complete picture before you fall in love with a property.</p>
        <div className="num-ctas">
          <div className="ask">Ready to review your numbers?</div>
          <a className="btn btn-primary" href="#contact-form">Review My Numbers</a>
          <a className="btn btn-ghost-light" href="#estimator">Try the Payment Estimator</a>
        </div>
        <p className="num-legal">Loan approval and terms are subject to credit, income, assets, property and program requirements.</p>
      </div>
    </div>
  </section>

  
  <section id="estimator" style={{ background: 'var(--cream-2)' }}>
    <div className="wrap widget-wrap">
      <div className="widget-copy">
        <div className="sec-head">
          <span className="eyebrow">Payment Estimator</span>
          <h2 className="kinetic" data-kinetic-mode="scroll">GET A QUICK PAYMENT ESTIMATE.</h2>
          <p>Adjust the home price, down payment, estimated interest rate, and loan term to get a general idea of principal and interest.</p>
        </div>
        <a className="btn btn-dark" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Get My Personalized Options</a>
      </div>
      <div className="widget-card">
        <div className="widget-top">
          <h3>Payment Estimator</h3>
        </div>
        <div className="field-row">
          <label>Home Price <b id="priceOut">$400,000</b></label>
          <input type="range" id="price" min="150000" max="1200000" step="5000" defaultValue="400000" />
        </div>
        <div className="field-row">
          <label>Down Payment <b id="downOut">10%</b></label>
          <input type="range" id="down" min="0" max="50" step="1" defaultValue="10" />
        </div>
        <div className="field-row">
          <label>Interest Rate <b id="rateOut">6.5%</b></label>
          <input type="range" id="rate" min="4" max="9" step="0.125" defaultValue="6.5" />
        </div>
        <div className="toggle-row">
          <button className="active" data-term="30">30 Year</button>
          <button data-term="15">15 Year</button>
        </div>
        <div className="widget-output">
          <div className="amt"><span>$</span><span id="paymentOut">1,822</span><span>/mo</span></div>
        </div>
        <div className="widget-disclaimer">Estimate for informational purposes only. Payment shown is principal and interest only and does not include property taxes, homeowners insurance, mortgage insurance, HOA fees, or other applicable costs. This is not a loan quote or commitment to lend.</div>
      </div>
    </div>
  </section>

  
  <section id="reviews" style={{ background: 'var(--cream-2)' }}>
    <div className="wrap">
      <div className="sec-head center">
        <span className="eyebrow">Client Reviews</span>
        <h2 className="kinetic" data-kinetic-mode="scroll">What it's actually like to work with Nelly.</h2>
      </div>
      
      <div className="quote-grid">
        <div className="quote-card">
          <div className="stars">
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
          </div>
          <p>Nelly explained every step in a way that actually made sense to us. We closed in five weeks and never once felt lost.</p>
          <div className="quote-attr">
            <div className="quote-who">
              <div className="quote-avatar">C</div>
              <div>
                <div className="who">Carla M.</div>
                <div className="where">Miami, FL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-card">
          <div className="stars">
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
          </div>
          <p>She walked my parents through the entire process in Spanish. No confusion, no stress. We are homeowners because of her.</p>
          <div className="quote-attr">
            <div className="quote-who">
              <div className="quote-avatar">D</div>
              <div>
                <div className="who">Daniel R.</div>
                <div className="where">Palmetto Bay, FL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-card">
          <div className="stars">
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>
          </div>
          <p>I messaged her at 9pm with a random question and she answered within minutes. That is the kind of service you remember.</p>
          <div className="quote-attr">
            <div className="quote-who">
              <div className="quote-avatar">A</div>
              <div>
                <div className="who">Ashley T.</div>
                <div className="where">Kendall, FL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ig-cta">
        <a className="btn btn-dark" href="https://www.google.com/search?q=Nelly+Santiesteban+Mortgage+Loan+Officer&amp;kgmid=%2Fg%2F11yr03xkym" target="_blank" rel="noopener">Read My Google Reviews</a>
        <a className="btn btn-outline" href="https://www.zillow.com/lender-profile/workwithnelly/" target="_blank" rel="noopener">View Zillow Profile</a>
      </div>
      <div className="social-row">
        <a href="https://www.instagram.com/workwithnelly/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
        <a href="https://www.facebook.com/workwithnelly/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z"/></svg></a>
        <a href="https://www.linkedin.com/in/nelly-santiesteban-17613832/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"/></svg></a>
        <a href="https://www.google.com/search?q=Nelly+Santiesteban+Mortgage+Loan+Officer&amp;kgmid=%2Fg%2F11yr03xkym" target="_blank" rel="noopener" aria-label="Google Business Profile"><span className="g-mark">G</span></a>
      </div>
    </div>
  </section>

  
  <section id="contact" style={{ paddingTop: '0' }}>
    <div className="wrap">
      <div className="final-cta">
        <div className="cta-grid">
          <div>
            <h2 className="kinetic" data-kinetic-mode="scroll">READY TO TAKE THE NEXT STEP?</h2>
            <p className="lede">Whether you're ready to apply or just have a few questions, I'm here to help you understand your options and decide what makes sense for you.</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
              <a className="btn btn-ghost-light" href="#contact-form">Let's Talk</a>
            </div>
            <div className="contact-info">
              <div className="name">Nelly Santiesteban</div>
              <div className="role">Mortgage Loan Officer</div>
              <div className="role">NMLS #1808120</div>
              <a href="tel:+17862865906">Phone: 786-286-5906</a>
              <a href="mailto:workwithnelly1@gmail.com">Email: workwithnelly1@gmail.com</a>
              <div className="social-label">Social Media Accounts</div>
              <div className="foot-social">
                <a href="https://www.instagram.com/workwithnelly/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
                <a href="https://www.facebook.com/workwithnelly/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z"/></svg></a>
                <a href="https://www.zillow.com/lender-profile/workwithnelly/" target="_blank" rel="noopener" aria-label="Zillow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/></svg></a>
                <a href="https://www.linkedin.com/in/nelly-santiesteban-17613832/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"/></svg></a>
                <a href="https://www.google.com/search?q=Nelly+Santiesteban+Mortgage+Loan+Officer&amp;kgmid=%2Fg%2F11yr03xkym" target="_blank" rel="noopener" aria-label="Google Business Profile"><span className="g-mark">G</span></a>
              </div>
            </div>
          </div>
          <form className="contact-form" id="contact-form">
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
              <textarea id="cf-message" name="message" placeholder="Tell me a little about what you're looking to do"></textarea>
            </div>
            <div className="hp-field" aria-hidden="true"><label htmlFor="cf-website">Website</label><input type="text" id="cf-website" name="website" tabIndex="-1" autoComplete="off" /></div>
            <button type="submit" className="btn btn-primary" id="cf-submit">Send Message</button>
            <div className="form-note" id="cf-status" role="status">Your message goes straight to Nelly.</div>
          </form>
        </div>
      </div>
    </div>
  </section>

</main>

<footer>
  <div className="wrap">
    <div className="foot-grid">
      <div>
        <div className="logo">
          <img className="mark mark-white" src="assets/nelly_mark_white.png" alt="Nelly Santiesteban logo" />
          <span className="wordmark"><span className="lw-name">Nelly Santiesteban</span><span className="lw-title">Mortgage Loan Officer</span></span>
        </div>
        <p style={{ maxWidth: '260px' }}>Miami based mortgage loan officer helping buyers across Florida get the financing to live where they have always pictured themselves.</p>
      </div>
      <div className="foot-col">
        <h4>Explore</h4>
        <a href="#about">About</a>
        <a href="#help">Who I Help</a>
        <a href="#process">How It Works</a>
        <a href="#loans">Loan Options</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="foot-col">
        <h4>Get Started</h4>
        <a href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
        <a href="#contact">Let's Talk</a>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms</a>
      </div>
      <div className="foot-card">
        <div className="cn">Nelly Santiesteban</div>
        <div className="ct">Mortgage Loan Officer &middot; NMLS #1808120</div>
        <a href="tel:+17862865906">786.286.5906</a>
        <a href="mailto:workwithnelly1@gmail.com">workwithnelly1@gmail.com</a>
        <div className="foot-social">
          <a href="https://www.instagram.com/workwithnelly/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="https://www.facebook.com/workwithnelly/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z"/></svg></a>
          <a href="https://www.zillow.com/lender-profile/workwithnelly/" target="_blank" rel="noopener" aria-label="Zillow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 11l9-7 9 7M5 10v10h14V10"/></svg></a>
          <a href="https://www.linkedin.com/in/nelly-santiesteban-17613832/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"/></svg></a>
          <a href="https://www.google.com/search?q=Nelly+Santiesteban+Mortgage+Loan+Officer&amp;kgmid=%2Fg%2F11yr03xkym" target="_blank" rel="noopener" aria-label="Google Business Profile"><span className="g-mark">G</span></a>
        </div>
        <div className="fc-note">ACE Florida Mortgage &middot; NMLS #2384013</div>
      </div>
    </div>
    <div className="foot-bottom">
      <div className="eho">
        <img src="assets/eho_logo_white.png" alt="Equal Housing Opportunity" width="30" height="32" />
        <span>Equal Housing Opportunity</span>
      </div>
      <div className="foot-legal">
        Nelly Santiesteban, Mortgage Loan Officer, NMLS #1808120. ACE Florida Mortgage, Company NMLS #2384013. Equal Housing Opportunity. This site is for informational purposes only and is not a commitment to lend. Rates, terms, and loan programs are subject to change and individual qualification. Licensed in Florida. <a href="/privacy.html" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}>Privacy Policy</a> &middot; <a href="/terms.html" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}>Terms</a>
      </div>
      <div className="foot-copy">&copy; 2026 WorkWithNelly</div>
    </div>
  </div>
</footer>


<button id="musicToggle" className="music-toggle" aria-label="Play background music" aria-pressed="false" title="Play background music">
  <svg className="mt-note" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  <span className="mt-bars" aria-hidden="true"><span></span><span></span><span></span></span>
</button>
<audio id="bgMusic" src="assets/nelly_bg_music.mp3" loop preload="none"></audio>


<div className="mobile-bar">
  <div className="mb-row">
    <a className="mb-call" href="tel:+17862865906"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Call</a>
    <a className="mb-apply" href="https://2384013.my1003app.com/1808120/register" target="_blank" rel="noopener">Apply Now</a>
  </div>
</div>
    </div>
  );
}
