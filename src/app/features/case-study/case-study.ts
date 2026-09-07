import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { SITE_CONFIG } from '../../config/site.config';
import { SeoService } from '../../core/services/seo.service';
import { TechChip } from '../../shared/ui/tech-chip/tech-chip';
@Component({
  selector: 'app-case-study',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage, TechChip],
  template: `
    <article class="mx-auto max-w-6xl px-6 py-12 lg:px-8">
      <a
        routerLink="/"
        fragment="projects"
        class="inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4"
        >← Back to selected work</a
      >
      <header class="mt-8 max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-wider text-accent">
          {{ project.status }}
        </p>
        <h1 tabindex="-1" class="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {{ project.title }}
        </h1>
        <p class="mt-5 text-xl text-text-secondary">{{ project.subtitle }}</p>
        <p class="mt-5 leading-relaxed text-text-secondary">{{ project.overview }}</p>
      </header>
      <dl class="mt-9 grid gap-6 border-y border-border py-6 sm:grid-cols-2">
        <div>
          <dt class="text-sm text-text-tertiary">My role</dt>
          <dd class="mt-1 font-medium">{{ project.role }}</dd>
        </div>
        <div>
          <dt class="text-sm text-text-tertiary">Context</dt>
          <dd class="mt-1 font-medium">{{ project.context }}</dd>
        </div>
      </dl>
      <div class="mt-6 flex flex-wrap gap-2">
        @for (tech of project.stack; track tech) {
          <app-tech-chip [label]="tech" />
        }
      </div>
      @if (project.images.length) {
        <section aria-labelledby="screens-heading" class="mt-14">
          <h2 id="screens-heading" class="text-2xl font-bold">Inside the application</h2>
          <p class="mt-3 text-sm text-text-tertiary">
            Actual interface captures with fictional demonstration data.
          </p>
          <div class="mt-7 space-y-10">
            @for (shot of project.images; track shot.src) {
              <figure>
                <div
                  class="overflow-hidden rounded-xl border border-border bg-surface-elevated p-2 sm:p-4"
                >
                  <img
                    [ngSrc]="shot.src"
                    [width]="shot.width"
                    [height]="shot.height"
                    [alt]="shot.alt"
                    class="w-full rounded-lg"
                    sizes="(min-width: 1152px) 1088px, 100vw"
                  />
                </div>
                <figcaption class="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">
                  {{ shot.caption }}
                </figcaption>
              </figure>
            }
          </div>
        </section>
      }
      <div class="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 class="text-2xl font-bold">The problem</h2>
        <p class="text-lg leading-relaxed text-text-secondary">{{ project.problem }}</p>
      </div>
      <section class="mt-14" aria-labelledby="decisions-heading">
        <h2 id="decisions-heading" class="text-2xl font-bold">Decisions behind the interface</h2>
        <div class="mt-7 grid gap-6 md:grid-cols-2">
          @for (decision of project.decisions; track decision.title) {
            <div class="rounded-xl border border-border bg-surface-elevated p-6">
              <h3 class="text-xl font-semibold">{{ decision.title }}</h3>
              <p class="mt-4 leading-relaxed text-text-secondary">{{ decision.approach }}</p>
              <p
                class="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-text-secondary"
              >
                <span class="font-semibold text-text-primary">The tradeoff. </span
                >{{ decision.tradeoff }}
              </p>
            </div>
          }
        </div>
      </section>
      <div class="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 class="text-2xl font-bold">What the work delivered</h2>
        <ul class="list-disc space-y-4 pl-5 text-text-secondary">
          @for (outcome of project.outcomes; track outcome) {
            <li>{{ outcome }}</li>
          }
        </ul>
      </div>
      <div class="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 class="text-2xl font-bold">Reflection</h2>
        <p class="leading-relaxed text-text-secondary">{{ project.reflection }}</p>
      </div>
      <aside
        aria-label="Attribution and evidence"
        class="mt-14 rounded-xl border border-border p-6"
      >
        <h2 class="text-lg font-semibold">Ownership & evidence</h2>
        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">
          {{ project.attribution }}
        </p>
        @for (link of project.evidence; track link.url) {
          <a
            [href]="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex min-h-11 items-center text-accent underline underline-offset-4"
            >{{ link.label }}</a
          >
        }
      </aside>
      <div class="mt-12 flex flex-wrap gap-6 border-t border-border pt-8">
        <a
          routerLink="/"
          fragment="projects"
          class="min-h-11 font-semibold text-accent underline underline-offset-4"
          >Explore the other projects</a
        >
        <a
          routerLink="/"
          fragment="contact"
          class="min-h-11 font-semibold text-accent underline underline-offset-4"
          >Discuss a frontend opportunity →</a
        >
      </div>
    </article>
  `,
})
export class CaseStudy implements OnInit {
  protected readonly project = inject(ActivatedRoute).snapshot.data['project'] as Project;
  private readonly seo = inject(SeoService);
  ngOnInit(): void {
    const url = `${SITE_CONFIG.siteUrl}/projects/${this.project.id}`;
    this.seo.update({
      title: `${this.project.title} | ${SITE_CONFIG.name}`,
      description: this.project.overview,
      url,
      image: SITE_CONFIG.socialImageUrl,
      type: 'article',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.project.title,
      description: this.project.overview,
      url,
      author: { '@type': 'Person', name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl + '/' },
      image: SITE_CONFIG.socialImageUrl,
    });
  }
}
