import * as helpers from '@redred/helpers';

export type Breakpoint = '#' | '##';

export type ResponsiveClassName<T extends number | string> = T | [T, { [breakpoint in Breakpoint]?: T }] | [T] | { [breakpoint in Breakpoint]?: T };

function createResponsiveClassName (...parameters: [string, string, ResponsiveClassName<number | string> | undefined][]): string | undefined {
  let $: string[] = [];

  function $$ (...responsiveClassName: [string, string, number | string | undefined]) {
    if (!responsiveClassName[2]) {
      return;
    }

    $ = [ ...$, `${responsiveClassName[0]}_${responsiveClassName[1]}_${responsiveClassName[2]}`, ];
  }

  for (let i = 0; i < parameters.length; i += 1) {
    const parameter = parameters[i];

    if (!parameter[0] || !parameter[1] || !parameter[2]) {
      continue;
    }

    if (helpers.isArray(parameter[2])) {
      $$(parameter[0], parameter[1], parameter[2][0]);

      if (parameter[2].length === 2) {
        if (helpers.isObject(parameter[2][1])) {
          for (const breakpoint in parameter[2][1]) {
            $$(`${breakpoint}${parameter[0]}`, parameter[1], parameter[2][1][breakpoint as Breakpoint]);
          }
        }
      }
    } else if (helpers.isNumber(parameter[2]) || helpers.isString(parameter[2])) {
      $$(parameter[0], parameter[1], parameter[2]);
    } else if (helpers.isObject(parameter[2])) {
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
