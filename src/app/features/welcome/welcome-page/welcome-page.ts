import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGE_VERSION } from '../../../core/config/image-version';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {
  readonly treeImageUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/treev3.webp?v=${IMAGE_VERSION}`;

  readonly HomeVideoUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/home-video/home-video3.mp4`;

  readonly versusImageUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/versus.webp?v=${IMAGE_VERSION}`;
}
