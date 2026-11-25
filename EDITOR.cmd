@echo off
setlocal
set "TREETHENICS_LAUNCHER=%~f0"
where node.exe >nul 2>&1
if errorlevel 1 (
    echo No se encuentra Node.js. Comprueba que Node.js este instalado.
    pause
    exit /b 1
)

node.exe -e "const fs = require('node:fs'); const file = fs.readFileSync(process.env.TREETHENICS_LAUNCHER, 'utf8'); eval(file.split(/\r?\n:node_payload\r?\n/)[1]);"
set "LAUNCH_EXIT=%ERRORLEVEL%"
if not "%LAUNCH_EXIT%"=="0" pause
exit /b %LAUNCH_EXIT%

:node_payload
const { spawn } = require('node:child_process');
const { closeSync, existsSync, mkdtempSync, openSync, readFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { dirname, join } = require('node:path');
const { setTimeout: delay } = require('node:timers/promises');

const projectLocations = [
  dirname(process.env.TREETHENICS_LAUNCHER),
  String.raw`D:\Documentos\angular\treethenics`,
];
const entrypoint = join('tools', 'treethenics-editor', 'start.mjs');
const port = Number(process.env.TREETHENICS_EDITOR_PORT ?? 4317);
const address = `http://127.0.0.1:${port}`;

async function editorIsReady() {
  try {
    const response = await fetch(address, {
      redirect: 'error',
      signal: AbortSignal.timeout(750),
    });
    return response.ok && (await response.text()).includes('<title>Editor de ejercicios');
  } catch {
    return false;
  }
}

async function startEditor() {
  const root = projectLocations.find(location => existsSync(join(location, entrypoint)));
  if (!root) {
    throw new Error('No se encuentra el editor. Coloca este archivo junto a package.json en la carpeta de Treethenics.');
  }

  const log = join(mkdtempSync(join(tmpdir(), 'treethenics-editor-')), 'arranque.log');
  const output = openSync(log, 'a');
  let server;
  try {
    server = spawn(process.execPath, [join(root, entrypoint)], {
      cwd: root,
      detached: true,
      windowsHide: true,
      stdio: ['ignore', output, output],
    });
  } finally {
    closeSync(output);
  }

  let spawnError;
  server.once('error', error => { spawnError = error; });
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    if (await editorIsReady()) {
      server.unref();
      return;
    }
    if (spawnError || server.exitCode !== null || server.signalCode !== null) break;
    await delay(200);
  }

  server.unref();
  const details = readFileSync(log, 'utf8').trim() || spawnError?.message;
  throw new Error(details || `El editor no responde. Registro de arranque: ${log}`);
}

async function launch() {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) {
    throw new Error('El puerto del editor debe ser un numero entre 1024 y 65535.');
  }

  if (!(await editorIsReady())) await startEditor();
  await new Promise((resolve, reject) => {
    const browser = spawn('explorer.exe', [address], { windowsHide: true, stdio: 'ignore' });
    browser.once('error', reject);
    browser.once('spawn', () => {
      browser.unref();
      resolve();
    });
  }).catch(() => {
    throw new Error(`El editor esta abierto. Visitalo en ${address}`);
  });
}

launch().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
