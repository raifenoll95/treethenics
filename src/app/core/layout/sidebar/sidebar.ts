import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { mediaUrl } from '../../../core/config/media-url';
import { signal } from '@angular/core';
import { ElementRef, HostListener, inject } from '@angular/core';
import { SPANISH_EXERCISES } from '../../../features/tree/data/spanish-exercises.generated';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  private readonly router = inject(Router);

  get isLibraryActive(): boolean {
    return this.englishPath === '/train'
      || this.englishPath.startsWith('/train/page/');
  }

  get currentPagePath(): string {
    return this.router.url.split(/[?#]/, 1)[0].replace(/\/$/, '') || '/';
  }

  get englishPath(): string {
    if (!this.isSpanish) return this.currentPagePath;
    return this.currentPagePath.slice(0, -3) || '/';
  }

  get hasSpanishVersion(): boolean {
    const path = this.englishPath;

    if (['/', '/tree', '/about', '/pro', '/compare'].includes(path)) return true;

    if (path === '/train' || /^\/train\/page\/[1-9]\d*$/.test(path)) {
      return true;
    }

    const match = /^\/exercises\/([^/]+)$/.exec(path);
    return !!match && SPANISH_EXERCISES.has(match[1]);
  }

  get spanishPath(): string | null {
    if (!this.hasSpanishVersion) return null;
    return this.englishPath === '/' ? '/es' : `${this.englishPath}/es`;
  }

  get isSpanish(): boolean {
    return this.currentPagePath.endsWith('/es');
  }

  private readonly menuHost =
  inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('document:click', ['$event'])
  onClickOutsideMenu(event: MouseEvent): void {
    if (!this.mobileMenuOpen()) return;

    if (!window.matchMedia('(max-width: 768px)').matches) return;

    const clickedInside = event
      .composedPath()
      .includes(this.menuHost.nativeElement);

    if (!clickedInside) {
      this.closeMobileMenu();
    }
  }

  readonly logoUrl = mediaUrl('/optimized/detail/logo/treethenics-logo.webp');

  menuOpen = false;

  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
