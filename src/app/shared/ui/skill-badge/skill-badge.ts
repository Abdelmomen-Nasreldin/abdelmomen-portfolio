import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center rounded-full bg-accent-subtle px-3 py-1.5 text-sm font-medium text-accent transition-colors">
      {{ label() }}
    </span>
  `,
})
export class SkillBadge {
  readonly label = input.required<string>();
}
