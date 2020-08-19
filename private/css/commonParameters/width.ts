import f from '../f';
import fb from '../fb';

function width (): string {
  return fb(
    (breakpoint) => {
      const $ = f(
        ($, i) => `.${breakpoint}width-${i + 1}\\/12 {\n  width: ${(i + 1) / 12 * 100}% !important;\n}`,
        11
      );

      return `${$}
.${breakpoint}width-0 {
  width: 0 !important;
}
.${breakpoint}width-100 {
  width: 100% !important;
}
.${breakpoint}width-auto {
  width: auto !important;
}`;
    }
  );
}

export default width;
