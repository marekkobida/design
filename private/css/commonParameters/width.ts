/*
 * Copyright 2020 Marek Kobida
 */

import f from '../f';
import fb from '../fb';

function width (): string {
  return fb(
    (breakpoint) => {
      const $ = f(
        ($, i) => `.${breakpoint.left}width-${i + 1}\\/12 {\n  width: ${(i + 1) / 12 * 100}% !important;\n}`,
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
