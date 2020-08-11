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
.container {
  max-width: 60rem;
}
:root {
${this.for(($) => `  ${$.name}: ${$.value};`, this.variables[':root'])}
${this.for(($) => `  --size-${$.name}: ${$.size};`, this.variables['sizes'])}
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
textarea {
  resize: vertical;
}
/* TODO */
a {
  color: inherit;
  text-decoration: none;
}
a:focus, a:hover {
  text-decoration: underline;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.border-radius {
  border-radius: 0.125rem;
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
