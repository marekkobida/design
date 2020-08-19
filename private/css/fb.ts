import variables from '../variables';

import f from './f';

function fb ($: (suffix: string) => string): string {
  return f(
    (breakpoint) => {
      if (breakpoint !== null) {
        return `@media (min-width: ${breakpoint.right}rem) {\n  ${$(breakpoint.left).replace(/\n/g, '\n  ')}\n}`;
      }

      return $('');
    },
    variables.breakpoints
  );
}

export default fb;
