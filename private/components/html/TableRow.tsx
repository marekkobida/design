/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function TableRow (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'tr'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <tr {...commonParameters} className={decodeClassName(className)} />;
}

export default TableRow;
