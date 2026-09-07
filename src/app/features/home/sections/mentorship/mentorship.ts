import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
@Component({
  selector: 'app-mentorship',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading],
  template: `
    <app-section-container sectionId="mentorship">
      <app-section-heading
        label="Teaching & mentoring"
        heading="Making Angular easier to understand"
      />
      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold">NTI · 60-hour Angular program</h3>
          <p class="mt-3 leading-relaxed text-text-secondary">
            In July and August 2025, I delivered NTI’s Angular program, helping students connect
            TypeScript, components, RxJS, and state management through practical projects.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Learning through code review</h3>
          <p class="mt-3 leading-relaxed text-text-secondary">
            I guide junior developers through debugging, code reviews, and learning paths. The aim
            is to help them explain their decisions and work through problems independently.
          </p>
        </div>
      </div>
    </app-section-container>
  `,
})
export class Mentorship {}
