import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { ExerciseMuscle } from '../../models/exercise-muscle.model';
import { ANATOMY_ASSETS } from './anatomy-assets.generated';

@Component({
  selector: 'app-anatomy-viewer',
  standalone: true,
  templateUrl: './anatomy-viewer.html',
  styleUrl: './anatomy-viewer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnatomyViewer {
  readonly primaryMuscles = input<ExerciseMuscle[]>([]);
  readonly secondaryMuscles = input<ExerciseMuscle[]>([]);
  // Local by default. Optional: https://your-domain/anatomy-static
  readonly assetBase = input('/anatomy-static');
  readonly views = ['front', 'back'] as const;
  readonly width = ANATOMY_ASSETS.width;
  readonly height = ANATOMY_ASSETS.height;
  readonly muscleDescription = computed(() => {
    const label = (items: ExerciseMuscle[]) => items.map(m => m.replaceAll('-', ' ')).join(', ') || 'none';
    return `Primary muscles: ${label(this.primaryMuscles())}. Secondary muscles: ${label(this.secondaryMuscles())}.`;
  });
  readonly images = computed(() => {
    const base = `${this.assetBase().replace(/\/$/, '')}/${ANATOMY_ASSETS.version}`;
    const primary = new Set(this.primaryMuscles());
    const secondary = new Set(this.secondaryMuscles());
    return this.views.map(view => {
      const layers = ANATOMY_ASSETS.layers[view];
      const images: { key: string; src: string }[] = [{ key: 'base', src: `${base}/${view}-base.webp` }];
      // Exported regions are disjoint; shared mesh membership is resolved once here.
      for (const region of layers) {
        const role = region.muscles.some(m => primary.has(m)) ? 'primary'
          : region.muscles.some(m => secondary.has(m)) ? 'secondary' : null;
        if (role) images.push({ key: region.id, src: `${base}/${view}-${region.id}-${role}.webp` });
      }
      return { view, label: view === 'front' ? 'Front' : 'Back', images };
    });
  });
}
