# Portfolio review handoff — September 7, 2026

Local branch: `codex/portfolio-case-studies`. No commit, push, or deployment was performed for this update.

## Delivered

- Angular/TypeScript positioning; revised homepage, experience, teaching, skills, and contact content.
- Café and Dental are the only featured projects, with dedicated statically rendered case studies.
- Vodafone 5G removed from Experience, project cards, routes, and sitemap at the owner's request.
- Four real interface captures from isolated fictional demonstrations; smaller homepage thumbnails.
- Updated social preview, canonical metadata, sitemap, and static 404 page.
- Keyboard focus handling, skip link, mobile navigation, contrast fixes, reduced-motion support, and removal of reveal animations that impaired contrast during transitions.

## Fresh verification

- Production build and static-content verification: passed (home, two case studies, 404).
- Unit tests: 4 passed.
- Browser tests: 16 passed. Covers both themes, mobile accessibility, keyboard navigation, direct routes, image loading, browser history, 404 recovery, no-JavaScript reading, 390/768/1440 widths, and 200% text scaling.
- Axe: zero violations in the tested pages and states. This is automated evidence, not a full WCAG conformance certification.
- Local mobile Lighthouse: home performance 95; Café 97; Dental 98. Accessibility, best practices, and SEO were 100 on all three. These are local lab measurements with a compressed static preview, not production field measurements.
- Git whitespace check: passed.

## Review boundaries

The CV and public website were not changed. Existing unrelated working-tree changes in the product repositories were left alone; demonstrations ran from scratch copies with separate data stores. The café capture build reused its debug build-cache directory; no installed production executable was replaced. Demo servers were stopped after capture; the portfolio preview remains available at http://127.0.0.1:4400.

No numerical business outcomes, customer testimonials, or production-readiness claims were invented. Verified impact figures and permissioned customer evidence can strengthen the case studies later.
