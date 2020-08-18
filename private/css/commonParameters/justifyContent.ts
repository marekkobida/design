import fb from '../fb';

function justifyContent (): string {
  return fb(
    (breakpoint) => `.${breakpoint}justify-content-center {
  justify-content: center !important;
}
.${breakpoint}justify-content-end {
  justify-content: end !important;
}
.${breakpoint}justify-content-flex-end {
  justify-content: flex-end !important;
}
.${breakpoint}justify-content-flex-start {
  justify-content: flex-start !important;
}
.${breakpoint}justify-content-left {
  justify-content: left !important;
}
.${breakpoint}justify-content-normal {
  justify-content: normal !important;
}
.${breakpoint}justify-content-right {
  justify-content: right !important;
}
.${breakpoint}justify-content-space-around {
  justify-content: space-around !important;
}
.${breakpoint}justify-content-space-between {
  justify-content: space-between !important;
}
.${breakpoint}justify-content-space-evenly {
  justify-content: space-evenly !important;
}
.${breakpoint}justify-content-start {
  justify-content: start !important;
}
.${breakpoint}justify-content-stretch {
  justify-content: stretch !important;
}`
  );
}

export default justifyContent;
