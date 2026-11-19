import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { mediaUrl } from '../../../core/config/media-url';
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
