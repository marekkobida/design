/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';
import { FlexWrapProperty } from '../../helpers/decodeCommonParameters';

function flexWrap(): CSS {
  return forBreakpoints(breakpoint =>
    FlexWrapProperty.reduce(($, flexWrapProperty) => {
      return {
        ...$,
        [`.${breakpoint.name}flex-wrap-${flexWrapProperty}`]: {
          flexWrap: `${flexWrapProperty} !important`,
        },
      };
    }, {})
  );
}

export default flexWrap;
