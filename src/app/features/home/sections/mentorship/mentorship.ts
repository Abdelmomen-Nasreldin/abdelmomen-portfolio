import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MENTORSHIP_ITEMS } from '../../../../config/mentorship.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { Icon } from '../../../../shared/ui/icon/icon';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-mentorship',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, Icon, RevealOnScrollDirective],
  template: `
    <app-section-container sectionId="mentorship">
      <app-section-heading
        label="Mentorship"
        heading="Elevating engineers"
        subheading="Investing in the growth of junior developers through structured guidance and knowledge sharing."
      />

      <div class="grid gap-6 sm:grid-cols-2">
        @for (item of items; track item.title; let i = $index) {
          <div
            appRevealOnScroll
            [delay]="i * 100"
            class="rounded-xl border border-border bg-surface-elevated p-6 transition-colors hover:border-accent/30"
          >
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent">
              <app-icon [name]="item.icon" className="w-5 h-5" />
            </div>
            <h3 class="mb-2 text-base font-semibold text-text-primary">{{ item.title }}</h3>
            <p class="text-sm leading-relaxed text-text-secondary">{{ item.description }}</p>
          </div>
        }
      </div>
    </app-section-container>
  `,
})
export class Mentorship {
  protected readonly items = MENTORSHIP_ITEMS;
}
