import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../../../config/site.config';
import { SectionContainer } from '../../../../shared/ui/section-container/section-container';
import { CtaButton } from '../../../../shared/ui/cta-button/cta-button';
@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionContainer, CtaButton],
  template: `
    <app-section-container sectionId="contact">
      <div class="rounded-2xl border border-border bg-surface-elevated p-6 md:p-10">
        <p class="text-sm font-semibold uppercase tracking-widest text-accent">Let’s talk</p>
        <h2 class="mt-4 text-3xl font-bold md:text-4xl">
          Looking for an Angular frontend engineer?
        </h2>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          I’m based in Egypt and open to frontend employment and contracting, remote collaboration,
          and relocation to the Gulf or Europe.
        </p>
        <a
          [href]="'mailto:' + email"
          class="mt-5 inline-block break-all font-medium text-accent underline underline-offset-4"
          >{{ email }}</a
        >
        <div class="mt-7 flex flex-wrap gap-3">
          <app-cta-button [href]="'mailto:' + email">Send an email</app-cta-button>
          <app-cta-button variant="secondary" [href]="linkedInUrl" [external]="true"
            >Connect on LinkedIn</app-cta-button
          >
        </div>
      </div>
    </app-section-container>
  `,
})
export class Contact {
  protected readonly email = SITE_CONFIG.email;
  protected readonly linkedInUrl = SOCIAL_LINKS.find((link) => link.icon === 'linkedin')!.url;
}
