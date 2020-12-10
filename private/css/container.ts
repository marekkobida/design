/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from './helpers/forBreakpoints';
import { CSS } from './types';

function container(): CSS {
  return forBreakpoints(breakpoint => {
    return breakpoint.name
      ? {
          '.container': {
            maxWidth: `${breakpoint.size} !important`,
          },
        }
      : {
          '.container': {
            width: '100% !important',
          },
        };
  });
}

export default container;
