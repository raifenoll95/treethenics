import { Pipe, PipeTransform } from '@angular/core';
import { IMAGE_VERSION } from '../../core/config/image-version';

@Pipe({
  name: 'imageVersion',
  standalone: true,
})
export class ImageVersionPipe implements PipeTransform {
  transform(url: string | null | undefined): string {
    if (!url) {
      return '';
    }

    const separator = url.includes('?') ? '&' : '?';

    return `${url}${separator}v=${IMAGE_VERSION}`;
  }
}
