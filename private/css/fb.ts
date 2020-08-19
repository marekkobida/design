import variables from '../variables';

import f from './f';

function fb ($: (breakpoint: { left: string; right?: number; }) => string): string {
  return f(
    (breakpoint) => {
      if (breakpoint !== null) {
        return `@media (min-width: ${breakpoint.right}rem) {\n  ${$(breakpoint).replace(/\n/g, '\n  ')}\n}`;
      }

      return $({ left: '', });
    },
    variables.breakpoints
  );
}

export default fb;
