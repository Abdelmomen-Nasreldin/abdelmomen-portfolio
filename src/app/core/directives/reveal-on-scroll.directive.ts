import {
  Directive,
  ElementRef,
  inject,
  PLATFORM_ID,
  afterNextRender,
  OnDestroy,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  host: {
    'class': 'reveal',
  },
})
export class RevealOnScrollDirective implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  readonly threshold = input(0.15);
  readonly delay = input(0);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const element = this.el.nativeElement;
      const IntersectionObserverConstructor = element.ownerDocument.defaultView?.IntersectionObserver;
      if (!IntersectionObserverConstructor) return;

      try {
        this.observer = new IntersectionObserverConstructor(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const delayMs = this.delay();
                if (delayMs > 0) {
                  setTimeout(() => entry.target.classList.add('visible'), delayMs);
                } else {
                  entry.target.classList.add('visible');
                }
                this.observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: this.threshold() }
        );

        element.classList.add('reveal-pending');
        this.observer.observe(element);
      } catch {
        element.classList.remove('reveal-pending');
        this.observer?.disconnect();
        this.observer = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
