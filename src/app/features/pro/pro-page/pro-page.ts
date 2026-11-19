import { Component } from '@angular/core';
import { mediaUrl } from '../../../core/config/media-url';

@Component({
  selector: 'app-pro-page',
  standalone: true,
  templateUrl: './pro-page.html',
  styleUrl: './pro-page.css',
})
export class ProPage {
  readonly assetUrl = mediaUrl;
}
