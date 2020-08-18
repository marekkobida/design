import fb from '../fb';

function alignItems (): string {
  return fb(
    (breakpoint) => `.${breakpoint.left}align-items-baseline {
  align-items: baseline !important;
}
.${breakpoint.left}align-items-center {
  align-items: center !important;
}
.${breakpoint.left}align-items-end {
  align-items: end !important;
}
.${breakpoint.left}align-items-flex-end {
  align-items: flex-end !important;
}
.${breakpoint.left}align-items-flex-start {
  align-items: flex-start !important;
}
.${breakpoint.left}align-items-normal {
  align-items: normal !important;
}
.${breakpoint.left}align-items-self-end {
  align-items: self-end !important;
}
.${breakpoint.left}align-items-self-start {
  align-items: self-start !important;
}
.${breakpoint.left}align-items-start {
  align-items: start !important;
}
.${breakpoint.left}align-items-stretch {
  align-items: stretch !important;
}`
  );
}

export default alignItems;
