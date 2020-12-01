/*
 * Copyright 2020 Marek Kobida
 */

import variables from '../variables';

import f from './f';
import fb from './fb';

function helpers(): string {
  return fb(breakpoint => {
    const a = (property: string, abbreviation: string) =>
      f(
        $ => `.${breakpoint.name}${abbreviation}-${$.name} {
  ${property}: ${$.size}rem !important;
}
.${breakpoint.name}${abbreviation}-b-${$.name},
.${breakpoint.name}${abbreviation}-y-${$.name} {
  ${property}-bottom: ${$.size}rem !important;
}
.${breakpoint.name}${abbreviation}-l-${$.name},
.${breakpoint.name}${abbreviation}-x-${$.name} {
  ${property}-left: ${$.size}rem !important;
}
.${breakpoint.name}${abbreviation}-r-${$.name},
.${breakpoint.name}${abbreviation}-x-${$.name} {
  ${property}-right: ${$.size}rem !important;
}
.${breakpoint.name}${abbreviation}-t-${$.name},
.${breakpoint.name}${abbreviation}-y-${$.name} {
  ${property}-top: ${$.size}rem !important;
}`,
        variables.sizes
      );

    const b: string = f($ => {
      if ($.name !== '0') {
        return `.${breakpoint.name}m-\\!${$.name} {
  margin: calc(${$.size}rem * -1) !important;
}
.${breakpoint.name}m-b-\\!${$.name}, .${breakpoint.name}m-y-\\!${$.name} {
  margin-bottom: calc(${$.size}rem * -1) !important;
}
.${breakpoint.name}m-l-\\!${$.name}, .${breakpoint.name}m-x-\\!${$.name} {
  margin-left: calc(${$.size}rem * -1) !important;
}
.${breakpoint.name}m-r-\\!${$.name}, .${breakpoint.name}m-x-\\!${$.name} {
  margin-right: calc(${$.size}rem * -1) !important;
}
.${breakpoint.name}m-t-\\!${$.name}, .${breakpoint.name}m-y-\\!${$.name} {
  margin-top: calc(${$.size}rem * -1) !important;
}`;
      }

      return '';
    }, variables.sizes);

    const c = f(
      ($, i) =>
        `.${breakpoint.name}m-l-${i + 1}\\/12 {\n  margin-left: ${
          ((i + 1) / 12) * 100
        }% !important;\n}`,
      11
    );

    return `${a('margin', 'm')}
${a('padding', 'p')}
${b}
${c}
.${breakpoint.name}m-auto {
  margin: auto !important;
}
.${breakpoint.name}m-b-auto, .${breakpoint.name}m-y-auto {
  margin-bottom: auto !important;
}
.${breakpoint.name}m-l-auto, .${breakpoint.name}m-x-auto {
  margin-left: auto !important;
}
.${breakpoint.name}m-r-auto, .${breakpoint.name}m-x-auto {
  margin-right: auto !important;
}
.${breakpoint.name}m-t-auto, .${breakpoint.name}m-y-auto {
  margin-top: auto !important;
}`;
  });
}

export default helpers;
