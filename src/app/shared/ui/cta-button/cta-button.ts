import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="href()"
      [target]="external() ? '_blank' : '_self'"
      [attr.rel]="external() ? 'noopener noreferrer' : undefined"
      [class]="classes()"
      role="link"
    >
      <ng-content />
    </a>
  `,
})
export class CtaButton {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly href = input('#');
  readonly external = input(false);

  protected classes(): string {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

    switch (this.variant()) {
      case 'primary':
        return `${base} bg-accent text-white hover:bg-accent-hover shadow-sm`;
      case 'secondary':
        return `${base} border border-border bg-surface text-text-primary hover:bg-surface-hover`;
      case 'ghost':
        return `${base} text-text-secondary hover:text-text-primary hover:bg-surface-hover`;
      default:
        return base;
    }
  }
}
