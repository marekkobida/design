/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function TableHeaderCell(
  parameters: ComponentParametersWithCommonParameters<'th'>
) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return <th {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableHeaderCell;
