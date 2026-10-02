import { RenderMode, ServerRoute } from '@angular/ssr';
import { EXERCISES } from './features/tree/data/tree.mock';

export const serverRoutes: ServerRoute[] = [
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
    path: 'what-should-i-train/page/:page',
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
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
