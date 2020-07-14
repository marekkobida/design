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
.color-alpha_0 {
  --color-alpha: 0;
}
.color-alpha_25 {
  --color-alpha: 0.25;
}
.color-alpha_50 {
  --color-alpha: 0.5;
}
.color-alpha_75 {
  --color-alpha: 0.75;
}
.color-alpha_100 {
  --color-alpha: 1;
}
${new Flex().css({ breakpoints: variables.breakpoints, })}
${new Grid().css({ breakpoints: variables.breakpoints, columns: variables.columns, })}
${new Helpers().css({ breakpoints: variables.breakpoints, })}
${new Spaces().css({ breakpoints: variables.breakpoints, spaces: variables.spaces, })}
${new Typography().css({ breakpoints: variables.breakpoints, })}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
