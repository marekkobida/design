/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ElementParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLTableRowElement,
  ElementParametersWithCommonParameters<'tr'>
>(function TableRow(parameters, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <tr
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
