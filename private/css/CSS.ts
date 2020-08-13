import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';

import variables from '../variables';

class CSS {
  variables = variables;

  for<T extends any[]> ($: (ii: T[0], i: number) => string, to: T | number): string {
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

  forBreakpoints ($: (breakpoint: { left: string; right?: number; }) => string): string {
    return this.for(
      (breakpoint) => {
        const suffix = breakpoint === null ? '' : breakpoint.left;

        if (breakpoint !== null) {
          return `@media (min-width: ${breakpoint.right}rem) {
  ${$({ left: suffix, right: breakpoint.right, }).replace(/\n/g, '\n  ')}
}`;
        }

        return $({ left: suffix, });
      },
      this.variables.breakpoints
    );
  }

  percentage (i: number, ii: number): string {
    const $ = (i / ii) * 100;

    if ($ === 0) {
      return '0';
    }

    return `${$.toFixed(6)}%`;
  }
}

export default CSS;
