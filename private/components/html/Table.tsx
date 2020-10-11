/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Table ({ width = '100', ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'table'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters({ width, ...parameters, });

  return <table {...commonParameters} className={decodeClassName(className)} />;
}

export default Table;
