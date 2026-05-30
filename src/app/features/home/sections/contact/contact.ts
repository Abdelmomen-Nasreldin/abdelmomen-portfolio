import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../../../config/site.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { CtaButton } from '../../../../shared/ui/cta-button/cta-button';
import { SocialLinks } from '../../../../shared/ui/social-links/social-links';
import { Icon } from '../../../../shared/ui/icon/icon';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, CtaButton, SocialLinks, Icon, RevealOnScrollDirective],
  template: `
    <app-section-container sectionId="contact">
      <div appRevealOnScroll class="mx-auto max-w-2xl text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Get in touch
        </p>
        <h2 class="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Let&apos;s build something great
        </h2>
        <p class="mt-4 text-lg text-text-secondary">
          Open to frontend engineering and full-stack opportunities. If you&apos;re looking for a
          developer who cares deeply about architecture, performance, and code quality, let&apos;s connect.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <app-cta-button variant="primary" [href]="'mailto:' + email" [external]="true">
            <app-icon name="mail" className="w-4 h-4" />
            Send an Email
          </app-cta-button>
          <app-cta-button variant="secondary" [href]="linkedInUrl" [external]="true">
            <app-icon name="linkedin" className="w-4 h-4" />
            LinkedIn
          </app-cta-button>
        </div>

        <div class="mt-10 flex justify-center">
          <app-social-links [links]="socialLinks" />
        </div>
      </div>
    </app-section-container>
  `,
})
export class Contact {
  protected readonly email = SITE_CONFIG.email;
  protected readonly linkedInUrl = SOCIAL_LINKS.find(l => l.icon === 'linkedin')?.url ?? '#';
  protected readonly socialLinks = SOCIAL_LINKS;
}
