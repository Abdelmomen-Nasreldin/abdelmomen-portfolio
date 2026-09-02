import { SITE_CONFIG, SOCIAL_LINKS } from './site.config';
import { FEATURED_PROJECTS } from './projects.config';

describe('public portfolio configuration', () => {
  it('uses the public domain consistently', () => {
    expect(SITE_CONFIG.siteUrl).toBe('https://abdelmomen.dev');
    expect(SITE_CONFIG.socialImageUrl).toBe(
      'https://abdelmomen.dev/assets/social-preview.png'
    );
  });

  it('contains only valid, non-placeholder public links', () => {
    const links = [
      SITE_CONFIG.resumeUrl,
      ...SOCIAL_LINKS.map((link) => link.url),
      ...FEATURED_PROJECTS.flatMap((project) => [
        project.githubUrl,
        project.liveDemoUrl,
      ]),
    ].filter((link): link is string => Boolean(link));

    expect(links).not.toHaveLength(0);
    for (const link of links) {
      expect(link).toMatch(/^https:\/\//);
      expect(link).not.toContain('YOUR_GITHUB');
      expect(link).not.toContain('your-tourism-demo.com');
    }
  });
});
