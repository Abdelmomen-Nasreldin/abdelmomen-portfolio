import { Component, ChangeDetectionStrategy, input, signal } from '@angular/core';
import { Project } from '../../../models/project.model';
import { TechChip } from '../tech-chip/tech-chip';
import { Icon } from '../icon/icon';
import { CtaButton } from '../cta-button/cta-button';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechChip, Icon, CtaButton],
  template: `
    <article class="group rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-elevated md:p-8">
      <div class="mb-4 flex items-start justify-between">
        <div>
          <h3 class="text-xl font-bold text-text-primary">{{ project().title }}</h3>
          <p class="mt-1 text-sm text-text-tertiary">{{ project().subtitle }}</p>
        </div>
      </div>

      <p class="mb-4 text-text-secondary">{{ project().overview }}</p>

      <div class="mb-5 flex flex-wrap gap-1.5">
        @for (tech of project().stack; track tech) {
          <app-tech-chip [label]="tech" />
        }
      </div>

      <button
        type="button"
        (click)="expanded.set(!expanded())"
        [attr.aria-expanded]="expanded()"
        class="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        {{ expanded() ? 'Show less' : 'View case study' }}
        <app-icon
          name="arrow_down"
          [className]="'w-3.5 h-3.5 transition-transform duration-200 ' + (expanded() ? 'rotate-180' : '')"
        />
      </button>

      @if (expanded()) {
        <div class="space-y-5 border-t border-border-subtle pt-5">
          <div>
            <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Problem</h4>
            <p class="text-sm text-text-secondary">{{ project().problem }}</p>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Technical Challenges</h4>
            <ul class="space-y-1.5">
              @for (c of project().challenges; track c) {
                <li class="flex items-start gap-2 text-sm text-text-secondary">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                  {{ c }}
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Architecture Decisions</h4>
            <ul class="space-y-1.5">
              @for (d of project().architectureDecisions; track d) {
                <li class="flex items-start gap-2 text-sm text-text-secondary">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                  {{ d }}
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Key Features</h4>
            <ul class="space-y-1.5">
              @for (f of project().keyFeatures; track f) {
                <li class="flex items-start gap-2 text-sm text-text-secondary">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                  {{ f }}
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Engineering Highlights</h4>
            <ul class="space-y-1.5">
              @for (h of project().engineeringHighlights; track h) {
                <li class="flex items-start gap-2 text-sm text-text-secondary">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"></span>
                  {{ h }}
                </li>
              }
            </ul>
          </div>
        </div>
      }

      <div class="mt-5 flex flex-wrap gap-3">
        @if (project().githubUrl; as url) {
          <app-cta-button variant="secondary" [href]="url" [external]="true">
            <app-icon name="github" className="w-4 h-4" />
            Source Code
          </app-cta-button>
        }
        @if (project().liveDemoUrl; as url) {
          <app-cta-button variant="primary" [href]="url" [external]="true">
            <app-icon name="external" className="w-4 h-4" />
            Live Demo
          </app-cta-button>
        }
      </div>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  protected readonly expanded = signal(false);
}
