import { Pipe, PipeTransform } from '@angular/core';

import { IMAGE_VERSION } from '../../core/config/image-version';

@Pipe({
  name: 'optimizedImage',
  standalone: true,
})
export class OptimizedImagePipe implements PipeTransform {

  transform(
    url: string | null | undefined,
    variant: 'card' | 'detail' = 'card',
  ): string {
    if (!url) {
      return '';
    }

    const imagePath = url.split('?')[0];

    if (!imagePath.startsWith('/images/')) {
      return url;
    }

    const optimizedPath = imagePath
      .replace(/^\/images\//, `/optimized/${variant}/`)
      .replace(/\.[^.\/]+$/, '.webp');

    return `https://pub-45dc79586604478fb0dcbe5c2e4a3497.r2.dev${optimizedPath}?v=${IMAGE_VERSION}`;
  }
}
