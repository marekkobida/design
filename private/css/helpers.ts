import variables from '../variables';

import f from './f';
import fb from './fb';

function helpers (): string {
  return fb(
    (breakpoint) => {
      const a = (property: string, abbreviation: string) => f(
        ($) => `.${breakpoint.left}${abbreviation}-${$.left} {
  ${property}: ${$.right}rem !important;
}
.${breakpoint.left}${abbreviation}-b-${$.left},
.${breakpoint.left}${abbreviation}-y-${$.left} {
  ${property}-bottom: ${$.right}rem !important;
}
.${breakpoint.left}${abbreviation}-l-${$.left},
.${breakpoint.left}${abbreviation}-x-${$.left} {
  ${property}-left: ${$.right}rem !important;
}
.${breakpoint.left}${abbreviation}-r-${$.left},
.${breakpoint.left}${abbreviation}-x-${$.left} {
  ${property}-right: ${$.right}rem !important;
}
.${breakpoint.left}${abbreviation}-t-${$.left},
.${breakpoint.left}${abbreviation}-y-${$.left} {
  ${property}-top: ${$.right}rem !important;
}`,
        variables.sizes
      );

      const b: string = f(
        ($) => {
          if ($.left !== '0') {
            return `.${breakpoint.left}m-\\!${$.left} {
  margin: calc(${$.right}rem * -1) !important;
}
.${breakpoint.left}m-b-\\!${$.left},
.${breakpoint.left}m-y-\\!${$.left} {
  margin-bottom: calc(${$.right}rem * -1) !important;
}
.${breakpoint.left}m-l-\\!${$.left},
.${breakpoint.left}m-x-\\!${$.left} {
  margin-left: calc(${$.right}rem * -1) !important;
}
.${breakpoint.left}m-r-\\!${$.left},
.${breakpoint.left}m-x-\\!${$.left} {
  margin-right: calc(${$.right}rem * -1) !important;
}
.${breakpoint.left}m-t-\\!${$.left},
.${breakpoint.left}m-y-\\!${$.left} {
  margin-top: calc(${$.right}rem * -1) !important;
}`;
          }

          return '';
        },
        variables.sizes
      );

      const c = f(
        ($, i) => `.${breakpoint.left}m-l-${i + 1}\\/12 {
  margin-left: ${(i + 1) / 12 * 100}% !important;
}`,
        11
      );

      return `${a('margin', 'm')}
${a('padding', 'p')}
${b}
${c}
.${breakpoint.left}m-auto {
  margin: auto !important;
}
.${breakpoint.left}m-b-auto,
.${breakpoint.left}m-y-auto {
  margin-bottom: auto !important;
}
.${breakpoint.left}m-l-auto,
.${breakpoint.left}m-x-auto {
  margin-left: auto !important;
}
.${breakpoint.left}m-r-auto,
.${breakpoint.left}m-x-auto {
  margin-right: auto !important;
}
.${breakpoint.left}m-t-auto,
.${breakpoint.left}m-y-auto {
  margin-top: auto !important;
}`;
    }
  );
}

export default helpers;
