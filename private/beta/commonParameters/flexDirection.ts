/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { FlexDirectionProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function flexDirection(): Neviem {
  return forBreakpoints(
    FlexDirectionProperty.reduce(($, flexDirectionProperty) => {
      return {
        ...$,
        [`flex-direction-${flexDirectionProperty}`]: {
          flexDirection: `${flexDirectionProperty} !important`,
        },
      };
    }, {})
  );
}

export default flexDirection;
