import fb from '../fb';

function alignSelf (): string {
  return fb(
    (breakpoint) => `.${breakpoint.left}align-self-auto {
  align-self: auto !important;
}
.${breakpoint.left}align-self-baseline {
  align-self: baseline !important;
}
.${breakpoint.left}align-self-center {
  align-self: center !important;
}
.${breakpoint.left}align-self-end {
  align-self: end !important;
}
.${breakpoint.left}align-self-flex-end {
  align-self: flex-end !important;
}
.${breakpoint.left}align-self-flex-start {
  align-self: flex-start !important;
}
.${breakpoint.left}align-self-normal {
  align-self: normal !important;
}
.${breakpoint.left}align-self-self-end {
  align-self: self-end !important;
}
.${breakpoint.left}align-self-self-start {
  align-self: self-start !important;
}
.${breakpoint.left}align-self-start {
  align-self: start !important;
}
.${breakpoint.left}align-self-stretch {
  align-self: stretch !important;
}`
  );
}

export default alignSelf;
