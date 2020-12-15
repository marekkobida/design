/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ElementParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLSelectElement,
  ElementParametersWithCommonParameters<'select'>
>(function Select(
  { display = 'block', pX = '4', pY = '2', width = '100', ...parameters },
  reference
) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    display,
    pX,
    pY,
    width,
    ...parameters,
  });

  return (
    <select
      {...notCommonParameters}
      className={decodeClassName('border-radius', className)}
      ref={reference}
    />
  );
});
