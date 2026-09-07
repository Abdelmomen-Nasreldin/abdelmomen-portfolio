import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../config/site.config';
import { Hero } from './sections/hero/hero';
import { Trust } from './sections/trust/trust';
import { Expertise } from './sections/expertise/expertise';
import { Projects } from './sections/projects/projects';
import { Timeline } from './sections/timeline/timeline';
import { Mentorship } from './sections/mentorship/mentorship';
import { Contact } from './sections/contact/contact';
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, Trust, Expertise, Projects, Timeline, Mentorship, Contact],
  template: `<app-hero /><app-trust /><app-projects /><app-timeline /><app-mentorship /><app-expertise /><app-contact />`,
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);
  ngOnInit(): void {
    this.seo.update({
      title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.siteUrl + '/',
      image: SITE_CONFIG.socialImageUrl,
      type: 'website',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_CONFIG.name,
      jobTitle: 'Frontend Engineer',
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.siteUrl + '/',
      sameAs: SOCIAL_LINKS.map((link) => link.url),
    });
  }
}
