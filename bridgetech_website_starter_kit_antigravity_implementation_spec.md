# BridgeTech Website Starter Kit - Antigravity Implementation Specification

## 1. Project Context
BridgeTech requires a robust, reusable, modular website starter kit designed to accelerate the delivery of custom websites for digital agencies, local businesses, professional service firms, and small businesses. The guiding principle is **"One codebase. Multiple industries. Custom results."** 

This specification provides explicit, testable instructions for Antigravity to build the starter kit from scratch, ensuring that common client changes are driven by configuration rather than code rewrites, while supporting diverse industry presets and custom layouts.

---

## 2. Goals and Non-Goals

### Primary Objectives
- Reduce the time required to start and deliver small-business and agency websites.
- Provide a maintainable codebase with reusable UI components and page sections.
- Allow branding, business info, navigation, page composition, and common features to be changed through configuration.
- Support distinct industry presets (Digital Agency, Local Business, Professional Services) without forcing every site to look identical.
- Keep the core frontend lightweight, avoiding a mandatory backend for static or frontend-only sites.
- Fully document setup and customization for developer independence.

### Non-Goals (Out of Scope for Version 1)
- Do not build a full drag-and-drop visual website builder.
- Do not build a multi-tenant SaaS platform or customer administration portal.
- Do not force authentication, a database, or an Express backend into every client site.
- Do not attempt to support every industry or integration from day one.
- Do not over-engineer generic configuration at the expense of quality and maintainability.

---

## 3. Required Technology Stack

| Technology | Purpose | Priority |
| :--- | :--- | :--- |
| **React + TypeScript** | UI development, reusable components, type safety | Required |
| **Vite** | Development server and production build tooling | Required |
| **Tailwind CSS** | Responsive styling and consistent design utilities | Required |
| **React Router** | Client-side navigation for multi-page sites | Required |
| **Lucide React** | Consistent icon set | Required |
| **React Hook Form + Zod** | Accessible form handling and validation | Recommended |
| **Vitest** | Unit and component tests | Recommended |
| **Playwright** | Browser-level and end-to-end tests | Recommended |
| **Node.js + Express** | Optional API for projects requiring server functionality | Optional |
| **MongoDB + Mongoose** | Optional persistence for database-backed projects | Optional |
| **GitHub Actions** | Automated lint, test, and build checks | Recommended |

### Engineering Baseline
- Use strict TypeScript settings; avoid `any` unless explicitly documented.
- Enforce consistent linting and formatting (ESLint + Prettier).
- Keep dependencies lean and remove unused packages.
- Use environment variables for secrets/endpoints; provide `.env.example` with placeholders only. Never commit client secrets.

---

## 4. Architecture and Repository Structure

Target directory tree to create/maintain:
```text
bridgetech-website-starter/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/           # App root, router, global providers
│   ├── config/        # Site, theme, navigation, feature configuration
│   ├── components/    # Reusable UI primitives (buttons, inputs, cards, badges, accordions) & layout (shell, header, footer)
│   ├── sections/      # Large reusable website blocks (hero, services, about, portfolio, FAQ, etc.)
│   ├── pages/         # Complete route-level page compositions (Home, About, Services, Portfolio, Contact)
│   ├── features/      # Self-contained capabilities (contact form, booking, newsletter, analytics)
│   ├── hooks/         # Reusable React hooks
│   ├── lib/           # Non-UI utilities and integrations
│   ├── types/         # Shared TypeScript types and configuration schemas
│   ├── styles/        # Global CSS / Tailwind directives
│   └── main.tsx       # Entry point
├── tests/             # Unit, component, integration, and E2E tests
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 5. Configuration Model and Types

The starter kit must separate data and styling from component logic via typed configuration files under `src/config/`.

### 5.1 Site Configuration (`src/config/site.ts`)
```typescript
export interface SiteConfig {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: {
      city: string;
      region: string;
      country: string;
    };
  };
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
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

### 5.2 Theme Configuration (`src/config/theme.ts`)
```typescript
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    muted: string;
    accent: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  radius: {
    button: string;
    card: string;
  };
}
```
*Requirement*: Consume theme values via CSS custom properties injected into the root layout so tokens remain uniform. Validate configurations using Zod schemas at runtime where appropriate.

---

## 6. Design System and UI Components

- **Primitives (`src/components/ui/`)**: Implement accessible atoms including Buttons, Inputs, Cards, Badges, and Accordions.
- **Layout Shell (`src/components/layout/`)**: Responsive header with accessible mobile navigation toggle, containers, and multi-column footer.
- **Accessibility**: Ensure visible focus states, proper ARIA labeling, adequate color contrast ratios, and keyboard navigation support.

---

## 7. Section Registry and Page Composition

Build independent, modular sections in `src/sections/` and map them via a typed section registry.

