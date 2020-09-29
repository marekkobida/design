/*
 * Copyright 2020 Marek Kobida
 */

import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';

function f<T extends readonly any[]> ($: (ii: T[0], i: number) => string, to: T | number): string {
  let To = 0;

  if (isArray(to)) {
    To = to.length;
  }

  if (isNumber(to)) {
    To = to;
  }

  let $$: string[] = [];

  for (let i = 0; i < To; i += 1) {
    const b = $(isArray(to) ? to[i] : null, i);

    if (b) {
      $$ = [ ...$$, b, ];
    }
  }

  return $$.join('\n');
}

export default f;
