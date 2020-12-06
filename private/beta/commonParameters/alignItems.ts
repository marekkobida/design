/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { AlignItemsProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function alignItems(): Neviem {
  return forBreakpoints(
    AlignItemsProperty.reduce(($, alignItemsProperty) => {
      return {
        ...$,
        [`.align-items-${alignItemsProperty}`]: {
          alignItems: `${alignItemsProperty} !important`,
        },
      };
    }, {})
  );
}

export default alignItems;
