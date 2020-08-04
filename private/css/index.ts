import writeFile from '@redredsk/helpers/private/writeFile';

import CSS from './CSS';
import Button from './components/Button';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Helpers from './components/Helpers';
import Input from './components/Input';
import Label from './components/Label';
import Select from './components/Select';
import Typography from './components/Typography';

class Index extends CSS {
  css (): string {
    return `*, *::after, *::before {
  box-sizing: border-box;
}
:root {
${this.for(($) => `  ${$.name}: ${$.value};`, this.variables[':root'])}
${this.for(($) => `  --space-${$.name}: ${$.size};`, this.variables['spaces'])}
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
button, [type="button"], [type="reset"], [type="submit"] {
  appearance: button;
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
${new Button().css()}
${new Flex().css()}
${new Grid().css()}
${new Helpers().css()}
${new Input().css()}
${new Label().css()}
${new Select().css()}
${new Typography().css()}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
