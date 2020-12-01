/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function TableCell(parameters: ComponentParametersWithCommonParameters<'td'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return <td {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableCell;
