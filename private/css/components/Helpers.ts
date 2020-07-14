import variables from '../../variables.json';
import CSS from '../CSS';

class Helpers extends CSS {
  css (breakpoints: typeof variables.breakpoints) {
    const $ = this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}block {
  display: block !important;
}
.${breakpoint.name}inline-block {
  display: inline-block !important;
}
.${breakpoint.name}none {
  display: none !important;
}`,
      breakpoints
    );

    const $$ = this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}absolute {
  position: absolute !important;
}
.${breakpoint.name}bottom {
  bottom: 0 !important;
}
.${breakpoint.name}left {
  left: 0 !important;
}
.${breakpoint.name}relative {
  position: relative !important;
}
.${breakpoint.name}right {
  right: 0 !important;
}
.${breakpoint.name}top {
  top: 0 !important;
}`,
      breakpoints
    );

    return `${$}
${$$}
.border {
  --border--border-color: var(--color);
  --border--border-width: 0.125rem;
  border: var(--border--border-width) solid rgba(var(--border--border-color), 0.25) !important;
}`;
  }
}

export default Helpers;
