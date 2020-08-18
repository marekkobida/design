import * as helpers from '@redredsk/helpers/private';

function f<T extends any[]> ($: (ii: T[0], i: number) => string, to: T | number): string {
  let To = 0;

  if (helpers.types.isArray(to)) {
    To = to.length;
  }

  if (helpers.types.isNumber(to)) {
    To = to;
  }

  let $$: string[] = [];

  for (let i = 0; i < To; i += 1) {
    const b = $(helpers.types.isArray(to) ? to[i] : null, i);

    if (b) {
      $$ = [ ...$$, b, ];
    }
  }

  return $$.join('\n');
}

export default f;
