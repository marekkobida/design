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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  font-family: var(--body--font-family);
  font-size: var(--body--font-size);
  font-weight: var(--body--font-weight);
  line-height: var(--body--line-height);
  margin: 0;
}
${new Flex().css(variables.breakpoints)}
${new Grid().css(variables.columns, variables.breakpoints)}
${new Helpers().css(variables.breakpoints)}
${new Spaces().css(variables.spaces, variables.breakpoints)}
${new Typography().css(variables.breakpoints)}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
