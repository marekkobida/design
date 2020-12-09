/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { Neviem } from '../types';

function width(): Neviem {
  const columns = 12;

  return forBreakpoints({
    ...[...new Array(columns - 1).keys()].reduce(($, i) => {
      return {
        ...$,
        [`width-${i + 1}\\/${columns}`]: {
          width: `${((i + 1) / columns) * 100}% !important`,
        },
      };
    }, {}),
    'width-0': {
      width: '0 !important',
    },
    'width-100': {
      width: '100% !important',
    },
    'width-auto': {
      width: 'auto !important',
    },
  });
}

export default width;