### Approved Section Variants
- **Hero**: Centered, Split-screen, Image background, Minimal.
- **Services**: Cards, Icon grid, Alternating rows.
- **About**: Image and text, Company story, Statistics grid.
- **Portfolio**: Grid, Featured project, Case studies.
- **Testimonials**: Cards, Quote-focused.
- **Pricing**: Simple cards, Comparison table.
- **FAQ**: Accessible accordion, Grouped questions.
- **Contact**: Contact form, Contact details, Map embed wrapper.
- **CTA**: Full-width banner, Split CTA.
- **Footer**: Minimal, Multi-column agency style.

### Page Composition Example
Pages under `src/pages/` must assemble these sections dynamically based on configuration arrays:
```typescript
export const homePageSections = [
  "hero",
  "services",
  "about",
  "portfolio",
  "testimonials",
  "faq",
  "contact"
];
```
*Requirement*: Implement a safe section registry lookup that gracefully catches and reports invalid or unsupported section identifiers during development.

---

## 8. Industry Presets

Implement preset configurations and demo mock data for three core verticals:
1. **Digital Agency**: Bold design, portfolio-heavy, case studies, lead generation focus.
2. **Local Business**: Approachable design, business hours, location details, local services focus.
3. **Professional Services**: Refined design, credibility-led, team profiles, consultation enquiry focus.

---

## 9. Contact Form and Optional Feature Modules

- **Contact Form (`src/features/contact/`)**: Built using React Hook Form and Zod schema validation. Must display clear loading, success, and error states, prevent double-submissions, and include a honeypot anti-spam field.
- **Optional Modules**: Newsletter subscription, booking embeds, and analytics flags must be disabled by default and fully documented.

---

## 10. SEO, Accessibility, Performance, and Security

- **SEO**: Per-page custom titles and descriptions, semantic HTML heading structures, canonical base URLs, and OpenGraph/Twitter social sharing metadata.
- **Performance**: Lazy loading for non-critical assets, responsive image handling, route code-splitting via Vite, and explicit image dimensions to prevent Cumulative Layout Shift (CLS).
- **Security**: Zero credential leaks, `.env.example` templates with placeholder values only, strict input sanitization, and separation of public frontend env variables from private server secrets.

---

## 11. Testing and Quality Gates

- **Static Checks**: Must pass `tsc --noEmit`, ESLint, and production build without errors (`npm run build`).
- **Unit/Component Tests**: Vitest coverage for configuration helpers, shared UI primitives, and form validation logic.
- **End-to-End Tests**: Playwright tests verifying mobile drawer navigation, multi-page routing, and contact form validation flows.
- **Accessibility Audit**: Automated checks (e.g., axe-core integration or manual keyboard-only verification) confirming focus visibility and ARIA attributes.

---

## 12. Phased Implementation Tasks for Antigravity

1. **Phase 1 (Foundation)**: Initialize Vite + React + TypeScript + Tailwind CSS project structure, routing, and linting rules.
2. **Phase 2 (Design System)**: Construct primitive UI components, tokens, typography bindings, and responsive layout shells.
3. **Phase 3 (Section Library)**: Build out the modular section registry with multiple variants per section type.
4. **Phase 4 (Configuration Engine)**: Wire up typed business configs, theme injectors, feature flags, and industry presets.
5. **Phase 5 (Production Readiness)**: Implement form validation, SEO metadata head management, tests, and documentation.
6. **Phase 6 (Demo Validation)**: Stand up three distinct demo instances (Agency, Local Business, Professional Services) to prove core architectural flexibility.

---

## 13. Acceptance Criteria

- [ ] A fresh clone installs and runs cleanly using documented scripts.
- [ ] Project passes TypeScript compilation, linters, and production build checks.
- [ ] Responsive across mobile, tablet, and desktop viewports.
- [ ] Identity, theme tokens, navigation, and page composition are entirely config-driven.
- [ ] All three industry presets (Agency, Local Business, Professional Services) are fully functional.
- [ ] Section registry safely handles missing or custom identifiers.
- [ ] Contact form features validation, submission states, and documented delivery integration.
- [ ] SEO metadata, semantic landmarks, and keyboard navigation are fully enabled.
- [ ] README covers setup, configuration, section creation, testing, and deployment.
- [ ] Three visually distinct demo sites can be rendered without rewriting core shared code architecture.

---

## 14. README and Final Deliverables

Provide a comprehensive `README.md` in the repository root explaining:
- Project overview & core philosophy
- Quick start installation guide
- Configuration guide (Themes, Site Identity, Navigation)
- Adding or modifying sections and pages
- Setting up the contact form delivery integration
- Running test suites (`npm test`, `npm run test:e2e`)
- Production build and hosting deployment options (Vercel, Netlify, static hosting)

---

## 15. Run, Test, and Build Commands

Antigravity must ensure the following scripts are correctly configured in `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test"
  }
}
```

*End of specification.*
