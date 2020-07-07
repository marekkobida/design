import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

type BreakpointName =
  | '##'
  | '#';

export type ResponsiveClassName<T extends number | string> =
  | T
  | [ T, ]
  | [ T, { [breakpointName in BreakpointName]?: T }, ]
  | { [breakpointName in BreakpointName]?: T };

/**
 *  Type - T
 *    createResponsiveClassName('test-', 1) === [ 'test-1', ]
 *
 *  Type - [ T, ]
 *    createResponsiveClassName('test-', [ 1, ]) === [ 'test-1', ]
 *
 *  Type - [ T, { [breakpointName in BreakpointName]?: T }, ]
 *    createResponsiveClassName('test-', [ 1, { '#': 2, }, ]) === [ 'test-1', '#test-2', ]
 *
 *  Type - { [breakpointName in BreakpointName]?: T }
 *    createResponsiveClassName('test-', { '#': 2, }) === [ '#test-2', ]
 */
function createResponsiveClassName (left: string, right?: ResponsiveClassName<number | string>): string[] {
  let $: string[] = [];

  if (isArray(right)) {
    $ = [ ...$, `${left}${right[0]}`, ];

    if (isObject(right[1])) {
      for (const breakpointName in right[1]) {
        $ = [ ...$, `${breakpointName}${left}${right[1][breakpointName as BreakpointName]}`, ];
      }
    }
  }

  if (isNumber(right)) {
    $ = [ ...$, `${left}${right}`, ];
  }

  if (isObject(right)) {
    for (const breakpointName in right) {
      $ = [ ...$, `${breakpointName}${left}${right[breakpointName as BreakpointName]}`, ];
    }
  }

  if (isString(right)) {
    $ = [ ...$, `${left}${right}`, ];
  }

  return $;
}

export default createResponsiveClassName;
