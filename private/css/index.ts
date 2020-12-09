/*
 * Copyright 2020 Marek Kobida
 */

import fs from 'fs';

import button from './button';
import form from './form';
import helpers from './helpers';

function root() {
  return `button {
  border-radius: 0; /* Microsoft Edge */
}
button, [type="button"], [type="reset"], [type="submit"] {
  -moz-appearance: button;
  -webkit-appearance: button;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}
button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
textarea {
  resize: vertical;
}`;
}

fs.writeFileSync('./packages/design/css/button.css', button());
fs.writeFileSync('./packages/design/css/form.css', form());
fs.writeFileSync('./packages/design/css/helpers.css', helpers());
fs.writeFileSync('./packages/design/css/root.css', root());

fs.writeFileSync(
  './packages/design/css/index.css',
  `${root()}
${button()}
${form()}
${helpers()}`
);
