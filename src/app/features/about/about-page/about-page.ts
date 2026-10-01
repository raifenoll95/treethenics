import { Component } from '@angular/core';
import { IMAGE_VERSION } from '../../../core/config/image-version';

@Component({
  imports: [],
  selector: 'app-about-page',
  styleUrl: './about-page.css',
  templateUrl: './about-page.html',
})

export class AboutPage {
  readonly raiImageUrl =
    `https://assets.treethenics.com/optimized/detail/about/rai.webp?v=${IMAGE_VERSION}`;
}
