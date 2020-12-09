/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { AlignItemsProperty } from '../../helpers/decodeCommonParameters';
import { CSS } from '../types';

function alignItems(): CSS {
  return forBreakpoints(breakpoint =>
    AlignItemsProperty.reduce(($, alignItemsProperty) => {
      return {
        ...$,
        [`.${breakpoint.name}align-items-${alignItemsProperty}`]: {
          alignItems: `${alignItemsProperty} !important`,
        },
      };
    }, {})
  );
}

export default alignItems;
