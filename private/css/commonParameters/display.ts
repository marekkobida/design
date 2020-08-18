import fb from '../fb';

function display (): string {
  return fb(
    (breakpoint) => `.${breakpoint}display-block {
  display: block !important;
}
.${breakpoint}display-flex {
  display: flex !important;
}
.${breakpoint}display-grid {
  display: grid !important;
}
.${breakpoint}display-inline {
  display: inline !important;
}
.${breakpoint}display-inline-block {
  display: inline-block !important;
}
.${breakpoint}display-inline-flex {
  display: inline-flex !important;
}
.${breakpoint}display-inline-grid {
  display: inline-grid !important;
}
.${breakpoint}display-none {
  display: none !important;
}`
  );
}

export default display;
