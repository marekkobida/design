import writeFile from '@redredsk/helpers/private/writeFile';

import variables from '../variables.json';

import CSS from './CSS';
import Button from './components/Button';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Helpers from './components/Helpers';
import Input from './components/Input';
import Label from './components/Label';
import Spacing from './components/Spacing';
import Typography from './components/Typography';

class Index extends CSS {
  css () {
    return `:root {
${this.for(($) => `  ${$.name}: ${$.value};`, variables[':root'])}
}
*,
*::after,
*::before {
  box-sizing: border-box;
  color: rgb(var(--color));
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  font-family: var(--body--font-family);
  font-size: var(--body--font-size);
  font-weight: var(--body--font-weight);
  line-height: var(--body--line-height);
  margin: 0;
}
${new Button().css()}
${new Flex().css({ breakpoints: variables.breakpoints, })}
${new Grid().css({ breakpoints: variables.breakpoints, columns: variables.columns, })}
${new Helpers().css({ breakpoints: variables.breakpoints, })}
${new Input().css()}
${new Label().css()}
${new Spacing().css({ breakpoints: variables.breakpoints, spacing: variables.spacing, })}
${new Typography().css({ breakpoints: variables.breakpoints, })}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
