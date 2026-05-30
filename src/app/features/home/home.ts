import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { SITE_CONFIG } from '../../config/site.config';
import { Hero } from './sections/hero/hero';
import { Trust } from './sections/trust/trust';
import { About } from './sections/about/about';
import { Expertise } from './sections/expertise/expertise';
import { Projects } from './sections/projects/projects';
import { Timeline } from './sections/timeline/timeline';
import { Mentorship } from './sections/mentorship/mentorship';
import { Github } from './sections/github/github';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, Trust, About, Expertise, Projects, Timeline, Mentorship, Github, Contact],
  template: `
    <app-hero />
    <app-trust />
    <app-about />
    <app-expertise />
    <app-projects />
    <app-timeline />
    <app-mentorship />
    <app-github />
    <app-contact />
  `,
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: `${SITE_CONFIG.name} | Senior Frontend Engineer`,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.siteUrl,
      type: 'website',
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_CONFIG.name,
      jobTitle: 'Senior Frontend Engineer',
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.siteUrl,
    });
  }
}
