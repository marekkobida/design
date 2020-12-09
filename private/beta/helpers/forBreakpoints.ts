/*
 * Copyright 2020 Marek Kobida
 */

import { Breakpoint, Neviem } from '../types';

const breakpoints: Breakpoint[] = [
  {
    name: '\\#',
    size: '40rem',
  },
  {
    name: '\\#\\#',
    size: '48rem',
  },
  {
    name: '\\#\\#\\#',
    size: '64rem',
  },
];

function forBreakpoints(neviem: Neviem): Neviem {
  return breakpoints.reduce(($, breakpoint) => {
    return {
      ...$,
      [`@media (min-width: ${breakpoint.size})`]: Object.entries(neviem).reduce(
        ($, [propertyName, property]) => {
          return {
            ...$,
            [`${breakpoint.name}${propertyName}`]: property,
          };
        },
        {}
      ),
    };
  }, neviem);
}

export default forBreakpoints;
