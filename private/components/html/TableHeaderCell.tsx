/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function TableHeaderCell (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'th'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <th {...commonParameters} className={decodeClassName(className)} />;
}

export default TableHeaderCell;
