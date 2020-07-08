import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

type BreakpointName =
  | '##'
  | '#';

export type DecodedResponsiveClassName = string;

export type EncodedResponsiveClassName<T extends number | string = number | string> =
  | T
  | [ T, ]
  | [ T, { [breakpointName in BreakpointName]?: T }, ]
  | { [breakpointName in BreakpointName]?: T };

function decodeResponsiveClassName ($: string, encodedResponsiveClassName?: EncodedResponsiveClassName): DecodedResponsiveClassName[] {
  let decodedResponsiveClassNames: DecodedResponsiveClassName[] = [];

  function addDecodedResponsiveClassName (decodedResponsiveClassName: DecodedResponsiveClassName) {
    decodedResponsiveClassNames = [ ...decodedResponsiveClassNames, decodedResponsiveClassName, ];
  }

  if (isArray(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName[0]}`);

    if (isObject(encodedResponsiveClassName[1])) {
      for (const breakpointName in encodedResponsiveClassName[1]) {
        addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[1][breakpointName as BreakpointName]}`);
      }
    }
  }

  if (isNumber(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  if (isObject(encodedResponsiveClassName)) {
    for (const breakpointName in encodedResponsiveClassName) {
      addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[breakpointName as BreakpointName]}`);
    }
  }

  if (isString(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  return decodedResponsiveClassNames;
}

export default decodeResponsiveClassName;
