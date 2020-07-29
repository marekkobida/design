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
  --button\\(background-color\\): var(--color);
  --button\\(border-color\\): var(--color);
  --button\\(border-radius\\): ${this.test(2)};
  --button\\(border-width\\): ${this.test(2)};
  --button\\(color\\): 255, 255, 255;
  --button\\(focus\\)\\(background-color\\): 128, 128, 128;
  --button\\(focus\\)\\(border-color\\): 128, 128, 128;
  --input\\(background-color\\): 255, 255, 255;
  --input\\(border-color\\): var(--color);
  --input\\(border-radius\\): ${this.test(2)};
  --input\\(border-width\\): ${this.test(2)};
  --input\\(checked\\)\\(background-color\\): var(--color);
  --input\\(color\\): var(--color);
  --input\\(focus\\)\\(border-color\\): 128, 128, 128;
  --select\\(background-color\\): 255, 255, 255;
  --select\\(border-color\\): var(--color);
  --select\\(border-radius\\): ${this.test(2)};
  --select\\(border-width\\): ${this.test(2)};
  --select\\(focus\\)\\(border-color\\): 128, 128, 128;
  --select\\(padding-bottom\\): ${this.test(8)};
  --select\\(padding-left\\): ${this.test(12)};
  --select\\(padding-right\\): ${this.test(12)};
  --select\\(padding-top\\): ${this.test(8)};
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
button,
input,
select {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
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
