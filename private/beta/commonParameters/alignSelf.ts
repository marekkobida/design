/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { AlignSelfProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function alignSelf(): Neviem {
  return forBreakpoints(
    AlignSelfProperty.reduce(($, alignSelfProperty) => {
      return {
        ...$,
        [`align-self-${alignSelfProperty}`]: {
          alignSelf: `${alignSelfProperty} !important`,
        },
      };
    }, {})
  );
}

export default alignSelf;
