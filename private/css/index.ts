import writeFile from '@redredsk/helpers/private/writeFile';

import variables from '../variables.json';

import CSS from './CSS';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Helpers from './components/Helpers';
import Spacing from './components/Spacing';
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
input {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 0.125rem solid rgba(var(--color), 0.25);
  border-radius: 0.25rem;
  display: block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  width: 100%;
}
input:focus {
  border-color: rgba(var(--color), 0.75);
  outline: 0;
}
label {
  display: inline-block;
  font-weight: var(--heading--font-weight);
}
${new Flex().css({ breakpoints: variables.breakpoints, })}
${new Grid().css({ breakpoints: variables.breakpoints, columns: variables.columns, })}
${new Helpers().css({ breakpoints: variables.breakpoints, })}
${new Spacing().css({ breakpoints: variables.breakpoints, spacing: variables.spacing, })}
${new Typography().css({ breakpoints: variables.breakpoints, })}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
