/*
 * Copyright 2020 Marek Kobida
 */

import { Neviem } from '../types';

function toString(neviem: Neviem, paddingLeft = 2) {
  let css = '';

  for (let a in neviem) {
    const b = neviem[a];

    if (/^@media/.test(a)) {
      css += `${a} {\n`;

      css += toString(b, 4);

      css += '}\n';
    } else {
      css += `${new Array(paddingLeft + 1 - 2).join(' ')}${a} {\n`;

      for (let c in b) {
        const d = b[c];

        css += `${new Array(paddingLeft + 1).join(' ')}${c}: ${d};\n`;
      }

      css += `${new Array(paddingLeft + 1 - 2).join(' ')}}\n`;
    }
  }

  return css;
}

export default toString;
