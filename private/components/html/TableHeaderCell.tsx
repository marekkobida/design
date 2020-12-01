/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function TableHeaderCell(parameters: Test<'th'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return <th {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableHeaderCell;
