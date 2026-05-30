import {
  Directive,
  inject,
  PLATFORM_ID,
  afterNextRender,
  OnDestroy,
  output,
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollSpy]',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class ScrollSpyDirective implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private sectionIds: string[] = [];
  private ticking = false;

  readonly activeSectionChange = output<string>();

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.sectionIds = Array.from(
        this.document.querySelectorAll('section[id]')
      ).map((el) => el.id);
    });
  }

  onScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.ticking) return;

    this.ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY + 120;
      let current = '';

      for (const id of this.sectionIds) {
        const el = this.document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      if (current) {
        this.activeSectionChange.emit(current);
      }
      this.ticking = false;
    });
  }

  ngOnDestroy(): void {
    this.ticking = false;
  }
}
