import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Experience } from '../../../models/experience.model';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-experience-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <div class="relative">
      <div class="absolute left-4 top-0 hidden h-full w-px bg-border md:block"></div>

      <div class="space-y-8 md:space-y-12">
        @for (exp of items(); track exp.company; let i = $index) {
          <div class="relative md:pl-12">
            <div
              class="absolute left-2.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface md:block"
            ></div>

            <div
              class="rounded-xl border border-border bg-surface-elevated p-5 transition-colors hover:border-accent/30 md:p-6"
            >
              <div class="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 class="text-lg font-bold text-text-primary">{{ exp.company }}</h3>
                  <p class="text-sm text-accent">{{ exp.role }}</p>
                </div>
                <div class="flex items-center gap-1.5 text-sm text-text-tertiary">
                  @if (exp.type === 'teaching') {
                    <app-icon name="code" className="w-3.5 h-3.5" />
                  } @else {
                    <app-icon name="briefcase" className="w-3.5 h-3.5" />
                  }
                  {{ exp.period }}
                </div>
              </div>

              <ul class="space-y-1.5">
                @for (h of exp.highlights; track h) {
                  <li class="flex items-start gap-2 text-sm text-text-secondary">
                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary"></span>
                    {{ h }}
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class ExperienceTimeline {
  readonly items = input.required<readonly Experience[]>();
}
