const ui = Object.fromEntries(
  [
    'search',
    'difficulty',
    'count',
    'exercises',
    'empty',
    'record',
    'slug',
    'title',
    'discard',
    'save',
    'status',
    'tabs',
    'fields',
  ].map((id) => [id, document.getElementById(id)]),
);
const sections = [
  {
    id: 'text',
    title: 'Contenido',
    fields: ['name', 'description', 'overview'],
  },
  { id: 'steps', title: 'Pasos', fields: ['howTo'] },
  { id: 'mistakes', title: 'Errores', fields: ['commonMistakes'] },
  { id: 'faq', title: 'Preguntas frecuentes', fields: ['faq'] },
  { id: 'seo', title: 'SEO', fields: ['seo'] },
  { id: 'shared', title: 'Datos del ejercicio' },
];
const translatedKeys = new Set(
  sections.flatMap((section) => section.fields ?? []),
);
const captions = {
  name: 'Nombre',
  description: 'Descripción',
  overview: 'Resumen',
  howTo: 'Pasos',
  commonMistakes: 'Errores comunes',
  faq: 'Preguntas frecuentes',
  seo: 'Datos SEO',
  title: 'Título',
  question: 'Pregunta',
  answer: 'Respuesta',
  imageUrl: 'Ruta de imagen',
  videoUrl: 'Ruta de vídeo',
  graphLevel: 'Nivel en el árbol',
  equipment: 'Equipo',
  difficulty: 'Dificultad',
  muscles: 'Músculos',
  primary: 'Principales',
  secondary: 'Secundarios',
  keywords: 'Palabras clave',
};
const difficultyNames = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
  elite: 'Élite',
};
const optional = {
  description: '',
  overview: '',
  howTo: [],
  commonMistakes: [],
  faq: [],
  seo: { title: '', description: '' },
};
const exampleItems = {
  howTo: { title: '', description: '', imageUrl: '' },
  commonMistakes: { title: '', description: '' },
  faq: { question: '', answer: '' },
};
const listLabels = {
  howTo: ['Paso', 'Añadir paso'],
  commonMistakes: ['Error', 'Añadir error'],
  faq: ['Pregunta', 'Añadir pregunta'],
};
const blankDraft = () => ({ en: {}, es: {} });
let entries = [];
let selected;
let record;
let draft = blankDraft();
let active = sections[0];
let busy = false;
let opening = 0;
let fieldId = 0;

function element(tag, options = {}, ...children) {
  const node = document.createElement(tag);
  Object.assign(node, options);
  node.append(...children);
  return node;
}

function button(label, classes, onClick, disabled = false) {
  const node = element('button', {
    type: 'button',
    className: classes,
    textContent: label,
    disabled,
  });
  node.addEventListener('click', onClick);
  return node;
}

function status(message = '', isError = false) {
  ui.status.textContent = message;
  ui.status.dataset.error = String(isError);
}

function dirty() {
  return Object.keys(draft.en).length > 0 || Object.keys(draft.es).length > 0;
}

function updateActions() {
  ui.save.disabled = busy || !dirty();
  ui.discard.disabled = busy || !dirty();
}

function normalize(text) {
  return String(text ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[-_]/g, ' ');
}

