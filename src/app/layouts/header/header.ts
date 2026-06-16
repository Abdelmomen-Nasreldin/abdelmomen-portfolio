import { Component, ChangeDetectionStrategy, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NAV_ITEMS } from '../../config/nav.config';
import { SITE_CONFIG } from '../../config/site.config';
import { ThemeToggle } from '../../shared/ui/theme-toggle/theme-toggle';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeToggle, Icon],
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-surface/80 backdrop-blur-lg transition-colors"
      role="banner"
    >
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#hero" class="text-lg font-bold tracking-tight text-text-primary">
          {{ name }}
        </a>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-1 md:flex">
          @for (item of navItems; track item.fragment) {
            <a
              [href]="'#' + item.fragment"
              [class]="'rounded-md px-3 py-1.5 text-sm font-medium transition-colors ' +
                (activeSection() === item.fragment
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary')"
            >
              {{ item.label }}
            </a>
          }
          <div class="ml-3">
            <app-theme-toggle />
          </div>
        </div>

        <!-- Mobile toggle -->
        <div class="flex items-center gap-2 md:hidden">
          <app-theme-toggle />
          <button
            type="button"
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:bg-surface-hover"
          >
            @if (mobileMenuOpen()) {
              <app-icon name="close" className="w-5 h-5" />
            } @else {
              <app-icon name="menu" className="w-5 h-5" />
            }
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      @if (mobileMenuOpen()) {
        <div
          id="mobile-menu"
          class="border-t border-border bg-surface px-6 py-4 md:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div class="flex flex-col gap-1">
            @for (item of navItems; track item.fragment) {
              <a
                [href]="'#' + item.fragment"
                (click)="mobileMenuOpen.set(false)"
                class="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
              >
                {{ item.label }}
              </a>
            }
          </div>
        </div>
      }
    </header>
  `,
})
export class Header implements OnInit, OnDestroy {
  protected readonly navItems = NAV_ITEMS;
  protected readonly name = SITE_CONFIG.name.split(' ')[0];
  protected readonly mobileMenuOpen = signal(false);
  protected readonly activeSection = signal('');

  private readonly document = inject(DOCUMENT);
  private ticking = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  private readonly onScroll = (): void => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY + 120;
      let current = '';
      const sections = this.document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        if ((section as HTMLElement).offsetTop <= scrollY) {
          current = section.id;
        }
      });
      this.activeSection.set(current);
      this.ticking = false;
    });
  };
}
