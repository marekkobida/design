import {
  isArray, isNumber, isObject, isString,
} from '@redred/helpers';

export type Breakpoint = '#' | '##';

export type ResponsiveClassName<T extends number | string> = T | [T, { [breakpoint in Breakpoint]?: T }] | [T] | { [breakpoint in Breakpoint]?: T };

function createResponsiveClassName(...parameters: Array<[string, string, ResponsiveClassName<number | string> | undefined]>): string | undefined {
  let $: Array<string> = [];

  function $$(...responsiveClassName: [string, string, number | string | undefined]) {
    if (!responsiveClassName[2]) {
      return;
    }

    $ = [...$, `${responsiveClassName[0]}_${responsiveClassName[1]}_${responsiveClassName[2]}`];
  }

  for (let i = 0; i < parameters.length; i += 1) {
    const parameter = parameters[i];

    if (!parameter[0] || !parameter[1] || !parameter[2]) {
      continue;
    }

    if (isArray(parameter[2])) {
      $$(parameter[0], parameter[1], parameter[2][0]);

      if (parameter[2].length === 2) {
        if (isObject(parameter[2][1])) {
          for (const breakpoint in parameter[2][1]) {
            $$(`${breakpoint}${parameter[0]}`, parameter[1], parameter[2][1][breakpoint as Breakpoint]);
          }
        }
      }
    } else if (isNumber(parameter[2]) || isString(parameter[2])) {
      $$(parameter[0], parameter[1], parameter[2]);
    } else if (isObject(parameter[2])) {
      for (const breakpoint in parameter[2]) {
        $$(`${breakpoint}${parameter[0]}`, parameter[1], parameter[2][breakpoint as Breakpoint]);
      }
    }
  }

  if ($.length > 0) {
    return $.join(' ');
  }

  return undefined;
}

export default createResponsiveClassName;
