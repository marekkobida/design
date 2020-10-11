/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Select ({ display = 'block', pX = 4, pY = 2, width = '100', ...parameters }: Test<'select'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({ display, pX, pY, width, ...parameters, });

  return <select {...notCommonParameters} className={decodeClassName('border-radius', className)} />;
}

export default Select;
