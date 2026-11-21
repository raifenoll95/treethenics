import {
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { SPANISH_EXERCISES } from '../../tree/data/spanish-exercises.generated';

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
import { mediaUrl } from '../../../core/config/media-url';

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
  `url("${mediaUrl('/optimized/detail/anatomy/anatomy-background.webp')}")`;

  readonly equipmentImage = (name: string): string =>
  `url("${mediaUrl(`/optimized/detail/equipment/${name}.webp`)}")`;

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

      const language = this.isSpanish ? 'es' : 'en';
      const canonical =
        `https://www.treethenics.com/exercises/${exercise.id}` +
        (this.isSpanish ? '/es' : '');

      this.document.documentElement.lang = language;


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
        content: this.isSpanish
          ? `Ejercicio de calistenia: ${exercise.name}`
          : `${exercise.name} calisthenics exercise`,
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
              name: this.isSpanish ? 'Biblioteca de ejercicios' : 'Exercise Library',
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

          inLanguage: language,

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
  readonly isSpanish = this.route.snapshot.data['language'] === 'es';

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

  readonly exerciseId = computed(() => this.paramMap().get('id'));

  readonly exercise = computed(() => {
    const id = this.exerciseId();
    if (!id) return undefined;

    return this.isSpanish
      ? SPANISH_EXERCISES.get(id)
      : EXERCISES.find(item => item.id === id);
  });

  private findLinkedExercise(id: string) {
    const translated = this.isSpanish ? SPANISH_EXERCISES.get(id) : undefined;
    return translated ?? EXERCISES.find(item => item.id === id);
  }

  exerciseLink(id: string): string[] {
    return this.isSpanish && SPANISH_EXERCISES.has(id)
      ? ['/exercises', id, 'es']
      : ['/exercises', id];
  }

  readonly anatomyDescription = computed(() => {
    const exercise = this.exercise();
    if (!exercise || !this.isSpanish) return undefined;

    const names = (muscles: readonly ExerciseMuscle[] = []) =>
      muscles.map(muscle => this.getMuscleLabel(muscle)).join(', ') || 'ninguno';

    return `Músculos principales: ${names(exercise.primaryMuscles)}. ` +
      `Músculos secundarios: ${names(exercise.secondaryMuscles)}.`;
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
      .map(id => this.findLinkedExercise(id))
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
      .map(id => this.findLinkedExercise(id))
      .filter((item) => item !== undefined);
  });

  readonly relatedExercises = computed(() => {
    const exercise = this.exercise();

    if (!exercise?.relatedExercises) {
      return [];
    }

    return exercise.relatedExercises
      .map((id) => this.findLinkedExercise(id))
      .filter((item) => item !== undefined);
  });

  private readonly labelsEs: Readonly<Record<string, string>> = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    elite: 'Élite',
    dynamic: 'Dinámico',
    static: 'Estático',
    pull: 'Tirón',
    'latissimus-dorsi': 'Dorsal ancho',
    'upper-back': 'Espalda superior',
    biceps: 'Bíceps',
    forearms: 'Antebrazos',
    'rear-deltoids': 'Deltoides posteriores',
    abdominals: 'Abdominales',
    'pull-up-bar': 'Barra de dominadas',
    bands: 'Bandas elásticas',
    'added-weight': 'Lastre',
    rings: 'Anillas',
  };

  label(value: string | null | undefined): string {
    if (!value) return '';
    return this.isSpanish ? (this.labelsEs[value] ?? value) : value;
  }

  getMuscleLabel(muscle: ExerciseMuscle): string {
    return this.isSpanish
      ? (this.labelsEs[muscle] ?? MUSCLE_LABELS[muscle])
      : MUSCLE_LABELS[muscle];
  }

  getEquipmentLabel(equipment: ExerciseEquipment): string {
    return this.isSpanish
      ? (this.labelsEs[equipment] ?? EQUIPMENT_LABELS[equipment])
      : EQUIPMENT_LABELS[equipment];
  }

  ngOnDestroy(): void {
    if (this.isSpanish) {
      this.document.documentElement.lang = 'en';
    }
  }
}