async function api(path, options) {
  const response = await fetch('/api/exercises' + path, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
}

function drawList() {
  const terms = normalize(ui.search.value).trim().split(/\s+/);
  const matches = entries.filter((item) => {
    const searchable = [item.en, item.es, item.slug, item.id]
      .map(normalize)
      .join(' ');
    return (
      (!ui.difficulty.value ||
        String(item.difficulty) === ui.difficulty.value) &&
      terms.every((term) => searchable.includes(term))
    );
  });
  ui.count.textContent =
    matches.length === 1 ? '1 ejercicio' : `${matches.length} ejercicios`;
  ui.exercises.replaceChildren(
    ...matches.map((item) => {
      const node = button('', 'exercise', () => open(item));
      node.setAttribute('aria-current', String(selected?.id === item.id));
      node.append(
        element('strong', { textContent: item.en }),
        element('small', { textContent: item.es || item.slug }),
      );
      return node;
    }),
  );
}

async function refreshList() {
  entries = await api('');
  const current = ui.difficulty.value;
  const difficulties = [
    ...new Set(
      entries.map((item) => String(item.difficulty ?? '')).filter(Boolean),
    ),
  ];
  ui.difficulty.replaceChildren(
    new Option('Todas las dificultades', ''),
    ...difficulties.map(
      (value) => new Option(difficultyNames[value] ?? value, value),
    ),
  );
  if (difficulties.includes(current)) ui.difficulty.value = current;
  drawList();
}

async function open(item) {
  if (busy || selected?.id === item.id) return;
  if (
    dirty() &&
    !confirm(
      'Hay cambios sin guardar. ¿Quieres descartarlos y abrir otra ficha?',
    )
  )
    return;
  const version = ++opening;
  try {
    if (item.error) throw new Error(item.error);
    const next = await api('/' + item.id);
    if (version !== opening) return;
    selected = item;
    record = next;
    draft = blankDraft();
    active = sections[0];
    ui.empty.hidden = true;
    ui.record.hidden = false;
    status();
    drawList();
    drawRecord();
    drawSection();
  } catch (error) {
    if (version !== opening) return;
    if (record) status(error.message, true);
    else ui.empty.textContent = error.message;
  }
}

function drawRecord() {
  ui.title.textContent = record.en.values.name ?? selected.en;
  ui.slug.textContent = selected.slug;
  updateActions();
}

function valueFor(language, key) {
  if (Object.hasOwn(draft[language], key)) return draft[language][key];
  if (Object.hasOwn(record[language].values, key))
    return record[language].values[key];
  if (language === 'es' && translatedKeys.has(key)) {
    return valueFor('en', key) ?? (key === 'name' ? '' : optional[key]);
  }
  return optional[key];
}

function change(language, key, value) {
  const original = record[language].values[key];
  if (
    Object.hasOwn(record[language].values, key) &&
    JSON.stringify(original) === JSON.stringify(value)
  ) {
    delete draft[language][key];
  } else {
    draft[language][key] = value;
  }
  status(dirty() ? 'Cambios sin guardar' : '');
  updateActions();
}

function drawSection() {
  ui.tabs.replaceChildren(
    ...sections.map((section) => {
      const tab = button(section.title, 'tab', () => {
        active = section;
        drawSection();
        ui.tabs.querySelector('[aria-pressed="true"]').focus();
      });
      tab.setAttribute('aria-pressed', String(active === section));
      return tab;
    }),
  );
  if (active.fields) {
    ui.fields.replaceChildren(
      pane('en', 'Inglés', active.fields),
      pane('es', 'Español', active.fields),
    );
    return;
  }

  const extraKeys = (language) =>
    [
      ...new Set([
        ...Object.keys(record[language].values),
        ...record[language].locked,
      ]),
    ].filter((key) => key !== 'id' && !translatedKeys.has(key));
  const spanishExtras = extraKeys('es');
  ui.fields.replaceChildren(
    pane('en', 'Datos compartidos', extraKeys('en'), ''),
  );
  if (spanishExtras.length)
    ui.fields.append(pane('es', 'Datos específicos en español', spanishExtras));
}

function pane(language, title, keys, tag = language.toUpperCase()) {
  const header = element(
    'header',
    { className: 'pane-header' },
    element('h2', { textContent: title }),
  );
  if (tag)
    header.prepend(
      element('span', { className: 'language', textContent: tag }),
    );
  const node = element(
    'section',
    { className: 'pane', ariaLabel: title },
    header,
  );
  for (const key of keys) {
    const label = captions[key] ?? key;
    if (
      record[language].locked.includes(key) ||
      (language === 'es' &&
        translatedKeys.has(key) &&
        record.en.locked.includes(key) &&
        !Object.hasOwn(record.es.values, key))
    ) {
      node.append(
        element('p', {
          className: 'muted',
          textContent: `${label} · Campo calculado en TypeScript`,
        }),
      );
      continue;
    }
    const value = valueFor(language, key);
    if (value === undefined) {
      node.append(
        element('p', {
          className: 'muted',
          textContent: `${label} · Este ejercicio no tiene este campo`,
        }),
      );
      continue;
    }
    const field = element('div', { className: 'field' });
    const head = element('div', { className: 'field-head' });
    const localize =
      language === 'es' &&
      translatedKeys.has(key) &&
      !Object.hasOwn(record.es.values, key);
    const note = localize
      ? element('small', {
          className: 'muted',
          textContent: Object.hasOwn(draft.es, key)
            ? 'Versión en español'
            : 'Heredado del inglés',
        })
      : undefined;
    const control = renderValue(
      value,
      key,
      (next) => {
        change(language, key, next);
        if (note) note.textContent = 'Versión en español';
      },
      label,
    );
    head.append(control.label);
    if (note) head.append(note);
    field.append(head, control.input);
    node.append(field);
  }
  if (!keys.length)
    node.append(
      element('p', {
        className: 'muted',
        textContent: 'No hay campos en esta sección.',
      }),
    );
  return node;
}

function emptyLike(value) {
  if (Array.isArray(value)) return [];
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, emptyLike(child)]),
    );
  }
  if (typeof value === 'boolean') return false;
  if (typeof value === 'number') return 0;
  return '';
}

