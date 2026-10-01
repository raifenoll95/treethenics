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
    `https://assets.treethenics.com/optimized/detail/treev3.webp?v=${IMAGE_VERSION}`;

  readonly malteseImageUrl =
    `https://assets.treethenics.com/optimized/detail/exercises/fmaltesecover.webp?v=${IMAGE_VERSION}`;

  readonly versusImageUrl =
    `https://assets.treethenics.com/optimized/detail/versus.webp?v=${IMAGE_VERSION}`;
}
