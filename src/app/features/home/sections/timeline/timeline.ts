import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EXPERIENCES } from '../../../../config/experience.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { ExperienceTimeline } from '../../../../shared/ui/experience-timeline/experience-timeline';

@Component({
  selector: 'app-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, ExperienceTimeline],
  template: `
    <app-section-container sectionId="experience">
      <app-section-heading
        label="Career"
        heading="Professional experience"
        subheading="A track record of building impactful frontend systems across industries."
      />

      <app-experience-timeline [items]="experiences" />
    </app-section-container>
  `,
})
export class Timeline {
  protected readonly experiences = EXPERIENCES;
}
