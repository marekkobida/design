/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';

function width(): CSS {
  const columns = 12;

  return forBreakpoints(breakpoint => {
    return {
      ...[...new Array(columns - 1).keys()].reduce(($, i) => {
        return {
          ...$,
          [`.${breakpoint.name}width-${i + 1}\\/${columns}`]: {
            width: `${((i + 1) / columns) * 100}% !important`,
          },
        };
      }, {}),
      [`.${breakpoint.name}width-0`]: { width: '0 !important' },
      [`.${breakpoint.name}width-100`]: { width: '100% !important' },
      [`.${breakpoint.name}width-auto`]: { width: 'auto !important' },
    };
  });
}

export default width;
