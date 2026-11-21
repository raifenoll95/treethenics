import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Component, inject } from '@angular/core';
import { mediaUrl } from '../../../core/config/media-url';

@Component({
  selector: 'app-pro-page',
  standalone: true,
  templateUrl: './pro-page.html',
  styleUrl: './pro-page.css',
})
export class ProPage {
  readonly es = inject(ActivatedRoute).snapshot.data['language'] === 'es';

  constructor() {
    const doc = inject(DOCUMENT);
    doc.documentElement.lang = this.es ? 'es' : 'en';
    inject(Title).setTitle(this.es ? 'Treethenics PRO | Próximamente' : 'Treethenics PRO | Coming soon');
    inject(Meta).updateTag({ name: 'description', content: this.es
      ? 'Descubre la futura app de Treethenics para registrar tus tiempos y repeticiones y seguir tu progreso en calistenia.'
      : 'Preview the upcoming Treethenics app for logging holds and reps and tracking your calisthenics progress.' });
    const canonical = doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? doc.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://www.treethenics.com/pro' + (this.es ? '/es' : '');
    if (!canonical.parentNode) doc.head.appendChild(canonical);
  }

  readonly assetUrl = mediaUrl;
}
