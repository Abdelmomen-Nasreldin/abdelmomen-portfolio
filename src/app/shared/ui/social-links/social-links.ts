import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { SocialLink } from '../../../models/social-link.model';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <div class="flex items-center gap-3">
      @for (link of links(); track link.label) {
        <a
          [href]="link.url"
          [attr.aria-label]="link.label"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
        >
          <app-icon [name]="link.icon" className="w-4 h-4" />
        </a>
      }
    </div>
  `,
})
export class SocialLinks {
  readonly links = input.required<readonly SocialLink[]>();
}
