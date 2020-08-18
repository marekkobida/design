import fb from '../fb';

function alignContent (): string {
  return fb(
    (breakpoint) => `.${breakpoint}align-content-baseline {
  align-content: baseline !important;
}
.${breakpoint}align-content-center {
  align-content: center !important;
}
.${breakpoint}align-content-end {
  align-content: end !important;
}
.${breakpoint}align-content-flex-end {
  align-content: flex-end !important;
}
.${breakpoint}align-content-flex-start {
  align-content: flex-start !important;
}
.${breakpoint}align-content-normal {
  align-content: normal !important;
}
.${breakpoint}align-content-space-around {
  align-content: space-around !important;
}
.${breakpoint}align-content-space-between {
  align-content: space-between !important;
}
.${breakpoint}align-content-space-evenly {
  align-content: space-evenly !important;
}
.${breakpoint}align-content-start {
  align-content: start !important;
}
.${breakpoint}align-content-stretch {
  align-content: stretch !important;
}`
  );
}

export default alignContent;
