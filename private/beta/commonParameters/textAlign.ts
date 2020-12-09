/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { Neviem } from '../types';
import { TextAlignProperty } from '../../helpers/decodeCommonParameters';

function textAlign(): Neviem {
  return forBreakpoints(
    TextAlignProperty.reduce(($, textAlignProperty) => {
      return {
        ...$,
        [`text-align-${textAlignProperty}`]: {
          textAlign: `${textAlignProperty} !important`,
        },
      };
    }, {})
  );
}

export default textAlign;
