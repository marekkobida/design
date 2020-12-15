/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ElementParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLParagraphElement,
  ElementParametersWithCommonParameters<'p'>
>(function Paragraph({ mY = '0', ...parameters }, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    mY,
    ...parameters,
  });

  return (
    <p
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
