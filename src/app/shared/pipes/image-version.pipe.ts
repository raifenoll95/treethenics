import { Pipe, PipeTransform } from '@angular/core';
import { mediaUrl } from '../../core/config/media-url';

@Pipe({ name: 'imageVersion', standalone: true })
export class ImageVersionPipe implements PipeTransform {
  transform(url: string | null | undefined): string {
    return url ? mediaUrl(url) : '';
  }
}
