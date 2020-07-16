import variables from '../../variables.json';
import CSS from '../CSS';

class Spacing extends CSS {
  css ({ breakpoints, spacing, }: { breakpoints: typeof variables.breakpoints; spacing: typeof variables.spacing; }) {
    return this.forBreakpoints(
      (breakpoint) => {
        const $ = (property: string, abbreviation: string) => this.test(
          (i, space) => `.${breakpoint.name}${abbreviation}-${space.name} {
  ${property}: ${space.size} !important;
}
.${breakpoint.name}${abbreviation}-b-${space.name},
.${breakpoint.name}${abbreviation}-y-${space.name} {
  ${property}-bottom: ${space.size} !important;
}
.${breakpoint.name}${abbreviation}-l-${space.name},
.${breakpoint.name}${abbreviation}-x-${space.name} {
  ${property}-left: ${space.size} !important;
}
.${breakpoint.name}${abbreviation}-r-${space.name},
.${breakpoint.name}${abbreviation}-x-${space.name} {
  ${property}-right: ${space.size} !important;
}
.${breakpoint.name}${abbreviation}-t-${space.name},
.${breakpoint.name}${abbreviation}-y-${space.name} {
  ${property}-top: ${space.size} !important;
}`,
          spacing
        );

        const $$ = this.test(
          (i, space) => {
            if (space.name !== '0') {
              return `.${breakpoint.name}m-\\!${space.name} {
  margin: calc(${space.size} * -1) !important;
}
.${breakpoint.name}m-b-\\!${space.name},
.${breakpoint.name}m-y-\\!${space.name} {
  margin-bottom: calc(${space.size} * -1) !important;
}
.${breakpoint.name}m-l-\\!${space.name},
.${breakpoint.name}m-x-\\!${space.name} {
  margin-left: calc(${space.size} * -1) !important;
}
.${breakpoint.name}m-r-\\!${space.name},
.${breakpoint.name}m-x-\\!${space.name} {
  margin-right: calc(${space.size} * -1) !important;
}
.${breakpoint.name}m-t-\\!${space.name},
.${breakpoint.name}m-y-\\!${space.name} {
  margin-top: calc(${space.size} * -1) !important;
}`;
            }

            return '';
          },
          spacing
        );

        return `${$('margin', 'm')}
${$('padding', 'p')}
${$$}
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
      },
      breakpoints
    );
  }
}

export default Spacing;
