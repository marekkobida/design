import CSS from './CSS';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Helpers from './components/Helpers';
import Spaces from './components/Spaces';
import Tabs from './components/Tabs';
import Typography from './components/Typography';
import variables from '../variables.json';
import writeFile from '@redredsk/helpers/private/writeFile';

class Index extends CSS {
  css () {
    return `:root {
${this.test({
    $: (i, $) => `  ${$.name}: ${$.value};`,
    to: variables[':root'],
  })}
}
*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  background-color: rgb(var(--body--background-color));
  color: rgba(var(--color), var(--color-alpha));
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: var(--body--font-size);
  line-height: var(--body--line-height);
  margin: 0;
  -webkit-text-size-adjust: 100%;
}
${new Flex().css()}
${new Grid().css()}
${new Helpers().css()}
${new Spaces().css()}
${new Tabs().css()}
${new Typography().css()}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
