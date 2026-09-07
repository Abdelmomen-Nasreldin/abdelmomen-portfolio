import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  afterNextRender,
  DestroyRef,
  viewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NAV_ITEMS } from '../../config/nav.config';
import { ThemeToggle } from '../../shared/ui/theme-toggle/theme-toggle';
import { Icon } from '../../shared/ui/icon/icon';
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ThemeToggle, Icon],
  host: { '(keydown.escape)': 'closeMenu(true)' },
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-lg"
    >
      <nav
        class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a routerLink="/" fragment="hero" class="py-2 text-lg font-bold tracking-tight"
          >Abdelmomen</a
        >
        <div class="hidden items-center gap-2 md:flex">
          @for (item of navItems; track item.fragment) {
            <a
              routerLink="/"
              [fragment]="item.fragment"
              [attr.aria-current]="activeSection() === item.fragment ? 'location' : null"
              [class]="
                activeSection() === item.fragment
                  ? 'rounded-md px-3 py-2 text-sm font-semibold text-accent'
                  : 'rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:text-accent'
              "
              >{{ item.label }}</a
            >
          }
        </div>
        <div class="flex items-center gap-3">
          <app-theme-toggle />
          <button
            #menuButton
            type="button"
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            class="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-secondary md:hidden"
          >
            <app-icon [name]="mobileMenuOpen() ? 'close' : 'menu'" className="w-5 h-5" />
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        [hidden]="!mobileMenuOpen()"
        class="border-t border-border px-6 py-4 md:hidden"
      >
        <nav aria-label="Mobile navigation" class="flex flex-col gap-1">
          @for (item of navItems; track item.fragment) {
            <a
              routerLink="/"
              [fragment]="item.fragment"
              (click)="closeMenu()"
              [attr.aria-current]="activeSection() === item.fragment ? 'location' : null"
              class="rounded-md px-3 py-3 text-sm font-medium text-text-secondary hover:bg-surface-hover"
              >{{ item.label }}</a
            >
          }
        </nav>
      </div>
    </header>
  `,
})
export class Header {
  protected readonly navItems = NAV_ITEMS;
  protected readonly mobileMenuOpen = signal(false);
  protected readonly activeSection = signal('');
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mobileMenuOpen.set(false);
        this.activeSection.set(
          event.urlAfterRedirects.startsWith('/#') ? event.urlAfterRedirects.split('#')[1] : '',
        );
      }
    });
    afterNextRender(() => {
      const win = this.document.defaultView;
      if (!win) return;
      let frame = 0;
      const update = () => {
        frame = 0;
        if (this.router.url.split('#')[0] !== '/') {
          this.activeSection.set('');
          return;
        }
        let current = '';
        for (const item of NAV_ITEMS) {
          const target = this.document.getElementById(item.fragment);
          if (target && target.getBoundingClientRect().top <= 160) current = item.fragment;
        }
        if (win.scrollY + win.innerHeight >= this.document.documentElement.scrollHeight - 4)
          current = 'contact';
        this.activeSection.set(current);
      };
      const onScroll = () => {
        if (!frame) frame = win.requestAnimationFrame(update);
      };
      const breakpoint = win.matchMedia('(min-width: 768px)');
      const onBreakpoint = () => {
        if (breakpoint.matches) this.mobileMenuOpen.set(false);
      };
      win.addEventListener('scroll', onScroll, { passive: true });
      breakpoint.addEventListener('change', onBreakpoint);
      update();
      this.destroyRef.onDestroy(() => {
        win.removeEventListener('scroll', onScroll);
        breakpoint.removeEventListener('change', onBreakpoint);
        win.cancelAnimationFrame(frame);
      });
    });
  }
  protected closeMenu(restoreFocus = false): void {
    if (!this.mobileMenuOpen()) return;
    this.mobileMenuOpen.set(false);
    if (restoreFocus) this.menuButton()?.nativeElement.focus();
  }
}
