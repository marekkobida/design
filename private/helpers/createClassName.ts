import encodeClassName from './encodeClassName';
import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

export type ClassName =
  | ClassName[]
  | boolean
  | null
  | number
  | string
  | undefined
  | { [left: string]: boolean | null | number | string | undefined };

function test (...parameters: ClassName[]): (number | string)[] {
  let createdClassName: (number | string)[] = [];

  for (let i = 0; i < parameters.length; i += 1) {
    const parameter = parameters[i];

    if (!parameter) {
      continue;
    }

    if (isArray(parameter)) {
      for (const left in parameter) {
        const right = parameter[left];

        createdClassName = [ ...createdClassName, ...test(right), ];
      }
    }

    if (isNumber(parameter)) {
      createdClassName = [ ...createdClassName, parameter, ];
    }

    if (isObject(parameter)) {
      for (const left in parameter) {
        const right = parameter[left];

        if (right) {
          createdClassName = [ ...createdClassName, left, ];
        }
      }
    }

    if (isString(parameter)) {
      const $ = parameter.split(' ');

      if ($.length > 0) {
        createdClassName = [ ...createdClassName, ...$, ];
      } else {
        createdClassName = [ ...createdClassName, parameter, ];
      }
    }
  }

  return createdClassName;
}

function createClassName (...parameters: ClassName[]): string {
  let createdClassName = test(...parameters);

  createdClassName = encodeClassName(createdClassName);

  return createdClassName.join(' ');
}

export default createClassName;
