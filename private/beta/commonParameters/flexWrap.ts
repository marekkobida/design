/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { FlexWrapProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function flexWrap(): Neviem {
  return forBreakpoints(
    FlexWrapProperty.reduce(($, flexWrapProperty) => {
      return {
        ...$,
        [`flex-wrap-${flexWrapProperty}`]: {
          flexWrap: `${flexWrapProperty} !important`,
        },
      };
    }, {})
  );
}

export default flexWrap;
