import { Routes } from '@angular/router';
import { AppShell } from './core/layout/app-shell/app-shell';
import { TreePage } from './features/tree/tree-page/tree-page';
import { SearchPage } from './features/search/search-page/search-page';
import { ExerciseDetail } from './features/exercise/exercise-detail/exercise-detail';
import { WhatShouldITrain } from './features/what-should-i-train/what-should-i-train/what-should-i-train';
import { ComparePage } from './features/compare/compare-page/compare-page';
import { AboutPage } from './features/about/about-page/about-page';
import { ProPage } from './features/pro/pro-page/pro-page';
import { WelcomePage } from './features/welcome/welcome-page/welcome-page';
import { SPANISH_EXERCISES } from './features/tree/data/spanish-exercises.generated';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WelcomePage,
      },
      {
        path: 'es',
        pathMatch: 'full',
        component: WelcomePage,
        data: { language: 'es' },
      },
      { path: 'tree', component: TreePage, data: { language: 'en' } },
      { path: 'tree/es', component: TreePage, data: { language: 'es' } },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'train/es',
        component: WhatShouldITrain,
        data: { language: 'es' },
      },
      {
        path: 'train/page/:page/es',
        component: WhatShouldITrain,
        data: { language: 'es' },
      },
      {
        path: 'train',
        component: WhatShouldITrain,
      },
      {
        path: 'train/page/:page',
        component: WhatShouldITrain,
      },
      {
        path: 'exercises/:id/es',
        component: ExerciseDetail,
        data: { language: 'es' },
        canMatch: [(_route, segments) =>
          SPANISH_EXERCISES.has(segments[1]?.path ?? '')
        ],
      },
      {
        path: 'exercises/:id',
        component: ExerciseDetail,
      },
      { path: 'compare/es', component: ComparePage, data: { language: 'es' } },
      {
        path: 'compare',
        component: ComparePage,
      },
      { path: 'about/es', component: AboutPage, data: { language: 'es' } },
      {
        path: 'about',
        component: AboutPage,
      },
      { path: 'pro/es', component: ProPage, data: { language: 'es' } },
      {
        path: 'pro',
        component: ProPage,
      },
    ],
  },
];