function renderValue(
  initialValue,
  key,
  onChange,
  title = captions[key] ?? key,
) {
  const id = 'field-' + ++fieldId;
  const fieldLabel = element('label', {
    className: 'field-label',
    htmlFor: id,
    textContent: title,
  });

  if (Array.isArray(initialValue)) {
    const [singular, addText] = listLabels[key] ?? [
      'Elemento',
      'Añadir elemento',
    ];
    const box = element('div', { id, className: 'items' });
    fieldLabel.removeAttribute('for');
    fieldLabel.id = id + '-label';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-labelledby', fieldLabel.id);
    let items = [...initialValue];
    const example = initialValue[0] ?? exampleItems[key] ?? '';
    function replace(next, focusIndex) {
      items = next;
      onChange(items);
      drawItems();
      if (focusIndex !== undefined) {
        (
          box.children[focusIndex]?.querySelector('input,textarea') ??
          box.querySelector('.add')
        ).focus();
      }
    }
    function drawItems() {
      const blocks = items.map((item, index) => {
        const move = (direction) => {
          const next = [...items];
          const destination = index + direction;
          [next[index], next[destination]] = [next[destination], next[index]];
          replace(next, destination);
        };
        const actions = element(
          'div',
          { className: 'item-actions' },
          button('Subir', 'button', () => move(-1), index === 0),
          button('Bajar', 'button', () => move(1), index === items.length - 1),
          button('Quitar', 'button remove', () =>
            replace(
              items.filter((_, i) => i !== index),
              index,
            ),
          ),
        );
        const control = renderValue(
          item,
          String(index),
          (value) => {
            items = items.map((current, i) => (i === index ? value : current));
            onChange(items);
          },
          `${singular} ${index + 1}`,
        );
        return element(
          'div',
          { className: 'item' },
          element('div', { className: 'item-head' }, control.label, actions),
          control.input,
        );
      });
      box.replaceChildren(
        ...blocks,
        button(addText, 'button add', () => {
          replace([...items, emptyLike(example)], items.length);
        }),
      );
    }
    drawItems();
    return { label: fieldLabel, input: box };
  }

  if (initialValue && typeof initialValue === 'object') {
    const box = element('div', { id, className: 'nested' });
    fieldLabel.removeAttribute('for');
    fieldLabel.id = id + '-label';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-labelledby', fieldLabel.id);
    let current = initialValue;
    for (const [childKey, value] of Object.entries(initialValue)) {
      const control = renderValue(value, childKey, (next) => {
        current = { ...current, [childKey]: next };
        onChange(current);
      });
      box.append(
        element('div', { className: 'field' }, control.label, control.input),
      );
    }
    return { label: fieldLabel, input: box };
  }

  if (initialValue === null) {
    fieldLabel.removeAttribute('for');
    return {
      label: fieldLabel,
      input: element('p', { className: 'muted', textContent: 'Sin valor' }),
    };
  }

  if (typeof initialValue === 'boolean') {
    const input = element('input', {
      id,
      type: 'checkbox',
      checked: initialValue,
    });
    input.addEventListener('change', () => onChange(input.checked));
    return { label: fieldLabel, input };
  }

  if (key === 'difficulty' && typeof initialValue === 'string') {
    const input = element('select', { id });
    const options = [
      ...new Set([...Object.keys(difficultyNames), initialValue]),
    ];
    input.append(
      ...options.map(
        (value) => new Option(difficultyNames[value] ?? value, value),
      ),
    );
    input.value = initialValue;
    input.addEventListener('change', () => onChange(input.value));
    return { label: fieldLabel, input };
  }

  const long =
    ['description', 'overview', 'answer'].includes(key) ||
    String(initialValue).length > 85;
  const input = long
    ? element('textarea', { id, rows: 4 })
    : element('input', {
        id,
        type: typeof initialValue === 'number' ? 'number' : 'text',
      });
  input.value = initialValue;
  if (typeof initialValue === 'number') input.step = 'any';
  input.addEventListener('input', () => {
    if (input.type === 'number') {
      input.setCustomValidity(
        Number.isFinite(input.valueAsNumber)
          ? ''
          : 'Introduce un número válido.',
      );
      if (!input.validity.valid) return;
      onChange(input.valueAsNumber);
      return;
    }
    onChange(input.value);
  });
  return { label: fieldLabel, input };
}

