# Editor local de ejercicios de Treethenics

Copia la carpeta `tools/treethenics-editor` a la raíz de tu proyecto, junto a
`src` y `package.json`. Con las dependencias de Treethenics instaladas, ejecuta
este comando desde la raíz.

```powershell
node tools/treethenics-editor/start.mjs
```

Abre [el editor local](http://127.0.0.1:4317). Puedes abrir Angular en otra
terminal para ver los cambios en la web de desarrollo.

- Busca por nombre en inglés, nombre en español o ID. Puedes filtrar por dificultad.
- Edita ambos idiomas desde la misma ficha. En Pasos, Errores y Preguntas
  frecuentes puedes añadir, quitar y reordenar entradas.
- En Datos del ejercicio encontrarás los campos existentes de la ficha inglesa,
  como la dificultad, el nivel, el equipo o las rutas multimedia. Los campos
  que usan expresiones de TypeScript se muestran como campos calculados.
- Guarda con **Guardar cambios** o **Ctrl+S**. Revisa los archivos modificados
  en Git antes de publicarlos por tu flujo habitual.

Las fichas se leen de `src/app/features/tree/data/exercises`. El editor
agrupa cada pareja `<id>.exercise.ts` y `<id>.es.ts`. Si un campo de texto
hereda su valor del inglés, puedes editarlo en el panel español para darle
su propio valor. El identificador se muestra en la cabecera.

El editor abre fichas existentes. El alta de un ejercicio completo y
su registro en el catálogo o en el árbol siguen el flujo actual del proyecto.
