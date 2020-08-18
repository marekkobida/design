import f from '../f';
import fb from '../fb';
import percentage from '../percentage';

function width () {
  return fb(
    (breakpoint) => {
      const $ = f(
        ($, i) => `.${breakpoint.left}width-${i + 1}\\/12 {
  width: ${percentage(i + 1, 12)} !important;
}`,
        11
      );

      return `${$}
.${breakpoint.left}width-0 {
  width: 0 !important;
}
.${breakpoint.left}width-100 {
  width: 100% !important;
}
.${breakpoint.left}width-auto {
  width: auto !important;
}`;
    }
  );
}

export default width;
