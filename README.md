# BridgeTech Website Starter Kit

> **"One codebase. Multiple industries. Custom results."**

The **BridgeTech Website Starter Kit** is a modern, modular, production-ready website engine designed to accelerate the delivery of custom websites for **Digital Agencies**, **Local Businesses**, and **Professional Service Firms**.

Common client alterations—branding, identity, themes, typography, navigation, and section compositions—are completely decoupled from component logic and driven by typed configuration files.

---

## 🌟 Key Features

- ⚡ **Modern Stack**: Built with Vite, React 18, TypeScript (strict mode), Tailwind CSS, and Lucide React.
- 🎨 **Theme Engine**: Complete CSS Custom Property injection with uniform design tokens for primary, secondary, muted, accent, background, and border radii.
- 🏢 **Three Turnkey Industry Presets**:
  - **Digital Agency** (*Apex Studio*): Bold, dark aesthetic, case-study heavy, conversion metrics, sprint pricing.
  - **Local Business** (*Oak & Hearth Kitchen*): Warm earth tones, physical store hours, location details, local catering packages.
  - **Professional Services** (*Vanguard Advisory Partners*): Crisp navy/gold palette, credibility metrics, partner advisory practices, comparison tables.
- 🧩 **Modular Section Registry**:
  - Independent blocks with multiple approved variants:
    - **Hero**: `split`, `centered`, `image-bg`, `minimal`
    - **Services**: `cards`, `icon-grid`, `alternating`
    - **About**: `stats`, `image-text`, `story`
    - **Portfolio**: `case-studies`, `featured`, `grid`
    - **Testimonials**: `cards`, `quote-focused`
    - **Pricing**: `cards`, `comparison-table`
    - **FAQ**: `accordion`, `grouped`
    - **Contact**: `form`, `details`, `map`
    - **CTA**: `banner`, `split`
  - Safe registry lookup with fallback diagnostics during development.
- 📋 **Accessible Form Handling**: React Hook Form + Zod schema validation, honeypot anti-spam protection, dual delivery support (mock or Formspree/Web3Forms/custom webhook).
- ♿ **Accessibility & SEO**: Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), keyboard focus indicators, ARIA disclosures, dynamic document title, meta descriptions, and OpenGraph tags.
- 🧪 **Complete Quality Gates**: Unit & component testing with Vitest and `@testing-library/react`, end-to-end testing with Playwright, and strict TypeScript/ESLint compliance.

---

## 📁 Repository Directory Structure

```text
├── public/
│   ├── images/              # Static raster and vector assets
│   ├── icons/               # Brand and SVG icons
│   └── fonts/               # Custom font files
├── src/
│   ├── app/                 # Application root, routing & providers
│   ├── config/              # Typed configuration engine
│   │   ├── presets/         # Industry presets (Agency, Local, Professional)
│   │   ├── site.ts          # Active site identity & contact info
│   │   ├── theme.ts         # Active color & typography tokens
│   │   ├── navigation.ts    # Main and footer navigation
│   │   └── features.ts      # Feature flags (form delivery, analytics, booking)
│   ├── components/
│   │   ├── ui/              # Accessible UI primitives (Button, Input, Card, Accordion, etc.)
│   │   └── layout/          # Layout shell, Header, Footer, MobileNav, SEO, PresetSwitcher
│   ├── context/             # Global React state (PresetContext)
│   ├── features/            # Feature modules (ContactForm, Newsletter, Booking, Analytics)
│   ├── hooks/               # Reusable React hooks (usePreset)
│   ├── lib/                 # Utilities (cn, theme injector, dynamic icons)
│   ├── pages/               # Route-level page compositions (Home, About, Services, Portfolio, Contact)
│   ├── sections/            # Modular section library & typed registry
│   ├── styles/              # Global CSS & Tailwind directives
│   └── main.tsx             # Application bootstrap entry point
├── tests/
│   ├── unit/                # Vitest unit & component tests
│   ├── e2e/                 # Playwright browser end-to-end test suite
│   └── setup.ts             # Test environment configuration
├── .env.example             # Documented environment variables template
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone the repository
git clone <repository-url>
cd bridgetech-website-starter

# Install dependencies
npm install

# Copy environment template
cp .env.example .env
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at [http://localhost:5173](http://localhost:5173). Use the floating **Preset Switcher** in the lower-right corner to toggle between presets in real-time.

---

## ⚙️ Configuration Guide

### 1. Site Identity (`src/config/site.ts`)
Site identity, contact information, social links, and enabled pages are configured via the typed `SiteConfig` interface:

```typescript
export interface SiteConfig {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: {
      street?: string;
      city: string;
      region: string;
      country: string;
      postalCode?: string;
    };
    hours?: { days: string; hours: string }[];
  };
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    github?: string;
  };
  pages: {
    about: boolean;
    services: boolean;
    portfolio: boolean;
    testimonials: boolean;
    blog: boolean;
    contact: boolean;
  };
}
```

### 2. Theme Tokens (`src/config/theme.ts`)
Design tokens are injected as CSS custom variables into the root layout at runtime:

```typescript
export interface ThemeConfig {
  colors: {
    primary: string;         // Main brand color
    primaryHover?: string;
    secondary: string;       // Secondary brand color
    background: string;      // Body background
    foreground: string;      // Main text color
    muted: string;           // Light card / surface background
    accent: string;          // Highlight badges / accents
  };
  typography: {
    headingFont: string;     // Font family for headings
    bodyFont: string;        // Font family for body copy
  };
  radius: {
    button: string;          // e.g. '0.5rem' or '9999px' (pill)
    card: string;            // e.g. '0.75rem' or '1rem'
  };
}
```

### 3. Navigation (`src/config/navigation.ts`)
Controls both the desktop navigation bar, mobile navigation drawer, and multi-column footer:

```typescript
export const navigationConfig: NavigationConfig = {
  mainNav: [
    { label: 'Work', href: '/portfolio', requiresPage: 'portfolio' },
    { label: 'Services', href: '/services', requiresPage: 'services' },
    { label: 'About', href: '/about', requiresPage: 'about' },
    { label: 'Contact', href: '/contact', requiresPage: 'contact' },
  ],
  footerNav: [...],
  ctaButton: {
    label: 'Start a Project',
    href: '/contact',
  },
};
```
> **Tip:** Setting `requiresPage: 'portfolio'` automatically hides the navigation link if `siteConfig.pages.portfolio` is set to `false`.

---

## 🏢 Working with Industry Presets

The starter kit ships with three complete industry presets under `src/config/presets/`:
1. `agency.ts` – Bold digital agency with case studies and sprint pricing.
2. `local-business.ts` – Warm artisan bakery/café with business hours, address, and catering packages.
3. `professional.ts` – Executive advisory and consulting firm with partner practices and comparison matrices.

### Setting the Default Preset
In `.env`:
```env
VITE_DEFAULT_PRESET=agency # Options: agency | local-business | professional
```

You can also switch presets programmatically or via URL query parameter for client demos:
- `http://localhost:5173/?preset=agency`
- `http://localhost:5173/?preset=local-business`
- `http://localhost:5173/?preset=professional`

