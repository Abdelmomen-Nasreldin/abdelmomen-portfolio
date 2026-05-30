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
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  readonly threshold = input(0.15);
  readonly delay = input(0);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      this.observer = new IntersectionObserver(
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

      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
