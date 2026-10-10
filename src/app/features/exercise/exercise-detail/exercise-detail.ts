import {
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  EXERCISES,
  EXERCISE_RELATIONS,
} from '../../tree/data/tree.mock';

import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { AnatomyViewer } from '../../../shared/components/anatomy-viewer/anatomy-viewer';
import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';

import { signal } from '@angular/core';

import { OptimizedImagePipe } from '../../../shared/pipes/optimized-image.pipe';
import { IMAGE_VERSION } from '../../../core/config/image-version';

import {
  Meta,
  Title,
} from '@angular/platform-browser';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-exercise-detail',
  imports: [
    RouterLink,
    AnatomyViewer,
    OptimizedImagePipe,
  ],
  templateUrl: './exercise-detail.html',
  styleUrl: './exercise-detail.css',
})
export class ExerciseDetail {

  readonly anatomyBackgroundImage =
  `url("https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/anatomy/anatomy-background.webp?v=${IMAGE_VERSION}")`;

  readonly equipmentImage = (name: string): string =>
  `url("https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/equipment/${name}.webp?v=${IMAGE_VERSION}")`;

  constructor() {

    effect(() => {

      const exercise = this.exercise();

      if (!exercise) {
        return;
      }

      const seoTitle =
        exercise.seo?.title ??
        `${exercise.name}: Technique, Muscles & Progressions | Treethenics`;

      const seoDescription =
        exercise.seo?.description ??
        `Learn the ${exercise.name} with proper technique, muscles worked, equipment, common mistakes and structured calisthenics progressions.`;

      const canonical =
        `https://www.treethenics.com/exercises/${exercise.id}`;


      /* TITLE */

      this.title.setTitle(seoTitle);


      /* DESCRIPTION */

      this.meta.updateTag({
        name: 'description',
        content: seoDescription,
      });


      /* CANONICAL */

      let canonicalLink =
        this.document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]'
        );

      if (!canonicalLink) {

        canonicalLink =
          this.document.createElement('link');

        canonicalLink.setAttribute(
          'rel',
          'canonical'
        );

        this.document.head.appendChild(
          canonicalLink
        );

      }

      canonicalLink.setAttribute(
        'href',
        canonical
      );

      const socialImage = exercise.imageUrl
        ? `https://www.treethenics.com${exercise.imageUrl}`
        : 'https://www.treethenics.com/treethenics-preview.png';

      /* OPEN GRAPH */

      this.meta.updateTag({
        property: 'og:type',
        content: 'website',
      });

      this.meta.updateTag({
        property: 'og:site_name',
        content: 'Treethenics',
      });

      this.meta.updateTag({
        property: 'og:title',
        content: seoTitle,
      });

      this.meta.updateTag({
        property: 'og:description',
        content: seoDescription,
      });

      this.meta.updateTag({
        property: 'og:url',
        content: canonical,
      });

      this.meta.updateTag({
        property: 'og:image',
        content: socialImage,
      });

      this.meta.updateTag({
        property: 'og:image:alt',
        content: `${exercise.name} calisthenics exercise`,
      });


      /* X / TWITTER */

      this.meta.updateTag({
        name: 'twitter:card',
        content: 'summary_large_image',
      });

      this.meta.updateTag({
        name: 'twitter:title',
        content: seoTitle,
      });

      this.meta.updateTag({
        name: 'twitter:description',
        content: seoDescription,
      });

      this.meta.updateTag({
        name: 'twitter:image',
        content: socialImage,
      });

      /* JSON-LD */

      this.setJsonLd(
        'exercise-breadcrumb-jsonld',
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',

          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Treethenics',
              item: 'https://www.treethenics.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Exercise Library',
              item: 'https://www.treethenics.com/train',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: exercise.name,
              item: canonical,
            },
          ],
        }
      );

      this.setJsonLd(
        'exercise-page-jsonld',
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',

          '@id': `${canonical}#webpage`,

          url: canonical,

          name: seoTitle,

          description: seoDescription,

          inLanguage: 'en',

          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.treethenics.com/#website',
            url: 'https://www.treethenics.com/',
            name: 'Treethenics',
          },

          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: socialImage,
          },

          mainEntity: {
            '@type': 'Thing',
            '@id': `${canonical}#exercise`,

            name: exercise.name,

            description:
              exercise.overview ??
              exercise.description,

            image: socialImage,

            url: canonical,

            additionalType:
              'https://schema.org/PhysicalActivity',
          },
        }
      );

      const exerciseId = this.exerciseId();

      if (!exerciseId) {
        return;
      }

      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: 'instant',
        });
      }
    });
  }

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  readonly route = inject(ActivatedRoute);

  readonly overviewCollapsed = signal(false);
  readonly anatomySetupCollapsed = signal(false);
  readonly howToCollapsed = signal(false);
  readonly mistakesCollapsed = signal(false);
  readonly relatedCollapsed = signal(false);
  readonly faqCollapsed = signal(false);
  readonly progressionCollapsed = signal(false);

  toggleProgression(): void {
    this.progressionCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  toggleFaq(): void {
    this.faqCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  toggleRelated(): void {
    this.relatedCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  toggleMistakes(): void {
    this.mistakesCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  toggleHowTo(): void {
    this.howToCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  toggleOverview(): void {
    this.overviewCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  toggleAnatomySetup(): void {
    this.anatomySetupCollapsed.update(
      (collapsed) => !collapsed,
    );
  }

  private setJsonLd(id: string, data: object): void {

    let script =
      this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {

      script = this.document.createElement('script');

      script.id = id;
      script.type = 'application/ld+json';

      this.document.head.appendChild(script);

    }

    script.textContent = JSON.stringify(data);
  }

  private readonly paramMap = toSignal(
    this.route.paramMap,
    {
      initialValue: this.route.snapshot.paramMap,
    },
  );

  readonly exerciseId = computed(
    () => this.paramMap().get('id'),
  );

  readonly exercise = computed(() => {
    const id = this.exerciseId();

    return EXERCISES.find(
      (exercise) => exercise.id === id,
    );
  });

  readonly previousProgressions = computed(() => {
    const exercise = this.exercise();

    if (!exercise) {
      return [];
    }

    const previousIds = EXERCISE_RELATIONS
      .filter(
        (relation) =>
          relation.type === 'progression' &&
          relation.to === exercise.id,
      )
      .map((relation) => relation.from);

    return previousIds
      .map((id) =>
        EXERCISES.find((item) => item.id === id),
      )
      .filter((item) => item !== undefined);
  });

  readonly nextProgressions = computed(() => {
    const exercise = this.exercise();

    if (!exercise) {
      return [];
    }

    const nextIds = EXERCISE_RELATIONS
      .filter(
        (relation) =>
          relation.type === 'progression' &&
          relation.from === exercise.id,
      )
      .map((relation) => relation.to);

    return nextIds
      .map((id) =>
        EXERCISES.find((item) => item.id === id),
      )
      .filter((item) => item !== undefined);
  });

  readonly relatedExercises = computed(() => {
    const exercise = this.exercise();

    if (!exercise?.relatedExercises) {
      return [];
    }

    return exercise.relatedExercises
      .map((id) => EXERCISES.find((item) => item.id === id))
      .filter((item) => item !== undefined);
  });

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return MUSCLE_LABELS[muscle];
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return EQUIPMENT_LABELS[equipment];
  }
}
