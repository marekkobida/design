import CSS from '../CSS';

class Helpers extends CSS {
  css (): string {
    return this.forBreakpoints(
      (breakpoint) => {
        const a = (property: string, abbreviation: string) => this.for(
          ($) => `.${breakpoint.name}${abbreviation}-${$.name} {
  ${property}: ${$.size} !important;
}
.${breakpoint.name}${abbreviation}-b-${$.name},
.${breakpoint.name}${abbreviation}-y-${$.name} {
  ${property}-bottom: ${$.size} !important;
}
.${breakpoint.name}${abbreviation}-l-${$.name},
.${breakpoint.name}${abbreviation}-x-${$.name} {
  ${property}-left: ${$.size} !important;
}
.${breakpoint.name}${abbreviation}-r-${$.name},
.${breakpoint.name}${abbreviation}-x-${$.name} {
  ${property}-right: ${$.size} !important;
}
.${breakpoint.name}${abbreviation}-t-${$.name},
.${breakpoint.name}${abbreviation}-y-${$.name} {
  ${property}-top: ${$.size} !important;
}`,
          this.variables.sizes
        );

        const b: string = this.for(
          ($) => {
            if ($.name !== '0') {
              return `.${breakpoint.name}m-\\!${$.name} {
  margin: calc(${$.size} * -1) !important;
}
.${breakpoint.name}m-b-\\!${$.name},
.${breakpoint.name}m-y-\\!${$.name} {
  margin-bottom: calc(${$.size} * -1) !important;
}
.${breakpoint.name}m-l-\\!${$.name},
.${breakpoint.name}m-x-\\!${$.name} {
  margin-left: calc(${$.size} * -1) !important;
}
.${breakpoint.name}m-r-\\!${$.name},
.${breakpoint.name}m-x-\\!${$.name} {
  margin-right: calc(${$.size} * -1) !important;
}
.${breakpoint.name}m-t-\\!${$.name},
.${breakpoint.name}m-y-\\!${$.name} {
  margin-top: calc(${$.size} * -1) !important;
}`;
            }

            return '';
          },
          this.variables.sizes
        );

        const c = `.${breakpoint.name}display-block {
  display: block !important;
}
.${breakpoint.name}display-flex {
  display: flex !important;
}
.${breakpoint.name}display-grid {
  display: grid !important;
}
.${breakpoint.name}display-inline {
  display: inline !important;
}
.${breakpoint.name}display-inline-block {
  display: inline-block !important;
}
.${breakpoint.name}display-inline-flex {
  display: inline-flex !important;
}
.${breakpoint.name}display-inline-grid {
  display: inline-grid !important;
}
.${breakpoint.name}display-none {
  display: none !important;
}`;

        const d = this.for(
          ($, i) => `.${breakpoint.name}width-${i + 1}\\/12 {
  width: ${this.percentage(i + 1, 12)};
}`,
          11
        );

        const e = this.for(
          ($, i) => `.${breakpoint.name}m-l-${i + 1}\\/12 {
  margin-left: ${this.percentage(i + 1, 12)};
}`,
          11
        );

        return `${c}
${a('margin', 'm')}
${a('padding', 'p')}
${b}
${d}
${e}
.${breakpoint.name}width-0 {
  width: 0;
}
.${breakpoint.name}width-100 {
  width: 100%;
}
.${breakpoint.name}width-auto {
  width: auto;
}
.${breakpoint.name}m-auto {
  margin: auto !important;
}
.${breakpoint.name}m-b-auto,
.${breakpoint.name}m-y-auto {
  margin-bottom: auto !important;
}
.${breakpoint.name}m-l-auto,
.${breakpoint.name}m-x-auto {
  margin-left: auto !important;
}
.${breakpoint.name}m-r-auto,
.${breakpoint.name}m-x-auto {
  margin-right: auto !important;
}
.${breakpoint.name}m-t-auto,
.${breakpoint.name}m-y-auto {
  margin-top: auto !important;
}`;
      }
    );
  }
}

export default Helpers;
