/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function TableRow (parameters: Test<'tr'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(parameters);

  return <tr {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableRow;
