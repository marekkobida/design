/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';
import { DisplayProperty } from '../../helpers/decodeCommonParameters';

function display(): CSS {
  return forBreakpoints(breakpoint =>
    DisplayProperty.reduce(($, displayProperty) => {
      return {
        ...$,
        [`${breakpoint.name}display-${displayProperty}`]: {
          display: `${displayProperty} !important`,
        },
      };
    }, {})
  );
}

export default display;
