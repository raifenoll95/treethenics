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
        path: 'tree',
        component: TreePage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'what-should-i-train',
        component: WhatShouldITrain,
      },
      {
        path: 'exercises/:id',
        component: ExerciseDetail,
      },
      {
        path: 'compare',
        component: ComparePage,
      },
      {
        path: 'about',
        component: AboutPage,
      },
      {
        path: 'pro',
        component: ProPage,
      },
    ],
  },
];
