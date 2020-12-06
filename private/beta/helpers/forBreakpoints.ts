/*
 * Copyright 2020 Marek Kobida
 */

import { Breakpoint, Neviem } from '../types';

const breakpoints: Breakpoint[] = [
  {
    name: '\\#',
    size: 40,
  },
  {
    name: '\\#\\#',
    size: 48,
  },
  {
    name: '\\#\\#\\#',
    size: 64,
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
