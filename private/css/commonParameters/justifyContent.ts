import fb from '../fb';

function justifyContent (): string {
  return fb(
    (breakpoint) => `.${breakpoint.left}justify-content-center {
  justify-content: center !important;
}
.${breakpoint.left}justify-content-end {
  justify-content: end !important;
}
.${breakpoint.left}justify-content-flex-end {
  justify-content: flex-end !important;
}
.${breakpoint.left}justify-content-flex-start {
  justify-content: flex-start !important;
}
.${breakpoint.left}justify-content-left {
  justify-content: left !important;
}
.${breakpoint.left}justify-content-normal {
  justify-content: normal !important;
}
.${breakpoint.left}justify-content-right {
  justify-content: right !important;
}
.${breakpoint.left}justify-content-space-around {
  justify-content: space-around !important;
}
.${breakpoint.left}justify-content-space-between {
  justify-content: space-between !important;
}
.${breakpoint.left}justify-content-space-evenly {
  justify-content: space-evenly !important;
}
.${breakpoint.left}justify-content-start {
  justify-content: start !important;
}
.${breakpoint.left}justify-content-stretch {
  justify-content: stretch !important;
}`
  );
}

export default justifyContent;
