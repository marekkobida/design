import f from '../f';
import fb from '../fb';

function width (): string {
  return fb(
    (breakpoint) => {
      const $ = f(
        ($, i) => `.${breakpoint.left}width-${i + 1}\\/12 {
  flex: 0 0 auto !important;
  width: ${(i + 1) / 12 * 100}% !important;
}`,
        11
      );

      return `${$}
.${breakpoint.left}width-0 {
  flex: 0 0 auto !important;
  width: 0 !important;
}
.${breakpoint.left}width-100 {
  flex: 0 0 auto !important;
  width: 100% !important;
}
.${breakpoint.left}width-auto {
  flex: 0 0 auto !important;
  width: auto !important;
}`;
    }
  );
}

export default width;
