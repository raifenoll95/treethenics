import { Routes } from '@angular/router';
import { AppShell } from './core/layout/app-shell/app-shell';
import { TreePage } from './features/tree/tree-page/tree-page';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        component: TreePage,
      },
    ],
  },
];
