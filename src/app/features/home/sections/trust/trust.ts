import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TRUST_STATS } from '../../../../config/trust.config';
import { AnimatedCounter } from '../../../../shared/ui/animated-counter/animated-counter';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-trust',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnimatedCounter, RevealOnScrollDirective],
  template: `
    <section id="trust" class="border-y border-border bg-surface-elevated">
      <div
        appRevealOnScroll
        class="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 sm:grid-cols-4 lg:px-8"
      >
        @for (stat of stats; track stat.label) {
          <div class="flex flex-col items-center gap-1 py-10 text-center md:py-14">
            <div class="text-2xl font-bold text-accent md:text-3xl">
              <app-animated-counter [value]="stat.value" />
            </div>
            <p class="text-sm font-semibold text-text-primary">{{ stat.label }}</p>
            <p class="text-xs text-text-tertiary">{{ stat.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Trust {
  protected readonly stats = TRUST_STATS;
}
