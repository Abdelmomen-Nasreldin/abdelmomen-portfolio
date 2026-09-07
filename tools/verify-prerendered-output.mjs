import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { JSDOM } from 'jsdom';
const pages = [
  ['', 'Abdelmomen Nasreldin'],
  ['projects/cafe-manager', 'Café Manager'],
  ['projects/dental-clinic-management', 'Dental Clinic Management System'],
];
const titles = new Set();
for (const [route, heading] of pages) {
  const html = readFileSync('dist/client/' + (route ? route + '/' : '') + 'index.html', 'utf8');
  const doc = new JSDOM(html).window.document;
  assert.equal(doc.querySelector('h1')?.textContent.trim(), heading, route + ': heading');
  assert.equal(doc.querySelectorAll('h1').length, 1, route + ': one primary heading');
  assert.equal(doc.querySelector('link[rel="canonical"]')?.href, 'https://abdelmomen.dev/' + route);
  assert.equal(doc.querySelector('meta[name="robots"]')?.content, 'index,follow');
  assert.ok(
    doc.querySelector('meta[property="og:image"]')?.content.includes('/assets/social-preview.png'),
  );
  assert.ok(!titles.has(doc.title), 'Unique titles');
  titles.add(doc.title);
  assert.ok(doc.querySelector('script[type="application/ld+json"]'));
  assert.ok(!html.includes('Senior Frontend Engineer'), 'Consistent positioning');
  if (route) {
    for (const label of [
      'The problem',
      'Decisions behind the interface',
      'What the work delivered',
      'Ownership & evidence',
    ]) {
      assert.ok(doc.body.textContent.includes(label), route + ': static case-study content');
    }
  }
  for (const img of doc.querySelectorAll('img')) {
    const src = img.getAttribute('src') || img.getAttribute('ngSrc');
    assert.ok(src && existsSync('public' + src), 'Local image exists: ' + src);
    assert.ok(img.alt.trim(), 'Image description');
  }
}
const missing = new JSDOM(readFileSync('dist/client/404.html', 'utf8')).window.document;
assert.equal(missing.querySelector('meta[name="robots"]')?.content, 'noindex,follow');
assert.ok(missing.querySelector('h1')?.textContent.includes('page'));
const sitemap = readFileSync('public/sitemap.xml', 'utf8');
for (const [route] of pages) assert.ok(sitemap.includes('https://abdelmomen.dev/' + route));
assert.ok(existsSync('public/icon.svg'), 'Vector portfolio icon exists');
for (const size of [32, 180, 512]) {
  assert.ok(existsSync('public/assets/icon-' + size + '.png'), 'Icon export exists: ' + size);
}
assert.ok(
  readFileSync('public/manifest.webmanifest', 'utf8').includes('icon-512.png'),
  'Manifest references icon',
);
console.log(
  'Verified three content pages, full static case studies, metadata, images, sitemap, and 404.',
);
