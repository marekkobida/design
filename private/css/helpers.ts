import variables from '../variables';

import f from './f';
import fb from './fb';

function helpers (): string {
  return fb(
    (breakpoint) => {
      const a = (property: string, abbreviation: string) => f(
        ($) => `.${breakpoint}${abbreviation}-${$.left} {
  ${property}: ${$.right}rem !important;
}
.${breakpoint}${abbreviation}-b-${$.left},
.${breakpoint}${abbreviation}-y-${$.left} {
  ${property}-bottom: ${$.right}rem !important;
}
.${breakpoint}${abbreviation}-l-${$.left},
.${breakpoint}${abbreviation}-x-${$.left} {
  ${property}-left: ${$.right}rem !important;
}
.${breakpoint}${abbreviation}-r-${$.left},
.${breakpoint}${abbreviation}-x-${$.left} {
  ${property}-right: ${$.right}rem !important;
}
.${breakpoint}${abbreviation}-t-${$.left},
.${breakpoint}${abbreviation}-y-${$.left} {
  ${property}-top: ${$.right}rem !important;
}`,
        variables.sizes
      );

      const b: string = f(
        ($) => {
          if ($.left !== '0') {
            return `.${breakpoint}m-\\!${$.left} {
  margin: calc(${$.right}rem * -1) !important;
}
.${breakpoint}m-b-\\!${$.left}, .${breakpoint}m-y-\\!${$.left} {
  margin-bottom: calc(${$.right}rem * -1) !important;
}
.${breakpoint}m-l-\\!${$.left}, .${breakpoint}m-x-\\!${$.left} {
  margin-left: calc(${$.right}rem * -1) !important;
}
.${breakpoint}m-r-\\!${$.left}, .${breakpoint}m-x-\\!${$.left} {
  margin-right: calc(${$.right}rem * -1) !important;
}
.${breakpoint}m-t-\\!${$.left}, .${breakpoint}m-y-\\!${$.left} {
  margin-top: calc(${$.right}rem * -1) !important;
}`;
          }

          return '';
        },
        variables.sizes
      );

      const c = f(
        ($, i) => `.${breakpoint}m-l-${i + 1}\\/12 {
  margin-left: ${(i + 1) / 12 * 100}% !important;
}`,
        11
      );

      return `${a('margin', 'm')}
${a('padding', 'p')}
${b}
${c}
.${breakpoint}m-auto {
  margin: auto !important;
}
.${breakpoint}m-b-auto, .${breakpoint}m-y-auto {
  margin-bottom: auto !important;
}
.${breakpoint}m-l-auto, .${breakpoint}m-x-auto {
  margin-left: auto !important;
}
.${breakpoint}m-r-auto, .${breakpoint}m-x-auto {
  margin-right: auto !important;
}
.${breakpoint}m-t-auto, .${breakpoint}m-y-auto {
  margin-top: auto !important;
}`;
    }
  );
}

export default helpers;
