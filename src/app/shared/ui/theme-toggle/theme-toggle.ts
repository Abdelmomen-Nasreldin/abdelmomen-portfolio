import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <button
      type="button"
      (click)="themeService.toggle()"
      [attr.aria-label]="ariaLabel()"
      class="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
    >
      @if (themeService.theme() === 'dark') {
        <app-icon name="sun" className="w-4 h-4" />
      } @else {
        <app-icon name="moon" className="w-4 h-4" />
      }
    </button>
  `,
})
export class ThemeToggle {
  protected readonly themeService = inject(ThemeService);
  protected readonly ariaLabel = computed(() =>
    this.themeService.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
}
