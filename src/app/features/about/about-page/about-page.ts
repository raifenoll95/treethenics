import { Component } from '@angular/core';
import { mediaUrl } from '../../../core/config/media-url';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-about-page',
  styleUrl: './about-page.css',
  templateUrl: './about-page.html',
})

export class AboutPage {
  readonly raiImageUrl = mediaUrl('/optimized/detail/about/rai.webp');
  readonly assetUrl = mediaUrl;
}
