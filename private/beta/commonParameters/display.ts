/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { DisplayProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function display(): Neviem {
  return forBreakpoints(
    DisplayProperty.reduce(($, displayProperty) => {
      return {
        ...$,
        [`display-${displayProperty}`]: {
          display: `${displayProperty} !important`,
        },
      };
    }, {})
  );
}

export default display;
