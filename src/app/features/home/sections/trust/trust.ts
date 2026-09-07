import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TRUST_STATS } from '../../../../config/trust.config';
@Component({
  selector: 'app-trust',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-label="Experience at a glance" class="border-y border-border bg-surface-elevated">
      <div class="mx-auto grid max-w-6xl gap-6 px-6 py-7 sm:grid-cols-3 lg:px-8">
        @for (stat of stats; track stat.label) {
          <div>
            <p class="text-xl font-semibold text-accent">{{ stat.value }}</p>
            <p class="mt-1 text-sm font-semibold">{{ stat.label }}</p>
            <p class="mt-1 text-xs text-text-tertiary">{{ stat.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Trust {
  protected readonly stats = TRUST_STATS;
}
