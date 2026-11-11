# Contributing Guide: Adding New Pages to WorkWithNelly

This cheat sheet documents the exact steps and architectural conventions for adding new landing pages, loan programs, and services to this website.

---

## 1. URL & Routing Conventions
- **Routing Engine**: Next.js App Router inside `src/app/(site)/`.
- **Slug Format**: Flat, lowercase, kebab-case (e.g., `/dscr-loans-miami`).
- **Trailing Slash**: **Do NOT use trailing slashes**. The site enforces `trailingSlash: false`. Requesting `/example/` will trigger a 308 redirect to `/example`.
- **Canonical URLs**: Always declare an absolute URL without a trailing slash (e.g., `https://workwithnelly.com/example`).

---

## 2. Checklist for Adding a New Landing Page

Whenever you receive a new page brief, touch these **4 files**:

### Step 1: Define JSON-LD Structured Data
Open `src/lib/jsonld.ts` and add an exported JSON-LD schema graph matching the existing pages (`fhaLoansJsonLd`, `dscrLoansJsonLd`, etc.):
- `@type: "Service"` with `serviceType`, `name`, `description`, `url`, and provider reference.
- `@type: "FAQPage"` with the exact Q&As featured on the page.
- `@type: "BreadcrumbList"` for navigation hierarchy.

### Step 2: Create the Page Component
Create a new folder and page file at `src/app/(site)/<slug>/page.tsx`.
Ensure you include:
1. **Next.js Metadata**:
   ```tsx
   export const metadata: Metadata = {
     title: "...",
     description: "...",
     keywords: [...],
     alternates: {
       canonical: "https://workwithnelly.com/<slug>",
     },
     openGraph: {
       title: "...",
       description: "...",
       url: "https://workwithnelly.com/<slug>",
       siteName: "WorkWithNelly",
       type: "website",
     },
   };
   ```
2. **Standard 5-Section Layout**:
   - **Hero**: `.hero` container with background image, `.hero-overlay`, `.eyebrow`, `h1.serif.kinetic[data-kinetic-mode="load"]`, lede paragraph, and dual CTAs (`Contact Nelly Today` and `Apply Online`).
   - **Overview**: White background section with `h2.kinetic[data-kinetic-mode="scroll"]` and 2 introductory paragraphs.
   - **Program Guidance**: Cream background (`var(--cream)`) section with card grid (`.reveal-up`) highlighting 4–5 core program benefits.
   - **FAQ Section**: White background section rendering the Q&As in card blocks (`.reveal-up`).
   - **Final CTA**: Navy background (`var(--navy-950)`) section with white text and a gold contact button.

### Step 3: Add to Navigation Menu
Open `src/components/SiteHeader.tsx` and add a `<Link>` entry inside `.nav-dropdown-menu`:
```tsx
<div className="nav-dropdown-menu">
  <Link href="/fha-loans-miami" onClick={closeAllNav}>FHA loans</Link>
  <Link href="/home-loans-miami" onClick={closeAllNav}>Home loans</Link>
  <Link href="/mortgage-loan-officer-miami" onClick={closeAllNav}>Mortgage Loan</Link>
  <Link href="/<slug>" onClick={closeAllNav}><Display Name></Link>
</div>
```

### Step 4: Register in Sitemap
Open `src/app/sitemap.ts` and add an entry into the `staticRoutes` array:
```ts
{
  url: `${baseUrl}/<slug>`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
```

---

## 3. Design Tokens & Key Classes
- **Colors**:
  - `var(--navy-950)`: `#131D38` (Hero overlays, dark CTAs, dark headings)
  - `var(--navy-900)`: `#1E2F5A` (Secondary navy)
  - `var(--gold)`: `#C9A227` (Primary button color, accents)
  - `var(--gold-dark)`: `#9D7E1E` (Eyebrow tracking color, hover states)
  - `var(--cream)`: `#F7F3EB` (Alternate section background)
  - `var(--ink-soft)`: `#4A4A4A` (Body paragraph text)
- **Typography Classes**:
  - `.serif`: Applies Fraunces serif typeface.
  - `.kinetic`: Triggers staggered typography animation.
  - `.reveal-up`: Triggers scroll-reveal animation on viewport entry.
- **Button Classes**:
  - `.btn.btn-primary`: Gold pill button.
  - `.btn.btn-ghost-light`: Translucent frosted button for hero backgrounds.

---

## 4. Verification Commands
Run inside `WorkWithNelly/`:
```bash
# Run local dev server
npm run dev

# Run linting check
npm run lint

# Run production build
npm run build
```

