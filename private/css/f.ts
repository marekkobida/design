/*
 * Copyright 2020 Marek Kobida
 */

function f<T extends readonly any[]>(
  $: (ii: T[0], i: number) => string,
  to: T | number,
): string {
  let To = 0;

  if (Array.isArray(to)) {
    To = to.length;
  }

  if (typeof to === 'number') {
    To = to;
  }

  let $$: string[] = [];

  for (let i = 0; i < To; i += 1) {
    const b = $(Array.isArray(to) ? to[i] : null, i);

    if (b) {
      $$ = [...$$, b];
    }
  }

  return $$.join('\n');
}

export default f;
