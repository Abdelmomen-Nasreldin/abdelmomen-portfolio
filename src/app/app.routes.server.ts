import { RenderMode, ServerRoute } from '@angular/ssr';
import { FEATURED_PROJECTS } from './config/projects.config';
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  ...FEATURED_PROJECTS.map<ServerRoute>((project) => ({
    path: 'projects/' + project.id,
    renderMode: RenderMode.Prerender,
  })),
  { path: '404', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
