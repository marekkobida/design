/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLTableHeaderCellElement,
  ComponentParametersWithCommonParameters<'th'>
>(function TableHeaderCell(parameters, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <th
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
