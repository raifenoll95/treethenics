import { MEDIA_VERSIONS } from './image-version';

export const MEDIA_ORIGIN = 'https://treethenics-media.b-cdn.net';

export function mediaUrl(value: string): string {
  // Admite rutas del catálogo y URL que ya apuntan a Bunny.
  const url = new URL(value, `${MEDIA_ORIGIN}/`);
  if (url.origin !== MEDIA_ORIGIN) return value;

  const key = decodeURIComponent(url.pathname.slice(1));
  const version = MEDIA_VERSIONS[key];
  if (!version) return value;

  url.searchParams.set('v', version);
  return url.href;
}
