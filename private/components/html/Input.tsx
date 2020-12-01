/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Input({
  display = 'block',
  pX = 4,
  pY = 2,
  ...parameters
}: ComponentParametersWithCommonParameters<'input'>) {
  if (
    parameters.type === 'button' ||
    parameters.type === 'reset' ||
    parameters.type === 'submit'
  ) {
    display = display || 'inline-block';
  }

  if (parameters.type === 'text') {
    parameters.width = parameters.width || '100';
  }

  const { className, ...notCommonParameters } = decodeCommonParameters({
    display,
    pX,
    pY,
    ...parameters,
  });

  return (
    <input
      {...notCommonParameters}
      className={decodeClassName('border-radius', className)}
    />
  );
}

export default Input;
