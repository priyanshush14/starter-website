# BridgeTech Website Starter Kit: Testing & Deployment Guide

This guide provides instructions on how to test your website locally (manual, automated unit tests, and end-to-end tests) and how to deploy it to **GitHub Pages** so your clients can view and interact with live demos.

---

## 1. How to Test Your Website

The project includes a multi-layer testing setup: **Local Manual Testing**, **Vitest Unit & Component Tests**, and **Playwright End-to-End (E2E) Tests**.

### A. Local Manual Testing

To launch the local development server:

```bash
npm run dev
```

Open your browser to:
[http://localhost:5173](http://localhost:5173)

#### Key Scenarios to Test Manually:
1. **Interactive Preset Switcher**:
   - In the bottom-right corner, click the floating **Preset Switcher** badge.
   - Switch between **Digital Agency**, **Local Business**, and **Professional Services**.
   - Observe the live transition: colors, typography, layout cards, and branding change dynamically without reloading the page.
2. **Multi-Page Routing**:
   - Test top-level navigation links: `/`, `/services`, `/portfolio`, `/about`, `/contact`.
   - Verify that routes update instantaneously and scroll positions reset to the top.
3. **Contact & Lead Generation Form**:
   - Navigate to `/contact`.
   - Click **Send Message** with empty fields to verify instant client-side validation errors (powered by Zod).
   - Enter valid data and submit; confirm the accessible alert status banner ("Message Dispatched") appears.
4. **Mobile Responsiveness**:
   - Press `F12` (or `Ctrl + Shift + I`) in Chrome to toggle device simulation (e.g. iPhone or Pixel).
   - Click the hamburger button in the header to open the slide-out navigation drawer.
   - Click any link in the drawer to ensure it navigates and automatically closes the drawer.

---

### B. Automated Unit & Integration Tests (Vitest)

Vitest verifies individual components, form schema validations, theme generation, and the section registry.

Run all unit and integration tests:
```bash
npm run test
```

Useful variations:
```bash
# Run in watch mode during development
npx vitest

# Run with interactive Vitest UI in browser
npx vitest --ui
```

#### What Vitest Covers:
- `tests/unit/theme.test.ts`: CSS color variable calculation and dark/light mode attribute injection.
- `tests/unit/config.test.ts`: Preset schema safety, fallback defaults, and navigation link filtering.
- `tests/unit/ui.test.tsx`: Core UI primitives (`Button`, `Input`, `Card`, `Badge`, `Accordion`, `Select`, `Modal`).
- `tests/unit/registry.test.tsx`: Section Registry resolution and unknown section fallbacks.
- `tests/unit/contact-form.test.tsx`: Form input validation, error messaging, and submission dispatches.

---

### C. Automated End-to-End Tests (Playwright)

Playwright runs real headless browser instances on both **Desktop Chromium** and **Mobile Chrome** (Pixel 5 viewport).

Run headless test suite:
```bash
npm run test:e2e
```

Run in interactive UI mode (recommended for visual debugging):
```bash
npx playwright test --ui
```

Run headed with visible browser window:
```bash
npx playwright test --headed
```

#### What Playwright Verifies:
- Complete user journeys across all multi-page routes.
- Mobile drawer opening, navigation transitions, and drawer dismissals.
- Dynamic theme and preset switching across viewports.
- Contact form input, invalid field blocking, and successful dispatch confirmation.

---

### D. Static Code Quality & Production Build Validation

Run these commands before releasing client updates:

```bash
# 1. Strict TypeScript check (0 errors)
npm run typecheck

# 2. ESLint check (0 errors, 0 warnings)
npm run lint

# 3. Production build test (compiles into dist/)
npm run build
```

---

## 2. How to Deploy on GitHub Pages for Clients

### Why Was the Screen Completely Black?
GitHub Pages was initially configured to **"Deploy from a branch"** pointing to `main` / `root`. 
This caused GitHub to serve the raw uncompiled TypeScript source (`/src/main.tsx`). Modern browsers reject raw `.tsx` files with a MIME type error, so React never mounted into `<div id="root"></div>`, leaving an unrendered screen with the dark background.

We have built the production bundle and pushed a dedicated **`gh-pages`** branch to your repository, which contains the compiled HTML, CSS, and JS bundles.

---

### Step-by-Step Fix (30 Seconds)

1. Open your repository Pages settings:
   [https://github.com/priyanshush14/starter-website/settings/pages](https://github.com/priyanshush14/starter-website/settings/pages)
2. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Click the branch dropdown and select **`gh-pages`** (leave the folder as `/ (root)`)
   - Click **Save**
3. Wait ~30 to 60 seconds for GitHub to publish the update.
4. Refresh:
   **[https://priyanshush14.github.io/starter-website/](https://priyanshush14.github.io/starter-website/)**

*(Optional)* If you prefer **GitHub Actions**, you can change **Source** to **GitHub Actions**; the updated workflow now supports both.

---

## 3. Alternative 1-Click Hosting Options

If you prefer custom domain SSL certificates or instant serverless functions, you can also link this GitHub repository to:

- **Vercel** (https://vercel.com): Import repository -> Framework preset: *Vite* -> Click *Deploy*.
- **Netlify** (https://netlify.com): Import repository -> Build command: `npm run build` -> Publish directory: `dist` -> Click *Deploy*.
