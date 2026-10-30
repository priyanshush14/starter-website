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

We have added an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Step 1: Enable GitHub Pages in your Repository Settings

1. Open your repository on GitHub:
   [https://github.com/priyanshush14/starter-website](https://github.com/priyanshush14/starter-website)
2. Click the **Settings** tab at the top.
3. In the left navigation menu under **Code and automation**, click **Pages**.
4. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
5. Save changes.

---

### Step 2: Trigger the Automated Deployment

Because the `.github/workflows/deploy.yml` workflow was committed and pushed to `main`:

1. Any new push to `main` will automatically trigger a build and deployment.
2. You can also trigger it manually:
   - Go to the **Actions** tab on your repository.
   - Click **Deploy to GitHub Pages** in the left sidebar.
   - Click **Run workflow** -> Select `Branch: main` -> Click **Run workflow**.

---

### Step 3: Accessing the Live Demo

Once the GitHub Action completes (usually takes ~1 minute):

- Your live URL will be:
  **`https://priyanshush14.github.io/starter-website/`**

> **Note:**
> The build process automatically handles:
> - Base path prefixing (`/starter-website/`) in `vite.config.ts` and `App.tsx`.
> - Single Page Application (SPA) routing fallback by copying `index.html` to `404.html`, ensuring refreshing pages like `/starter-website/services` works seamlessly without GitHub 404 errors.

---

## 3. Alternative 1-Click Hosting Options

If you prefer custom domain SSL certificates or instant serverless functions, you can also link this GitHub repository to:

- **Vercel** (https://vercel.com): Import repository -> Framework preset: *Vite* -> Click *Deploy*.
- **Netlify** (https://netlify.com): Import repository -> Build command: `npm run build` -> Publish directory: `dist` -> Click *Deploy*.
