import writeFile from '@redredsk/helpers/private/writeFile';

import CSS from './CSS';
import Button from './components/Button';
import Flex from './components/Flex';
import Form from './components/Form';
import Helpers from './components/Helpers';
import Typography from './components/Typography';

class Index extends CSS {
  css (): string {
    return `*, *::after, *::before {
  box-sizing: border-box;
}
.absolute {
  position: absolute;
}
.border {
  border: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-bottom {
  border-bottom: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-left {
  border-left: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-radius {
  border-radius: 0.125rem;
}
.border-right {
  border-right: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-top {
  border-top: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.container {
  max-width: 60rem;
}
.relative {
  position: relative;
}
:root {
${this.for(($) => `  ${$.name}: ${$.value};`, this.variables[':root'])}
${this.for(($) => `  --size-${$.name}: ${$.size}rem;`, this.variables['sizes'])}
}
a {
  color: inherit;
  text-decoration: none;
}
a:focus, a:hover {
  text-decoration: underline;
}
body {
  -webkit-text-size-adjust: 100%;
  background-color: rgb(var(--body--background-color));
  color: rgb(var(--body--color));
  font-family: var(--body--font-family);
  font-size: var(--body--font-size);
  font-weight: var(--body--font-weight);
  line-height: var(--body--line-height);
  margin: 0;
}
button {
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
}
${new Button().css()}
${new Flex().css()}
${new Form().css()}
${new Helpers().css()}
${new Typography().css()}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
