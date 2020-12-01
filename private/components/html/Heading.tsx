/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

interface P extends ComponentParametersWithCommonParameters<'h1'> {
  headingSize?: 1 | 2 | 3 | 4 | 5 | 6;
}

function Heading({ headingSize = 1, mY = 0, ...parameters }: P) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    mY,
    ...parameters,
  });

  const H = `h${headingSize}` as 'h1';

  return <H {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Heading;
