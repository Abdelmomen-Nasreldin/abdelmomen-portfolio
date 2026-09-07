import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes = ['/', '/projects/cafe-manager', '/projects/dental-clinic-management'];
for (const theme of ['light', 'dark'] as const) {
  for (const route of routes) {
    test(theme + ' accessibility and direct route: ' + route, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme, reducedMotion: 'reduce' });
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(
        page.getByRole('button', {
          name: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
        }),
      ).toBeVisible();
      await expect(page.locator('link[rel="icon"]').first()).toHaveAttribute('href', 'icon.svg');
      await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
        'href',
        'manifest.webmanifest',
      );
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
      await page.reload();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        'https://abdelmomen.dev' + route,
      );
    });
  }
}
test('project navigation, history, focus, and metadata update', async ({ page }) => {
  await page.goto('/');
  const titles = ['Café Manager', 'Dental Clinic Management System'];
  for (const title of titles) {
    await page.getByRole('link', { name: title, exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(page.getByRole('heading', { level: 1 })).toBeFocused();
    await page.getByRole('link', { name: 'Back to selected work', exact: false }).click();
    await expect(page).toHaveURL(/\/#projects$/);
    await expect(
      page.getByRole('heading', { name: 'Built for the people using it' }),
    ).toBeFocused();
  }
  await page.getByRole('link', { name: 'Café Manager', exact: true }).click();
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Abdelmomen Nasreldin');
});
test('mobile menu, keyboard escape, skip link and contact', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
  const toggle = page.getByRole('button', { name: 'Toggle navigation menu' });
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation', exact: true })
    .getByRole('link', { name: 'Contact', exact: true })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Looking for an Angular frontend engineer?' }),
  ).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(
    page.getByRole('link', { name: 'abdelmomen.nasr@gmail.com', exact: true }),
  ).toHaveAttribute('href', 'mailto:abdelmomen.nasr@gmail.com');
});
for (const width of [390, 768, 1440]) {
  test('layout and captures at ' + width, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      ).toBeTruthy();
      await page.screenshot({
        path: 'tmp/qa/' + width + '-' + (route === '/' ? 'home' : route.split('/').pop()) + '.png',
        fullPage: true,
      });
    }
  });
}
test('200 percent text scaling stays within layout', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1000 });
  await page.goto('/');
  await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  ).toBeTruthy();
  await page.screenshot({ path: 'tmp/qa/text-200-percent.png', fullPage: true });
});
test('unknown route returns 404 and allows recovery', async ({ page }) => {
  const response = await page.goto('/not-a-portfolio-page');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('That page isn’t here');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole('link', { name: 'Return to the portfolio', exact: false }).click();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index,follow');
});
test('case studies are readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const route of routes.slice(1)) {
    await page.goto('http://127.0.0.1:4400' + route);
    await expect(
      page.getByRole('heading', { name: 'Decisions behind the interface' }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Ownership & evidence' })).toBeVisible();
  }
  await context.close();
});

for (const theme of ['light', 'dark'] as const) {
  test('mobile accessibility with screenshots: ' + theme, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ colorScheme: theme, reducedMotion: 'reduce' });
    for (const route of routes) {
      await page.goto(route);
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
      for (const image of await page.locator('main img').all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).toBeVisible();
        expect(
          await image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0),
        ).toBeTruthy();
      }
    }
  });
}
