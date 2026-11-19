import { Pipe, PipeTransform } from '@angular/core';
import { MEDIA_ORIGIN, mediaUrl } from '../../core/config/media-url';

@Pipe({ name: 'optimizedImage', standalone: true })
export class OptimizedImagePipe implements PipeTransform {
  transform(
    url: string | null | undefined,
    variant: 'card' | 'detail' = 'card',
  ): string {
    if (!url) return '';
    if (!url.startsWith('/images/')) return url;

    const imagePath = url.split(/[?#]/, 1)[0];
    const relativePath = imagePath.slice('/images/'.length);
    const webpPath = relativePath.replace(/\.[^./]+$/, '.webp');

    return mediaUrl(`${MEDIA_ORIGIN}/optimized/${variant}/${webpPath}`);
  }
}
