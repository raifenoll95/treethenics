import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { IMAGE_VERSION } from '../../config/image-version';

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

  readonly logoUrl =
  `https://assets.treethenics.com/optimized/detail/logo/treethenics-logo.webp?v=${IMAGE_VERSION}`;

  menuOpen = false;
}
