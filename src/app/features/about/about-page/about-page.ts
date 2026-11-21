import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Component, inject } from '@angular/core';
import { mediaUrl } from '../../../core/config/media-url';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-about-page',
  styleUrl: './about-page.css',
  templateUrl: './about-page.html',
})

export class AboutPage {
  readonly es = inject(ActivatedRoute).snapshot.data['language'] === 'es';

  constructor() {
    const doc = inject(DOCUMENT);
    doc.documentElement.lang = this.es ? 'es' : 'en';
    inject(Title).setTitle(this.es ? 'Sobre mí | Treethenics' : 'About Me | Treethenics');
    inject(Meta).updateTag({ name: 'description', content: this.es
      ? 'Soy Rai, el creador de Treethenics. Descubre cómo nació mi árbol de progresiones y mis recuerdos de encuentros de calistenia.'
      : 'Meet Rai, the creator of Treethenics. Discover the story behind the progression tree and moments from calisthenics events.' });
    const canonical = doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? doc.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://www.treethenics.com/about' + (this.es ? '/es' : '');
    if (!canonical.parentNode) doc.head.appendChild(canonical);
  }

  readonly raiImageUrl = mediaUrl('/optimized/detail/about/rai.webp');
  readonly assetUrl = mediaUrl;
}
