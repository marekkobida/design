import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

export type Breakpoint =
  | '#'
  | '##';

export type ResponsiveClassName<T extends number | string> =
  | T
  | [T, { [breakpoint in Breakpoint]?: T }]
  | [T]
  | { [breakpoint in Breakpoint]?: T };

function createResponsiveClassName (left: string, right: ResponsiveClassName<number | string> | undefined): string {
  let createdResponsiveClassName: string[] = [];

  function $ (l: string, r: number | string | undefined) {
    if (r || r === 0) {
      createdResponsiveClassName = [ ...createdResponsiveClassName, `${l}${r}`, ];
    }
  }

  if (isArray(right)) {
    // [T]
    $(left, right[0]);

    if (right.length === 2) {
      for (const breakpoint in right[1]) {
        // [T, { [breakpoint in Breakpoint]?: T }]
        $(`${breakpoint}${left}`, right[1][breakpoint as Breakpoint]);
      }
    }
  }

  if (isNumber(right)) {
    // T
    $(left, right);
  }

  if (isObject(right)) {
    for (const breakpoint in right) {
      // { [breakpoint in Breakpoint]?: T }
      $(`${breakpoint}${left}`, right[breakpoint as Breakpoint]);
    }
  }

  if (isString(right)) {
    // T
    $(left, right);
  }

  return createdResponsiveClassName.join(' ');
}

export default createResponsiveClassName;
