import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../config/site.config';
import { SocialLinks } from '../../shared/ui/social-links/social-links';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialLinks],
  template: `
    <footer class="border-t border-border bg-surface" role="contentinfo">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between lg:px-8">
        <div class="text-center sm:text-left">
          <p class="text-sm font-medium text-text-primary">{{ name }}</p>
          <p class="mt-1 text-xs text-text-tertiary">&copy; {{ year }} &middot; Built with Angular</p>
        </div>
        <app-social-links [links]="socialLinks" />
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly name = SITE_CONFIG.name;
  protected readonly year = new Date().getFullYear();
  protected readonly socialLinks = SOCIAL_LINKS;
}
