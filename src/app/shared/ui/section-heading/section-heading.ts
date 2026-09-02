import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-10 md:mb-12">
      @if (label(); as label) {
        <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {{ label }}
        </p>
      }
      <h2 class="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {{ heading() }}
      </h2>
      @if (subheading(); as sub) {
        <p class="mt-4 max-w-2xl text-lg text-text-secondary">
          {{ sub }}
        </p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly label = input('');
  readonly heading = input.required<string>();
  readonly subheading = input('');
}
