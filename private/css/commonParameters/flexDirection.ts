import fb from '../fb';

function flexDirection (): string {
  return fb(
    (breakpoint) => `.${breakpoint.left}flex-direction-column {
  flex-direction: column !important;
}
.${breakpoint.left}flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}
.${breakpoint.left}flex-direction-row {
  flex-direction: row !important;
}
.${breakpoint.left}flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}`
  );
}

export default flexDirection;
