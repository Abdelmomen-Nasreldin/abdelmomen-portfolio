import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { FEATURED_PROJECTS } from './config/projects.config';
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      ...FEATURED_PROJECTS.map((project) => ({
        path: 'projects/' + project.id,
        data: { project },
        loadComponent: () => import('./features/case-study/case-study').then((m) => m.CaseStudy),
      })),
      {
        path: '404',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
