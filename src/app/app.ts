import {
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import {
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';

import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  showCookieBanner = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    if (isPlatformBrowser(this.platformId)) {

      // Comprobamos si el usuario ya eligió anteriormente.
      const consent = localStorage.getItem('treethenics_analytics_consent');

      if (consent === 'granted') {
        this.updateGoogleConsent('granted');
      } else if (consent === 'denied') {
        this.updateGoogleConsent('denied');
      } else {
        // Primera visita: mostramos el banner.
        this.showCookieBanner = true;
      }

      // Registrar las navegaciones internas de Angular en GA4.
      this.router.events
        .pipe(
          filter(
            (event): event is NavigationEnd =>
              event instanceof NavigationEnd
          )
        )
        .subscribe((event) => {
          window.gtag?.('event', 'page_view', {
            page_path: event.urlAfterRedirects,
            page_location: window.location.href,
            page_title: document.title,
          });
        });
    }
  }

  acceptAnalytics(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(
      'treethenics_analytics_consent',
      'granted'
    );

    this.updateGoogleConsent('granted');

    this.showCookieBanner = false;
  }

  rejectAnalytics(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(
      'treethenics_analytics_consent',
      'denied'
    );

    this.updateGoogleConsent('denied');

    this.showCookieBanner = false;
  }

  private updateGoogleConsent(
    consent: 'granted' | 'denied'
  ): void {
    window.gtag?.('consent', 'update', {
      analytics_storage: consent,

      // TreeThenics no utiliza publicidad.
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}
