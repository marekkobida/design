import writeFile from '@redredsk/helpers/private/writeFile';

import variables from '../variables.json';

import CSS from './CSS';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Helpers from './components/Helpers';
import Spaces from './components/Spaces';
import Typography from './components/Typography';

class Index extends CSS {
  css () {
    return `:root {
${this.test((i, $) => `  ${$.name}: ${$.value};`, variables[':root'])}
}
*,
*::after,
*::before {
  box-sizing: border-box;
  color: rgba(var(--color), var(--color-alpha));
}
body {
  -webkit-text-size-adjust: 100%;
  font-family: var(--body--font-family);
  font-size: var(--body--font-size);
  line-height: var(--body--line-height);
  margin: 0;
}
${new Flex().css()}
${new Grid().css()}
${new Helpers().css()}
${new Spaces().css()}
${new Typography().css()}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
