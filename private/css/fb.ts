/*
 * Copyright 2020 Marek Kobida
 */

import variables from '../variables';

import f from './f';

function fb($: (breakpoint: { name: string; size: number }) => string): string {
  return f(breakpoint => {
    if (breakpoint !== null) {
      return `@media (min-width: ${breakpoint.size}rem) {\n  ${$(
        breakpoint
      ).replace(/\n/g, '\n  ')}\n}`;
    }

    return $({ name: '', size: 0 });
  }, variables.breakpoints);
}

export default fb;
