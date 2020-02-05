import css from '../../index.css';

import * as helpers from '@redred/helpers';

export type ClassName = boolean | null | number | string | undefined | { [className: string]: boolean | null | undefined };

function createClassName(...parameters: (ClassName[] | ClassName)[]): string | undefined {
  let $: (number | string)[] = [];

  for (let i = 0; i < parameters.length; i += 1) {
    const parameter = parameters[i];

    if (parameter) {
      if (helpers.isArray(parameter)) {
        const createdClassName = createClassName(...parameter);

        if (createdClassName) {
          $ = [ ...$, createdClassName ];
        }
      } else if (helpers.isNumber(parameter) || helpers.isString(parameter)) {

        if (helpers.isString(parameter)) {
          const aaa = parameter.split(' ');
          if (aaa.length > 0) {
            $ = [ ...$, ...aaa ];
          } else {
            $ = [ ...$, parameter ];
          }
        } else {
          $ = [ ...$, parameter ];
        }


      } else if (helpers.isObject(parameter)) {
        for (const className in parameter) {
          if (parameter[className]) {
            $ = [ ...$, className ];
          }
        }
      }
    }
  }

  for (let i = 0; i < $.length; i += 1) {
    if (css[$[i]]) {
      $[i] = css[$[i]];
    }
  }

  if ($.length > 0) {
    return $.join(' ');
  }

  return undefined;
}

export default createClassName;
