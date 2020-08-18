import fb from '../fb';

function flexWrap () {
  return fb(
    (breakpoint) => `.${breakpoint.left}flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint.left}flex-wrap-wrap {
  flex-wrap: wrap !important;
}
.${breakpoint.left}flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}`
  );
}

export default flexWrap;
