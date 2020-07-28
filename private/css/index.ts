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
    return `:root {
${this.for(($) => `  ${$.name}: ${$.value};`, this.variables[':root'])}
}
*,
*::after,
*::before {
  box-sizing: border-box;
  color: rgb(var(--color));
}
body {
  -webkit-text-size-adjust: 100%;
  background-color: rgb(var(--body\\(background-color\\)));
  font-family: var(--body\\(font-family\\));
  font-size: var(--body\\(font-size\\));
  font-weight: var(--body\\(font-weight\\));
  line-height: var(--body\\(line-height\\));
  margin: 0;
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
