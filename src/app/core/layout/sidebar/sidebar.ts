import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { IMAGE_VERSION } from '../../config/image-version';
import { signal } from '@angular/core';
import { ElementRef, HostListener, inject } from '@angular/core';

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

  readonly logoUrl =
  `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/logo/treethenics-logo.webp?v=${IMAGE_VERSION}`;

  menuOpen = false;

  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
