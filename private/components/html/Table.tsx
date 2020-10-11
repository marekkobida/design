/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Table ({ width = '100', ...parameters }: Test<'table'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({ width, ...parameters, });

  return <table {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Table;
