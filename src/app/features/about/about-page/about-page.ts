import { Component } from '@angular/core';
import { IMAGE_VERSION } from '../../../core/config/image-version';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-about-page',
  styleUrl: './about-page.css',
  templateUrl: './about-page.html',
})

export class AboutPage {
  readonly raiImageUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/about/rai.webp?v=${IMAGE_VERSION}`;
}
