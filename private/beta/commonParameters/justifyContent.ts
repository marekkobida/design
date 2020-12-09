/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { JustifyContentProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function justifyContent(): Neviem {
  return forBreakpoints(
    JustifyContentProperty.reduce(($, justifyContentProperty) => {
      return {
        ...$,
        [`justify-content-${justifyContentProperty}`]: {
          justifyContent: `${justifyContentProperty} !important`,
        },
      };
    }, {})
  );
}

export default justifyContent;
