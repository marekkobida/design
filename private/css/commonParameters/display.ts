import fb from '../fb';

function display () {
  return fb(
    (breakpoint) => `.${breakpoint.left}display-block {
  display: block !important;
}
.${breakpoint.left}display-flex {
  display: flex !important;
}
.${breakpoint.left}display-grid {
  display: grid !important;
}
.${breakpoint.left}display-inline {
  display: inline !important;
}
.${breakpoint.left}display-inline-block {
  display: inline-block !important;
}
.${breakpoint.left}display-inline-flex {
  display: inline-flex !important;
}
.${breakpoint.left}display-inline-grid {
  display: inline-grid !important;
}
.${breakpoint.left}display-none {
  display: none !important;
}`
  );
}

export default display;
