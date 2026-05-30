import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, RevealOnScrollDirective],
  template: `
    <app-section-container sectionId="about">
      <app-section-heading
        label="About"
        heading="Engineering at scale"
        subheading="Focused on building frontend systems that solve real business problems."
      />

      <div appRevealOnScroll class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4 text-text-secondary">
          <p>
            I specialize in Angular and TypeScript, building enterprise-grade web applications that
            serve millions of users. At Vodafone Egypt, I engineer self-service portals and reusable
            component libraries consumed across multiple product teams.
          </p>
          <p>
            My approach prioritizes clean architecture, performance optimization, and maintainability.
            Every component I build is designed to be composable, testable, and aligned with the long-term
            technical strategy of the product.
          </p>
        </div>
        <div class="space-y-4 text-text-secondary">
          <p>
            Beyond writing code, I contribute to frontend architecture decisions, drive performance
            initiatives, and mentor junior developers. As an Angular instructor at NTI, I designed
            and delivered a 60-hour curriculum covering modern Angular patterns.
          </p>
          <p>
            I believe the best frontend engineers are measured not by the frameworks they know, but
            by the quality of the systems they build and the teams they elevate.
          </p>
        </div>
      </div>
    </app-section-container>
  `,
})
export class About {}
