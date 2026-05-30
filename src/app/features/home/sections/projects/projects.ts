import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FEATURED_PROJECTS } from '../../../../config/projects.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { SectionHeading } from '../../../../shared/ui/section-heading/section-heading';
import { ProjectCard } from '../../../../shared/ui/project-card/project-card';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, SectionHeading, ProjectCard, RevealOnScrollDirective],
  template: `
    <app-section-container sectionId="projects">
      <app-section-heading
        label="Featured Work"
        heading="Project case studies"
        subheading="Selected projects demonstrating architecture decisions, technical depth, and real-world problem solving."
      />

      <div class="grid gap-6 lg:grid-cols-1">
        @for (project of projects; track project.id; let i = $index) {
          <div appRevealOnScroll [delay]="i * 120">
            <app-project-card [project]="project" />
          </div>
        }
      </div>
    </app-section-container>
  `,
})
export class Projects {
  protected readonly projects = FEATURED_PROJECTS;
}
