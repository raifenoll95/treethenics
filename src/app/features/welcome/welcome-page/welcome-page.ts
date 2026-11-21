import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { mediaUrl } from '../../../core/config/media-url';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage implements AfterViewInit {
  @ViewChild('homeVideo') homeVideoRef!: ElementRef<HTMLVideoElement>;

  private platformId = inject(PLATFORM_ID);

  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly isSpanish = this.route.snapshot.data['language'] === 'es';

  ngOnInit(): void {
    this.document.documentElement.lang = this.isSpanish ? 'es' : 'en';

    this.title.setTitle(this.isSpanish
      ? 'Treethenics | Ejercicios y progresiones de calistenia'
      : 'Treethenics | Calisthenics Exercises and Progressions');

    this.meta.updateTag({
      name: 'description',
      content: this.isSpanish
        ? 'Explora más de 150 ejercicios de calistenia, descubre sus progresiones y compara los músculos, la dificultad y el material de cada ejercicio.'
        : 'Explore over 150 calisthenics exercises, discover their progressions and compare muscles, difficulty and equipment.',
    });

    let canonical = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = this.isSpanish
      ? 'https://www.treethenics.com/es'
      : 'https://www.treethenics.com/';
  }

  ngOnDestroy(): void {
    if (this.isSpanish) this.document.documentElement.lang = 'en';
  }

  readonly treeImageUrl = mediaUrl('/optimized/detail/treev3.webp');

  readonly HomeVideoUrl = mediaUrl('/home-video/home-video9.mp4');

  readonly versusImageUrl = mediaUrl('/optimized/detail/versus.webp');

  readonly raiImageUrl = mediaUrl('/welcome/welcome_me.jpg');

  ngAfterViewInit() {
    // Solo ejecutamos esto si estamos en el navegador (cliente)
    if (isPlatformBrowser(this.platformId)) {
      this.playVideo();
    }
  }

  playVideo() {
    if (this.homeVideoRef?.nativeElement) {
      const video = this.homeVideoRef.nativeElement;
      if (typeof video.load === 'function') {
        video.load();
        video.play().catch((error) => {
          console.log('Autoplay prevenido por el navegador:', error);
        });
      }
    }
  }
}
