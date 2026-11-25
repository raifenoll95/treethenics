import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { openCatalog, problem } from './catalog.mjs';

const host = '127.0.0.1';
const port = Number(process.env.TREETHENICS_EDITOR_PORT ?? 4317);
if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  console.error(
    'TREETHENICS_EDITOR_PORT debe ser un número entre 1024 y 65535.',
  );
  process.exit(1);
}
const origin = `http://${host}:${port}`;
const assets = new Map([
  ['/', ['index.html', 'text/html']],
  ['/editor.css', ['editor.css', 'text/css']],
  ['/editor.js', ['editor.js', 'text/javascript']],
]);

async function jsonBody(request) {
  if (request.headers['content-type'] !== 'application/json')
    throw problem('El formato de la solicitud no es válido.', 415);
  const pieces = [];
  let size = 0;
  for await (const part of request) {
    size += part.length;
    if (size > 1024 * 1024)
      throw problem('La ficha supera el tamaño máximo permitido.', 413);
    pieces.push(part);
  }
  try {
    return JSON.parse(Buffer.concat(pieces).toString('utf8'));
  } catch {
    throw problem('No se han podido leer los cambios.');
  }
}

function send(response, status, type, payload) {
  response.writeHead(status, {
    'Content-Type': type + '; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Content-Security-Policy':
      "default-src 'self'; img-src 'self' https:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
  });
  response.end(payload);
}

try {
  const catalog = await openCatalog(resolve(process.argv[2] ?? process.cwd()));
  const server = createServer(async (request, response) => {
    try {
      if (request.headers.host !== `${host}:${port}`)
        throw problem('Abre el editor desde ' + origin, 403);
      const url = new URL(request.url, origin);
      if (url.origin !== origin) throw problem('Origen no válido.', 403);
      const path = url.pathname;
      if (request.method === 'GET' && assets.has(path)) {
        const [file, type] = assets.get(path);
        return send(
          response,
          200,
          type,
          await readFile(new URL(file, import.meta.url)),
        );
      }
      if (request.method === 'GET' && path === '/api/exercises') {
        return send(
          response,
          200,
          'application/json',
          JSON.stringify(await catalog.list()),
        );
      }
      const match = path.match(/^\/api\/exercises\/([a-z0-9][a-z0-9_-]*)$/);
      if (match && request.method === 'GET') {
        return send(
          response,
          200,
          'application/json',
          JSON.stringify(await catalog.get(match[1])),
        );
      }
      if (match && request.method === 'PUT') {
        if (request.headers.origin !== origin)
          throw problem('Guarda desde la página del editor local.', 403);
        return send(
          response,
          200,
          'application/json',
          JSON.stringify(await catalog.save(match[1], await jsonBody(request))),
        );
      }
      throw problem('Ruta no encontrada.', 404);
    } catch (error) {
      if (!error.status) console.error(error);
      send(
        response,
        error.status ?? 500,
        'application/json',
        JSON.stringify({
          error: error.status
            ? error.message
            : 'No se ha podido completar la operación. Revisa la terminal.',
        }),
      );
    }
  });

  server.on('error', (error) => {
    console.error(
      error.code === 'EADDRINUSE'
        ? `El puerto ${port} ya está en uso.`
        : error.message,
    );
    process.exitCode = 1;
  });
  server.listen(port, host, () =>
    console.log(`Editor de Treethenics · ${origin}`),
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
