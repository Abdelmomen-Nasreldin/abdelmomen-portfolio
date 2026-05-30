import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  ElementRef,
  inject,
  PLATFORM_ID,
  afterNextRender,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-animated-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span>{{ display() }}</span>`,
})
export class AnimatedCounter implements OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  readonly value = input.required<string>();
  readonly duration = input(1200);
  protected readonly display = signal('');

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.display.set(this.value());

      const numericMatch = this.value().match(/^(\d+)(\+?)$/);
      if (!numericMatch) {
        this.display.set(this.value());
        return;
      }

      const target = parseInt(numericMatch[1], 10);
      const suffix = numericMatch[2] ?? '';
      this.display.set(`0${suffix}`);

      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            this.animate(target, suffix);
            this.observer?.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  private animate(target: number, suffix: string): void {
    const duration = this.duration();
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      this.display.set(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
