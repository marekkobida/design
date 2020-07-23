import CSS from '../CSS';

class Helpers extends CSS {
  display (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}display-block {
  display: block !important;
}
.${breakpoint.name}display-flex {
  display: flex !important;
}
.${breakpoint.name}display-inline {
  display: inline !important;
}
.${breakpoint.name}display-inline-flex {
  display: inline-flex !important;
}
.${breakpoint.name}display-inline-block {
  display: inline-block !important;
}
.${breakpoint.name}display-none {
  display: none !important;
}`
    );
  }

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
          this.variables.spaces
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
          this.variables.spaces
        );

        return `.border {
  --border--border-color: var(--color);
  --border--border-width: 0.125rem;
  border: var(--border--border-width) solid rgba(var(--border--border-color), 0.25) !important;
}
${this.display()}
${a('margin', 'm')}
${a('padding', 'p')}
${b}
.${breakpoint.name}m-\\# {
  margin: auto !important;
}
.${breakpoint.name}m-b-\\#,
.${breakpoint.name}m-y-\\# {
  margin-bottom: auto !important;
}
.${breakpoint.name}m-l-\\#,
.${breakpoint.name}m-x-\\# {
  margin-left: auto !important;
}
.${breakpoint.name}m-r-\\#,
.${breakpoint.name}m-x-\\# {
  margin-right: auto !important;
}
.${breakpoint.name}m-t-\\#,
.${breakpoint.name}m-y-\\# {
  margin-top: auto !important;
}`;
      }
    );
  }
}

export default Helpers;
