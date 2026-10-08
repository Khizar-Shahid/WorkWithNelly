"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // kinetic text reveal
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      function splitWords(el: Element){
        const walk = (parent: Node) => {
          Array.from(parent.childNodes).forEach(n => {
            if (n.nodeType === Node.TEXT_NODE) {
              const frag = document.createDocumentFragment();
              const textContent = n.textContent || '';
              textContent.split(/(\s+)/).forEach(part => {
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
            } else if (n.nodeType === Node.ELEMENT_NODE && (n as Element).tagName !== 'BR') {
              walk(n);
            }
          });
        };
        walk(el);
        el.querySelectorAll('.kinetic-word').forEach((w, i) => {
          (w as HTMLElement).style.animationDelay = (i * 0.055) + 's';
        });
      }

      const kinetics = document.querySelectorAll('.kinetic:not(.processed)');
      kinetics.forEach(el => {
        el.classList.add('processed'); // avoid processing multiple times
        splitWords(el);
        if ((el as HTMLElement).dataset.kineticMode === 'load') {
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
    }

    // scroll reveal
    if (!reduceMotion) {
      const groups = [
        '.who-grid > .who-card', '.loan-cats > .loan-cat', '.timeline > .tl-item',
        '.quote-grid > .quote-card', '.widget-wrap > *', '.about-grid > *', '.photo-strip > *', '.prog > *', '.num-grid > *',
        '.service-content > *'
      ];
      groups.forEach(sel => {
        document.querySelectorAll(sel + ':not(.reveal-up)').forEach((el, i) => {
          el.classList.add('reveal-up');
          (el as HTMLElement).style.transitionDelay = (Math.min(i, 5) * 0.08) + 's';
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
      
      document.querySelectorAll('.reveal-up:not(.revealed)').forEach(el => io.observe(el));
    }
  }, [pathname]); // re-run on navigation

  return null;
}
