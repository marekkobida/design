import variables from '../../variables.json';
import CSS from '../CSS';

class Helpers extends CSS {
  display ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }): string {
    return this.forBreakpoints(
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
  }

  css ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }): string {
    return `${this.display({ breakpoints, })}
.border {
  --border--border-color: var(--color);
  --border--border-width: 0.125rem;
  border: var(--border--border-width) solid rgba(var(--border--border-color), 0.25) !important;
}`;
  }
}

export default Helpers;
