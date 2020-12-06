/*
 * Copyright 2020 Marek Kobida
 */

import fs from 'fs';
import path from 'path';

import alignContent from './commonParameters/alignContent';
import alignItems from './commonParameters/alignItems';
import toString from './helpers/toString';

function toFile(css: string, filePath: string) {
  fs.writeFileSync(path.resolve('./packages/design/css', filePath), css);
}

toFile(toString(alignContent()), './commonParameters/alignContent.css');
toFile(toString(alignItems()), './commonParameters/alignItems.css');
