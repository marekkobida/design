/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function TextArea ({ display = 'block', pX = 4, pY = 2, width = '100', ...parameters }: Test<'textarea'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({ display, pX, pY, width, ...parameters, });

  return <textarea {...notCommonParameters} className={decodeClassName('border-radius', className)} />;
}

export default TextArea;