async function save() {
  if (busy || !dirty()) return;
  const invalid = ui.fields.querySelector(':invalid');
  if (invalid) {
    invalid.reportValidity();
    return;
  }
  ++opening;
  busy = true;
  ui.fields.inert = true;
  ui.tabs.inert = true;
  updateActions();
  status('Guardando…');
  try {
    const payload = Object.fromEntries(
      ['en', 'es'].map((language) => [
        language,
        { revision: record[language].revision, changes: draft[language] },
      ]),
    );
    record = await api('/' + selected.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    draft = blankDraft();
    drawRecord();
    drawSection();
    status('Cambios guardados en los archivos del proyecto.');
    try {
      await refreshList();
    } catch {
      status(
        'Archivos guardados. Recarga la página para actualizar el listado.',
      );
    }
  } catch (error) {
    status(error.message, true);
  } finally {
    busy = false;
    ui.fields.inert = false;
    ui.tabs.inert = false;
    updateActions();
  }
}

ui.search.addEventListener('input', drawList);
ui.difficulty.addEventListener('change', drawList);
ui.save.addEventListener('click', save);
ui.discard.addEventListener('click', () => {
  if (dirty() && confirm('¿Descartar los cambios sin guardar?')) {
    draft = blankDraft();
    drawSection();
    status();
    updateActions();
  }
});
window.addEventListener('beforeunload', (event) => {
  if (dirty()) {
    event.preventDefault();
    event.returnValue = '';
  }
});
document.addEventListener('keydown', (event) => {
  if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === 's' &&
    record
  ) {
    event.preventDefault();
    void save();
  }
});

try {
  await refreshList();
  if (entries.length) {
    ui.empty.textContent = 'Selecciona un ejercicio para ver su ficha.';
    const first = entries.find((item) => !item.error);
    if (first) await open(first);
  } else
    ui.empty.textContent =
      'No se han encontrado archivos de ejercicios en Treethenics.';
} catch (error) {
  ui.empty.textContent = error.message;
}
