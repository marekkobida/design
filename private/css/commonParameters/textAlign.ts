import fb from '../fb';

function textAlign (): string {
  return fb(
    (breakpoint) => `.${breakpoint}text-align-center {
  text-align: center !important;
}
.${breakpoint}text-align-end {
  text-align: end !important;
}
.${breakpoint}text-align-justify {
  text-align: justify !important;
}
.${breakpoint}text-align-left {
  text-align: left !important;
}
.${breakpoint}text-align-match-parent {
  text-align: match-parent !important;
}
.${breakpoint}text-align-right {
  text-align: right !important;
}
.${breakpoint}text-align-start {
  text-align: start !important;
}`
  );
}

export default textAlign;
