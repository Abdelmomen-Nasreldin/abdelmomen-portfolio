import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SITE_CONFIG } from '../../config/site.config';
@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `<section class="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <p class="font-semibold text-accent">404</p>
    <h1 tabindex="-1" class="mt-4 text-4xl font-bold">That page isn’t here</h1>
    <p class="mt-5 text-text-secondary">
      The link may have changed. You can find my projects and contact details on the homepage.
    </p>
    <a
      routerLink="/"
      class="mt-8 inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4"
      >Return to the portfolio →</a
    >
  </section>`,
})
export class NotFound {
  constructor() {
    const seo = inject(SeoService);
    seo.update({
      title: 'Page not found | ' + SITE_CONFIG.name,
      description: 'Return to the portfolio of ' + SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl + '/404',
      image: SITE_CONFIG.socialImageUrl,
      robots: 'noindex,follow',
    });
    seo.setJsonLd({});
  }
}
