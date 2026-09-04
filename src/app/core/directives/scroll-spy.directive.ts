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
})
export class ScrollSpyDirective implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly browserWindow = this.document.defaultView;
  private sectionIds: string[] = [];
  private ticking = false;

  readonly activeSectionChange = output<string>();

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId) || !this.browserWindow) return;

      this.sectionIds = Array.from(
        this.document.querySelectorAll('section[id]')
      ).map((el) => el.id);
      this.browserWindow.addEventListener('scroll', this.onScroll, { passive: true });
    });
  }

  private readonly onScroll = (): void => {
    const browserWindow = this.browserWindow;
    if (this.ticking || !browserWindow) return;

    this.ticking = true;
    browserWindow.requestAnimationFrame(() => {
      const scrollY = browserWindow.scrollY + 120;
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
  };

  ngOnDestroy(): void {
    this.browserWindow?.removeEventListener('scroll', this.onScroll);
    this.ticking = false;
  }
}
