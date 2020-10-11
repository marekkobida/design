/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function TableCell (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'td'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <td {...commonParameters} className={decodeClassName(className)} />;
}

export default TableCell;
