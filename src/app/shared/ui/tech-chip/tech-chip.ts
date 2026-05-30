import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-tech-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-accent">
      {{ label() }}
    </span>
  `,
})
export class TechChip {
  readonly label = input.required<string>();
}