---

## 🧩 Section Registry & Composing Pages

### Composing a Page
Pages are composed simply by declaring an array of section identifiers or descriptor objects:

```typescript
// Example from src/config/presets/agency.ts
export const homeSections = [
  { id: 'hero', variant: 'split' },
  { id: 'services', variant: 'cards' },
  { id: 'portfolio', variant: 'case-studies' },
  { id: 'about', variant: 'stats' },
  { id: 'testimonials', variant: 'cards' },
  { id: 'pricing', variant: 'cards' },
  { id: 'faq', variant: 'accordion' },
  { id: 'cta', variant: 'banner' },
];
```

The `SectionRenderer` component maps the array directly to registered React components:

```tsx
{sections.map((sec, idx) => (
  <SectionRenderer key={idx} section={sec} />
))}
```

### Adding a New Section
1. Create your section component in `src/sections/my-section/MySection.tsx`.
2. Register the component in `src/sections/registry.ts`:
```typescript
export const sectionRegistry = {
  // ...existing sections
  'my-section': MySection,
};
```
3. Use `'my-section'` in any page composition array. If an unrecognized identifier is used, the registry displays a helpful diagnostic card in development and logs a warning without crashing.

---

## 📬 Contact Form Delivery Integration

The contact form (`src/features/contact/ContactForm.tsx`) includes:
- React Hook Form state management.
- Zod schema validation (name, email, subject, message).
- Honeypot anti-spam protection (`botField`).
- Submission loading spinner and duplicate submission prevention.

### Delivery Providers
Configure the form delivery provider in `.env`:

```env
# 1. Mock Mode (default, simulates network transmission)
VITE_CONTACT_FORM_PROVIDER=mock

# 2. Formspree Integration
VITE_CONTACT_FORM_PROVIDER=formspree
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id

# 3. Web3Forms / Custom Webhook
VITE_CONTACT_FORM_PROVIDER=web3forms
VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
```

---

## 🧪 Testing & Quality Gates

The codebase enforces strict quality gates:

```bash
# Run static TypeScript checks
npm run typecheck

# Run ESLint checks (0 warnings allowed)
npm run lint

# Run Vitest unit & component tests
npm test

# Run Playwright browser end-to-end tests
npm run test:e2e
```

---

## 🚢 Production Build & Deployment

### Build for Production
```bash
npm run build
```
This runs `tsc` and generates the optimized production bundle under `dist/`.

### Preview Production Build Locally
```bash
npm run preview
```

### Deployment Options

#### 1. Vercel
Deploy with zero configuration:
```bash
npx vercel
```
Or connect your GitHub repository to Vercel and set Framework Preset to **Vite**.

#### 2. Netlify
Deploy using the Netlify CLI:
```bash
npx netlify deploy --prod --dir=dist
```
Or create a `netlify.toml` file with:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. Static Web Hosting (AWS S3, Cloudflare Pages, GitHub Pages)
Because the kit compiles to pure HTML, CSS, and JS:
- Set build command: `npm run build`
- Set output directory: `dist`
- Configure SPA fallback routing to redirect all `404` requests to `/index.html`.

---

## 📄 License
MIT &copy; BridgeTech. Built with craftsmanship and care.
