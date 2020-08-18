import fb from '../fb';

function textAlign (): string {
  return fb(
    (breakpoint) => `.${breakpoint.left}text-align-center {
  text-align: center !important;
}
.${breakpoint.left}text-align-end {
  text-align: end !important;
}
.${breakpoint.left}text-align-justify {
  text-align: justify !important;
}
.${breakpoint.left}text-align-left {
  text-align: left !important;
}
.${breakpoint.left}text-align-match-parent {
  text-align: match-parent !important;
}
.${breakpoint.left}text-align-right {
  text-align: right !important;
}
.${breakpoint.left}text-align-start {
  text-align: start !important;
}`
  );
}

export default textAlign;
