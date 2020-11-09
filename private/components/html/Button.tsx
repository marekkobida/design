/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Button({
  display = 'inline-block',
  pX = 4,
  pY = 2,
  ...parameters
}: Test<'button'>) {
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
