/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ElementParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLLabelElement,
  ElementParametersWithCommonParameters<'label'>
>(function Label({ display = 'inline-block', ...parameters }, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    display,
    ...parameters,
  });

  return (
    <label
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
