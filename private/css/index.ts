import writeFile from '@redredsk/helpers/private/writeFile';

import CSS from './CSS';
import Button from './components/Button';
import Flex from './components/Flex';
import Form from './components/Form';
import Helpers from './components/Helpers';
import Layout from './components/Layout';
import Typography from './components/Typography';

class Index extends CSS {
  css (): string {
    return `*, *::after, *::before {
  box-sizing: border-box;
}
:matches(button, [type="button"], [type="reset"], [type="submit"]) {
  appearance: button;
}
:matches(button, [type="button"], [type="reset"], [type="submit"]):not(:disabled) {
  cursor: pointer;
}
:root {
${this.for(($) => `  ${$.name}: ${$.value};`, this.variables[':root'])}
${this.for(($) => `  --size-${$.name}: ${$.size};`, this.variables['sizes'])}
}
body {
  -webkit-text-size-adjust: 100%;
  background-color: rgb(var(--body\\(background-color\\)));
  color: rgb(var(--body\\(color\\)));
  font-family: var(--body\\(font-family\\));
  font-size: var(--body\\(font-size\\));
  font-weight: var(--body\\(font-weight\\));
  line-height: var(--body\\(line-height\\));
  margin: 0;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}
textarea {
  resize: vertical;
}
${new Button().css()}
${new Flex().css()}
${new Form().css()}
${new Helpers().css()}
${new Layout().css()}
${new Typography().css()}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
