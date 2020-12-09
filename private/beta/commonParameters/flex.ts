/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';
import { FlexProperty } from '../../helpers/decodeCommonParameters';

function flex(): CSS {
  return forBreakpoints(breakpoint =>
    FlexProperty.reduce(($, flexProperty) => {
      return {
        ...$,
        [`${breakpoint.name}flex-${flexProperty}`]: {
          flex: `${flexProperty} !important`,
        },
      };
    }, {})
  );
}

export default flex;
