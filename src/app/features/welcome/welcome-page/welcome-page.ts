import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { mediaUrl } from '../../../core/config/media-url';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage implements AfterViewInit {
  @ViewChild('homeVideo') homeVideoRef!: ElementRef<HTMLVideoElement>;

  private platformId = inject(PLATFORM_ID);

  readonly treeImageUrl = mediaUrl('/optimized/detail/treev3.webp');

  readonly HomeVideoUrl = mediaUrl('/home-video/home-video9.mp4');

  readonly versusImageUrl = mediaUrl('/optimized/detail/versus.webp');

  readonly raiImageUrl = mediaUrl('/welcome/welcome_me.jpg');

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
