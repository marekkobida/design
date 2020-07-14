import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';

import variables from '../variables.json';

class CSS {
  forBreakpoints (
    $: (breakpoint: { name: string; size?: string; }) => string,
    breakpoints: typeof variables.breakpoints
  ) {
    return this.test(
      (i, breakpoint) => {
        const suffix = breakpoint === null ? '' : breakpoint.name;

        if (breakpoint !== null) {
          return `@media (min-width: ${breakpoint.size}) {
  ${$({ name: suffix, size: breakpoint.size, }).replace(/\n/g, '\n  ')}
}`;
        }

        return $({ name: suffix, });
      },
      breakpoints
    );
  }

  percentage (i: number, ii: number): string {
    const $ = (i / ii) * 100;

    if ($ === 0) {
      return '0';
    }

    return `${$.toFixed(6)}%`;
  }

  test<T extends any[]> (
    $: (i: number, ii: T[0]) => string,
    to: T | number
  ): string {
    let To = 0;

    if (isArray(to)) {
      To = to.length;
    }

    if (isNumber(to)) {
      To = to;
    }

    let $$: string[] = [];

    for (let i = 0; i < To; i += 1) {
      const b = $(i, isArray(to) ? to[i] : null);

      if (b) {
        $$ = [ ...$$, b, ];
      }
    }

    return $$.join('\n');
  }
}

export default CSS;
