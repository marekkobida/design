/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Button({
  display = 'inline-block',
  pX = 4,
  pY = 2,
  ...parameters
}: ComponentParametersWithCommonParameters<'button'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    display,
    pX,
    pY,
    ...parameters,
  });

  return (
    <button
      {...notCommonParameters}
      className={decodeClassName('border-radius', className)}
    />
  );
}

export default Button;
