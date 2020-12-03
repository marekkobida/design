/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLButtonElement,
  ComponentParametersWithCommonParameters<'button'>
>(function Button(
  { display = 'inline-block', pX = 4, pY = 2, ...parameters },
  reference
) {
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
      ref={reference}
    />
  );
});
