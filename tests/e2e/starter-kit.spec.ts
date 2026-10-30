import { test, expect } from '@playwright/test';

test.describe('BridgeTech Website Starter Kit E2E', () => {
  test('navigates through multi-page routes correctly', async ({ page, isMobile }) => {
    await page.goto('/');

    // Check Home page content
    await expect(page).toHaveTitle(/Apex Studio|BridgeTech/);
    await expect(page.locator('h1')).toBeVisible();

    const navigateTo = async (label: string, urlPattern: RegExp) => {
      if (isMobile) {
        await page.click('button[aria-label="Open mobile navigation menu"]');
        const drawer = page.locator('[role="dialog"][aria-label="Mobile Navigation Menu"]');
        await expect(drawer).toBeVisible();
        await drawer.locator(`text=${label}`).click();
      } else {
        await page.click(`nav >> text=${label}`);
      }
      await expect(page).toHaveURL(urlPattern);
    };

    // Navigate to Services
    await navigateTo('Services', /.*\/services/);
    await expect(page.locator('h1')).toContainText(/Our Core Services|Services/);

    // Navigate to Work / Portfolio
    await navigateTo('Work', /.*\/portfolio/);
    await expect(page.locator('h1')).toBeVisible();

    // Navigate to About
    await navigateTo('About', /.*\/about/);
    await expect(page.locator('h1')).toContainText(/About/);

    // Navigate to Contact
    await navigateTo('Contact', /.*\/contact/);
    await expect(page.locator('h1')).toContainText(/Contact/);
  });

  test('switches industry presets dynamically', async ({ page }) => {
    await page.goto('/');

    // Verify initial preset is Agency
    const presetButton = page.locator('aside[aria-label="Preset Switcher"] button').first();
    await expect(presetButton).toContainText('Digital Agency');

    // Open preset switcher and select Local Business
    await presetButton.click();
    await page.click('text=Local Business');

    // Verify site identity updates to Oak & Hearth Kitchen
    await expect(page.locator('header')).toContainText('Oak & Hearth Kitchen');

    // Switch to Professional Services
    await page.click('text=Professional Services');
    await expect(page.locator('header')).toContainText('Vanguard Advisory Partners');
  });

  test('validates and submits contact form', async ({ page }) => {
    await page.goto('/contact');

    // Click submit without entering values to trigger validation
    const submitBtn = page.locator('button[type="submit"]:has-text("Send Message")');
    await submitBtn.click();

    // Verify error messages
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    await expect(page.locator('text=Please provide a valid email address')).toBeVisible();

    // Fill valid values
    await page.fill('input[name="name"]', 'David Kim');
    await page.fill('input[name="email"]', 'david@example.com');
    await page.fill('textarea[name="message"]', 'We are interested in a full website redesign and strategic consulting.');

    // Submit form
    await submitBtn.click();

    // Verify confirmation notification
    await expect(page.locator('[role="status"]')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Message Dispatched')).toBeVisible();
  });

  test('mobile navigation drawer opens, navigates, and closes', async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip();
    }

    await page.goto('/');

    // Hamburger button
    const menuButton = page.locator('button[aria-label="Open mobile navigation menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Drawer should be open
    const drawer = page.locator('[role="dialog"][aria-label="Mobile Navigation Menu"]');
    await expect(drawer).toBeVisible();

    // Click navigation item inside drawer
    await drawer.locator('text=Services').click();

    // Verify navigation and drawer dismissal
    await expect(page).toHaveURL(/.*\/services/);
    await expect(drawer).not.toBeVisible();
  });
});
