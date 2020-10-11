/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Heading ({ headingSize = 1, mY = 0, ...parameters }: Test<'h1'> & { headingSize: 1 | 2 | 3 | 4 | 5 | 6; }) {
  const { className, ...notCommonParameters } = decodeCommonParameters({ mY, ...parameters, });

  const H = `h${headingSize}` as 'h1';

  return <H {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Heading;
