import { Routes } from '@angular/router';
import { AppShell } from './core/layout/app-shell/app-shell';
import { TreePage } from './features/tree/tree-page/tree-page';
import { SearchPage } from './features/search/search-page/search-page';
import { ExerciseDetail } from './features/exercise/exercise-detail/exercise-detail';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        component: TreePage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'exercises/:id',
        component: ExerciseDetail,
      },
    ],
  },
];
