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
    return `${this.display()}
.border {
  --border--border-color: var(--color);
  --border--border-width: 0.125rem;
  border: var(--border--border-width) solid rgba(var(--border--border-color), 0.25) !important;
}`;
  }
}

export default Helpers;
