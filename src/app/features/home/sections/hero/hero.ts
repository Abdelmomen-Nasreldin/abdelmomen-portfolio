import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../../../config/site.config';
import { CtaButton } from '../../../../shared/ui/cta-button/cta-button';
import { SocialLinks } from '../../../../shared/ui/social-links/social-links';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CtaButton, SocialLinks, Icon],
  template: `
    <section
      id="hero"
      class="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <!-- Subtle dot grid background -->
      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;"
        aria-hidden="true"
      ></div>

      <div class="relative mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
        <div class="max-w-3xl">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-text-secondary">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            Available for opportunities
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {{ name }}
          </h1>

          <p class="mt-4 text-lg font-medium text-accent sm:text-xl">
            {{ title }}
          </p>

          <p class="mt-3 text-xl text-text-secondary sm:text-2xl">
            {{ headline }}
          </p>

          <p class="mt-6 max-w-2xl text-base leading-relaxed text-text-tertiary">
            {{ description }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <app-cta-button variant="primary" href="#projects">
              View Projects
            </app-cta-button>
            <app-cta-button variant="secondary" [href]="resumeUrl" [external]="true">
              <app-icon name="download" className="w-4 h-4" />
              Download Resume
            </app-cta-button>
            <app-cta-button variant="ghost" href="#contact">
              Contact Me
            </app-cta-button>
          </div>

          <div class="mt-10">
            <app-social-links [links]="socialLinks" />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly name = SITE_CONFIG.name;
  protected readonly title = SITE_CONFIG.title;
  protected readonly headline = SITE_CONFIG.headline;
  protected readonly description = SITE_CONFIG.description;
  protected readonly resumeUrl = SITE_CONFIG.resumeUrl;
  protected readonly socialLinks = SOCIAL_LINKS;
}
