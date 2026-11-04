import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IMAGE_VERSION } from '../../../core/config/image-version';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage implements AfterViewInit {
  @ViewChild('homeVideo') homeVideoRef!: ElementRef<HTMLVideoElement>;

  private platformId = inject(PLATFORM_ID);

  readonly treeImageUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/treev3.webp?v=${IMAGE_VERSION}`;

  readonly HomeVideoUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/home-video/home-video9.mp4`;

  readonly versusImageUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/optimized/detail/versus.webp?v=${IMAGE_VERSION}`;

  readonly raiImageUrl =
    `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev/welcome/welcome_me.jpg?v=${IMAGE_VERSION}`;

  ngAfterViewInit() {
    // Solo ejecutamos esto si estamos en el navegador (cliente)
    if (isPlatformBrowser(this.platformId)) {
      this.playVideo();
    }
  }

  playVideo() {
    if (this.homeVideoRef?.nativeElement) {
      const video = this.homeVideoRef.nativeElement;
      if (typeof video.load === 'function') {
        video.load();
        video.play().catch((error) => {
          console.log('Autoplay prevenido por el navegador:', error);
        });
      }
    }
  }
}
