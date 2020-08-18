import fb from '../fb';

function flexWrap (): string {
  return fb(
    (breakpoint) => `.${breakpoint}flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint}flex-wrap-wrap {
  flex-wrap: wrap !important;
}
.${breakpoint}flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}`
  );
}

export default flexWrap;
