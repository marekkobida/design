import variables from '../variables';

import f from './f';

function fb ($: (breakpoint: { left: string; right?: number; }) => string): string {
  return f(
    (breakpoint) => {
      const suffix = breakpoint === null ? '' : breakpoint.left;

      if (breakpoint !== null) {
        return `@media (min-width: ${breakpoint.right}rem) {
  ${$({ left: suffix, right: breakpoint.right, }).replace(/\n/g, '\n  ')}
}`;
      }

      return $({ left: suffix, });
    },
    variables.breakpoints
  );
}

export default fb;
