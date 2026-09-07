import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../../../config/site.config';
import { CtaButton } from '../../../../shared/ui/cta-button/cta-button';
import { SocialLinks } from '../../../../shared/ui/social-links/social-links';
@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CtaButton, SocialLinks],
  template: `
    <section id="hero" class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <p class="mb-6 text-sm font-medium text-text-secondary">
          Based in Egypt · Open to frontend opportunities
        </p>
        <div class="grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-end">
          <div>
            <h1 tabindex="-1" class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {{ config.name }}
            </h1>
            <p class="mt-5 text-lg font-semibold text-accent">{{ config.title }}</p>
            <p class="mt-4 max-w-xl text-2xl leading-snug text-text-primary sm:text-3xl">
              {{ config.headline }}
            </p>
          </div>
          <div id="about">
            <p class="text-base leading-relaxed text-text-secondary">{{ config.description }}</p>
            <div class="mt-6"><app-social-links [links]="links" /></div>
          </div>
        </div>
        <div class="mt-9 flex flex-wrap gap-3">
          <app-cta-button href="#projects">Explore my work</app-cta-button>
          <app-cta-button variant="secondary" [href]="config.resumeUrl" [external]="true"
            >View résumé</app-cta-button
          >
          <app-cta-button variant="ghost" href="#contact">Get in touch</app-cta-button>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly config = SITE_CONFIG;
  protected readonly links = SOCIAL_LINKS.filter((link) => link.icon !== 'leetcode');
}
