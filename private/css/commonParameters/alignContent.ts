import fb from '../fb';

function alignContent (): string {
  return fb(
    (breakpoint) => `.${breakpoint.left}align-content-baseline {
  align-content: baseline !important;
}
.${breakpoint.left}align-content-center {
  align-content: center !important;
}
.${breakpoint.left}align-content-end {
  align-content: end !important;
}
.${breakpoint.left}align-content-flex-end {
  align-content: flex-end !important;
}
.${breakpoint.left}align-content-flex-start {
  align-content: flex-start !important;
}
.${breakpoint.left}align-content-normal {
  align-content: normal !important;
}
.${breakpoint.left}align-content-space-around {
  align-content: space-around !important;
}
.${breakpoint.left}align-content-space-between {
  align-content: space-between !important;
}
.${breakpoint.left}align-content-space-evenly {
  align-content: space-evenly !important;
}
.${breakpoint.left}align-content-start {
  align-content: start !important;
}
.${breakpoint.left}align-content-stretch {
  align-content: stretch !important;
}`
  );
}

export default alignContent;
