import fb from '../fb';

function flexDirection (): string {
  return fb(
    (breakpoint) => `.${breakpoint}flex-direction-column {
  flex-direction: column !important;
}
.${breakpoint}flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}
.${breakpoint}flex-direction-row {
  flex-direction: row !important;
}
.${breakpoint}flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}`
  );
}

export default flexDirection;
