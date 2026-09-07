import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../models/project.model';
import { TechChip } from '../tech-chip/tech-chip';
@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage, TechChip],
  template: `
    <article class="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
      <div [class]="image() ? 'grid lg:grid-cols-[1.1fr_1fr]' : ''">
        @if (image(); as shot) {
          <div
            class="flex items-center border-b border-border bg-surface-hover p-4 lg:border-r lg:border-b-0 lg:p-6"
          >
            <img
              [ngSrc]="shot.previewSrc ?? shot.src"
              [width]="shot.width"
              [height]="shot.height"
              [alt]="shot.alt"
              class="w-full rounded-lg border border-border"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        }
        <div class="p-6 md:p-8">
          <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
            {{ project().status }}
          </p>
          <h3 class="text-2xl font-bold">
            <a [routerLink]="['/projects', project().id]" class="hover:text-accent">{{
              project().title
            }}</a>
          </h3>
          <p class="mt-2 text-sm text-text-tertiary">{{ project().subtitle }}</p>
          <p class="mt-4 leading-relaxed text-text-secondary">{{ project().overview }}</p>
          <p class="mt-4 text-sm font-medium">{{ project().role }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            @for (tech of project().stack; track tech) {
              <app-tech-chip [label]="tech" />
            }
          </div>
          <a
            [routerLink]="['/projects', project().id]"
            class="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent underline underline-offset-4"
          >
            Read the case study <span aria-hidden="true">→</span>
            <span class="sr-only">: {{ project().title }}</span>
          </a>
        </div>
      </div>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  protected readonly image = computed(() => this.project().images[0]);
}
