/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Paragraph ({ mY = 0, ...parameters }: Test<'p'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({ mY, ...parameters, });

  return <p {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Paragraph;
