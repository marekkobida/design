/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { AlignContentProperty } from '../../helpers/decodeCommonParameters';
import { CSS } from '../types';

function alignContent(): CSS {
  return forBreakpoints(breakpoint =>
    AlignContentProperty.reduce(($, alignContentProperty) => {
      return {
        ...$,
        [`.${breakpoint.name}align-content-${alignContentProperty}`]: {
          alignContent: `${alignContentProperty} !important`,
        },
      };
    }, {})
  );
}

export default alignContent;
