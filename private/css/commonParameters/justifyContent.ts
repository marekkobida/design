/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';
import { JustifyContentProperty } from '../../helpers/decodeCommonParameters';

function justifyContent(): CSS {
  return forBreakpoints(breakpoint =>
    JustifyContentProperty.reduce(($, justifyContentProperty) => {
      return {
        ...$,
        [`.${breakpoint.name}justify-content-${justifyContentProperty}`]: {
          justifyContent: `${justifyContentProperty} !important`,
        },
      };
    }, {})
  );
}

export default justifyContent;
