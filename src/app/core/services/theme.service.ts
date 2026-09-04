import { Injectable, signal, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // Keep server and client hydration deterministic. The preferred theme is applied after interaction starts.
  readonly theme = signal<Theme>('light');

  constructor() {
    afterNextRender(() => {
      if (!this.isBrowser) return;

      const preferredTheme = this.getBrowserTheme();
      this.theme.set(preferredTheme);
      this.applyTheme(preferredTheme);
    });
  }

  toggle(): void {
    if (!this.isBrowser) return;

    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.applyTheme(next);
  }

  private getBrowserTheme(): Theme {
    const stored = this.getStoredTheme();
    if (stored) return stored;

    return this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private applyTheme(theme: Theme): void {
    const root = this.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    this.setStoredTheme(theme);
  }

  private getStoredTheme(): Theme | null {
    try {
      const stored = this.document.defaultView?.localStorage.getItem('theme');
      return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
      return null;
    }
  }

  private setStoredTheme(theme: Theme): void {
    try {
      this.document.defaultView?.localStorage.setItem('theme', theme);
    } catch {
      // Private browsing and strict privacy settings can deny storage access.
    }
  }
}
