/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { AlignContentProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function alignContent(): Neviem {
  return forBreakpoints(
    AlignContentProperty.reduce(($, alignContentProperty) => {
      return {
        ...$,
        [`.align-content-${alignContentProperty}`]: {
          alignContent: `${alignContentProperty} !important`,
        },
      };
    }, {})
  );
}

export default alignContent;
