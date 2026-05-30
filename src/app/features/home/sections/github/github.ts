import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SOCIAL_LINKS } from '../../../../config/site.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { CtaButton } from '../../../../shared/ui/cta-button/cta-button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-github',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, CtaButton, Icon, RevealOnScrollDirective],
  template: `
    <app-section-container sectionId="github">
      <app-section-heading
        label="Open Source"
        heading="Engineering philosophy"
        subheading="Clean code, structured thinking, and continuous improvement."
      />

      <div appRevealOnScroll class="grid gap-6 sm:grid-cols-3">
        <div class="rounded-xl border border-border bg-surface-elevated p-6">
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-widest text-text-tertiary">Architecture First</h3>
          <p class="text-sm text-text-secondary">
            Every project starts with a clear component tree, data flow design, and separation of concerns before writing the first line of code.
          </p>
        </div>
        <div class="rounded-xl border border-border bg-surface-elevated p-6">
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-widest text-text-tertiary">Type Safety</h3>
          <p class="text-sm text-text-secondary">
            Strict TypeScript with no escape hatches. Interfaces over any, exhaustive checks, and compile-time guarantees that catch bugs before runtime.
          </p>
        </div>
        <div class="rounded-xl border border-border bg-surface-elevated p-6">
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-widest text-text-tertiary">Performance Budget</h3>
          <p class="text-sm text-text-secondary">
            Measurable performance targets baked into the build process. Lazy loading, tree-shaking, and bundle analysis as standard practice.
          </p>
        </div>
      </div>

      <div appRevealOnScroll [delay]="200" class="mt-10 flex justify-center">
        <app-cta-button variant="secondary" [href]="githubUrl" [external]="true">
          <app-icon name="github" className="w-4 h-4" />
          View GitHub Profile
        </app-cta-button>
      </div>
    </app-section-container>
  `,
})
export class Github {
  protected readonly githubUrl = SOCIAL_LINKS.find(l => l.icon === 'github')?.url ?? '#';
}
