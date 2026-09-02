import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(projectRoot, 'dist', 'Mo-portfolio', 'browser', 'index.html');
const html = readFileSync(outputPath, 'utf8');

const failures = [];

function expect(description, condition) {
  if (!condition) failures.push(description);
}

const appRoot = html.match(/<app-root(?:\s[^>]*)?>([\s\S]*?)<\/app-root>/i);
const renderedRoot = appRoot?.[1] ?? '';

expect('a non-empty <app-root> containing meaningful rendered content', renderedRoot.replace(/<[^>]+>/g, '').trim().length > 500);
expect('the hero H1 with Abdelmomen Nasreldin', /<h1[^>]*>[\s\S]*?Abdelmomen\s+Nasreldin[\s\S]*?<\/h1>/i.test(html));

for (const [label, pattern] of [
  ['the hero section', /<section[^>]+id="hero"/i],
  ['the projects section', /<section[^>]+id="projects"/i],
  ['the contact section', /<section[^>]+id="contact"/i],
  ['the Cafe Manager case study', /Caf(?:e|é|&#233;|&eacute;)\s+Manager/i],
  ['the Dental Clinic Management System case study', /Dental\s+Clinic\s+Management\s+System/i],
  ['the AI-assisted development content', /AI-Assisted\s+Development/i],
  ['the canonical .dev URL', /<link[^>]+rel="canonical"[^>]+href="https:\/\/abdelmomen\.dev\/"/i],
  ['the social preview image metadata', /<meta[^>]+property="og:image"[^>]+content="https:\/\/abdelmomen\.dev\/assets\/social-preview\.png"/i],
  ['the Person JSON-LD schema', /<script[^>]+type="application\/ld\+json"[^>]*>[\s\S]*?"@type"\s*:\s*"Person"[\s\S]*?<\/script>/i],
]) {
  expect(label, pattern.test(html));
}

if (failures.length > 0) {
  throw new Error(`Prerender verification failed:\n- ${failures.join('\n- ')}`);
}

console.log(`Prerender verification passed: ${outputPath}`);
