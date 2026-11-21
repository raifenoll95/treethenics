import { RenderMode, ServerRoute } from '@angular/ssr';
import { EXERCISES } from './features/tree/data/tree.mock';
import { SPANISH_EXERCISES } from './features/tree/data/spanish-exercises.generated';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'exercises/:id/es',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return Array.from(SPANISH_EXERCISES.keys(), id => ({ id }));
    },
  },
  {
    path: 'exercises/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return EXERCISES.map((exercise) => ({
        id: exercise.id,
      }));
    },
  },
  {
    path: 'train/es',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'train/page/:page/es',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const totalPages = Math.ceil(EXERCISES.length / 24);

      return Array.from(
        { length: Math.max(0, totalPages - 1) },
        (_, index) => ({ page: String(index + 2) }),
      );
    },
  },
  {
    path: 'train/page/:page',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const exercisesPerPage = 24;
      const totalPages = Math.ceil(EXERCISES.length / exercisesPerPage);

      return Array.from(
        { length: Math.max(0, totalPages - 1) },
        (_, index) => ({
          page: String(index + 2),
        }),
      );
    },
  },
  { path: 'es', renderMode: RenderMode.Prerender },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
