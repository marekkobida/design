/*
 * Copyright 2020 Marek Kobida
 */

import { CSS } from '../types';

// todo
function toString(neviem: CSS, paddingLeft = 2) {
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

        const test = c
          .replace(/[A-Z]/g, m => '-' + m.toLowerCase())
          .replace(/^webkit/g, a => '-webkit');

        css += `${new Array(paddingLeft + 1).join(' ')}${test}: ${d};\n`;
      }

      css += `${new Array(paddingLeft + 1 - 2).join(' ')}}\n`;
    }
  }

  return css;
}

export default toString;
