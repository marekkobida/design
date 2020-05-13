import { isArray, isNumber, } from '@redredsk/helpers';

import variables from '../variables.json';

class CSS {
  forBreakpoints ($: (breakpoint: { name: string; size?: string }) => string, breakpoints: typeof variables.breakpoints) {
    return this.test({
      $: (i, breakpoint) => {
        const suffix = breakpoint === null ? '' : breakpoint.name;

        if (breakpoint !== null) {
          return `@media (min-width: ${breakpoint.size}) {
  ${$({ name: suffix, size: breakpoint.size, }).replace(/\n/g, '\n  ')}
}`;
        }

        return $({ name: suffix, });
      },
      to: breakpoints,
    });
  }

  percentage (i: number, ii: number): string {
    const $ = (i / ii) * 100;

    if ($ === 0) {
      return '0';
    }

    return `${$.toFixed(6)}%`;
  }

  test<Test extends any[]> ({ $, from = 0, to, }: { $: (i: number, ii: Test[0]) => string; from?: number; to: Test | number }) {
    let To = 0;

    if (isArray(to)) {
      To = to.length;
    }

    if (isNumber(to)) {
      To = to;
    }

    let $$: string[] = [];

    for (let i = from; i < To; i += 1) {
      const b = $(i, isArray(to) ? to[i] : null);

      if (b) {
        $$ = [ ...$$, b, ];
      }
    }

    return $$.join('\n');
  }
}

export default CSS;
