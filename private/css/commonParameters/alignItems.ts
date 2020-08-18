import fb from '../fb';

function alignItems (): string {
  return fb(
    (breakpoint) => `.${breakpoint}align-items-baseline {
  align-items: baseline !important;
}
.${breakpoint}align-items-center {
  align-items: center !important;
}
.${breakpoint}align-items-end {
  align-items: end !important;
}
.${breakpoint}align-items-flex-end {
  align-items: flex-end !important;
}
.${breakpoint}align-items-flex-start {
  align-items: flex-start !important;
}
.${breakpoint}align-items-normal {
  align-items: normal !important;
}
.${breakpoint}align-items-self-end {
  align-items: self-end !important;
}
.${breakpoint}align-items-self-start {
  align-items: self-start !important;
}
.${breakpoint}align-items-start {
  align-items: start !important;
}
.${breakpoint}align-items-stretch {
  align-items: stretch !important;
}`
  );
}

export default alignItems;
