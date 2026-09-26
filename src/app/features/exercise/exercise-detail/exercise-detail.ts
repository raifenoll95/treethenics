import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { EXERCISES } from '../../tree/data/tree.mock';

import { ExerciseMuscle } from '../../../shared/models/exercise-muscle.model';
import { ExerciseEquipment } from '../../../shared/models/exercise-equipment.model';
import { AnatomyViewer } from '../../../shared/components/anatomy-viewer/anatomy-viewer';
import {
  EQUIPMENT_LABELS,
  MUSCLE_LABELS,
} from '../../../shared/data/exercise-metadata';

import { OptimizedImagePipe } from '../../../shared/pipes/optimized-image.pipe';

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
              item: 'https://www.treethenics.com/search',
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
    });
  }

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  readonly route = inject(ActivatedRoute);

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

  readonly origin = this.route.snapshot.queryParamMap.get('from');

  readonly backQueryParams =
  this.origin === 'search'
    ? {
        q: this.route.snapshot.queryParamMap.get('q'),
        difficulty: this.route.snapshot.queryParamMap.get('difficulty'),
      }
    : this.origin === 'what-should-i-train'
      ? {
          difficulty: this.route.snapshot.queryParamMap.get('difficulty'),
          target: this.route.snapshot.queryParamMap.get('target'),
          equipment: this.route.snapshot.queryParamMap.get('equipment'),
          q: this.route.snapshot.queryParamMap.get('q'),
        }
      : this.origin === 'compare'
        ? {
            first: this.route.snapshot.queryParamMap.get('first'),
            second: this.route.snapshot.queryParamMap.get('second'),
          }
        : {};

  readonly backRoute =
  this.origin === 'tree'
    ? '/tree'
    : this.origin === 'what-should-i-train'
      ? '/what-should-i-train'
      : this.origin === 'compare'
        ? '/compare'
        : '/search';

  readonly backLabel =
  this.origin === 'tree'
    ? 'Back to Tree'
    : this.origin === 'what-should-i-train'
      ? 'Back to What should I train?'
      : this.origin === 'compare'
        ? 'Back to Compare'
        : 'Back to Exercises';

  readonly exerciseId = computed(
    () => this.route.snapshot.paramMap.get('id'),
  );

  readonly exercise = computed(() => {
    const id = this.exerciseId();

    return EXERCISES.find(
      (exercise) => exercise.id === id,
    );
  });

  readonly previousProgressions = computed(() => {
    const exercise = this.exercise();

    if (!exercise?.progression?.previous) {
      return [];
    }

    return exercise.progression.previous
      .map((id) => EXERCISES.find((item) => item.id === id))
      .filter((item) => item !== undefined);
  });

  readonly nextProgressions = computed(() => {
    const exercise = this.exercise();

    if (!exercise?.progression?.next) {
      return [];
    }

    return exercise.progression.next
      .map((id) => EXERCISES.find((item) => item.id === id))
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
