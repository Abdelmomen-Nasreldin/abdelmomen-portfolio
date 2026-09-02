import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block',
  },
  template: `
    <section
      [id]="sectionId()"
      class="mx-auto w-full max-w-6xl px-6 py-16 md:py-20 lg:px-8"
    >
      <ng-content />
    </section>
  `,
})
export class SectionContainer {
  readonly sectionId = input('');
}
