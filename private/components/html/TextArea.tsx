/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLTextAreaElement,
  ComponentParametersWithCommonParameters<'textarea'>
>(function TextArea(
  { display = 'block', pX = 4, pY = 2, width = '100', ...parameters },
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
    <textarea
      {...notCommonParameters}
      className={decodeClassName('border-radius', className)}
      ref={reference}
    />
  );
});
