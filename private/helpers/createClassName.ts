import encodeClassName from './encodeClassName';
import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

export type ClassName = boolean | null | number | string | undefined | { [className: string]: boolean | null | undefined };

function createClassName (...parameters: (ClassName[] | ClassName)[]): string | undefined {
  let $: (number | string)[] = [];

  for (let i = 0; i < parameters.length; i += 1) {
    const parameter = parameters[i];

    if (parameter) {
      if (isArray(parameter)) {
        const createdClassName = createClassName(...parameter);

        if (createdClassName) {
          $ = [ ...$, createdClassName, ];
        }
      } else if (isNumber(parameter)) {
        $ = [ ...$, parameter, ];
      } else if (isObject(parameter)) {
        for (const className in parameter) {
          if (parameter[className]) {
            $ = [ ...$, className, ];
          }
        }
      } else if (isString(parameter)) {
        const $$ = parameter.split(' ');

        if ($$.length > 0) {
          $ = [ ...$, ...$$, ];
        } else {
          $ = [ ...$, parameter, ];
        }
      }
    }
  }

  $ = encodeClassName($);

  if ($.length > 0) {
    return $.join(' ');
  }

  return undefined;
}

export default createClassName;
