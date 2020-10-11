/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function TableCell (parameters: Test<'td'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(parameters);

  return <td {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableCell;
