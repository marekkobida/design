import fb from '../fb';

function alignSelf (): string {
  return fb(
    (breakpoint) => `.${breakpoint}align-self-auto {
  align-self: auto !important;
}
.${breakpoint}align-self-baseline {
  align-self: baseline !important;
}
.${breakpoint}align-self-center {
  align-self: center !important;
}
.${breakpoint}align-self-end {
  align-self: end !important;
}
.${breakpoint}align-self-flex-end {
  align-self: flex-end !important;
}
.${breakpoint}align-self-flex-start {
  align-self: flex-start !important;
}
.${breakpoint}align-self-normal {
  align-self: normal !important;
}
.${breakpoint}align-self-self-end {
  align-self: self-end !important;
}
.${breakpoint}align-self-self-start {
  align-self: self-start !important;
}
.${breakpoint}align-self-start {
  align-self: start !important;
}
.${breakpoint}align-self-stretch {
  align-self: stretch !important;
}`
  );
}

export default alignSelf;
