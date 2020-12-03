/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLDivElement,
  ComponentParametersWithCommonParameters<'div'>
>(function Div(parameters, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <div
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
