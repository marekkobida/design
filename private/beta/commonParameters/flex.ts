/*
 * Copyright 2020 Marek Kobida
 */

import forBreakpoints from '../helpers/forBreakpoints';
import { FlexProperty } from '../../helpers/decodeCommonParameters';
import { Neviem } from '../types';

function flex(): Neviem {
  return forBreakpoints(
    FlexProperty.reduce(($, flexProperty) => {
      return {
        ...$,
        [`flex-${flexProperty}`]: {
          flex: `${flexProperty} !important`,
        },
      };
    }, {})
  );
}

export default flex;
