import {
  Component,
  ChangeDetectionStrategy,
  inject,
  afterNextRender,
  Injector,
  DestroyRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-main-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer],
  template: `<a class="skip-link" href="#main-content">Skip to content</a><app-header />
    <main id="main-content" tabindex="-1" class="pt-16"><router-outlet /></main>
    <app-footer />`,
})
export class MainLayout {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        if (!(event instanceof NavigationEnd)) return;
        afterNextRender(
          () => {
            const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;
            const section = fragment ? this.document.getElementById(fragment) : null;
            const target =
              section?.querySelector<HTMLElement>('h1, h2') ??
              section ??
              this.document.querySelector<HTMLElement>('main h1');
            if (target) {
              target.setAttribute('tabindex', '-1');
              target.focus({ preventScroll: true });
            }
          },
          { injector: this.injector },
        );
      });
    });
  }
}
