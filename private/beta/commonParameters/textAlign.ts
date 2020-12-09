/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';
import { TextAlignProperty } from '../../helpers/decodeCommonParameters';

function textAlign(): CSS {
  return forBreakpoints(breakpoint =>
    TextAlignProperty.reduce(($, textAlignProperty) => {
      return {
        ...$,
        [`${breakpoint.name}text-align-${textAlignProperty}`]: {
          textAlign: `${textAlignProperty} !important`,
        },
      };
    }, {})
  );
}

export default textAlign;
