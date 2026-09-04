import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../../config/skills.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { SkillBadge } from '../../../../shared/ui/skill-badge/skill-badge';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-expertise',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, SkillBadge, RevealOnScrollDirective],
  template: `
    <app-section-container sectionId="expertise">
      <app-section-heading
        label="Technical Expertise"
        heading="Tools & technologies"
        subheading="The technologies and practices I use to build production systems."
      />

      <div class="grid gap-8 sm:grid-cols-2">
        @for (category of categories; track category.title; let i = $index) {
          <div
            appRevealOnScroll
            [delay]="i * 100"
            class="rounded-xl border border-border bg-surface-elevated p-6"
          >
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-widest text-text-tertiary">
              {{ category.title }}
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (skill of category.skills; track skill) {
                <app-skill-badge [label]="skill" />
              }
            </div>
            @if (category.description; as description) {
              <p class="mt-4 text-sm leading-relaxed text-text-secondary">
                {{ description }}
              </p>
            }
          </div>
        }
      </div>
    </app-section-container>
  `,
})
export class Expertise {
  protected readonly categories = SKILL_CATEGORIES;
}
