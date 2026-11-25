import { createHash, randomUUID } from 'node:crypto';
import { createRequire } from 'node:module';
import {
  lstat,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import { basename, join, resolve, sep } from 'node:path';

const exerciseFolder = 'src/app/features/tree/data/exercises';
const filenamePattern = /^[a-z0-9][a-z0-9_-]*$/;
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const invalidKeys = new Set(['__proto__', 'prototype', 'constructor']);

export function problem(message, status = 400) {
  return Object.assign(new Error(message), { status });
}

export async function openCatalog(root) {
  root = await realpath(root);
  const folder = await realpath(join(root, exerciseFolder)).catch(() => {
    throw problem(
      'Ejecuta el editor desde la raíz de Treethenics, donde están src y package.json.',
    );
  });
  if (!folder.startsWith(root + sep))
    throw problem('La carpeta de ejercicios debe estar dentro del proyecto.');
  const require = createRequire(join(root, 'package.json'));
  let ts;
  try {
    ts = require('typescript');
  } catch {
    throw problem(
      'Falta TypeScript. Instala primero las dependencias de Treethenics con npm install.',
    );
  }

  function inspect(text, path) {
    const source = ts.createSourceFile(
      path,
      text,
      ts.ScriptTarget.Latest,
      true,
    );
    if (source.parseDiagnostics.length)
      throw problem(`${basename(path)} contiene errores de sintaxis.`);
    const exportedObjects = [];
    for (const statement of source.statements) {
      if (!ts.isVariableStatement(statement)) continue;
      if (
        !statement.modifiers?.some(
          (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
        )
      )
        continue;
      for (const declaration of statement.declarationList.declarations) {
        let node = declaration.initializer;
        while (
          node &&
          (ts.isAsExpression(node) ||
            ts.isSatisfiesExpression(node) ||
            ts.isParenthesizedExpression(node))
        )
          node = node.expression;
        if (node && ts.isObjectLiteralExpression(node))
          exportedObjects.push({
            object: node,
            name: declaration.name.getText(source),
          });
      }
    }
    const isSpanish = path.endsWith('.es.ts');
    const primary = exportedObjects.filter((entry) =>
      isSpanish
        ? entry.name.endsWith('_ES')
        : entry.object.properties.some((prop) => propertyName(prop) === 'id'),
    );
    const candidates = primary.length ? primary : exportedObjects;
    if (candidates.length !== 1)
      throw problem(
        `No he podido identificar una única ficha en ${basename(path)}.`,
      );

    const object = candidates[0].object;
    const fields = new Map();
    for (const property of object.properties) {
      const key = propertyName(property);
      if (!key || invalidKeys.has(key)) continue;
      if (fields.has(key))
        throw problem(`El campo ${key} está duplicado en ${basename(path)}.`);
      fields.set(key, {
        property,
        ...(ts.isPropertyAssignment(property)
          ? readLiteral(property.initializer)
          : { editable: false }),
      });
    }
    return {
      fields,
      object,
      source,
      text,
      path,
      exportName: candidates[0].name,
      revision: createHash('sha256').update(text).digest('hex'),
    };
  }

  function propertyName(property) {
    const name = property.name;
    return name &&
      (ts.isIdentifier(name) ||
        ts.isStringLiteral(name) ||
        ts.isNumericLiteral(name))
      ? name.text
      : undefined;
  }

  function readLiteral(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      return { editable: true, value: node.text };
    }
    if (ts.isNumericLiteral(node))
      return { editable: true, value: Number(node.text) };
    if (
      ts.isPrefixUnaryExpression(node) &&
      node.operator === ts.SyntaxKind.MinusToken &&
      ts.isNumericLiteral(node.operand)
    ) {
      return { editable: true, value: -Number(node.operand.text) };
    }
    if (node.kind === ts.SyntaxKind.TrueKeyword)
      return { editable: true, value: true };
    if (node.kind === ts.SyntaxKind.FalseKeyword)
      return { editable: true, value: false };
    if (node.kind === ts.SyntaxKind.NullKeyword)
      return { editable: true, value: null };
    if (ts.isArrayLiteralExpression(node)) {
      const items = node.elements.map(readLiteral);
      if (items.every((item) => item.editable))
        return { editable: true, value: items.map((item) => item.value) };
    }
    if (ts.isObjectLiteralExpression(node)) {
      const entries = [];
      const keys = new Set();
      for (const property of node.properties) {
        const key = propertyName(property);
        if (
          !key ||
          invalidKeys.has(key) ||
          keys.has(key) ||
          !ts.isPropertyAssignment(property)
        )
          return { editable: false };
        const item = readLiteral(property.initializer);
        if (!item.editable) return { editable: false };
        entries.push([key, item.value]);
        keys.add(key);
      }
      return { editable: true, value: Object.fromEntries(entries) };
    }
    return { editable: false };
  }

  async function readDocument(id, suffix) {
    const path = join(folder, id + suffix);
    const stat = await lstat(path).catch((error) => {
      if (error.code === 'ENOENT') return null;
      throw error;
    });
    if (!stat) return null;
    if (!stat.isFile())
      throw problem(`${basename(path)} tiene que ser un archivo regular.`);
    return inspect(await readFile(path, 'utf8'), path);
  }

  async function readPair(id) {
    if (!filenamePattern.test(id))
      throw problem('Identificador de ejercicio no válido.');
    const en = await readDocument(id, '.exercise.ts');
    if (!en) throw problem('Ejercicio no encontrado.', 404);
    const es = await readDocument(id, '.es.ts');
    return { en, es };
  }

  function forClient(document) {
    if (!document) return { revision: null, values: {}, locked: [] };
    const values = [];
    const locked = [];
    for (const [key, field] of document.fields) {
      if (field.editable) values.push([key, field.value]);
      else locked.push(key);
    }
    return {
      revision: document.revision,
      values: Object.fromEntries(values),
      locked,
    };
  }

  async function get(id) {
    const { en, es } = await readPair(id);
    return { en: forClient(en), es: forClient(es) };
  }

  async function list() {
    const files = await readdir(folder, { withFileTypes: true });
    const ids = files
      .filter((file) => file.isFile() && file.name.endsWith('.exercise.ts'))
      .map((file) => file.name.slice(0, -'.exercise.ts'.length));
    const entries = await Promise.all(
      ids.map(async (id) => {
        try {
          const { en, es } = await readPair(id);
          return {
            id,
            slug: en.fields.get('id')?.value ?? id,
            en: en.fields.get('name')?.value ?? id,
            es: es?.fields.get('name')?.value ?? '',
            difficulty: en.fields.get('difficulty')?.value ?? '',
          };
        } catch (error) {
          return {
            id,
            slug: id,
            en: id,
            es: '',
            difficulty: '',
            error: error.message,
          };
        }
      }),
    );
    return entries.sort((a, b) =>
      a.en.localeCompare(b.en, 'en', { sensitivity: 'base' }),
    );
  }

  function validateValue(original, value, label) {
    if (typeof value === 'number' && !Number.isFinite(value))
      throw problem(`Número no válido en ${label}.`);
    if (value && typeof value === 'object') {
      for (const [key, child] of Object.entries(value)) {
        if (invalidKeys.has(key)) throw problem(`Campo no válido en ${label}.`);
        validateValue(original?.[key], child, label);
      }
    }
    if (
      original !== undefined &&
      original !== null &&
      (value === null ||
        typeof original !== typeof value ||
        Array.isArray(original) !== Array.isArray(value))
    )
      throw problem(`Tipo de dato no válido en ${label}.`);
  }

  function formatValue(value, column, eol, indent) {
    return JSON.stringify(value, null, indent).replaceAll(
      '\n',
      eol + ' '.repeat(column),
    );
  }

  function updateSource(document, changes, allowedNew) {
    const { fields, object, source, text } = document;
    const eol = text.includes('\r\n') ? '\r\n' : '\n';
    const closing = object.end - 1;
    const closingColumn =
      source.getLineAndCharacterOfPosition(closing).character;
    const indent = (text.match(/(?:^|\n)([ \t]+)(?:[\w"' ]+):/)?.[1] || '  ')
      .length;
    const edits = [];
    const additions = [];

    function changeValue(node, before, after, column) {
      if (same(before, after)) return;
      if (
        Array.isArray(before) &&
        Array.isArray(after) &&
        ts.isArrayLiteralExpression(node) &&
        before.length === after.length
      ) {
        node.elements.forEach((item, index) =>
          changeValue(item, before[index], after[index], column + indent),
        );
        return;
      }
      if (
        before &&
        after &&
        ts.isObjectLiteralExpression(node) &&
        Object.keys(before).length === Object.keys(after).length &&
        Object.keys(before).every((key) => Object.hasOwn(after, key))
      ) {
        for (const property of node.properties) {
          const key = propertyName(property);
          changeValue(
            property.initializer,
            before[key],
            after[key],
            column + indent,
          );
        }
        return;
      }
      const start = node.getStart(source);
      if (
        typeof after === 'string' &&
        ts.isStringLiteral(node) &&
        text[start] === "'"
      ) {
        const escaped = JSON.stringify(after)
          .slice(1, -1)
          .replaceAll('\\"', '"')
          .replaceAll("'", "\\'");
        edits.push({ start, end: node.end, value: `'${escaped}'` });
      } else {
        edits.push({
          start,
          end: node.end,
          value: formatValue(after, column, eol, indent),
        });
      }
    }

    for (const [key, value] of Object.entries(changes)) {
      if (
        !/^[A-Za-z][A-Za-z0-9_]*$/.test(key) ||
        key === 'id' ||
        invalidKeys.has(key)
      )
        throw problem(`Campo no editable: ${key}.`);
      const field = fields.get(key);
      if (field && !field.editable)
        throw problem(`El campo ${key} usa una expresión de TypeScript.`);
      if (!field && !Object.hasOwn(allowedNew, key))
        throw problem(`Campo desconocido: ${key}.`);
      validateValue(field ? field.value : allowedNew[key], value, key);
      if (key === 'name' && (typeof value !== 'string' || !value.trim()))
        throw problem('Escribe un nombre para la ficha.');
      if (field) {
        const { line } = source.getLineAndCharacterOfPosition(
          field.property.getStart(source),
        );
        const startOfLine = source.getPositionOfLineAndCharacter(line, 0);
        const column = text.slice(startOfLine).match(/^[ \t]*/)[0].length;
        changeValue(field.property.initializer, field.value, value, column);
      } else {
        additions.push(
          `${' '.repeat(indent)}${key}: ${formatValue(value, indent, eol, indent)},`,
        );
      }
    }
    if (additions.length) {
      const last = object.properties.at(-1);
      const multiline = text
        .slice(object.getStart(source), closing)
        .includes('\n');
      const closingLineStart = closing - closingColumn;
      const closingHasOnlyIndent = !text
        .slice(closingLineStart, closing)
        .trim();
      const start =
        multiline && closingHasOnlyIndent ? closingLineStart : closing;
      const needsComma = last && !object.properties.hasTrailingComma;
      const comma = needsComma && last.end === start ? ',' : '';
      if (needsComma && last.end !== start)
        edits.push({ start: last.end, end: last.end, value: ',' });
      edits.push({
        start,
        end: start,
        value: `${comma}${start === closing ? eol : ''}${additions.join(eol)}${eol}`,
      });
    }

    let next = text;
    for (const edit of edits.sort((a, b) => b.start - a.start)) {
      next = next.slice(0, edit.start) + edit.value + next.slice(edit.end);
    }
    const parsed = inspect(next, document.path);
    for (const [key, value] of Object.entries(changes)) {
      if (!same(parsed.fields.get(key)?.value, value))
        throw problem(`No se ha podido guardar el campo ${key}.`);
    }
    return next;
  }

  const optional = {
    description: '',
    overview: '',
    howTo: [],
    commonMistakes: [],
    faq: [],
    seo: { title: '', description: '' },
  };
  const localizable = new Set([
    'name',
    'description',
    'overview',
    'howTo',
    'commonMistakes',
    'faq',
    'seo',
  ]);
  let writeQueue = Promise.resolve();

  async function savePair(id, input) {
    const { en, es } = await readPair(id);
    const before = { en, es };
    const desired = [];
    for (const language of ['en', 'es']) {
      const requested = input?.[language];
      if (
        !requested ||
        typeof requested.changes !== 'object' ||
        requested.changes === null ||
        Array.isArray(requested.changes)
      )
        throw problem('Cambios no válidos.');
      const previous = before[language];
      if ((previous?.revision ?? null) !== requested.revision) {
        throw problem(
          'La ficha ha cambiado en disco. Copia tus cambios si los necesitas y vuelve a abrirla.',
          409,
        );
      }
      if (!Object.keys(requested.changes).length) continue;
      const inheritable = Object.fromEntries(
        [...en.fields]
          .filter(([key, field]) => field.editable && localizable.has(key))
          .map(([key, field]) => [key, field.value]),
      );
      const allowedNew =
        language === 'es'
          ? { name: '', ...optional, ...inheritable }
          : optional;
      const document =
        previous ??
        inspect(
          `import type { Exercise } from '../../../../shared/models/exercise.model';\nimport { ${en.exportName} } from './${id}.exercise';\n\nexport const ${en.exportName}_ES: Exercise = {\n  ...${en.exportName},\n};\n`,
          join(folder, id + '.es.ts'),
        );
      const next = updateSource(document, requested.changes, allowedNew);
      if (next !== previous?.text)
        desired.push({ path: document.path, next, previous });
    }

    const staged = [];
    const committed = [];
    try {
      for (const item of desired) {
        const stage = `${item.path}.${randomUUID()}.tmp`;
        staged.push({ ...item, stage });
        await writeFile(stage, item.next, { flag: 'wx' });
      }
      for (const item of staged) {
        const current = await readFile(item.path, 'utf8').catch((error) => {
          if (error.code === 'ENOENT') return undefined;
          throw error;
        });
        if (current !== item.previous?.text)
          throw problem(
            'La ficha ha cambiado en disco. Vuelve a abrirla.',
            409,
          );
        await rename(item.stage, item.path);
        committed.push(item);
      }
    } catch (error) {
      for (const item of committed.reverse()) {
        const current = await readFile(item.path, 'utf8').catch(
          () => undefined,
        );
        if (current !== item.next) continue;
        if (item.previous) {
          await writeFile(item.stage, item.previous.text, { flag: 'wx' });
          await rename(item.stage, item.path);
        } else await rm(item.path);
      }
      throw error;
    } finally {
      await Promise.all(staged.map((item) => rm(item.stage, { force: true })));
    }
    return get(id);
  }

  function save(id, input) {
    const job = writeQueue.then(() => savePair(id, input));
    writeQueue = job.catch(() => {});
    return job;
  }

  return { list, get, save };
}
