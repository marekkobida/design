/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function TableRow(parameters: ComponentParametersWithCommonParameters<'tr'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return <tr {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableRow;
