import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FEATURED_PROJECTS } from '../../../../config/projects.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { ProjectCard } from '../../../../shared/ui/project-card/project-card';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, ProjectCard],
  template: `
    <app-section-container sectionId="projects">
      <app-section-heading
        label="Selected work"
        heading="Built for the people using it"
        subheading="Two independently developed business applications. The problem, my contribution, and the decisions behind each interface."
      />

      <div class="grid gap-6 lg:grid-cols-1">
        @for (project of projects; track project.id) {
          <app-project-card [project]="project" />
        }
      </div>
    </app-section-container>
  `,
})
export class Projects {
  protected readonly projects = FEATURED_PROJECTS;
}
