import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

export type Breakpoint =
  | '#'
  | '##';

export type ResponsiveClassName<T extends string> =
  | T
  | [T, { [breakpoint in Breakpoint]?: T }]
  | [T]
  | { [breakpoint in Breakpoint]?: T };

function createResponsiveClassName (parameter: [string, string, ResponsiveClassName<string> | undefined]): string | undefined {
  let createdResponsiveClassName: string[] = [];

  function $ (...responsiveClassName: [string, string, string | undefined]) {
    if (!responsiveClassName[2]) {
      return;
    }

    createdResponsiveClassName = [ ...createdResponsiveClassName, `${responsiveClassName[0]}_${responsiveClassName[1]}_${responsiveClassName[2]}`, ];
  }

  if (isArray(parameter[2])) {
    // [T]
    $(parameter[0], parameter[1], parameter[2][0]);

    if (parameter[2].length === 2) {
      if (isObject(parameter[2][1])) {
        for (const breakpoint in parameter[2][1]) {
          // [T, { [breakpoint in Breakpoint]?: T }]
          $(`${breakpoint}${parameter[0]}`, parameter[1], parameter[2][1][breakpoint as Breakpoint]);
        }
      }
    }
  }

  if (isNumber(parameter[2])) {
    // T
    $(parameter[0], parameter[1], parameter[2].toString());
  }

  if (isObject(parameter[2])) {
    for (const breakpoint in parameter[2]) {
      // { [breakpoint in Breakpoint]?: T }
      $(`${breakpoint}${parameter[0]}`, parameter[1], parameter[2][breakpoint as Breakpoint]);
    }
  }

  if (isString(parameter[2])) {
    // T
    $(parameter[0], parameter[1], parameter[2]);
  }

  return createdResponsiveClassName.join(' ');
}

export default createResponsiveClassName;
