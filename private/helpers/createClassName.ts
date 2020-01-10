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
        $ = [ ...$, parameter ];
      } else if (helpers.isObject(parameter)) {
        for (const className in parameter) {
          if (parameter[className]) {
            $ = [ ...$, className ];
          }
        }
      }
    }
  }

  if ($.length > 0) {
    return $.join(' ');
  }

  return undefined;
}

export default createClassName;
