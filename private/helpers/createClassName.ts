import encodeClassName from './encodeClassName';
import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

export type ClassName =
  | boolean
  | null
  | number
  | string
  | undefined
  | { [left: string]: boolean, };

function createClassName (...parameters: (ClassName | ClassName[])[]): string {
  let createdClassName: string[] = [];

  for (let i = 0; i < parameters.length; i += 1) {
    const parameter = parameters[i];

    if (isArray(parameter)) {
      for (const left in parameter) {
        const right = parameter[left];

        createdClassName = [ ...createdClassName, createClassName(right), ];
      }
    }

    if (isNumber(parameter)) {
      createdClassName = [ ...createdClassName, parameter.toString(), ];
    }

    if (isObject(parameter)) {
      for (const left in parameter) {
        const right = parameter[left];

        if (right) {
          createdClassName = [ ...createdClassName, createClassName(left), ];
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

  createdClassName = encodeClassName(createdClassName);

  return createdClassName.join(' ');
}

export default createClassName;
