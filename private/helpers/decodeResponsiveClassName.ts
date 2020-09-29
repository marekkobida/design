/*
 * Copyright 2020 Marek Kobida
 */

import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

export type DecodedResponsiveClassName = string;

export type EncodedResponsiveClassName<T extends number | string> =
  | T
  | [ T, ]
  | [ T, { [breakpointName: string]: T; }, ]
  | { [breakpointName: string]: T; };

function decodeResponsiveClassName ($: string, encodedResponsiveClassName?: EncodedResponsiveClassName<number | string>): DecodedResponsiveClassName[] {
  let decodedResponsiveClassNames: DecodedResponsiveClassName[] = [];

  function addDecodedResponsiveClassName (decodedResponsiveClassName: DecodedResponsiveClassName) {
    decodedResponsiveClassNames = [ ...decodedResponsiveClassNames, decodedResponsiveClassName, ];
  }

  // [ T, ]
  if (isArray(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName[0]}`);

    // [ T, { [breakpointName: string]: T; }, ]
    if (isObject(encodedResponsiveClassName[1])) {
      for (const breakpointName in encodedResponsiveClassName[1]) {
        addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[1][breakpointName]}`);
      }
    }
  }

  // T
  if (isNumber(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  // { [breakpointName: string]: T; }
  if (isObject(encodedResponsiveClassName)) {
    for (const breakpointName in encodedResponsiveClassName) {
      addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[breakpointName]}`);
    }
  }

  // T
  if (isString(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  return decodedResponsiveClassNames;
}

export default decodeResponsiveClassName;
