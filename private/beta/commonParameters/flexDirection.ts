/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { CSS } from '../types';
import { FlexDirectionProperty } from '../../helpers/decodeCommonParameters';

function flexDirection(): CSS {
  return forBreakpoints(breakpoint =>
    FlexDirectionProperty.reduce(($, flexDirectionProperty) => {
      return {
        ...$,
        [`.${breakpoint.name}flex-direction-${flexDirectionProperty}`]: {
          flexDirection: `${flexDirectionProperty} !important`,
        },
      };
    }, {})
  );
}

export default flexDirection;
