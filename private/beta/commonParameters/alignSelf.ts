/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { AlignSelfProperty } from '../../helpers/decodeCommonParameters';
import { CSS } from '../types';

function alignSelf(): CSS {
  return forBreakpoints(breakpoint =>
    AlignSelfProperty.reduce(($, alignSelfProperty) => {
      return {
        ...$,
        [`.${breakpoint.name}align-self-${alignSelfProperty}`]: {
          alignSelf: `${alignSelfProperty} !important`,
        },
      };
    }, {})
  );
}

export default alignSelf;
